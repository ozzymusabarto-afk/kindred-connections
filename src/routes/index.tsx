import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WorldMap } from "@/components/WorldMap";
import { CompassButton } from "@/components/CompassButton";
import { SiteHeader } from "@/components/SiteHeader";
import { StarStamp } from "@/components/StarStamp";
import { FichaExplorador } from "@/components/FichaExplorador";
import { continentes, paises } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";
import type { ContinenteId } from "@/data/types";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Diário de Bordo: Exploradores do Mundo | Mapa Interativo";
    const description = "Uma jornada educativa imersiva para crianças explorarem a geografia, fauna e cultura do mundo através de um atlas ilustrado interativo.";
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MapaMundi,
});

function MapaMundi() {
  const navigate = useNavigate();
  const [continenteAtivo, setContinenteAtivo] = useState<ContinenteId | "todos">(() => {
    if (typeof window !== "undefined") {
      return (window.localStorage.getItem("diario:continente-ativo") as ContinenteId | "todos") || "todos";
    }
    return "todos";
  });
  const { carimbos } = usePassport();
  
  // Filtrar países com base no continente selecionado
  const paisesVisiveis = continenteAtivo === "todos" 
    ? paises 
    : paises.filter(p => p.continente === continenteAtivo);

  const totalExplorados = carimbos.length;
  const totalPaises = 21; 
  const visitados = new Set(carimbos.map((c) => c.paisId));

  // Validação rigorosa de integridade
  const [bloqueado, setBloqueado] = useState(false);
  const [erros, setErros] = useState<string[]>([]);

  useEffect(() => {
    // Validar apenas os países que seriam mostrados
    const invalidos = paisesVisiveis.filter((p: any) => {
      const temTexto = p.nome && p.resumo_geografico && p.resumo_geografico.length > 20;
      const temImagem = p.bandeira_url || p.bandeira;
      const temRoteiro = p.id.length > 2 && p.roteiro_viagem && p.roteiro_viagem.length > 0;
      return !temTexto || !temImagem || !temRoteiro;
    });

    if (invalidos.length > 0) {
      setErros(invalidos.map((p: any) => p.nome || p.id));
      setBloqueado(true);
      console.error(`[Erro de Integridade] Dados incompletos:`, invalidos);
    } else {
      setErros([]);
      setBloqueado(false);
    }
    
    if (typeof window !== "undefined") {
      window.localStorage.setItem("diario:continente-ativo", continenteAtivo);
    }
  }, [continenteAtivo, paisesVisiveis]);

  return (
    <div className="min-h-screen">
      <SiteHeader ativo="mapa" />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <section className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Diário de bordo do explorador
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-foreground sm:text-5xl">
            Sua Grande Jornada Começa Agora!
          </h1>
          <p className="mt-3 font-display text-xl leading-snug text-brass">
            Preparado para explorar o nosso planeta? Aqui, cada país reserva uma descoberta única:
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              ✈️ <strong>Viagens ao Vivo:</strong> Entre nos Países Imersivos para sentir a experiência completa de um viajante — com fotos, sons reais, rotas de transporte e refeições típicas!
            </p>
            <p>
              📑 <strong>Cadernos de Campo:</strong> Abra os Diários de Bordo para investigar os segredos dos demais países através de histórias curtas, fotos marcantes e registros de viagem!
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="#mapa" 
              className="inline-flex items-center gap-2 rounded-full border-2 border-brass bg-brass px-6 py-3 font-display text-lg text-white shadow-md transition-transform hover:scale-105"
            >
              <span aria-hidden>🧭</span>
              Ir para o Mapa
            </a>
            <a 
              href="#diarios" 
              className="inline-flex items-center gap-2 rounded-full border-2 border-brass/40 bg-card px-6 py-3 font-display text-lg text-foreground shadow-sm transition-transform hover:scale-105"
            >
              <span aria-hidden>📑</span>
              Ver Diários
            </a>
          </div>
        </section>

        <div 
          id="mapa" 
          className="mt-6 scroll-mt-24 focus-within:ring-4 focus-within:ring-brass/30 rounded-3xl transition-all"
          aria-label="Mapa do mundo para escolher um destino"
        >
          {bloqueado ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border-4 border-dashed border-destructive/30 bg-destructive/5 p-12 text-center">
              <span className="text-5xl mb-4">🚧</span>
              <h3 className="text-xl font-display text-destructive">Sistemas de Navegação em Calibração...</h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                Estamos preparando os detalhes de <strong>{erros.join(", ")}</strong> para que sua viagem seja perfeita. Por enquanto, escolha outro destino!
              </p>
            </div>
          ) : (
            <WorldMap
              paises={paisesVisiveis}
              carimbados={carimbos.map((c) => c.paisId)}
              onSelecionar={(pais: any) =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
              }
            />
          )}
        </div>

        <section id="escolha" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-display text-brass mb-6">Para onde vamos hoje?</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setContinenteAtivo("todos")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                continenteAtivo === "todos"
                  ? "bg-brass text-white shadow-md scale-105"
                  : "bg-card border border-brass/20 text-foreground hover:bg-brass/5"
              }`}
            >
              🌎 Todos
            </button>
            {continentes.map((c) => (
              <button
                key={c.id}
                onClick={() => setContinenteAtivo(c.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  continenteAtivo === c.id
                    ? "bg-brass text-white shadow-md scale-105"
                    : "bg-card border border-brass/20 text-foreground hover:bg-brass/5"
                }`}
              >
                {c.nome}
              </button>
            ))}
          </div>
        </section>

        <section id="diarios" className="mt-10 grid gap-4 scroll-mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {paisesVisiveis.map((pais: any) => (
            <button
              key={pais.id}
              type="button"
              disabled={bloqueado}
              aria-label={`Ver diário de campo de ${pais.nome}${visitados.has(pais.id) ? " - já explorado" : ""}`}
              onClick={() =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
              }
              className="group relative overflow-hidden rounded-md border border-border bg-card text-left transition-all hover:border-brass hover:shadow-md focus:outline-none focus:ring-4 focus:ring-brass/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {visitados.has(pais.id) && (
                <span className="absolute right-3 top-3 z-10 drop-shadow">
                  <StarStamp
                    bandeira={pais.bandeira}
                    tamanho={46}
                    titulo={`${pais.nome} já explorado`}
                  />
                </span>
              )}
              <div className="h-44 w-full overflow-hidden bg-accent/60">
                {pais.bandeira_url ? (
                  <img
                    src={pais.bandeira_url}
                    alt={`Bandeira do ${pais.nome}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex h-full w-full items-center justify-center text-6xl"
                  >
                    {pais.bandeira}
                  </span>
                )}
              </div>

              <div className="p-4">
                <p className="font-display text-lg text-foreground">
                  {pais.nome}
                </p>
                {pais.capital && (
                  <p className="mt-0.5 text-xs italic tracking-wide text-muted-foreground">
                    ★ Capital: {pais.capital}
                  </p>
                )}
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {pais.resumo_geografico}
                </p>
              </div>
            </button>
          ))}
          {paisesVisiveis.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Este continente ainda está sendo mapeado.
            </p>
          )}
        </section>
      </main>

      <CompassButton />
    </div>
  );
}
