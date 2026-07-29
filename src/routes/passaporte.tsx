import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { CompassButton } from "@/components/CompassButton";
import { paises } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";

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

  return (
    <div className="min-h-screen">
      <SiteHeader ativo="passaporte" />

      <main className="mx-auto max-w-4xl px-5 py-10">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Documento do explorador
        </p>
        <h1 className="mt-3 text-4xl leading-tight text-foreground">Passaporte</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Cada carimbo nasce de uma observação escrita por você. Eles ficam
          guardados neste navegador.
        </p>

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
                <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed border-brass text-center">
                  <span aria-hidden className="text-2xl">{pais.bandeira}</span>
                  <span className="mt-1 px-2 font-display text-sm leading-tight text-foreground">
                    {pais.nome}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {new Date(c.data).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl text-foreground">Notas do explorador</h2>
                  <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                    {c.nota}
                  </p>
                  <Link
                    to="/pais/$id"
                    params={{ id: pais.id }}
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
