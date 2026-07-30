import { GaleriaObservacao } from "./GaleriaObservacao";
import { PerguntaSocraticaCampo } from "./PerguntaSocratica";
import { TelaJornada } from "./TelaJornada";
import { respostaValida } from "@/hooks/useExpedicao";
import type { DiaRoteiro, Pais } from "@/data/types";


interface Props {
  pais: Pais;
  dia: DiaRoteiro;
  respostas: Record<string, string>;
  onResponder: (chave: string, valor: string) => void;
  onAvancar: () => void;
  onVoltar?: () => void;
}

export function TelaFauna({ pais, dia, respostas, onResponder, onAvancar, onVoltar }: Props) {
  const animal = pais.fauna_flora.find((f) => f.id === dia.fauna_do_dia?.id);
  const perguntas = (dia.perguntas ?? []).filter((p) => p.etapa === "fauna");
  const chave = (p: { id: string }) => `fauna:${p.id}`;
  const faltando = perguntas.filter((p) => !respostaValida(respostas[chave(p)]));

  return (
    <TelaJornada
      chave={`fauna-${dia.dia}`}
      etiqueta={`Tela 5 · Dia ${dia.dia} · O encontro na natureza`}
      titulo={animal?.nome ?? "Um encontro na natureza"}
      imagem={animal?.foto_url ?? dia.imagem_url}
      alt={animal?.nome ?? "Animal avistado no caminho"}
      abaixoDaMidia={
        animal?.galeria && animal.galeria.length > 0 ? (
          <GaleriaObservacao
            fotos={animal.galeria}
            local={animal.nome}
            titulo="Mais sobre este animal"
          />
        ) : undefined
      }
      acao={{
        rotulo: "Seguir para a parada da refeição ➔",
        onClick: onAvancar,
        desabilitado: faltando.length > 0,
        dica:
          faltando.length > 0
            ? `Registre sua observação para continuar: falta ${faltando.length} resposta(s).`
            : undefined,
      }}
      aoVoltar={onVoltar}
    >
      <p className="text-base leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 text-2xl">
          🐾
        </span>
        {dia.fauna_do_dia?.contexto ?? "Olhe quem apareceu no caminho!"}
      </p>
      {dia.fauna_do_dia?.texto_guia && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {dia.fauna_do_dia.texto_guia}
        </p>
      )}
      {animal && (
        <>
          {animal.nome_cientifico && (
            <p className="text-xs italic text-muted-foreground">{animal.nome_cientifico}</p>
          )}
          <p className="text-sm leading-relaxed text-muted-foreground">{animal.curiosidade}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="font-normal text-foreground">Habitat: </strong>
            {animal.habitat}
          </p>
          {animal.som_url && (
            <audio controls src={animal.som_url} className="w-full">
              <track kind="captions" />
            </audio>
          )}
        </>
      )}

        </>
      )}


      <div className="space-y-4 rounded-xl border-2 border-dashed border-brass/60 bg-background p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">Caderno do explorador</p>
        {perguntas.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Observe com calma e siga para a próxima parada.
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
    </TelaJornada>
  );
}
