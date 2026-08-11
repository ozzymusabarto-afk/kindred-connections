import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pararAmbiente } from "@/lib/ambiente";
import { definirSom, somLigado } from "@/lib/sfx";
import type { Pais } from "@/data/types";

interface Props {
  pais: Pais;
  guia?: string;
  clima?: string;
}

export function ExpedicaoHeader({ pais, guia, clima }: Props) {
  const [som, setSom] = useState(true);

  useEffect(() => setSom(somLigado()), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-5 sm:flex sm:flex-wrap sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <div className="relative shrink-0">
            <img 
              src={`https://flagcdn.com/w160/${pais.codigo_mapa.toLowerCase()}.png`} 
              alt={`Bandeira de ${pais.nome}`}
              className="h-14 w-20 object-contain rounded-md shadow-sm border border-sky-100 bg-white/5"
              style={{ minHeight: '56px', minWidth: '80px' }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.flag-fallback')) {
                  const fallback = document.createElement('span');
                  fallback.className = "flag-fallback text-5xl";
                  fallback.setAttribute('aria-hidden', 'true');
                  fallback.textContent = pais.bandeira || '🏳️';
                  parent.prepend(fallback);
                }
              }}
            />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-tighter text-sky-900 border border-white">
              Explorador
            </div>
          </div>
          <div className="min-w-0">
            <h1 className="truncate font-rounded text-3xl font-black text-sky-900 sm:text-4xl tracking-tight">
              {pais.nome}
            </h1>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="truncate text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Missão em Andamento
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-wrap items-center gap-2 sm:col-auto">
          {guia && (
            <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
              Guia local: <span className="text-foreground">{guia}</span>
            </span>
          )}
          {clima && (
            <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
              Clima: <span className="text-foreground">{clima}</span>
            </span>
          )}
          <button
            type="button"
            onClick={() => {
              definirSom(!som);
              setSom(!som);
              if (som) pararAmbiente();
            }}
            aria-pressed={som}
            className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent"
          >
            {som ? "🔊 Som ligado" : "🔇 Som desligado"}
          </button>
          <Link
            to="/"
            className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-accent"
          >
            ← Voltar ao mapa
          </Link>
        </div>
      </div>
    </header>
  );
}
