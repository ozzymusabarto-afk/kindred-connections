import { TelaJornada } from "./TelaJornada";
import { GaleriaObservacao } from "./GaleriaObservacao";
import type { DiaRoteiro, Pais } from "@/data/types";

interface Props {
  pais: Pais;
  dia: DiaRoteiro;
  onAvancar: () => void;
  onVoltar?: () => void;
}

export function TelaCheckin({ pais, dia, onAvancar, onVoltar }: Props) {
  const base = pais.base;
  const guia = dia.guia_nome ?? dia.guia_local ?? "seu guia local";
  const destino = dia.observacao?.titulo ?? dia.titulo;

  return (
    <TelaJornada
      chave="checkin"
      etiqueta="Tela 2 · Check-in e guia local"
      titulo={base?.nome ?? `Nossa base no ${pais.nome}`}
      imagem={base?.imagem_url ?? pais.imagem_capa}
      alt={base?.nome ?? `Hospedagem no ${pais.nome}`}
      abaixoDaMidia={
        base?.galeria?.length ? (
          <GaleriaObservacao
            fotos={base.galeria}
            local={pais.nome}
            titulo="Conhecendo nossa base"
          />
        ) : undefined
      }
      acao={{
        rotulo: `Iniciar viagem do Dia ${dia.dia} ➔`,
        onClick: onAvancar,
      }}
      aoVoltar={onVoltar}
    >

      <p className="text-sm leading-relaxed text-muted-foreground">
        {base?.descricao ??
          "Deixamos as malas na base da expedição e saímos para o primeiro passeio."}
      </p>
      <div className="rounded-xl border-2 border-dashed border-brass bg-accent/50 p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-accent-foreground">
          Encontro com o guia
        </p>
        <p className="mt-2 text-base leading-relaxed text-foreground">
          “Olá, explorador! Sou {guia}. Hoje vamos usar{" "}
          {dia.transporte?.nome ?? "nosso transporte do dia"} para ir até {destino}.”
        </p>
        {dia.clima_do_dia && (
          <p className="mt-2 text-xs text-muted-foreground">Previsão de hoje: {dia.clima_do_dia}</p>
        )}
      </div>
    </TelaJornada>
  );
}
