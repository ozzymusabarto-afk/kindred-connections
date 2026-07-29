import type { DiaRoteiro } from "@/data/types";

interface Props {
  dias: DiaRoteiro[];
  ativo: number;
  concluido: (dia: number) => boolean;
  onSelecionar: (dia: number) => void;
}

/** Extrai "Montreal" de "Dia 1: A vida em Montreal e o ritmo do St. Lawrence". */
function rotuloCurto(d: DiaRoteiro) {
  const semPrefixo = d.titulo.replace(/^Dia\s*\d+:\s*/i, "");
  const palavras = semPrefixo.split(/\s+/).slice(0, 3).join(" ");
  return palavras.replace(/[,.]$/, "");
}

export function SeletorDias({ dias, ativo, concluido, onSelecionar }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {dias.map((d) => {
        const selecionado = d.dia === ativo;
        return (
          <button
            key={d.dia}
            type="button"
            onClick={() => onSelecionar(d.dia)}
            aria-pressed={selecionado}
            className={`flex shrink-0 items-center gap-2 rounded-md border-2 px-3.5 py-2 text-left transition-colors ${
              selecionado
                ? "border-brass bg-accent"
                : "border-dashed border-border bg-card hover:border-brass/60"
            }`}
          >
            <span className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Dia {d.dia}
              </span>
              <span className="font-display text-sm text-foreground">
                {rotuloCurto(d)}
              </span>
            </span>
            {concluido(d.dia) && (
              <span aria-label="dia concluído" className="text-base">
                ⭐
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
