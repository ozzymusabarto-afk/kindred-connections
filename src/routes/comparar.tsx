import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { paises } from "@/data/countries";
import { lerProgressoTudo } from "@/hooks/useExpedicao";
import type { ProgressoExpedicao } from "@/hooks/useExpedicao";
import type { Pais } from "@/data/types";


export const Route = createFileRoute("/comparar")({
  head: () => ({
    meta: [
      { title: "Bússola da Comparação — Diário de Bordo" },
      {
        name: "description",
        content:
          "Compare dois países lado a lado: clima, agricultura, construções, roupas, fauna e alimentação.",
      },
      { property: "og:title", content: "Bússola da Comparação — Diário de Bordo" },
      {
        property: "og:description",
        content:
          "Observe as diferenças entre dois países em clima, construções, modo de vida e sabores.",
      },
    ],
  }),
  component: Comparar,
});

const LINHAS: { titulo: string; campo: keyof Pais["comparativo"] }[] = [
  { titulo: "Clima predominante", campo: "clima_predominante" },
  { titulo: "Bioma principal", campo: "bioma_principal" },
  { titulo: "Elemento marcante", campo: "elemento_marcante" },
  { titulo: "Agricultura e construções", campo: "agricultura_construcoes" },
  { titulo: "Roupas e modo de vida", campo: "roupas_modo_de_vida" },
  { titulo: "Fauna e alimentação", campo: "fauna_alimentacao" },
];

/** Anotações que a criança escreveu para um país, na ordem dos dias. */
function anotacoesDoPais(progresso: ProgressoExpedicao, paisId: string) {
  const pais = progresso[paisId];
  if (!pais) return [];
  return Object.entries(pais.respostas ?? {})
    .filter(([, texto]) => typeof texto === "string" && texto.trim().length > 0)
    .slice(0, 4)
    .map(([chave, texto]) => ({ chave, texto: texto as string }));
}

function Comparar() {
  const [esquerdaId, setEsquerdaId] = useState(paises[0]?.id ?? "");
  const [direitaId, setDireitaId] = useState(paises[1]?.id ?? "");
  const [progresso, setProgresso] = useState<ProgressoExpedicao>({});

  useEffect(() => setProgresso(lerProgressoTudo()), []);

  const esquerda = paises.find((p) => p.id === esquerdaId);
  const direita = paises.find((p) => p.id === direitaId);


  return (
    <div className="min-h-screen">
      <SiteHeader ativo="comparar" />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Bússola da comparação
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl leading-tight text-foreground">
          Dois países, lado a lado
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Comparar é o jeito mais rápido de enxergar por que cada povo vive de um
          jeito. Escolha dois destinos e observe o que muda.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { valor: esquerdaId, set: setEsquerdaId, rotulo: "Primeiro país" },
            { valor: direitaId, set: setDireitaId, rotulo: "Segundo país" },
          ].map((sel) => (
            <label key={sel.rotulo} className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {sel.rotulo}
              </span>
              <select
                value={sel.valor}
                onChange={(e) => sel.set(e.target.value)}
                className="mt-2 w-full rounded-md border border-input bg-card p-3 text-base text-foreground outline-none focus:border-brass"
              >
                {paises.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>

        {esquerda && direita && (
          <section className="mt-10 overflow-hidden rounded-md border border-border bg-card">
            <div className="grid grid-cols-2 border-b border-border">
              {[esquerda, direita].map((p) => (
                <div key={p.id} className="border-r border-border last:border-r-0">
                  <img
                    src={p.imagem_capa}
                    alt={`Paisagem do ${p.nome}`}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                  <p className="px-4 py-3 font-display text-lg text-foreground">
                    <span aria-hidden className="mr-2">{p.bandeira}</span>
                    {p.nome}
                  </p>
                </div>
              ))}
            </div>

            {esquerda.id === direita.id ? (
              <p className="p-6 text-sm text-muted-foreground">
                Escolha dois países diferentes para ver a comparação.
              </p>
            ) : (
              <dl>
                {LINHAS.map((linha) => (
                  <div key={linha.campo} className="border-b border-border last:border-b-0">
                    <dt className="bg-secondary/60 px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {linha.titulo}
                    </dt>
                    <div className="grid grid-cols-2">
                      <dd className="border-r border-border px-4 py-4 text-sm leading-relaxed text-foreground">
                        {esquerda.comparativo[linha.campo]}
                      </dd>
                      <dd className="px-4 py-4 text-sm leading-relaxed text-foreground">
                        {direita.comparativo[linha.campo]}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
