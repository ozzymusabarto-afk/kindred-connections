import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WorldMap } from "@/components/WorldMap";
import { CompassButton } from "@/components/CompassButton";
import { SiteHeader } from "@/components/SiteHeader";
import { StarStamp } from "@/components/StarStamp";
import { FichaExplorador } from "@/components/FichaExplorador";
import { continentes, getPaisesPorContinente } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sua Grande Jornada Começa Agora! | Diário de Bordo" },
      {
        name: "description",
        content:
          "Explore o mundo em uma experiência imersiva para crianças. Descubra geografia, fauna, sons e sabores reais de cada país.",
      },
      { property: "og:title", content: "Diário de Bordo: Exploradores do Mundo" },
      {
        property: "og:description",
        content:
          "Um simulador de viagem interativo com mapas, sons e descobertas pedagógicas.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MapaMundi,
});

function MapaMundi() {
  const navigate = useNavigate();
  const [continenteAtivo, setContinenteAtivo] = useState("america-do-norte");
  const { carimbos } = usePassport();
  const paisesVisiveis = getPaisesPorContinente(continenteAtivo);
  const totalExplorados = carimbos.length;
  const totalPaises = 21; 
  const visitados = new Set(carimbos.map((c) => c.paisId));

  // Validação simples de integridade no carregamento do continente
  useEffect(() => {
    const invalidos = paisesVisiveis.filter(p => !p.nome || !p.bandeira || !p.resumo_geografico);
    if (invalidos.length > 0) {
      console.warn(`[Aviso de Integridade] Alguns países em ${continenteAtivo} possuem dados incompletos:`, invalidos.map(p => p.id));
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
            Preparado para girar o globo e conhecer o nosso planeta? Aqui, cada país reserva uma descoberta única:
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              ✈️ <strong>Viagens ao Vivo:</strong> Entre nos Países Imersivos para sentir a experiência completa de um viajante — com sons reais, rotas de transporte, refeições típicas e conversas ao vivo com nossos guias!
            </p>
            <p>
              📑 <strong>Cadernos de Campo:</strong> Abra os Diários de Bordo para investigar os segredos dos demais países através de histórias curtas, fotos marcantes e registros de viagem prontos para você carimbar!
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

        <section className="mt-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <FichaExplorador />
            
            <div className="rounded-2xl border-2 border-brass/20 bg-card p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brass/10 text-brass">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="flex-1">
                  <p className="font-display text-base text-foreground">
                    Seu progresso global
                  </p>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div 
                      className="h-full bg-brass transition-all duration-1000" 
                      style={{ width: `${(totalExplorados / totalPaises) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    {totalExplorados} de {totalPaises} destinos explorados — {visitados.has('br') ? 'Decolando do Brasil!' : 'Pronto para decolar!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
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

        <div id="mapa" className="mt-6 scroll-mt-24">
          <WorldMap
            paises={paisesVisiveis}
            carimbados={carimbos.map((c) => c.paisId)}
            onSelecionar={(pais) =>
              navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
            }
          />
        </div>

        <section id="diarios" className="mt-10 grid gap-4 scroll-mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {paisesVisiveis.map((pais) => (
            <button
              key={pais.id}
              type="button"
              onClick={() =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
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
