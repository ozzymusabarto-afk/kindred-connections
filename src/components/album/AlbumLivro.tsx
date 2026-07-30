import { useEffect, useMemo, useState, type ReactNode } from "react";
import { tocar } from "@/lib/sfx";

export interface FolhaAlbum {
  id: string;
  conteudo: ReactNode;
  /** Rótulo curto usado na navegação inferior. */
  rotulo: string;
}

interface Props {
  folhas: FolhaAlbum[];
}

/**
 * Livro folheável: mostra uma folha por vez com animação de virada de página.
 * Respeita `prefers-reduced-motion` (a animação é desligada pelo CSS).
 */
export function AlbumLivro({ folhas }: Props) {
  const [indice, setIndice] = useState(0);
  const [virando, setVirando] = useState<"frente" | "tras" | null>(null);

  const total = folhas.length;
  const folha = folhas[Math.min(indice, total - 1)];

  const ir = useMemo(
    () => (passo: number) => {
      setIndice((i) => {
        const proximo = Math.min(Math.max(i + passo, 0), total - 1);
        if (proximo !== i) {
          setVirando(passo > 0 ? "frente" : "tras");
          tocar("passo");
        }
        return proximo;
      });
    },
    [total],
  );

  useEffect(() => {
    if (!virando) return;
    const t = window.setTimeout(() => setVirando(null), 620);
    return () => window.clearTimeout(t);
  }, [virando]);

  useEffect(() => {
    function aoTeclar(e: KeyboardEvent) {
      if (e.key === "ArrowRight") ir(1);
      if (e.key === "ArrowLeft") ir(-1);
    }
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [ir]);

  if (!folha) return null;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="album-palco relative rounded-3xl border-2 border-border bg-card shadow-xl">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-px -translate-x-1/2 bg-border/70 lg:block"
        />
        <div
          key={folha.id}
          className={`album-folha min-h-[32rem] ${
            virando === "frente"
              ? "album-vira-frente"
              : virando === "tras"
                ? "album-vira-tras"
                : ""
          }`}
        >
          {folha.conteudo}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => ir(-1)}
          disabled={indice === 0}
          className="rounded-full border-2 border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition-colors hover:bg-accent disabled:opacity-40"
        >
          ‹ Folha anterior
        </button>

        <p className="text-xs text-muted-foreground">
          {folha.rotulo} · {indice + 1} de {total}
        </p>

        <button
          type="button"
          onClick={() => ir(1)}
          disabled={indice === total - 1}
          className="rounded-full border-2 border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition-colors hover:bg-accent disabled:opacity-40"
        >
          Próxima folha ›
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {folhas.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              if (i === indice) return;
              setVirando(i > indice ? "frente" : "tras");
              setIndice(i);
              tocar("passo");
            }}
            aria-label={`Ir para ${f.rotulo}`}
            aria-current={i === indice}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i === indice ? "bg-brass" : "bg-border hover:bg-brass/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
