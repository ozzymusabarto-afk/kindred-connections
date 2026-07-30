import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { WorldMap } from "@/components/WorldMap";
import { CompassButton } from "@/components/CompassButton";
import { SiteHeader } from "@/components/SiteHeader";
import { StarStamp } from "@/components/StarStamp";
import { continentes, getPaisesPorContinente } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diário de Bordo: Exploradores do Mundo" },
      {
        name: "description",
        content:
          "Um atlas interativo para crianças explorarem geografia, história, fauna e gastronomia dos países.",
      },
      { property: "og:title", content: "Diário de Bordo: Exploradores do Mundo" },
      {
        property: "og:description",
        content:
          "Viaje pelo mapa, observe paisagens reais, conheça animais e sabores de cada país.",
      },
    ],
  }),
  component: MapaMundi,
});

function MapaMundi() {
  const navigate = useNavigate();
  const [continenteAtivo, setContinenteAtivo] = useState("america-do-norte");
  const { carimbos } = usePassport();
  const paisesVisiveis = getPaisesPorContinente(continenteAtivo);
  const visitados = new Set(carimbos.map((c) => c.paisId));

  return (
    <div className="min-h-screen">
      <SiteHeader ativo="mapa" />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <section className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Diário de bordo do explorador
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-foreground sm:text-5xl">
            Embarque numa viagem ao redor do mundo
          </h1>
          <p className="mt-3 font-display text-xl leading-snug text-brass">
            Explore lugares desconhecidos e conheça um pouco de cada país.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Seja um explorador do mundo: observe paisagens de verdade, encontre animais
            incríveis, prove delícias culinárias da região e embarque em aventuras
            inesquecíveis.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-brass/60 bg-card px-4 py-2 font-display text-base text-foreground shadow-sm">
            <span aria-hidden>🧭</span>
            Escolha seu destino e vamos partir!
          </p>
        </section>


        <div className="mt-8 flex flex-wrap gap-2">
          {continentes.map((c) => {
            const ativo = c.id === continenteAtivo;
            return (
              <button
                key={c.id}
                type="button"
                disabled={!c.disponivel}
                onClick={() => setContinenteAtivo(c.id)}
                className={`rounded-full border px-4 py-1.5 text-sm tracking-wide transition-colors ${
                  ativo
                    ? "border-primary bg-primary text-primary-foreground"
                    : c.disponivel
                      ? "border-border bg-card text-foreground hover:bg-accent"
                      : "cursor-not-allowed border-dashed border-border text-muted-foreground/60"
                }`}
              >
                {c.nome}
                {!c.disponivel && (
                  <span className="ml-2 text-[10px] uppercase tracking-widest">
                    em breve
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <WorldMap
            paises={paisesVisiveis}
            carimbados={carimbos.map((c) => c.paisId)}
            onSelecionar={(pais) =>
              navigate({ to: "/pais/$id", params: { id: pais.id } })
            }
          />
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paisesVisiveis.map((pais) => (
            <button
              key={pais.id}
              type="button"
              onClick={() =>
                navigate({ to: "/pais/$id", params: { id: pais.id } })
              }
              className="group relative overflow-hidden rounded-md border border-border bg-card text-left transition-colors hover:border-brass"
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
