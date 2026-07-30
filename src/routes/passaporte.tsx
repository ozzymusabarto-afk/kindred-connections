import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { CompassButton } from "@/components/CompassButton";
import { StarStamp } from "@/components/StarStamp";
import { paises } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";
import { useExplorador } from "@/hooks/useExplorador";

import { lerProgressoTudo } from "@/hooks/useExpedicao";
import type { ProgressoExpedicao } from "@/hooks/useExpedicao";

export const Route = createFileRoute("/passaporte")({
  head: () => ({
    meta: [
      { title: "Passaporte do Explorador — Diário de Bordo" },
      {
        name: "description",
        content:
          "Todos os carimbos conquistados e as notas de observação escritas em cada país visitado.",
      },
      { property: "og:title", content: "Passaporte do Explorador — Diário de Bordo" },
      {
        property: "og:description",
        content: "Carimbos e notas do explorador, guardados neste navegador.",
      },
    ],
  }),
  component: Passaporte,
});

function Passaporte() {
  const { carimbos, pronto } = usePassport();
  const { nome } = useExplorador();
  const [progresso, setProgresso] = useState<ProgressoExpedicao>({});

  useEffect(() => setProgresso(lerProgressoTudo()), []);


  return (
    <div className="min-h-screen">
      <SiteHeader ativo="passaporte" />

      <main className="mx-auto max-w-4xl px-5 py-10 print:py-0">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Documento do explorador
        </p>
        <h1 className="mt-3 text-4xl leading-tight text-foreground">
          Passaporte{nome ? ` de ${nome}` : ""}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Cada carimbo nasce de uma observação escrita por você. Eles ficam
          guardados neste navegador.
        </p>

        {pronto && carimbos.length > 0 && (
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-5 rounded-full border-2 border-brass bg-card px-5 py-2.5 font-display text-sm tracking-wide text-foreground shadow-sm transition-transform hover:scale-[1.03] print:hidden"
          >
            🖨️ Imprimir meu diário de viagem
          </button>
        )}


        {pronto && carimbos.length === 0 && (
          <p className="mt-10 rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Nenhum carimbo ainda.{" "}
            <Link to="/" className="underline underline-offset-4">
              Escolha um país no mapa
            </Link>{" "}
            e escreva sua primeira nota.
          </p>
        )}

        <div className="mt-10 space-y-6">
          {carimbos.map((c) => {
            const pais = paises.find((p) => p.id === c.paisId);
            if (!pais) return null;
            return (
              <article
                key={c.paisId}
                className="flex flex-col gap-5 rounded-md border border-border bg-card p-6 sm:flex-row"
              >
                <div className="relative flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed border-brass text-center">
                  <StarStamp
                    bandeira={pais.bandeira}
                    tamanho={52}
                    titulo={`${pais.nome} já explorado`}
                  />
                  <span className="mt-1 px-2 font-display text-sm leading-tight text-foreground">
                    {pais.nome}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {new Date(c.data).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl text-foreground">
                    Registros da expedição
                  </h2>
                  <div className="mt-3 space-y-4">
                    {pais.roteiro_viagem.map((d) => {
                      const pd = progresso[pais.id]?.[String(d.dia)];
                      if (!pd?.concluidoEm) return null;
                      return (
                        <div
                          key={d.dia}
                          className="rounded-md border border-border bg-background p-4"
                        >
                          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            Dia {d.dia} ·{" "}
                            {new Date(pd.concluidoEm).toLocaleDateString(
                              "pt-BR",
                            )}
                          </p>

                          <p className="mt-1 font-display text-base text-foreground">
                            {d.titulo.replace(/^Dia\s*\d+:\s*/i, "")}
                          </p>
                          {(d.perguntas ?? []).map((q) => (
                            <div key={q.id} className="mt-3">
                              <p className="text-xs leading-relaxed text-muted-foreground">
                                {q.texto}
                              </p>
                              <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-foreground">
                                {pd.respostas?.[q.id]}
                              </p>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    to="/pais/$id"
                    params={{ id: pais.id }}
                    search={{ tela: undefined, dia: undefined }}
                    className="mt-4 inline-block text-sm underline underline-offset-4"
                  >
                    Revisitar {pais.nome}
                  </Link>
                </div>
              </article>
            );
          })}

        </div>
      </main>

      <CompassButton />
    </div>
  );
}
