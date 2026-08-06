import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { CompassButton } from "@/components/CompassButton";
import { ExpedicaoHeader } from "@/components/expedicao/ExpedicaoHeader";
import { TelaChegada } from "@/components/expedicao/TelaChegada";
import { TelaCheckin } from "@/components/expedicao/TelaCheckin";
import { TelaTransporte } from "@/components/expedicao/TelaTransporte";
import { TelaObservacao } from "@/components/expedicao/TelaObservacao";
import { TelaFauna } from "@/components/expedicao/TelaFauna";
import { TelaSabor } from "@/components/expedicao/TelaSabor";
import { TelaCarimbo } from "@/components/expedicao/TelaCarimbo";
import { TelaDespedida } from "@/components/expedicao/TelaDespedida";
import { MiniWorldMap } from "@/components/MiniWorldMap";
import { getPais } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";
import { useExpedicao } from "@/hooks/useExpedicao";
import { tocar } from "@/lib/sfx";
import type { Pais } from "@/data/types";

type TelaId =
  | "chegada"
  | "checkin"
  | "transporte"
  | "observacao"
  | "fauna"
  | "sabor"
  | "carimbo"
  | "despedida";

const TELAS: TelaId[] = [
  "chegada",
  "checkin",
  "transporte",
  "observacao",
  "fauna",
  "sabor",
  "carimbo",
  "despedida",
];

const TELAS_DO_DIA: TelaId[] = [
  "transporte",
  "observacao",
  "fauna",
  "sabor",
  "carimbo",
];

export const Route = createFileRoute("/pais/$id")({
  validateSearch: (search: Record<string, unknown>) => {
    const tela = String(search.tela ?? "");
    const dia = Number(search.dia);
    return {
      tela: (TELAS as string[]).includes(tela) ? (tela as TelaId) : undefined,
      dia: Number.isFinite(dia) && dia > 0 ? Math.floor(dia) : undefined,
    };
  },
  loader: ({ params }): { pais: Pais } => {
    const pais = getPais(params.id);
    if (!pais) throw notFound();
    return { pais };
  },
  head: ({ loaderData, params }) => {
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
    const url = `https://diariodebordo.exploradores.com/pais/${params.id}`;

    return {
      meta: [
        { title: titulo },
        { name: "description", content: descricao },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descricao },
        { property: "og:image", content: pais.imagem_capa },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:image", content: pais.imagem_capa },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": `Expedição imersiva para ${pais.nome}`,
            "description": descricao,
            "object": {
              "@type": "Country",
              "name": pais.nome
            }
          })
        }
      ]
    };
  },
  component: SimuladorViagem,
});

function SimuladorViagem() {
  const { pais }: { pais: Pais } = Route.useLoaderData();
  const busca = Route.useSearch();
  const navigate = useNavigate({ from: "/pais/$id" });
  const dias = pais.roteiro_viagem;

  const {
    pronto,
    getDia,
    marcarEstacao,
    marcarHotspot,
    salvarRespostas,
    concluirDia,
    diaConcluido,
    aberturaVista,
    marcarAbertura,
  } = useExpedicao(pais.id);
  const { salvarNota } = usePassport();

  const diaAtivo = busca.dia ?? dias[0].dia;
  const dia = dias.find((d) => d.dia === diaAtivo) ?? dias[0];
  const progresso = getDia(dia.dia);

  const tela: TelaId =
    busca.tela ?? (pronto && aberturaVista ? "transporte" : "chegada");

  const [respostas, setRespostas] = useState<Record<string, string>>({});

  useEffect(() => {
    setRespostas(getDia(dia.dia).respostas ?? {});
    // Recarrega o caderno ao trocar de dia ou quando o progresso é lido.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dia.dia, pronto]);

  const ir = (proxima: TelaId, novoDia = dia.dia) => {
    tocar(proxima === "carimbo" ? "carimbo" : "passo");
    void navigate({
      params: { id: pais.id },
      search: { tela: proxima, dia: novoDia },
      resetScroll: true,
    });
  };

  // Marca a estação equivalente à tela atual como visitada.
  useEffect(() => {
    if (!pronto) return;
    if (tela === "transporte") marcarEstacao(dia.dia, "transporte");
    if (tela === "observacao") marcarEstacao(dia.dia, "observacao");
    if (tela === "fauna") marcarEstacao(dia.dia, "fauna");
    if (tela === "sabor") marcarEstacao(dia.dia, "sabor");
  }, [pronto, tela, dia.dia, marcarEstacao]);

  const totalConcluidos = dias.filter((d) => diaConcluido(d.dia)).length;
  const indiceDia = TELAS_DO_DIA.indexOf(tela);

  const proximoDia = useMemo(() => {
    const seguinte = dias.find((d) => d.dia > dia.dia);
    return seguinte?.dia;
  }, [dias, dia.dia]);

  function responder(chave: string, valor: string) {
    setRespostas((r) => ({ ...r, [chave]: valor }));
  }

  function carimbar() {
    salvarRespostas(dia.dia, respostas);
    concluirDia(dia.dia);
    tocar("dia");

    const restantes = dias.filter(
      (d) => d.dia !== dia.dia && !diaConcluido(d.dia),
    );
    if (restantes.length === 0) {
      const texto = Object.values(respostas).join("\n\n");
      salvarNota(pais.id, texto.slice(0, 1200));
    }
    ir("carimbo");
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
        <MiniWorldMap highlightedContinent={pais.continente} />
        {indiceDia >= 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  Sua Expedição em {pais.nome}
                </p>
                <h2 className="mt-1 text-lg font-display text-foreground">
                  Dia {dia.dia} de {dias.length} · Estação {indiceDia + 1} de {TELAS_DO_DIA.length}
                </h2>
              </div>
              <div className="flex items-center gap-3 premium-card px-5 py-2.5 shadow-sm border-sky-100/30">
                <span className="text-2xl">✈️</span>
                <p className="text-sm font-bold text-sky-700 font-rounded">
                  {totalConcluidos} de {dias.length} dias concluídos
                </p>
              </div>
            </div>
            
            <div className="mt-6 relative h-4 w-full overflow-hidden rounded-full bg-sky-100/50 p-1">
              <div 
                className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-1000 ease-out" 
                style={{ width: `${((indiceDia + 1) / TELAS_DO_DIA.length) * 100}%` }}
              />
            </div>
            
            <div className="mt-3 flex justify-between px-1">
              {TELAS_DO_DIA.map((t, i) => (
                <div key={t} className="flex flex-col items-center gap-1.5">
                  <div 
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                      i <= indiceDia ? "bg-brass scale-125" : "bg-muted-foreground/30"
                    }`} 
                  />
                  <span className={`text-[9px] uppercase tracking-tighter transition-colors ${
                    i === indiceDia ? "font-bold text-brass" : "text-muted-foreground/60"
                  }`}>
                    {t === "transporte" ? "Transporte" : 
                     t === "observacao" ? "Observação" : 
                     t === "fauna" ? "Natureza" : 
                     t === "sabor" ? "Sabores" : "Carimbo"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tela === "chegada" && (
          <TelaChegada
            pais={pais}
            onAvancar={() => {
              marcarAbertura();
              ir("checkin");
            }}
          />
        )}

        {tela === "checkin" && (
          <TelaCheckin
            pais={pais}
            dia={dia}
            onAvancar={() => ir("transporte")}
            onVoltar={() => ir("chegada")}
          />
        )}

        {tela === "transporte" && (
          <TelaTransporte
            dia={dia}
            onAvancar={() => ir("observacao")}
            onVoltar={() => ir("checkin")}
          />
        )}

        {tela === "observacao" && (
          <TelaObservacao
            dia={dia}
            progresso={progresso}
            respostas={respostas}
            onResponder={responder}
            onAbrirHotspot={(id) => marcarHotspot(dia.dia, id)}
            onAvancar={() => {
              salvarRespostas(dia.dia, respostas);
              ir("fauna");
            }}
            onVoltar={() => ir("transporte")}
          />
        )}

        {tela === "fauna" && (
          <TelaFauna
            pais={pais}
            dia={dia}
            respostas={respostas}
            onResponder={responder}
            onAvancar={() => {
              salvarRespostas(dia.dia, respostas);
              ir("sabor");
            }}
            onVoltar={() => ir("observacao")}
          />
        )}

        {tela === "sabor" && (
          <TelaSabor
            pais={pais}
            dia={dia}
            respostas={respostas}
            onResponder={responder}
            onAvancar={carimbar}
            onVoltar={() => ir("fauna")}
          />
        )}

        {tela === "carimbo" && (
          <TelaCarimbo
            pais={pais}
            dia={dia}
            diasTotal={dias.length}
            concluidos={totalConcluidos}
            proximoDia={proximoDia}
            onProximoDia={(d) => ir("transporte", d)}
            onRefazer={() => ir("transporte")}
            onEncerrar={() => ir("despedida")}
          />
        )}

        {tela === "despedida" && (
          <TelaDespedida pais={pais} onVoltar={() => ir("carimbo")} />
        )}

        <p className="mt-12 text-sm text-muted-foreground">
          <Link to="/passaporte" className="underline underline-offset-4">
            Ver passaporte
          </Link>{" "}
          ·{" "}
          <Link to="/album" className="underline underline-offset-4">
            Álbum do explorador
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
