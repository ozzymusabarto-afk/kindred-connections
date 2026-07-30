import { MINIMO_RESPOSTA } from "@/hooks/useExpedicao";
import type { PerguntaSocratica } from "@/data/types";

interface Props {
  pergunta: PerguntaSocratica;
  valor: string;
  onChange: (valor: string) => void;
}

export function PerguntaSocraticaCampo({ pergunta, valor, onChange }: Props) {
  const ok = valor.trim().length >= MINIMO_RESPOSTA;
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        {pergunta.tipo === "comparacao" ? "Pergunta de comparação" : "Pergunta de observação"}
      </p>
      <p className="mt-2 font-display text-base leading-relaxed text-foreground">
        {pergunta.texto}
      </p>
      <textarea
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="Minha hipótese é..."
        className="mt-3 w-full rounded-md border border-input bg-card p-3 text-sm leading-relaxed text-foreground outline-none transition-colors focus:border-brass"
      />
      <p className="mt-1 text-[11px] text-muted-foreground">
        {ok ? "Resposta registrada ✓" : `Escreva pelo menos ${MINIMO_RESPOSTA} caracteres.`}
      </p>
    </div>
  );
}
