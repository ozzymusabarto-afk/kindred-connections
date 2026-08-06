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
        <section className="max-w-4xl text-center mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-600/70 font-bold">
            Expedição: Exploradores do Mundo
          </p>
          <h1 className="mt-4 text-5xl leading-tight text-sky-900 sm:text-6xl font-rounded font-bold">
            Mapa do Explorador
          </h1>
          <p className="mt-6 font-rounded text-2xl leading-snug text-sky-700 max-w-2xl mx-auto">
            Uma jornada educativa imersiva para crianças explorarem o mundo!
          </p>
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

        <section id="escolha" className="mt-16 scroll-mt-24 bg-white/50 p-8 rounded-[2rem] border-2 border-brass/10 backdrop-blur-sm">
          <h2 className="text-3xl font-display text-brass mb-8 text-center italic">Para onde vamos explorar hoje?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setContinenteAtivo("todos")}
              className={`rounded-full px-8 py-3 text-lg font-display transition-all shadow-sm ${
                continenteAtivo === "todos"
                  ? "bg-brass text-white shadow-brass/20 scale-105"
                  : "bg-white border-2 border-brass/20 text-foreground hover:border-brass hover:bg-brass/5"
              }`}
            >
              🌎 Todos
            </button>
            {continentes.map((c) => (
              <button
                key={c.id}
                onClick={() => setContinenteAtivo(c.id)}
                className={`rounded-full px-8 py-3 text-lg font-display transition-all shadow-sm ${
                  continenteAtivo === c.id
                    ? "bg-brass text-white shadow-brass/20 scale-105"
                    : "bg-white border-2 border-brass/20 text-foreground hover:border-brass hover:bg-brass/5"
                }`}
              >
                {c.nome}
              </button>
            ))}
          </div>
        </section>

        <section id="diarios" className="mt-16 grid gap-8 scroll-mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {paisesVisiveis.map((pais: any) => (
            <button
              key={pais.id}
              type="button"
              disabled={bloqueado}
              aria-label={`Ver diário de campo de ${pais.nome}${visitados.has(pais.id) ? " - já explorado" : ""}`}
              onClick={() =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
              }
              className="group relative overflow-hidden rounded-[2rem] border-4 border-white bg-white/70 text-left transition-all hover:border-brass hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-brass/40 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
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

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-2xl text-foreground group-hover:text-brass transition-colors">
                    {pais.nome}
                  </p>
                  {visitados.has(pais.id) && <span className="text-sun text-2xl animate-bounce">⭐</span>}
                </div>
                {pais.capital && (
                  <p className="mb-3 text-sm font-medium tracking-wide text-brass/60">
                    📍 {pais.capital}
                  </p>
                )}
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground italic">
                  "{pais.resumo_geografico}"
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
