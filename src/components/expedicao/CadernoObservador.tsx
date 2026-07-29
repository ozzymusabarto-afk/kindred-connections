import { useEffect, useMemo, useState } from "react";
import { PerguntaSocraticaCampo } from "./PerguntaSocratica";
import { CarimboEtapa } from "./CarimboEtapa";
import { respostaValida } from "@/hooks/useExpedicao";
import type { EstacaoId, ProgressoDia } from "@/hooks/useExpedicao";
import { tocar } from "@/lib/sfx";
import type { DiaRoteiro, Pais } from "@/data/types";

interface Props {
  pais: Pais;
  dia: DiaRoteiro;
  estacao: EstacaoId;
  progresso: ProgressoDia;
  todasEstacoesVisitadas: boolean;
  onRegistrar: (respostas: Record<string, string>) => void;
}

export function CadernoObservador({
  pais,
  dia,
  estacao,
  progresso,
  todasEstacoesVisitadas,
  onRegistrar,
}: Props) {
  const perguntas = useMemo(() => dia.perguntas ?? [], [dia.perguntas]);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  useEffect(() => {
    setRespostas(progresso.respostas ?? {});
    // Recarrega ao trocar de dia.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dia.dia]);

  const doPasso = perguntas.filter((p) => (p.etapa ?? "observacao") === estacao);
  const chave = (p: { id: string; etapa?: string }) =>
    `${p.etapa ?? "observacao"}:${p.id}`;

  const todasRespondidas =
    perguntas.length > 0 &&
    perguntas.every((p) => respostaValida(respostas[chave(p)]));
  const concluido = Boolean(progresso.concluidoEm);

  const faltando = perguntas.filter((p) => !respostaValida(respostas[chave(p)]));

  return (
    <section className="rounded-xl border-2 border-border bg-card p-5 shadow-sm sm:p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-brass">
        Caderno do observador
      </p>
      <h2 className="mt-1 font-display text-xl text-foreground">
        Perguntas deste passo
      </h2>

      <div key={estacao} className="fade-up mt-4 space-y-4">
        {doPasso.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Neste passo é só observar. Siga para o próximo ponto da jornada.
          </p>
        ) : (
          doPasso.map((p) => (
            <PerguntaSocraticaCampo
              key={chave(p)}
              pergunta={p}
              valor={respostas[chave(p)] ?? ""}
              onChange={(v) =>
                setRespostas((r) => ({ ...r, [chave(p)]: v }))
              }
            />
          ))
        )}
      </div>

      <div className="mt-6 border-t-2 border-dashed border-border pt-5">
        {concluido ? (
          <CarimboEtapa
            bandeira={pais.bandeira}
            dia={dia.dia}
            nomePais={pais.nome}
          />
        ) : (
          <div className="space-y-2">
            <button
              type="button"
              disabled={!todasRespondidas || !todasEstacoesVisitadas}
              onClick={() => {
                tocar("carimbo");
                onRegistrar(respostas);
              }}
              className="w-full rounded-full border-2 border-brass bg-brass px-5 py-3 text-sm tracking-wide text-card transition-opacity hover:opacity-90 disabled:border-border disabled:bg-secondary disabled:text-muted-foreground"
            >
              Carimbar o Dia {dia.dia} no passaporte
            </button>
            {!todasEstacoesVisitadas && (
              <p className="text-xs text-muted-foreground">
                Percorra os 4 passos da jornada de hoje para liberar o carimbo.
              </p>
            )}
            {todasEstacoesVisitadas && faltando.length > 0 && (
              <p className="text-xs text-muted-foreground">
                Ainda faltam {faltando.length} resposta(s) em outros passos do
                dia.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
