import { BotaoSom } from "./BotaoSom";
import { GaleriaObservacao } from "./GaleriaObservacao";
import { ImagemHotspots } from "./ImagemHotspots";
import { NotaComparativaBrasil } from "./NotaComparativaBrasil";
import { PerguntaSocraticaCampo } from "./PerguntaSocratica";
import { TelaJornada } from "./TelaJornada";

import { respostaValida } from "@/hooks/useExpedicao";
import type { ProgressoDia } from "@/hooks/useExpedicao";
import type { DiaRoteiro } from "@/data/types";

interface Props {
  dia: DiaRoteiro;
  progresso: ProgressoDia;
  respostas: Record<string, string>;
  onResponder: (chave: string, valor: string) => void;
  onAbrirHotspot: (id: string) => void;
  onAvancar: () => void;
  onVoltar?: () => void;
}

const ETAPAS_AQUI = new Set(["observacao", "transporte"]);

export function TelaObservacao({
  dia,
  progresso,
  respostas,
  onResponder,
  onAbrirHotspot,
  onAvancar,
  onVoltar,
}: Props) {
  const perguntas = (dia.perguntas ?? []).filter((p) => ETAPAS_AQUI.has(p.etapa ?? "observacao"));
  const chave = (p: { id: string; etapa?: string }) => `${p.etapa ?? "observacao"}:${p.id}`;
  const faltando = perguntas.filter((p) => !respostaValida(respostas[chave(p)]));

  return (
    <TelaJornada
      chave={`observacao-${dia.dia}`}
      etiqueta={`Tela 4 · Dia ${dia.dia} · Ponto de observação`}
      titulo={dia.observacao?.titulo ?? dia.titulo}
      midia={
        dia.observacao ? (
          <ImagemHotspots
            observacao={dia.observacao}
            vistos={progresso.hotspots}
            onAbrir={onAbrirHotspot}
          />
        ) : undefined
      }
      abaixoDaMidia={
        dia.observacao?.galeria && dia.observacao.galeria.length > 0 ? (
          <GaleriaObservacao fotos={dia.observacao.galeria} local={dia.observacao.titulo} />
        ) : undefined
      }

      imagem={dia.imagem_url}
      alt={dia.titulo}
      acao={{
        rotulo: "Continuar passeio ➔",
        onClick: onAvancar,
        desabilitado: faltando.length > 0,
        dica:
          faltando.length > 0
            ? `Escreva suas conclusões no caderno: faltam ${faltando.length} resposta(s).`
            : undefined,
      }}
      aoVoltar={onVoltar}
    >
      <p className="text-sm leading-relaxed text-muted-foreground">{dia.descricao}</p>

      <BotaoSom som={dia.observacao?.som} rotulo="Ouça este lugar" />

      <NotaComparativaBrasil nota={dia.notas_brasil?.observacao} />


      <div className="rounded-xl border-2 border-dashed border-border bg-background p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">Caderno do explorador</p>
        <div className="mt-3 space-y-4">
          {perguntas.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Aqui é só observar com calma antes de seguir viagem.
            </p>
          ) : (
            perguntas.map((p) => (
              <PerguntaSocraticaCampo
                key={chave(p)}
                pergunta={p}
                valor={respostas[chave(p)] ?? ""}
                onChange={(v) => onResponder(chave(p), v)}
              />
            ))
          )}
        </div>
      </div>
    </TelaJornada>
  );
}
