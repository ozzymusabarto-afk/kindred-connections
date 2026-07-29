import { TelaJornada } from "./TelaJornada";
import type { Pais } from "@/data/types";

interface Props {
  pais: Pais;
  onAvancar: () => void;
}

export function TelaChegada({ pais, onAvancar }: Props) {
  const chegada = pais.chegada;
  return (
    <TelaJornada
      chave="chegada"
      etiqueta="Tela 1 · A chegada"
      titulo={`Apertando os cintos! Estamos pousando no ${pais.nome}…`}
      imagem={chegada?.imagem_url ?? pais.imagem_capa}
      alt={`Vista da janela do avião chegando ao ${pais.nome}`}
      acao={{ rotulo: "Desembarcar no aeroporto ➔", onClick: onAvancar }}
    >
      <p className="text-base leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 text-2xl">
          ✈️
        </span>
        {chegada?.texto ??
          "Olhe pela janela: a paisagem lá embaixo já conta as primeiras pistas sobre este país."}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {pais.resumo_geografico}
      </p>
      <p className="text-sm text-muted-foreground">
        <span aria-hidden className="mr-2 text-xl">
          {pais.bandeira}
        </span>
        Sua expedição tem {pais.roteiro_viagem.length} dias de viagem.
      </p>
    </TelaJornada>
  );
}
