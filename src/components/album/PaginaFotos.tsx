import { useState } from "react";
import type { CategoriaAlbum, FotoAlbum } from "@/lib/album";
import { ROTULO_CATEGORIA } from "@/lib/album";

interface Props {
  categoria: CategoriaAlbum;
  fotos: FotoAlbum[];
  paisNome: string;
  /** Dias já carimbados neste país — define quais figurinhas estão reveladas. */
  diasConcluidos: number[];
  /** Numeração da página dentro da seção. */
  parte?: { atual: number; total: number };
}

function revelada(foto: FotoAlbum, diasConcluidos: number[]) {
  if (foto.dia === 0) return diasConcluidos.length > 0;
  return diasConcluidos.includes(foto.dia);
}

export function PaginaFotos({
  categoria,
  fotos,
  paisNome,
  diasConcluidos,
  parte,
}: Props) {
  const [ampliada, setAmpliada] = useState<FotoAlbum | null>(null);

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-5 sm:p-8">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
          {ROTULO_CATEGORIA[categoria]}
        </p>
        {parte && parte.total > 1 && (
          <p className="text-[11px] text-muted-foreground">
            folha {parte.atual} de {parte.total}
          </p>
        )}
      </div>

      <ul className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3">
        {fotos.map((foto) => {
          const visivel = revelada(foto, diasConcluidos);
          return (
            <li key={foto.id}>
              {visivel ? (
                <button
                  type="button"
                  onClick={() => setAmpliada(foto)}
                  className="group block w-full text-left"
                  aria-label={`Ampliar figurinha: ${foto.legenda}`}
                >
                  <span className="block overflow-hidden rounded-xl border-2 border-border bg-card p-1.5 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:border-brass">
                    <img
                      src={foto.imagem_url}
                      alt={`${foto.legenda} — ${paisNome}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-lg object-cover"
                    />
                  </span>
                  <span className="mt-1.5 block text-[11px] leading-snug text-muted-foreground">
                    {foto.legenda}
                  </span>
                </button>
              ) : (
                <div>
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/40">
                    <span
                      aria-hidden
                      className="text-2xl opacity-40 grayscale"
                    >
                      🧭
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground/70">
                    Figurinha do dia {foto.dia} — ainda não colecionada
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {ampliada && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ampliada.legenda}
          onClick={() => setAmpliada(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
        >
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            <img
              src={ampliada.imagem_url}
              alt={`${ampliada.legenda} — ${paisNome}`}
              className="max-h-[75vh] w-full rounded-2xl border-2 border-card object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-card">
              {ampliada.legenda}
              {ampliada.credito && (
                <span className="mt-1 block text-[11px] text-card/70">
                  Foto: {ampliada.credito}
                </span>
              )}
            </figcaption>
            <button
              type="button"
              onClick={() => setAmpliada(null)}
              aria-label="Fechar figurinha"
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-lg text-foreground shadow-lg"
            >
              ✕
            </button>
          </figure>
        </div>
      )}
    </div>
  );
}
