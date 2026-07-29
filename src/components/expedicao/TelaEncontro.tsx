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

const ETAPAS_AQUI = new Set(["fauna", "sabor"]);

export function TelaEncontro({
  pais,
  dia,
  respostas,
  onResponder,
  onAvancar,
  onVoltar,
}: Props) {
  const animal = pais.fauna_flora.find((f) => f.id === dia.fauna_do_dia?.id);
  const prato = pais.gastronomia.find((g) => g.id === dia.sabor_do_dia?.id);

  const perguntas = (dia.perguntas ?? []).filter((p) =>
    ETAPAS_AQUI.has(p.etapa ?? ""),
  );
  const chave = (p: { id: string; etapa?: string }) =>
    `${p.etapa ?? "observacao"}:${p.id}`;
  const faltando = perguntas.filter((p) => !respostaValida(respostas[chave(p)]));

  const midia = (
    <div className="grid gap-px bg-border sm:grid-cols-2">
      <figure className="bg-card">
        <img
          src={animal?.foto_url ?? dia.imagem_url}
          alt={animal?.nome ?? "Encontro na natureza"}
          className="h-56 w-full object-cover sm:h-72 lg:h-80"
        />
        <figcaption className="p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Fauna avistada
          </p>
          <p className="font-display text-lg text-foreground">
            {animal?.nome ?? "Vida selvagem do caminho"}
          </p>
          {animal?.nome_cientifico && (
            <p className="text-xs italic text-muted-foreground">
              {animal.nome_cientifico}
            </p>
          )}
          {animal?.som_url && (
            <audio controls src={animal.som_url} className="mt-2 w-full">
              <track kind="captions" />
            </audio>
          )}
        </figcaption>
      </figure>
      <figure className="bg-card">
        <img
          src={prato?.foto_url ?? dia.imagem_url}
          alt={prato?.nome ?? "Refeição do dia"}
          className="h-56 w-full object-cover sm:h-72 lg:h-80"
        />
        <figcaption className="p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Sabor do dia
          </p>
          <p className="font-display text-lg text-foreground">
            {prato?.nome ?? "Comida típica"}
          </p>
          {prato?.adjetivo && (
            <span className="mt-1 inline-block rounded-full bg-brass px-3 py-1 text-[11px] uppercase tracking-widest text-card">
              {prato.adjetivo}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );

  return (
    <TelaJornada
      chave={`encontro-${dia.dia}`}
      etiqueta={`Tela 5 · Dia ${dia.dia} · Natureza e refeição`}
      titulo="O encontro na natureza e a parada para comer"
      midia={midia}
      acao={{
        rotulo: `Carimbar passaporte do Dia ${dia.dia} ➔`,
        onClick: onAvancar,
        desabilitado: faltando.length > 0,
        dica:
          faltando.length > 0
            ? `Registre suas observações: faltam ${faltando.length} resposta(s).`
            : undefined,
      }}
      aoVoltar={onVoltar}
    >
      {animal && (
        <p className="text-sm leading-relaxed text-foreground">
          {dia.fauna_do_dia?.contexto} {animal.curiosidade}
        </p>
      )}
      {prato && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {dia.sabor_do_dia?.contexto} {prato.historia}
        </p>
      )}

      <div className="space-y-4 rounded-xl border-2 border-dashed border-border bg-background p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
          Caderno do explorador
        </p>
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
