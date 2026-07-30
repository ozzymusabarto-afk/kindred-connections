import { useCallback, useEffect, useState } from "react";
import { tocar } from "@/lib/sfx";
import type { FotoGaleria } from "@/data/types";

interface Props {
  fotos: FotoGaleria[];
  /** Nome do local, usado nos textos alternativos. */
  local: string;
}

export function GaleriaObservacao({ fotos, local }: Props) {
  const [indice, setIndice] = useState<number | null>(null);
  const aberto = indice !== null ? fotos[indice] : null;

  const fechar = useCallback(() => setIndice(null), []);
  const mover = useCallback(
    (passo: number) =>
      setIndice((i) => (i === null ? i : (i + passo + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (indice === null) return;
    function aoTeclar(e: KeyboardEvent) {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    }
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [indice, fechar, mover]);

  if (fotos.length === 0) return null;

  return (
    <div className="mt-4">
      <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
        Outros ângulos do lugar
      </p>

      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {fotos.map((foto, i) => (
          <li key={foto.id}>
            <button
              type="button"
              onClick={() => {
                tocar("lupa");
                setIndice(i);
              }}
              aria-label={`Ampliar foto: ${foto.legenda}`}
              className="group block w-full text-left"
            >
              <span className="block overflow-hidden rounded-xl border-2 border-border bg-card shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:border-brass">
                <img
                  src={foto.imagem_url}
                  alt={`${foto.legenda} — ${local}`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <span className="mt-1.5 block text-xs leading-snug text-muted-foreground">
                {foto.legenda}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {aberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={aberto.legenda}
          onClick={fechar}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          style={{ animation: "fadeIn 200ms ease-out" }}
        >
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
            style={{ animation: "zoomIn 240ms ease-out" }}
          >
            <img
              src={aberto.imagem_url}
              alt={`${aberto.legenda} — ${local}`}
              className="max-h-[75vh] w-full rounded-2xl border-2 border-card object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-card">
              {aberto.legenda}
            </figcaption>

            <button
              type="button"
              onClick={fechar}
              aria-label="Fechar foto"
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-lg text-foreground shadow-lg"
            >
              ✕
            </button>

            {fotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => mover(-1)}
                  aria-label="Foto anterior"
                  className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-card/90 text-foreground shadow-lg"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => mover(1)}
                  aria-label="Próxima foto"
                  className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-card/90 text-foreground shadow-lg"
                >
                  ›
                </button>
              </>
            )}
          </figure>
        </div>
      )}
    </div>
  );
}
