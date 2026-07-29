import { useEffect, useMemo, useState } from "react";
import { ImagemHotspots } from "./ImagemHotspots";
import { PerguntaSocraticaCampo } from "./PerguntaSocratica";
import { CarimboEtapa } from "./CarimboEtapa";
import { respostaValida } from "@/hooks/useExpedicao";
import type { EstacaoId, ProgressoDia } from "@/hooks/useExpedicao";
import { tocar } from "@/lib/sfx";
import type { DiaRoteiro, Pais } from "@/data/types";

interface Props {
  pais: Pais;
  dia: DiaRoteiro;
  estacao: EstacaoId;
  progresso: ProgressoDia;
  todasEstacoesVisitadas: boolean;
  onAbrirHotspot: (id: string) => void;
  onRegistrar: (respostas: Record<string, string>) => void;
}

export function CadernoDeCampo({
  pais,
  dia,
  estacao,
  progresso,
  todasEstacoesVisitadas,
  onAbrirHotspot,
  onRegistrar,
}: Props) {
  const perguntas = useMemo(() => dia.perguntas ?? [], [dia.perguntas]);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  useEffect(() => {
    setRespostas(progresso.respostas ?? {});
    // Recarrega ao trocar de dia.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dia.dia]);

  const animal = pais.fauna_flora.find((f) => f.id === dia.fauna_do_dia?.id);
  const prato = pais.gastronomia.find((g) => g.id === dia.sabor_do_dia?.id);

  const todasRespondidas =
    perguntas.length > 0 &&
    perguntas.every((p) => respostaValida(respostas[p.id]));
  const concluido = Boolean(progresso.concluidoEm);

  return (
    <section className="rounded-md border border-border bg-card p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
        Caderno de campo do explorador
      </p>
      <h2 className="mt-1 font-display text-xl text-foreground">
        {dia.titulo.replace(/^Dia\s*\d+:\s*/i, "")}
      </h2>

      <div key={estacao} className="fade-up mt-5 space-y-4">
        {estacao === "transporte" && dia.transporte && (
          <div className="rounded-md border border-border bg-background p-4">
            <p className="text-3xl" aria-hidden>
              {dia.transporte.icone}
            </p>
            <p className="mt-2 font-display text-lg text-foreground">
              {dia.transporte.nome}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {dia.transporte.descricao}
            </p>
          </div>
        )}

        {estacao === "observacao" && dia.observacao && (
          <ImagemHotspots
            observacao={dia.observacao}
            vistos={progresso.hotspots}
            onAbrir={onAbrirHotspot}
          />
        )}

        {estacao === "observacao" && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {dia.descricao}
          </p>
        )}

        {estacao === "fauna" && animal && (
          <article className="overflow-hidden rounded-md border border-border bg-background">
            <img
              src={animal.foto_url}
              alt={animal.nome}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <p className="font-display text-lg text-foreground">
                {animal.nome}
              </p>
              {animal.nome_cientifico && (
                <p className="text-xs italic text-muted-foreground">
                  {animal.nome_cientifico}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {dia.fauna_do_dia?.contexto}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                {animal.curiosidade}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Habitat: {animal.habitat}
              </p>
              {animal.som_url && (
                <audio controls src={animal.som_url} className="mt-4 w-full">
                  <track kind="captions" />
                </audio>
              )}
            </div>
          </article>
        )}

        {estacao === "sabor" && prato && (
          <article className="overflow-hidden rounded-md border border-border bg-background">
            <img
              src={prato.foto_url}
              alt={prato.nome}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                <p className="min-w-0 truncate font-display text-lg text-foreground">
                  {prato.nome}
                </p>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {prato.adjetivo}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {dia.sabor_do_dia?.contexto}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {prato.historia}
              </p>
            </div>
          </article>
        )}
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Investigação do dia
        </p>
        <div className="mt-4 space-y-4">
          {perguntas.map((p) => (
            <PerguntaSocraticaCampo
              key={p.id}
              pergunta={p}
              valor={respostas[p.id] ?? ""}
              onChange={(v) => setRespostas((r) => ({ ...r, [p.id]: v }))}
            />
          ))}
        </div>

        {concluido ? (
          <div className="mt-5">
            <CarimboEtapa
              bandeira={pais.bandeira}
              dia={dia.dia}
              nomePais={pais.nome}
            />
          </div>
        ) : (
          <div className="mt-5 space-y-2">
            <button
              type="button"
              disabled={!todasRespondidas || !todasEstacoesVisitadas}
              onClick={() => {
                tocar("carimbo");
                onRegistrar(respostas);
              }}
              className="w-full rounded-full bg-primary px-5 py-2.5 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Registrar no Diário e carimbar a etapa
            </button>
            {!todasEstacoesVisitadas && (
              <p className="text-xs text-muted-foreground">
                Visite os 4 pontos da rota do dia para liberar o carimbo.
              </p>
            )}
            {todasEstacoesVisitadas && !todasRespondidas && (
              <p className="text-xs text-muted-foreground">
                Responda todas as perguntas de investigação para concluir o dia.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
