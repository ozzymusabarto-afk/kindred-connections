import { brasil } from "@/data/brasil";
import type { Pais } from "@/data/types";

interface Props {
  pais: Pais;
}

const LINHAS: {
  titulo: string;
  campo: keyof Pais["comparativo"];
  icone: string;
}[] = [
  { titulo: "Clima", campo: "clima_predominante", icone: "🌤️" },
  { titulo: "Bioma", campo: "bioma_principal", icone: "🌿" },
  { titulo: "O que mais chama atenção", campo: "elemento_marcante", icone: "✨" },
  { titulo: "Plantações e construções", campo: "agricultura_construcoes", icone: "🏘️" },
  { titulo: "Roupas e modo de vida", campo: "roupas_modo_de_vida", icone: "🧥" },
  { titulo: "Fauna e comida", campo: "fauna_alimentacao", icone: "🐾" },
];

/** Ficha-síntese que fecha a expedição comparando o país visitado com o Brasil. */
export function FichaComparativa({ pais }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-border bg-card text-left">
      <div className="grid grid-cols-2 border-b-2 border-border">
        <p className="border-r-2 border-border px-4 py-3 font-display text-base text-foreground">
          <span aria-hidden className="mr-2">
            {pais.bandeira}
          </span>
          {pais.nome}
        </p>
        <p className="px-4 py-3 font-display text-base text-foreground">
          <span aria-hidden className="mr-2">
            {brasil.bandeira}
          </span>
          {brasil.nome}
        </p>
      </div>

      <dl>
        {LINHAS.map((linha) => (
          <div key={linha.campo} className="border-b border-border last:border-b-0">
            <dt className="bg-accent/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-accent-foreground">
              <span aria-hidden className="mr-2">
                {linha.icone}
              </span>
              {linha.titulo}
            </dt>
            <dd className="grid grid-cols-2">
              <p className="border-r border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {pais.comparativo[linha.campo]}
              </p>
              <p className="px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {brasil.comparativo[linha.campo]}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
