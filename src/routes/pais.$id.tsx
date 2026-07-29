import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { CompassButton } from "@/components/CompassButton";
import { ExpedicaoHeader } from "@/components/expedicao/ExpedicaoHeader";
import { SeletorDias } from "@/components/expedicao/SeletorDias";
import { RotaDoDia } from "@/components/expedicao/RotaDoDia";
import type { EstacaoInfo } from "@/components/expedicao/RotaDoDia";
import { CadernoDeCampo } from "@/components/expedicao/CadernoDeCampo";
import { getPais } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";
import { useExpedicao } from "@/hooks/useExpedicao";
import type { EstacaoId } from "@/hooks/useExpedicao";
import { tocar } from "@/lib/sfx";
import type { ItemNatureza, Pais } from "@/data/types";

export const Route = createFileRoute("/pais/$id")({
  loader: ({ params }): { pais: Pais } => {
    const pais = getPais(params.id);
    if (!pais) throw notFound();
    return { pais };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "País não encontrado — Diário de Bordo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { pais } = loaderData;
    const titulo = `${pais.nome} — Diário de Bordo`;
    const descricao = pais.resumo_geografico.slice(0, 155);
    return {
      meta: [
        { title: titulo },
        { name: "description", content: descricao },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descricao },
        { property: "og:image", content: pais.imagem_capa },
        { name: "twitter:image", content: pais.imagem_capa },
      ],
    };
  },
  component: PainelExpedicao,
});

const ESTACOES: EstacaoInfo[] = [
  {
    id: "transporte",
    icone: "🚂",
    rotulo: "Transporte do dia",
    dica: "Como nos deslocamos hoje",
  },
  {
    id: "observacao",
    icone: "🔍",
    rotulo: "Ponto de observação",
    dica: "Olhe atentamente a paisagem",
  },
  {
    id: "fauna",
    icone: "🐾",
    rotulo: "Avistamento da fauna",
    dica: "O animal encontrado no caminho",
  },
  {
    id: "sabor",
    icone: "🍽️",
    rotulo: "Sabor da terra",
    dica: "A refeição típica do dia",
  },
];

function PainelExpedicao() {
  const { pais }: { pais: Pais } = Route.useLoaderData();
  const dias = pais.roteiro_viagem;

  const [diaAtivo, setDiaAtivo] = useState(dias[0].dia);
  const [estacao, setEstacao] = useState<EstacaoId>("transporte");
  const [ficha, setFicha] = useState<ItemNatureza | null>(null);
  const cadernoRef = useRef<HTMLDivElement>(null);

  const {
    pronto,
    getDia,
    marcarEstacao,
    marcarHotspot,
    salvarRespostas,
    concluirDia,
    diaConcluido,
  } = useExpedicao(pais.id);
  const { salvarNota } = usePassport();

  const dia = dias.find((d) => d.dia === diaAtivo) ?? dias[0];
  const progresso = getDia(diaAtivo);

  // Registra a primeira estação como visitada assim que o progresso carrega.
  useEffect(() => {
    if (pronto) marcarEstacao(diaAtivo, estacao);
  }, [pronto, diaAtivo, estacao, marcarEstacao]);

  const todasEstacoesVisitadas = useMemo(
    () => ESTACOES.every((e) => progresso.estacoes.includes(e.id)),
    [progresso.estacoes],
  );

  const totalConcluidos = dias.filter((d) => diaConcluido(d.dia)).length;

  function selecionarEstacao(id: EstacaoId) {
    tocar("passo");
    setEstacao(id);
    if (window.innerWidth < 1024) {
      requestAnimationFrame(() =>
        cadernoRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      );
    }
  }

  function registrar(respostas: Record<string, string>) {
    salvarRespostas(diaAtivo, respostas);
    concluirDia(diaAtivo);
    tocar("dia");

    const restantes = dias.filter(
      (d) => d.dia !== diaAtivo && !diaConcluido(d.dia),
    );
    if (restantes.length === 0) {
      const texto = Object.values(respostas).join("\n\n");
      salvarNota(pais.id, texto.slice(0, 1200));
    }
  }

  const indiceAtivo = ESTACOES.findIndex((e) => e.id === estacao);
  const proxima = ESTACOES[indiceAtivo + 1];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <ExpedicaoHeader
        pais={pais}
        guia={dia.guia_local}
        clima={dia.clima_do_dia}
      />

      <main className="mx-auto max-w-7xl px-5 py-6">
        <SeletorDias
          dias={dias}
          ativo={diaAtivo}
          concluido={diaConcluido}
          onSelecionar={(d) => {
            tocar("passo");
            setDiaAtivo(d);
            setEstacao("transporte");
          }}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="space-y-5">
            <RotaDoDia
              estacoes={ESTACOES}
              ativa={estacao}
              visitadas={progresso.estacoes}
              onSelecionar={selecionarEstacao}
            />

            <PassoConteudo
              pais={pais}
              dia={dia}
              estacao={estacao}
              indice={indiceAtivo}
              total={ESTACOES.length}
              progresso={progresso}
              onAbrirHotspot={(id) => marcarHotspot(diaAtivo, id)}
              onProximo={
                proxima ? () => selecionarEstacao(proxima.id) : undefined
              }
            />

            <p className="text-xs text-muted-foreground">
              Expedição em {pais.nome}: {totalConcluidos} de {dias.length} dias
              carimbados.
            </p>
          </div>

          <div ref={cadernoRef} className="lg:sticky lg:top-4">
            <CadernoObservador
              pais={pais}
              dia={dia}
              estacao={estacao}
              progresso={progresso}
              todasEstacoesVisitadas={todasEstacoesVisitadas}
              onRegistrar={registrar}
            />
          </div>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link to="/passaporte" className="underline underline-offset-4">
            Ver passaporte
          </Link>{" "}
          ·{" "}
          <Link to="/comparar" className="underline underline-offset-4">
            Comparar países
          </Link>
        </p>
      </main>

      <CompassButton />
    </div>
  );
}
