import { GaleriaObservacao } from "./GaleriaObservacao";
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
      imagem={transporte?.imagem_url ?? dia.imagem_url}
      alt={transporte?.nome ?? dia.titulo}
      abaixoDaMidia={
        transporte?.galeria && transporte.galeria.length > 0 ? (
          <GaleriaObservacao
            fotos={transporte.galeria}
            local={transporte.nome}
            titulo="Outros ângulos do transporte"
          />
        ) : undefined
      }
      acao={{
        rotulo: "Chegar ao ponto de observação ➔",
        onClick: onAvancar,
      }}

      aoVoltar={onVoltar}
    >
      {dia.abertura && (
        <div className="space-y-3 rounded-xl border-2 border-dashed border-brass/60 bg-background p-4">
          <img
            src={dia.abertura.imagem_url}
            alt={`Deslocamento do dia ${dia.dia}`}
            loading="lazy"
            className="h-40 w-full rounded-lg object-cover"
          />
          <p className="text-sm leading-relaxed text-foreground">{dia.abertura.texto}</p>
        </div>
      )}
      <p className="text-base leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 text-2xl">
          {transporte?.icone ?? "🧭"}
        </span>
        Subimos a bordo do {transporte?.nome ?? "nosso transporte"} e começamos a seguir até{" "}
        {destino}.
      </p>
      {transporte?.descricao && (
        <p className="text-sm leading-relaxed text-muted-foreground">{transporte.descricao}</p>
      )}
    </TelaJornada>
  );
}
