import { TelaJornada } from "./TelaJornada";
import type { DiaRoteiro } from "@/data/types";

interface Props {
  dia: DiaRoteiro;
  onAvancar: () => void;
  onVoltar?: () => void;
}

export function TelaTransporte({ dia, onAvancar, onVoltar }: Props) {
  const transporte = dia.transporte;
  const destino = dia.observacao?.titulo ?? dia.titulo;

  return (
    <TelaJornada
      chave={`transporte-${dia.dia}`}
      etiqueta={`Tela 3 · Dia ${dia.dia} · O deslocamento`}
      titulo={transporte?.nome ?? "O transporte do dia"}
      imagem={dia.imagem_url}
      alt={transporte?.nome ?? dia.titulo}
      acao={{
        rotulo: "Chegar ao ponto de observação ➔",
        onClick: onAvancar,
      }}
      aoVoltar={onVoltar}
    >
      <p className="text-base leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 text-2xl">
          {transporte?.icone ?? "🧭"}
        </span>
        Subimos a bordo do {transporte?.nome ?? "nosso transporte"} e começamos
        a seguir até {destino}.
      </p>
      {transporte?.descricao && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {transporte.descricao}
        </p>
      )}
    </TelaJornada>
  );
}
