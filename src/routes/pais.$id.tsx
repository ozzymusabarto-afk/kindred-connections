import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { CompassButton } from "@/components/CompassButton";
import { getPais } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";
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
  component: PaisDashboard,
});

const ABAS = [
  { id: "diario", nome: "Diário de Bordo" },
  { id: "natureza", nome: "Caderno da Natureza" },
  { id: "mesa", nome: "A Mesa do Viajante" },
] as const;

function PaisDashboard() {
  const { pais }: { pais: Pais } = Route.useLoaderData();
  const [aba, setAba] = useState<(typeof ABAS)[number]["id"]>("diario");
  const [ficha, setFicha] = useState<ItemNatureza | null>(null);
  const { getCarimbo, salvarNota, pronto } = usePassport();
  const carimbo = getCarimbo(pais.id);
  const [nota, setNota] = useState("");
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    if (pronto && carimbo) setNota(carimbo.nota);
  }, [pronto, carimbo]);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <header className="relative h-[46vh] min-h-[300px] w-full overflow-hidden">
        <img
          src={pais.imagem_capa}
          alt={`Paisagem do ${pais.nome}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-8">
          <Link
            to="/"
            className="mb-4 w-fit rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs tracking-wide text-foreground backdrop-blur transition-colors hover:bg-accent"
          >
            ← Voltar ao mapa
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {pais.continente.replace(/-/g, " ")}
          </p>
          <h1 className="mt-2 text-4xl text-foreground sm:text-6xl">
            <span aria-hidden className="mr-3">{pais.bandeira}</span>
            {pais.nome}
          </h1>
        </div>
      </header>

      <nav className="sticky top-0 z-30 border-y border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5">
          {ABAS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setAba(a.id)}
              className={`whitespace-nowrap border-b-2 px-4 py-3.5 text-sm tracking-wide transition-colors ${
                aba === a.id
                  ? "border-brass text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {a.nome}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 py-10">
        {aba === "diario" && (
          <section className="fade-up">
            <div className="max-w-3xl">
              <h2 className="text-2xl text-foreground">Visão geral</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {pais.resumo_geografico}
              </p>
            </div>

            <ol className="mt-10 space-y-10 border-l border-border pl-6 sm:pl-10">
              {pais.roteiro_viagem.map((dia) => (
                <li key={dia.dia} className="relative">
                  <span className="absolute -left-[31px] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-brass bg-background sm:-left-[47px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    Dia {dia.dia}
                  </p>
                  <h3 className="mt-2 text-xl text-foreground">{dia.titulo}</h3>
                  <img
                    src={dia.imagem_url}
                    alt={dia.titulo}
                    loading="lazy"
                    className="mt-4 h-72 w-full rounded-md border border-border object-cover"
                  />
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {dia.descricao}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {aba === "natureza" && (
          <section className="fade-up">
            <h2 className="text-2xl text-foreground">Caderno da Natureza</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Toque em uma ficha para abrir o fichário do explorador.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pais.fauna_flora.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFicha(item)}
                  className="overflow-hidden rounded-md border border-border bg-card text-left transition-colors hover:border-brass"
                >
                  <img
                    src={item.foto_url}
                    alt={item.nome}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="font-display text-lg text-foreground">
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
          </section>
        )}

        {aba === "mesa" && (
          <section className="fade-up">
            <h2 className="text-2xl text-foreground">A Mesa do Viajante</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Sabores que contam a história da terra e de quem vive nela.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {pais.gastronomia.map((prato) => (
                <article
                  key={prato.id}
                  className="overflow-hidden rounded-md border border-border bg-card"
                >
                  <img
                    src={prato.foto_url}
                    alt={prato.nome}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg text-foreground">
                        {prato.nome}
                      </h3>
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                        {prato.adjetivo}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {prato.historia}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 rounded-md border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl text-foreground">Notas do Explorador</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Escreva duas ou três frases sobre o que mais chamou sua atenção em{" "}
            {pais.nome}. Ao salvar, você recebe o carimbo deste país no
            passaporte.
          </p>
          <textarea
            value={nota}
            onChange={(e) => {
              setNota(e.target.value);
              setSalvo(false);
            }}
            rows={4}
            placeholder="O que eu observei..."
            className="mt-4 w-full rounded-md border border-input bg-background p-3 text-base leading-relaxed text-foreground outline-none focus:border-brass"
          />
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              disabled={nota.trim().length < 3}
              onClick={() => {
                salvarNota(pais.id, nota.trim());
                setSalvo(true);
              }}
              className="rounded-full bg-primary px-5 py-2 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Salvar e carimbar passaporte
            </button>
            {(salvo || carimbo) && (
              <span className="text-sm text-muted-foreground">
                {salvo ? "Carimbo registrado." : "Este país já está carimbado."}{" "}
                <Link to="/passaporte" className="underline underline-offset-4">
                  Ver passaporte
                </Link>
              </span>
            )}
          </div>
        </section>
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
