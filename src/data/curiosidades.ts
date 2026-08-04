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
  portugal: [
    "Portugal é o maior produtor de cortiça do mundo — aquela casca de árvore usada para fazer rolhas, quadros de aviso e até sapatos!",
    "A Livraria Bertrand, em Lisboa, é a livraria mais antiga do mundo ainda em funcionamento. Ela abriu suas portas em 1732.",
    "Os azulejos azuis e brancos que você vê nas paredes não são só enfeite: eles ajudam a controlar a temperatura dentro das casas.",
    "A Ponte Vasco da Gama, em Lisboa, é uma das mais longas da Europa, com mais de 12 quilômetros de comprimento.",
    "Portugal e o Brasil compartilham a mesma língua e muita história, por isso chamamos Portugal de 'país irmão'.",
  ],
  italia: [
    "A Itália é o país com o maior número de Patrimônios da Humanidade da UNESCO no mundo. São tantos monumentos que é impossível ver tudo em uma só viagem!",
    "A pizza moderna nasceu em Nápoles, mas os antigos romanos já comiam pães achatados com ervas parecidos com a focaccia.",
    "Existem mais de 300 tipos diferentes de massas na Itália, cada uma com um nome e um molho específico que combina melhor.",
    "Veneza não tem ruas para carros, apenas 150 canais e mais de 400 pontes de pedra ligando as pequenas ilhas.",
    "A Vespa foi criada após a Segunda Guerra Mundial para ser um transporte barato e fácil, e hoje é um ícone de estilo mundial.",
  ],
  escocia: [
    "O unicórnio é o animal nacional da Escócia! Na mitologia, ele era o único animal capaz de derrotar um leão.",
    "A Escócia tem cerca de 800 ilhas, mas apenas umas 100 são habitadas por pessoas.",
    "O som da gaita de fole podia ser ouvido a quilômetros de distância nas montanhas, servindo para avisar os clãs sobre perigos.",
    "Dizem que o Loch Ness tem mais água do que todos os lagos da Inglaterra e do País de Gales juntos.",
    "O golfe foi inventado na Escócia no século 15. No início, era jogado com bolas de madeira!",
  ],
};

export function getCuriosidades(paisId: string): string[] {
  return curiosidades[paisId] ?? [];
}
