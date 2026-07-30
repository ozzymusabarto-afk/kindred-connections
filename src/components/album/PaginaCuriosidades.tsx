import type { Pais } from "@/data/types";
import { getCuriosidades } from "@/data/curiosidades";

interface Props {
  pais: Pais;
  colecionadas: number;
  total: number;
}

/** Página de abertura do país: bandeira, dados e curiosidades. */
export function PaginaCuriosidades({ pais, colecionadas, total }: Props) {
  const fatos = getCuriosidades(pais.id);
  const pct = total === 0 ? 0 : Math.round((colecionadas / total) * 100);

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto p-6 sm:p-10">
      <div className="flex items-center gap-5">
        {pais.bandeira_url ? (
          <img
            src={pais.bandeira_url}
            alt={`Bandeira do país ${pais.nome}`}
            className="h-20 w-32 rounded-lg border-2 border-border object-cover shadow-md sm:h-24 sm:w-40"
          />
        ) : (
          <span aria-hidden className="text-6xl">
            {pais.bandeira}
          </span>
        )}
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
            Página de abertura
          </p>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {pais.nome}
          </h2>
          {pais.capital && (
            <p className="text-sm text-muted-foreground">
              Capital: {pais.capital}
            </p>
          )}
        </div>
      </div>

      <div className="rounded-xl border-2 border-border bg-secondary/50 p-4">
        <p className="text-sm leading-relaxed text-foreground">
          {pais.resumo_geografico}
        </p>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.24em] text-emerald">
          Vale conhecer
        </p>
        <ul className="mt-3 space-y-3">
          {fatos.map((fato, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brass text-xs text-brass"
              >
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-foreground">{fato}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Figurinhas deste país</span>
          <span>
            {colecionadas} de {total} · {pct}%
          </span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-brass transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
