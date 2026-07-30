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
    <header className="border-b border-border bg-card/60 paper-grain">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:flex sm:flex-wrap sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden className="shrink-0 text-4xl">
            {pais.bandeira}
          </span>
          <div className="min-w-0">
            <h1 className="truncate font-display text-2xl text-foreground sm:text-3xl">
              {pais.nome}
            </h1>
            <p className="truncate text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Painel da expedição
            </p>
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
