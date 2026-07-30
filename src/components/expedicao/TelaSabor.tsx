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

export function TelaSabor({ pais, dia, respostas, onResponder, onAvancar, onVoltar }: Props) {
  const prato = pais.gastronomia.find((g) => g.id === dia.sabor_do_dia?.id);
  const perguntas = (dia.perguntas ?? []).filter((p) => p.etapa === "sabor");
  const chave = (p: { id: string }) => `sabor:${p.id}`;
  const faltando = perguntas.filter((p) => !respostaValida(respostas[chave(p)]));

  return (
    <TelaJornada
      chave={`sabor-${dia.dia}`}
      etiqueta={`Tela 6 · Dia ${dia.dia} · A parada para comer`}
      titulo={prato?.nome ?? "A refeição do dia"}
      imagem={prato?.foto_url ?? dia.imagem_url}
      alt={prato?.nome ?? "Comida típica do dia"}
      acao={{
        rotulo: `Carimbar passaporte do Dia ${dia.dia} ➔`,
        onClick: onAvancar,
        desabilitado: faltando.length > 0,
        dica:
          faltando.length > 0
            ? `Registre sua observação para carimbar: falta ${faltando.length} resposta(s).`
            : undefined,
      }}
      aoVoltar={onVoltar}
    >
      <p className="text-base leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 text-2xl">
          🍽️
        </span>
        {dia.sabor_do_dia?.contexto ?? "Hora de sentar e provar a comida daqui."}
      </p>
      {dia.sabor_do_dia?.texto_guia && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {dia.sabor_do_dia.texto_guia}
        </p>
      )}
      {prato?.adjetivo && (
        <span className="inline-block rounded-full bg-emerald px-3 py-1 text-[11px] uppercase tracking-widest text-card">
          {prato.adjetivo}
        </span>
      )}
      {prato && <p className="text-sm leading-relaxed text-muted-foreground">{prato.historia}</p>}
      {prato?.destaque && (
        <p className="rounded-xl border-2 border-brass/60 bg-background px-4 py-3 text-sm leading-relaxed text-foreground">
          <span aria-hidden className="mr-2">
            ⭐
          </span>
          <strong className="font-normal text-brass">O mais pedido aqui: </strong>
          {prato.destaque}
        </p>
      )}
      {prato?.galeria && prato.galeria.length > 0 && (
        <GaleriaObservacao
          fotos={prato.galeria}
          local={prato.nome}
          titulo="Onde se come e outras opções"
        />
      )}


      <div className="space-y-4 rounded-xl border-2 border-dashed border-brass/60 bg-background p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">Caderno do explorador</p>
        {perguntas.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Aproveite a parada e siga para o carimbo do dia.
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
