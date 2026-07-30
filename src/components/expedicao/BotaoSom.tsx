import { useEffect, useState } from "react";

import { assinarAmbiente, pararAmbiente, tocarAmbiente } from "@/lib/ambiente";
import type { SomAmbiente } from "@/data/types";

interface Props {
  som?: SomAmbiente;
  /** Rótulo mostrado no botão, ex.: "Ouça o esquilo". */
  rotulo?: string;
}

/** Botão discreto que toca um som ambiente real da etapa. */
export function BotaoSom({ som, rotulo = "Ouça este lugar" }: Props) {
  const [tocando, setTocando] = useState<string | null>(null);

  useEffect(() => {
    const cancelar = assinarAmbiente(setTocando);
    return () => {
      cancelar();
    };
  }, []);
  useEffect(() => () => pararAmbiente(), [som?.url]);

  if (!som) return null;
  const ativo = tocando === som.url;

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => tocarAmbiente(som.url)}
        aria-pressed={ativo}
        className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm transition-colors ${
          ativo
            ? "border-brass bg-brass text-card"
            : "border-brass/60 bg-background text-foreground hover:bg-accent"
        }`}
      >
        <span aria-hidden>{ativo ? "⏸" : "🔊"}</span>
        {ativo ? "Parar o som" : rotulo}
      </button>
      <p className="text-[11px] leading-snug text-muted-foreground">
        {som.legenda}
        {som.credito ? ` · ${som.credito}` : ""}
      </p>
    </div>
  );
}
