import type { ReactNode } from "react";

interface Props {
  /** Chave que dispara a animação de entrada ao trocar de tela. */
  chave: string;
  etiqueta: string;
  titulo: string;
  /** Imagem de fundo da tela (ignorada quando `midia` é passada). */
  imagem?: string;
  alt?: string;
  /** Mídia customizada (ex.: imagem com lupas). */
  midia?: ReactNode;
  children?: ReactNode;
  acao: {
    rotulo: string;
    onClick: () => void;
    desabilitado?: boolean;
    dica?: string;
  };
  aoVoltar?: () => void;
}

export function TelaJornada({
  chave,
  etiqueta,
  titulo,
  imagem,
  alt,
  midia,
  children,
  acao,
  aoVoltar,
}: Props) {
  return (
    <section
      key={chave}
      className="slide-in grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start"
    >
      <div className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg">
        {midia ?? (
          <img
            src={imagem}
            alt={alt ?? titulo}
            className="h-64 w-full object-cover sm:h-[22rem] lg:h-[30rem]"
          />
        )}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border-2 border-border bg-card p-5 shadow-lg sm:p-6 lg:sticky lg:top-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
            {etiqueta}
          </p>
          <h2 className="mt-1 font-display text-2xl leading-tight text-foreground">
            {titulo}
          </h2>
        </div>

        <div className="space-y-4">{children}</div>

        <div className="mt-auto space-y-2 pt-2">
          <button
            type="button"
            onClick={acao.onClick}
            disabled={acao.desabilitado}
            className="w-full rounded-full border-2 border-brass bg-brass px-5 py-4 font-display text-base tracking-wide text-card shadow-md transition-transform hover:scale-[1.02] disabled:scale-100 disabled:border-border disabled:bg-secondary disabled:text-muted-foreground disabled:shadow-none"
          >
            {acao.rotulo}
          </button>
          {acao.dica && (
            <p className="text-xs text-muted-foreground">{acao.dica}</p>
          )}
          {aoVoltar && (
            <button
              type="button"
              onClick={aoVoltar}
              className="w-full rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent"
            >
              ← Voltar um passo
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
