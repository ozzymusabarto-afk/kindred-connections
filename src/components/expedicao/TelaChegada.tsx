import { BotaoSom } from "./BotaoSom";
import { TelaJornada } from "./TelaJornada";
import { GaleriaObservacao } from "./GaleriaObservacao";
import { useExplorador, vocativo } from "@/hooks/useExplorador";
import type { Pais } from "@/data/types";

interface Props {
  pais: Pais;
  onAvancar: () => void;
}

export function TelaChegada({ pais, onAvancar }: Props) {
  const chegada = pais.chegada;
  const { nome } = useExplorador();
  const tratamento = vocativo(nome);

  return (
    <TelaJornada
      chave="chegada"
      etiqueta="Tela 1 · A chegada"
      titulo={`Apertando os cintos! Estamos pousando no ${pais.nome}…`}
      imagem={chegada?.imagem_url ?? pais.imagem_capa}
      alt={`Vista da janela do avião chegando ao ${pais.nome}`}
      abaixoDaMidia={
        chegada?.galeria?.length ? (
          <GaleriaObservacao
            fotos={chegada.galeria}
            local={pais.nome}
            titulo="Outras vistas da nossa chegada"
          />
        ) : undefined
      }
      acao={{ rotulo: "Desembarcar no aeroporto ➔", onClick: onAvancar }}
    >
      

      {chegada?.fala_piloto_original && (
        <div className="space-y-2 rounded-xl border-2 border-dashed border-brass/60 bg-background p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
            📢 Alto-falante da cabine de comando
          </p>
          <p className="text-sm italic leading-relaxed text-muted-foreground">
            “{chegada.fala_piloto_original}”
          </p>
          {chegada.fala_piloto_traducao && (
            <p className="text-sm leading-relaxed text-foreground">
              “{chegada.fala_piloto_traducao}”
            </p>
          )}
          <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground">
            {chegada.idioma && <li>🗣️ Idioma: {chegada.idioma}</li>}
            {chegada.fuso_horario && <li>🕒 {chegada.fuso_horario}</li>}
            {chegada.temperatura && <li>🌡️ {chegada.temperatura}</li>}
          </ul>
        </div>
      )}

      {nome && (
        <p className="text-sm leading-relaxed text-brass">
          “Passageiro {nome}, prepare o seu caderno de bordo: a aterrissagem
          começou.”
        </p>
      )}

      <p className="text-base leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 text-2xl">
          ✈️
        </span>
        {chegada?.texto ??
          `Olhe pela janela, ${tratamento}: a paisagem lá embaixo já conta as primeiras pistas sobre este país.`}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">{pais.resumo_geografico}</p>
      <p className="text-sm text-muted-foreground">
        <span aria-hidden className="mr-2 text-xl align-middle">
          {pais.bandeira_url ? (
            <img 
              src={pais.bandeira_url} 
              alt="" 
              className="inline-block h-6 w-auto object-contain rounded-sm shadow-sm align-text-bottom mr-1"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const span = document.createElement('span');
                span.textContent = pais.bandeira + ' ';
                target.parentElement?.prepend(span);
              }}
            />
          ) : (
            pais.bandeira
          )}
        </span>
        Sua expedição tem {pais.roteiro_viagem.length} dias de viagem.
      </p>
    </TelaJornada>
  );
}
