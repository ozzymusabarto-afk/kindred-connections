import { useCallback, useEffect, useState } from "react";

export type EstacaoId = "transporte" | "observacao" | "fauna" | "sabor";

export interface ProgressoDia {
  estacoes: EstacaoId[];
  hotspots: string[];
  respostas: Record<string, string>;
  concluidoEm?: string;
}

/** paisId -> número do dia -> progresso */
export type ProgressoExpedicao = Record<string, Record<string, ProgressoDia>>;

const STORAGE_KEY = "diario-de-bordo:expedicao";
const MIN_RESPOSTA = 10;

const DIA_VAZIO: ProgressoDia = { estacoes: [], hotspots: [], respostas: {} };

function ler(): ProgressoExpedicao {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressoExpedicao) : {};
  } catch {
    return {};
  }
}

function gravar(dados: ProgressoExpedicao) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  } catch {
    /* armazenamento indisponível */
  }
}

const ABERTURA_KEY = "diario-de-bordo:aberturas";

function lerAberturas(): string[] {
  try {
    const raw = window.localStorage.getItem(ABERTURA_KEY);
    const v = raw ? JSON.parse(raw) : [];
    return Array.isArray(v) ? (v as string[]) : [];
  } catch {
    return [];
  }
}

export function useExpedicao(paisId: string) {
  const [dados, setDados] = useState<ProgressoExpedicao>({});
  const [pronto, setPronto] = useState(false);
  const [aberturaVista, setAberturaVista] = useState(false);

  useEffect(() => {
    setDados(ler());
    setAberturaVista(lerAberturas().includes(paisId));
    setPronto(true);
  }, [paisId]);

  const marcarAbertura = useCallback(() => {
    setAberturaVista(true);
    try {
      const atuais = lerAberturas();
      if (!atuais.includes(paisId)) {
        window.localStorage.setItem(
          ABERTURA_KEY,
          JSON.stringify([...atuais, paisId]),
        );
      }
    } catch {
      /* armazenamento indisponível */
    }
  }, [paisId]);


  const atualizarDia = useCallback(
    (dia: number, fn: (atual: ProgressoDia) => ProgressoDia) => {
      setDados((prev) => {
        const doPais = prev[paisId] ?? {};
        const atual = doPais[String(dia)] ?? DIA_VAZIO;
        const proximo: ProgressoExpedicao = {
          ...prev,
          [paisId]: { ...doPais, [String(dia)]: fn(atual) },
        };
        gravar(proximo);
        return proximo;
      });
    },
    [paisId],
  );

  const getDia = useCallback(
    (dia: number): ProgressoDia => dados[paisId]?.[String(dia)] ?? DIA_VAZIO,
    [dados, paisId],
  );

  const marcarEstacao = useCallback(
    (dia: number, estacao: EstacaoId) =>
      atualizarDia(dia, (a) =>
        a.estacoes.includes(estacao)
          ? a
          : { ...a, estacoes: [...a.estacoes, estacao] },
      ),
    [atualizarDia],
  );

  const marcarHotspot = useCallback(
    (dia: number, hotspotId: string) =>
      atualizarDia(dia, (a) =>
        a.hotspots.includes(hotspotId)
          ? a
          : { ...a, hotspots: [...a.hotspots, hotspotId] },
      ),
    [atualizarDia],
  );

  const salvarRespostas = useCallback(
    (dia: number, respostas: Record<string, string>) =>
      atualizarDia(dia, (a) => ({
        ...a,
        respostas: { ...a.respostas, ...respostas },
      })),
    [atualizarDia],
  );

  const concluirDia = useCallback(
    (dia: number) =>
      atualizarDia(dia, (a) => ({
        ...a,
        concluidoEm: a.concluidoEm ?? new Date().toISOString(),
      })),
    [atualizarDia],
  );

  const diaConcluido = useCallback(
    (dia: number) => Boolean(getDia(dia).concluidoEm),
    [getDia],
  );

  return {
    pronto,
    getDia,
    marcarEstacao,
    marcarHotspot,
    salvarRespostas,
    concluirDia,
    diaConcluido,
  };
}

export function respostaValida(texto: string | undefined) {
  return (texto ?? "").trim().length >= MIN_RESPOSTA;
}

export const MINIMO_RESPOSTA = MIN_RESPOSTA;

/** Lê todo o progresso salvo (usado no passaporte). */
export function lerProgressoTudo(): ProgressoExpedicao {
  if (typeof window === "undefined") return {};
  return ler();
}
