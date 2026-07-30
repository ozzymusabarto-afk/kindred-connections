import { Link } from "@tanstack/react-router";
import { StarStamp } from "@/components/StarStamp";
import { DesafioObservacao } from "./DesafioObservacao";
import { useExplorador } from "@/hooks/useExplorador";
import type { DiaRoteiro, Pais } from "@/data/types";


interface Props {
  pais: Pais;
  dia: DiaRoteiro;
  diasTotal: number;
  concluidos: number;
  proximoDia?: number;
  onProximoDia: (dia: number) => void;
  onRefazer: () => void;
  /** Chamado quando todos os dias foram carimbados (voo de volta). */
  onEncerrar?: () => void;
}

export function TelaCarimbo({
  pais,
  dia,
  diasTotal,
  concluidos,
  proximoDia,
  onProximoDia,
  onRefazer,
}: Props) {
  const { nome } = useExplorador();


  return (
    <section
      key={`carimbo-${dia.dia}`}
      className="slide-in mx-auto max-w-2xl rounded-2xl border-2 border-dashed border-brass bg-card p-6 text-center shadow-lg sm:p-10"
    >
      <div className="star-drop flex justify-center">
        <StarStamp bandeira={pais.bandeira} tamanho={96} titulo={`Dia ${dia.dia} carimbado`} />
      </div>
      <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-brass">
        Passaporte carimbado
      </p>
      <h2 className="mt-1 font-display text-2xl text-foreground">
        Dia {dia.dia} em {pais.nome} concluído{nome ? `, ${nome}` : ""}!
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Suas observações ficaram guardadas no caderno do explorador. Você já carimbou {concluidos}{" "}
        de {diasTotal} dias desta expedição.
      </p>

      {dia.desafio && (
        <div className="mt-7">
          <DesafioObservacao desafio={dia.desafio} />
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3">
        {proximoDia ? (

          <button
            type="button"
            onClick={() => onProximoDia(proximoDia)}
            className="w-full rounded-full border-2 border-brass bg-brass px-5 py-4 font-display text-base tracking-wide text-card shadow-md transition-transform hover:scale-[1.02]"
          >
            Começar o Dia {proximoDia} ➔
          </button>
        ) : (
          <Link
            to="/passaporte"
            className="w-full rounded-full border-2 border-brass bg-brass px-5 py-4 font-display text-base tracking-wide text-card shadow-md transition-transform hover:scale-[1.02]"
          >
            Ver meu passaporte ➔
          </Link>
        )}
        <button
          type="button"
          onClick={onRefazer}
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent"
        >
          ← Rever este dia
        </button>
        <Link to="/" className="text-xs text-muted-foreground underline underline-offset-4">
          Voltar ao mapa mundi
        </Link>
      </div>
    </section>
  );
}
