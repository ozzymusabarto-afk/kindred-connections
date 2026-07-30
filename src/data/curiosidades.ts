/**
 * Curiosidades de abertura do álbum — o "fato que vale conhecer" de cada país,
 * escrito no mesmo tom encantador da expedição.
 */
export const curiosidades: Record<string, string[]> = {
  "estados-unidos": [
    "O país tem seis fusos horários diferentes. Quando uma criança em Nova York está jantando, outra no Havaí ainda está no meio da tarde — no mesmo país.",
    "O Grand Canyon é tão fundo que caberia dentro dele um prédio de 400 andares. O Rio Colorado levou cerca de 6 milhões de anos para escavá-lo.",
    "A Estátua da Liberdade foi um presente da França e chegou desmontada, em 214 caixotes, dentro de um navio.",
    "Alasca e Havaí não fazem fronteira com o resto do país: um é gelado e enorme, o outro é um arquipélago de vulcões no meio do Pacífico.",
    "No outono, as folhas ficam vermelhas e douradas porque a árvore para de produzir clorofila para economizar energia antes do inverno.",
    "Não existe um idioma oficial declarado por lei em nível federal — o inglês é o mais falado, mas o espanhol é a segunda língua de milhões de pessoas.",
  ],
  canada: [
    "É o segundo maior país do mundo em território, mas tem menos habitantes que o estado de São Paulo. Há mais floresta e lago do que gente.",
    "Cerca de 20% de toda a água doce do planeta está dentro do Canadá, espalhada em mais de dois milhões de lagos.",
    "O país tem dois idiomas oficiais: inglês e francês. Em Quebec, as placas e as conversas na rua são em francês.",
    "A folha de bordo da bandeira vem da árvore de onde sai a seiva que vira xarope — o mesmo que se coloca sobre as panquecas.",
    "O castor é um símbolo nacional: ele constrói represas que mudam rios inteiros de lugar.",
  ],
  mexico: [
    "A Cidade do México foi construída sobre um lago — e por isso alguns prédios antigos afundam alguns centímetros por ano.",
    "O chocolate nasceu por aqui: os povos originários tomavam cacau amargo e apimentado, muito antes de existir barra de chocolate.",
    "O México é o país com mais espécies de cactos do mundo.",
    "A águia da bandeira pousada num cacto devorando uma serpente vem de uma lenda asteca sobre onde fundar a cidade.",
  ],
};

export function getCuriosidades(paisId: string): string[] {
  return curiosidades[paisId] ?? [];
}
