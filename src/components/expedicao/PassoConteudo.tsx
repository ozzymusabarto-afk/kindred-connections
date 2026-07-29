import { ImagemHotspots } from "./ImagemHotspots";
import type { EstacaoId } from "@/hooks/useExpedicao";
import type { ProgressoDia } from "@/hooks/useExpedicao";
import type { DiaRoteiro, Pais } from "@/data/types";

interface Props {
  pais: Pais;
  dia: DiaRoteiro;
  estacao: EstacaoId;
  indice: number;
  total: number;
  progresso: ProgressoDia;
  onAbrirHotspot: (id: string) => void;
  onProximo?: () => void;
}

const TITULOS: Record<EstacaoId, string> = {
  transporte: "A chegada e o transporte",
  observacao: "O ponto de observação",
  fauna: "O encontro na natureza",
  sabor: "A parada para a refeição",
};

export function PassoConteudo({
  pais,
  dia,
  estacao,
  indice,
  total,
  progresso,
  onAbrirHotspot,
  onProximo,
}: Props) {
  const animal = pais.fauna_flora.find((f) => f.id === dia.fauna_do_dia?.id);
  const prato = pais.gastronomia.find((g) => g.id === dia.sabor_do_dia?.id);

  return (
    <section className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-sm">
      <div className="border-b border-border bg-accent/50 px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-accent-foreground">
          Passo {indice + 1} de {total} · Dia {dia.dia}
        </p>
        <h2 className="mt-1 font-display text-xl text-foreground">
          {TITULOS[estacao]}
        </h2>
      </div>

      <div key={estacao} className="fade-up space-y-4 p-5">
        {estacao === "transporte" && dia.transporte && (
          <>
            <p className="text-base leading-relaxed text-foreground">
              <span aria-hidden className="mr-2 text-2xl">
                {dia.transporte.icone}
              </span>
              Chegamos e hoje o nosso transporte é: {dia.transporte.nome}!
            </p>
            <img
              src={dia.imagem_url}
              alt={dia.transporte.nome}
              className="h-56 w-full rounded-lg object-cover sm:h-72"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dia.transporte.descricao}
            </p>
          </>
        )}

        {estacao === "observacao" && dia.observacao && (
          <>
            <p className="text-base leading-relaxed text-foreground">
              Paramos para observar: {dia.observacao.titulo}. Toque nas lupas
              para investigar cada detalhe.
            </p>
            <ImagemHotspots
              observacao={dia.observacao}
              vistos={progresso.hotspots}
              onAbrir={onAbrirHotspot}
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dia.descricao}
            </p>
          </>
        )}

        {estacao === "fauna" && animal && (
          <>
            <p className="text-base leading-relaxed text-foreground">
              No caminho, olhe quem apareceu: {animal.nome}!
            </p>
            <img
              src={animal.foto_url}
              alt={animal.nome}
              className="h-56 w-full rounded-lg object-cover sm:h-72"
            />
            {animal.nome_cientifico && (
              <p className="text-xs italic text-muted-foreground">
                {animal.nome_cientifico}
              </p>
            )}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dia.fauna_do_dia?.contexto}
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              {animal.curiosidade}
            </p>
            <p className="text-xs text-muted-foreground">
              Habitat: {animal.habitat}
            </p>
            {animal.som_url && (
              <audio controls src={animal.som_url} className="w-full">
                <track kind="captions" />
              </audio>
            )}
          </>
        )}

        {estacao === "sabor" && prato && (
          <>
            <p className="text-base leading-relaxed text-foreground">
              Hora da refeição do dia: {prato.nome}!
            </p>
            <img
              src={prato.foto_url}
              alt={prato.nome}
              className="h-56 w-full rounded-lg object-cover sm:h-72"
            />
            <span className="inline-block rounded-full bg-brass px-3 py-1 text-[11px] uppercase tracking-widest text-card">
              {prato.adjetivo}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dia.sabor_do_dia?.contexto}
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              {prato.historia}
            </p>
          </>
        )}

        {onProximo && (
          <button
            type="button"
            onClick={onProximo}
            className="w-full rounded-full bg-primary px-5 py-3 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Próximo passo →
          </button>
        )}
      </div>
    </section>
  );
}
