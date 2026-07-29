import { useState } from "react";
import { tocar } from "@/lib/sfx";
import type { PontoObservacao } from "@/data/types";

interface Props {
  observacao: PontoObservacao;
  vistos: string[];
  onAbrir: (hotspotId: string) => void;
}

export function ImagemHotspots({ observacao, vistos, onAbrir }: Props) {
  const [aberto, setAberto] = useState<string | null>(null);
  const hotspot = observacao.hotspots.find((h) => h.id === aberto);

  return (
    <figure className="overflow-hidden rounded-md border border-border bg-card">
      <div className="relative">
        <img
          src={observacao.imagem_url}
          alt={observacao.titulo}
          className="h-64 w-full object-cover sm:h-80"
        />
        {observacao.hotspots.map((h) => {
          const visto = vistos.includes(h.id);
          return (
            <button
              key={h.id}
              type="button"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              onClick={() => {
                tocar("lupa");
                setAberto(aberto === h.id ? null : h.id);
                onAbrir(h.id);
              }}
              aria-label={`Olhe atentamente: ${h.titulo}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 backdrop-blur transition-all hover:scale-110 ${
                aberto === h.id
                  ? "scale-110 border-brass bg-card"
                  : visto
                    ? "border-brass/80 bg-card/80"
                    : "pulse border-card bg-card/70"
              } flex h-9 w-9 items-center justify-center text-base`}
            >
              <span aria-hidden>🔍</span>
            </button>
          );
        })}
      </div>

      <figcaption className="border-t border-border p-4">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Ponto de observação
        </p>
        <p className="mt-1 font-display text-lg text-foreground">
          {observacao.titulo}
        </p>
        {hotspot ? (
          <div className="fade-up mt-3 rounded-md border border-brass/50 bg-accent/50 p-3">
            <p className="font-display text-sm text-foreground">
              {hotspot.titulo}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {hotspot.texto}
            </p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            Olhe atentamente: toque nas lupas para investigar {vistos.length}/
            {observacao.hotspots.length} detalhes desta imagem.
          </p>
        )}
      </figcaption>
    </figure>
  );
}
