import type { EstacaoId } from "@/hooks/useExpedicao";

export interface EstacaoInfo {
  id: EstacaoId;
  icone: string;
  rotulo: string;
  dica: string;
}

interface Props {
  estacoes: EstacaoInfo[];
  ativa: EstacaoId;
  visitadas: EstacaoId[];
  onSelecionar: (id: EstacaoId) => void;
}

export function RotaDoDia({ estacoes, ativa, visitadas, onSelecionar }: Props) {
  const total = estacoes.length;
  const feitas = estacoes.filter((e) => visitadas.includes(e.id)).length;

  return (
    <section className="rounded-md border border-border bg-card p-4 sm:p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <h2 className="min-w-0 truncate font-display text-lg text-foreground">
          A rota da viagem
        </h2>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">
          Etapa {Math.max(feitas, 1)} de {total}
        </span>
      </div>

      <div className="relative mt-6">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 border-t-2 border-dashed border-border"
        />
        <ol className="relative grid grid-cols-4 gap-2">
          {estacoes.map((e) => {
            const selecionada = e.id === ativa;
            const visitada = visitadas.includes(e.id);
            return (
              <li key={e.id} className="flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => onSelecionar(e.id)}
                  aria-pressed={selecionada}
                  title={e.dica}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl transition-all ${
                    selecionada
                      ? "scale-110 border-brass bg-accent shadow-sm"
                      : visitada
                        ? "border-brass/70 bg-background"
                        : "border-border bg-background hover:border-brass/60"
                  }`}
                >
                  <span aria-hidden>{e.icone}</span>
                </button>
                <span
                  className={`mt-2 text-[11px] leading-tight sm:text-xs ${
                    selecionada ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {e.rotulo}
                </span>
                {visitada && (
                  <span className="mt-0.5 text-[10px] text-brass">visitado</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
