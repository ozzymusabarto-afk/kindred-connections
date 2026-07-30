import type { NotaBrasil } from "@/data/types";

interface Props {
  nota?: NotaBrasil;
}

/**
 * Nota curta que compara o país visitado com o Brasil — ancora a novidade
 * naquilo que a criança já conhece.
 */
export function NotaComparativaBrasil({ nota }: Props) {
  if (!nota) return null;
  return (
    <div className="rounded-xl border-2 border-emerald/40 bg-secondary/60 p-4">
      <p className="text-[11px] uppercase tracking-[0.24em] text-emerald">
        <span aria-hidden className="mr-1.5">
          🇧🇷
        </span>
        {nota.titulo ?? "Você sabia? No Brasil…"}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{nota.texto}</p>
    </div>
  );
}
