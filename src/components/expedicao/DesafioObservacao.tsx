import { useState } from "react";
import { tocar } from "@/lib/sfx";
import type { DesafioDoDia } from "@/data/types";

interface Props {
  desafio?: DesafioDoDia;
}

/**
 * Mini-desafio de observação: sem pontuação nem competição, apenas a
 * confirmação carinhosa de que a criança observou com atenção.
 */
export function DesafioObservacao({ desafio }: Props) {
  const [escolha, setEscolha] = useState<number | null>(null);
  if (!desafio) return null;

  const respondeu = escolha !== null;
  const acertou = escolha === desafio.correta;

  return (
    <div className="rounded-2xl border-2 border-dashed border-border bg-background p-5 text-left">
      <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
        Desafio de observação
      </p>
      <p className="mt-2 font-display text-base leading-relaxed text-foreground">
        {desafio.pergunta}
      </p>

      <ul className="mt-4 space-y-2">
        {desafio.opcoes.map((opcao, i) => {
          const estaEscolhida = escolha === i;
          const revelarCerta = respondeu && i === desafio.correta;
          return (
            <li key={opcao}>
              <button
                type="button"
                disabled={respondeu}
                onClick={() => {
                  setEscolha(i);
                  tocar(i === desafio.correta ? "dia" : "lupa");
                }}
                className={`w-full rounded-xl border-2 px-4 py-3 text-left text-sm leading-relaxed transition-colors ${
                  revelarCerta
                    ? "border-emerald bg-emerald/10 text-foreground"
                    : estaEscolhida
                      ? "border-brass bg-accent text-accent-foreground"
                      : "border-border bg-card text-foreground hover:bg-accent/60"
                } ${respondeu ? "cursor-default" : ""}`}
              >
                <span aria-hidden className="mr-2 text-brass">
                  {revelarCerta ? "✓" : "•"}
                </span>
                {opcao}
              </button>
            </li>
          );
        })}
      </ul>

      {respondeu && (
        <div className="mt-4 rounded-xl bg-secondary/70 p-4">
          <p className="text-sm font-medium text-foreground">
            {acertou
              ? "Você observou muito bem! 🔎"
              : "Boa tentativa — observar é justamente isso: olhar de novo."}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {desafio.explicacao}
          </p>
        </div>
      )}
    </div>
  );
}
