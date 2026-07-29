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

            <div className="overflow-hidden rounded-md border border-border bg-card">
              <img
                src={dia.imagem_url}
                alt={dia.titulo}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Diário de bordo · Dia {dia.dia}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pais.resumo_geografico}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Expedição: {totalConcluidos} de {dias.length} dias concluídos
                </p>
              </div>
            </div>
          </div>

          <div ref={cadernoRef} className="lg:sticky lg:top-4">
            <CadernoDeCampo
              pais={pais}
              dia={dia}
              estacao={estacao}
              progresso={progresso}
              todasEstacoesVisitadas={todasEstacoesVisitadas}
              onAbrirHotspot={(id) => marcarHotspot(diaAtivo, id)}
              onRegistrar={registrar}
            />
          </div>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-2xl text-foreground">
            Arquivo do país
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Todo o material coletado nesta expedição: o caderno da natureza e a
            mesa do viajante.
          </p>

          <h3 className="mt-8 font-display text-lg text-foreground">
            Caderno da natureza
          </h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pais.fauna_flora.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  tocar("lupa");
                  setFicha(item);
                }}
                className="overflow-hidden rounded-md border border-border bg-card text-left transition-colors hover:border-brass"
              >
                <img
                  src={item.foto_url}
                  alt={item.nome}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <p className="font-display text-base text-foreground">
                    {item.nome}
                  </p>
                  {item.nome_cientifico && (
                    <p className="mt-1 text-xs italic text-muted-foreground">
                      {item.nome_cientifico}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          <h3 className="mt-10 font-display text-lg text-foreground">
            A mesa do viajante
          </h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pais.gastronomia.map((prato) => (
              <article
                key={prato.id}
                className="overflow-hidden rounded-md border border-border bg-card"
              >
                <img
                  src={prato.foto_url}
                  alt={prato.nome}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <p className="font-display text-base text-foreground">
                    {prato.nome}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {prato.historia}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

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

      {ficha && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setFicha(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-md border border-border bg-card sm:rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={ficha.foto_url}
              alt={ficha.nome}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Fichário do explorador
              </p>
              <h3 className="mt-2 text-2xl text-foreground">{ficha.nome}</h3>
              {ficha.nome_cientifico && (
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {ficha.nome_cientifico}
                </p>
              )}
              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Curiosidade
                  </dt>
                  <dd className="mt-1 text-foreground">{ficha.curiosidade}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Habitat
                  </dt>
                  <dd className="mt-1 text-foreground">{ficha.habitat}</dd>
                </div>
              </dl>
              {ficha.som_url && (
                <audio controls src={ficha.som_url} className="mt-5 w-full">
                  <track kind="captions" />
                </audio>
              )}
              <button
                type="button"
                onClick={() => setFicha(null)}
                className="mt-6 w-full rounded-full border border-border px-4 py-2 text-sm tracking-wide text-foreground transition-colors hover:bg-accent"
              >
                Fechar ficha
              </button>
            </div>
          </div>
        </div>
      )}

      <CompassButton />
    </div>
  );
}
