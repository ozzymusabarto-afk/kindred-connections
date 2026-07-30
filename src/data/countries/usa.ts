import type { Pais } from "../types";

/**
 * Roteiro completo dos Estados Unidos — 3 dias de expedição.
 * Dia 1: Nova York (metrópole e natureza urbana)
 * Dia 2: Arizona (o tempo esculpindo a rocha)
 * Dia 3: Califórnia (Pacífico, tecnologia e estrelas)
 *
 * Mantém a narrativa completa: fala do comandante (inglês + tradução, com
 * clima, fuso e idioma), falas da guia Sarah, transportes, pontos de
 * observação com lupas, Caderno do Explorador e gastronomia.
 */
export const estadosUnidos: Pais = {
  id: "estados-unidos",
  nome: "Estados Unidos",
  continente: "america-do-norte",
  codigo_mapa: "us",
  bandeira: "🇺🇸",
  coordenadas: { x: 675, y: 370 },
  imagem_capa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Grand_Canyon_View_with_Colorado_River.jpg/1920px-Grand_Canyon_View_with_Colorado_River.jpg",
  resumo_geografico:
    "Um país continental de 50 estados e paisagens completamente diferentes: metrópoles verticais no leste, desertos alaranjados no Arizona, montanhas nevadas no Alasca, vulcões no Havaí e a costa fria do Pacífico no oeste. Aqui as quatro estações são muito marcadas — o inverno traz neve de verdade, o outono pinta as árvores de vermelho e dourado e a primavera floresce com força. Essa variedade explica por que o modo de vida muda tanto de um estado para outro.",

  chegada: {
    imagem_url: "/imagens/janela-eua.jpg",
    idioma: "Inglês",
    fuso_horario: "15h00 no horário local — 1 hora a menos que Brasília",
    temperatura: "12 °C, brisa fresca de outono",
    fala_piloto_original:
      "Good afternoon, ladies and gentlemen! This is your captain speaking. We have begun our final descent into John F. Kennedy International Airport in New York. The current temperature is 12 degrees Celsius with a cool, crisp autumn breeze. Local time is 3:00 PM, which is one hour behind Brasilia time. Welcome to the United States!",
    fala_piloto_traducao:
      "Boa tarde, senhoras e senhores passageiros! Aqui quem fala é o capitão. Iniciamos nossa descida final para o Aeroporto Internacional JFK, em Nova York. A temperatura atual é de 12 °C, com uma brisa fresca de outono. O fuso horário local marca 15h00 — exatamente 1 hora a menos em relação ao horário de Brasília. Sejam muito bem-vindos aos Estados Unidos!",
    texto:
      "Aperte bem o cinto, explorador! Olhe só pela nossa janela circular… Lá embaixo, cercada pelas águas do Rio Hudson e do Oceano Atlântico, está a ilha de Manhattan. Você consegue ver como os prédios parecem torres gigantes de vidro e aço espetadas no chão? Diferente do clima tropical do Brasil, aqui o ar está geladinho e seco. O idioma oficial é o inglês — você acabou de ouvir o piloto falar! Vamos desembarcar, pegar as malas e começar nossa investigação por essa metrópole que nunca dorme.",
  },

  base: {
    nome: "Hotel boutique no coração de Nova York",
    imagem_url: "/imagens/base-eua.jpg",
    descricao:
      "“Welcome to New York! Eu me chamo Sarah e vou acompanhar cada passo da sua jornada pelos Estados Unidos. Os EUA são um país continental imenso: 50 estados, desertos alaranjados no Arizona, vulcões no Havaí, montanhas nevadas no Alasca e florestas densas. Hoje nossa base é este hotel no coração de uma das maiores cidades do mundo. Dê uma olhada no termômetro do saguão: lá fora faz 12 °C. No Brasil, com essa temperatura, a gente já busca o casaco pesado, não é? Aqui as pessoas já estão acostumadas e caminham rápido pelas calçadas. Coloque seu agasalho: nosso primeiro transporte já está na porta!”",
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo:
        "Dia 1: Os arranha-céus, o ritmo da metrópole e a natureza urbana",
      descricao:
        "Nova York vista de dentro: as avenidas em grelha, o táxi amarelo e um parque gigante criado de propósito no meio do concreto.",
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/New_York_Yellow_cab_Ford_Crown_Victoria_1020716.jpg/1920px-New_York_Yellow_cab_Ford_Crown_Victoria_1020716.jpg",
      guia_nome: "Sarah",
      guia_local: "Sarah, guia de expedição em Nova York",
      clima_do_dia: "12 °C, outono seco e ensolarado",
      transporte: {
        nome: "Yellow Cab (o táxi amarelo nova-iorquino)",
        icone: "🚕",
        descricao:
          "Sabe aquele carro que a gente vê em tantos filmes? Aí está ele! Existem mais de 13 mil táxis amarelos rodando por essas ruas todos os dias. Numa cidade onde estacionar é caro e difícil, o transporte público e os táxis são a verdadeira artéria que faz a população se mover. Entre e acomode-se: vamos cruzar avenidas retas e organizadas em formato de grelha até a nossa primeira parada de observação.",
        imagem_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/New_York_Yellow_cab_Ford_Crown_Victoria_1020716.jpg/1920px-New_York_Yellow_cab_Ford_Crown_Victoria_1020716.jpg",
      },
      observacao: {
        titulo: "O Central Park",
        imagem_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Lake_in_Central_Park_in_autumn_10.jpg/1920px-The_Lake_in_Central_Park_in_autumn_10.jpg",
        hotspots: [
          {
            id: "folhas",
            x: 26,
            y: 34,
            titulo: "Folhas alaranjadas",
            texto:
              "Carvalhos e plátanos perdem as folhas no outono para economizar energia e água durante o inverno rigoroso que vem pela frente.",
          },
          {
            id: "lago",
            x: 48,
            y: 74,
            titulo: "O lago do parque",
            texto:
              "A água espelha a cidade inteira e ajuda a refrescar o ar quente do verão nova-iorquino.",
          },
          {
            id: "predios",
            x: 72,
            y: 22,
            titulo: "Os arranha-céus ao fundo",
            texto:
              "No século 19 a cidade crescia rápido demais. Os urbanistas reservaram este retângulo verde para que as pessoas tivessem onde respirar.",
          },
        ],
      },
      perguntas: [
        {
          id: "d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "Olhe bem a foto: de um lado árvores centenárias e um lago; do outro, paredões de concreto e vidro tocando as nuvens. Por que você acha que ter um parque deste tamanho é tão importante para a saúde das pessoas que moram numa cidade tão verticalizada?",
        },
        {
          id: "d1-comp",
          tipo: "comparacao",
          etapa: "observacao",
          texto:
            "No Brasil, a maioria das árvores da Amazônia e da Mata Atlântica fica verde o ano inteiro. Aqui, no outono, as folhas mudam de cor e caem. Qual a vantagem que a árvore tem ao “dormir” e soltar suas folhas antes que o gelo chegue?",
        },
        {
          id: "d1-fauna",
          tipo: "observacao",
          etapa: "fauna",
          texto:
            "O esquilo enterra centenas de nozes e esquece onde guardou quase metade delas. O que acontece com essas nozes esquecidas no ano seguinte?",
        },
        {
          id: "d1-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "Se você fosse prefeito de uma grande cidade brasileira cheia de prédios e trânsito, que ideia do Central Park usaria para melhorar a vida dos moradores?",
        },
      ],
      fauna_do_dia: {
        id: "esquilo-cinzento",
        contexto:
          "Fique bem quietinho… veja quem surgiu ali no pé daquele carvalho!",
        texto_guia:
          "Nas florestas brasileiras, ver um animal selvagem de perto exige muita paciência e silêncio. Mas aqui nos parques urbanos dos EUA esses pequenos acrobatas aprenderam a conviver lado a lado com os humanos. Repare como ele usa as patas da frente como pequenas “mãos” para segurar uma noz.",
      },
      sabor_do_dia: {
        id: "bagel-cream-cheese",
        contexto:
          "Nossa caminhada no ar fresco de 12 °C abriu a fome! Parada numa padaria de esquina.",
        texto_guia:
          "O bagel parece uma rosquinha, mas não é doce: é um pão denso, aerado, de casquinha crocante, coberto de gergelim ou papoula e recheado com cream cheese. Vamos dar uma mordida e sentir esse contraste de texturas?",
      },
    },

    {
      dia: 2,
      titulo: "Dia 2: A força do tempo, os cânions e a natureza do deserto",
      descricao:
        "Do concreto de Nova York ao deserto do Arizona: terra vermelha, ar seco e um abismo escavado gota a gota pela água.",
      imagem_url: "/imagens/transporte-arizona.jpg",
      guia_nome: "Sarah",
      guia_local: "Sarah, guia de expedição no Arizona",
      clima_do_dia: "Ar muito seco, sol forte e noites frias no deserto",
      abertura: {
        imagem_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/The_Road_to_Monument_Valley_%2852031457443%29.jpg/1920px-The_Road_to_Monument_Valley_%2852031457443%29.jpg",
        texto:
          "Bom dia, explorador! Hoje mudamos completamente de cenário: voamos de Nova York para o sudoeste do país, no estado do Arizona. Saímos de uma cidade fria e cheia de prédios para um dos desertos mais impressionantes do planeta. Ajuste os óculos de sol e prepare-se para ver o que a água e o vento fazem com a rocha ao longo de milhões de anos!",
      },
      transporte: {
        nome: "A caminhonete 4x4 de expedição",
        icone: "🛻",
        descricao:
          "Para rodar pelas estradas de terra e pedras do Arizona, nosso transporte tem tração nas quatro rodas e pneus altos reforçados. No solo arenoso e irregular do deserto, um carro comum ficaria atolado facilmente. A engenharia dos transportes precisa sempre se adaptar ao terreno da geografia local!",
        imagem_url: "/imagens/transporte-arizona.jpg",
      },
      observacao: {
        titulo: "O Grand Canyon",
        imagem_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Grand_Canyon_View_with_Colorado_River.jpg/1920px-Grand_Canyon_View_with_Colorado_River.jpg",
        hotspots: [
          {
            id: "camadas",
            x: 24,
            y: 40,
            titulo: "Camadas coloridas",
            texto:
              "Cada listra de cor é uma camada de sedimentos de uma época diferente da história da Terra. É um livro de geologia aberto diante dos nossos olhos.",
          },
          {
            id: "rio",
            x: 56,
            y: 72,
            titulo: "O Rio Colorado",
            texto:
              "Aquela fita de água verde lá no fundo escavou o abismo inteiro, gota a gota, ao longo de quase 6 milhões de anos.",
          },
          {
            id: "borda",
            x: 78,
            y: 30,
            titulo: "A borda do abismo",
            texto:
              "São mais de 1.600 metros de profundidade e 446 quilômetros de extensão.",
          },
        ],
      },
      perguntas: [
        {
          id: "d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "Veja como as listras de rocha são perfeitamente horizontais. Se o rio correu lá no fundo para cavar esse abismo, por que você acha que as rochas do topo são muito mais “novas” do que as rochas do fundo?",
        },
        {
          id: "d2-comp",
          tipo: "comparacao",
          etapa: "observacao",
          texto:
            "Achamos que a rocha dura é imutável — no entanto, o Rio Colorado partiu montanhas de pedra ao meio apenas fluindo sem parar. Que lição sobre consistência e tempo a natureza nos ensina aqui?",
        },
        {
          id: "d2-fauna",
          tipo: "observacao",
          etapa: "fauna",
          texto:
            "O condor quase não bate as asas: ele sobe usando colunas de ar quente. Que outras coisas você conhece que sobem sozinhas quando o ar esquenta?",
        },
        {
          id: "d2-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "Aqui no Arizona quase não chove e a umidade é baixíssima. Como você acha que as plantas e os animais deste cânion conseguem sobreviver sem fontes fáceis de água por perto?",
        },
      ],
      fauna_do_dia: {
        id: "condor-da-california",
        contexto:
          "Olhe para o céu, bem acima dos paredões: está vendo aquela sombra enorme cruzando o cânion?",
        texto_guia:
          "É uma das maiores aves do planeta: com as asas abertas mede mais de 3 metros de ponta a ponta. Repare que ele quase não bate as asas — simplesmente plana. A natureza ensinou essa ave a ser uma pilota perfeita de planador!",
      },
      sabor_do_dia: {
        id: "chili-com-carne",
        contexto:
          "Depois de explorar a imensidão do deserto, é hora de repor as energias na parada dos exploradores.",
        texto_guia:
          "Nosso prato de hoje é o Chili com Carne acompanhado de cornbread, o pão de milho dourado. É uma comida forte, bem temperada e quente, perfeita para o deserto que esfria rapidamente assim que o sol se põe.",
      },
    },

    {
      dia: 3,
      titulo: "Dia 3: O Oceano Pacífico, a tecnologia e o olhar para as estrelas",
      descricao:
        "Na costa oeste: névoa fria, colinas íngremes, bondes puxados por cabo e os laboratórios que criaram robôs para explorar Marte.",
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/San_Francisco_Cable_Car_55_dllu.jpg/1920px-San_Francisco_Cable_Car_55_dllu.jpg",
      guia_nome: "Sarah",
      guia_local: "Sarah, guia de expedição na Califórnia",
      clima_do_dia: "Névoa marinha fria pela manhã, sol dourado à tarde",
      abertura: {
        imagem_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Golden_Gate_Bridge_in_light_morning_fog.jpg/1920px-Golden_Gate_Bridge_in_light_morning_fog.jpg",
        texto:
          "Bem-vindo ao nosso terceiro dia de expedição! Cruzamos o mapa em direção ao oeste até chegar à costa do Oceano Pacífico, na Califórnia. Diferente do Atlântico que banha o Brasil, as águas daqui são alimentadas por correntes geladas vindas do norte. É por isso que São Francisco é famosa pelas névoas marinhas densas e pelas colinas inclinadas!",
      },
      transporte: {
        nome: "O Cable Car de São Francisco",
        icone: "🚃",
        descricao:
          "Como a cidade é cheia de morros íngremes, os carros de tração animal não conseguiam subir sem escorregar. Foi assim que, em 1873, inventaram o cable car. Ele não tem motor: sob os trilhos passa um cabo de aço gigante que se move sem parar debaixo da terra, e o condutor usa uma alavanca de ferro para “agarrar” esse cabo e ser puxado morro acima. Suba e segure-se firme no balaústre!",
        imagem_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/San_Francisco_Cable_Car_55_dllu.jpg/1920px-San_Francisco_Cable_Car_55_dllu.jpg",
      },
      observacao: {
        titulo: "O Vale do Silício e a exploração espacial",
        imagem_url: "/imagens/observacao-california.jpg",
        hotspots: [
          {
            id: "rover",
            x: 62,
            y: 62,
            titulo: "Um robô rover",
            texto:
              "Rovers como este são construídos aqui para andar sobre o solo de Marte, a milhões de quilômetros de distância.",
          },
          {
            id: "foguete",
            x: 12,
            y: 30,
            titulo: "Modelos de foguetes",
            texto:
              "Cada estágio do foguete se solta durante a subida para deixar a nave mais leve e chegar ao espaço.",
          },
          {
            id: "telas",
            x: 40,
            y: 44,
            titulo: "Telas de pesquisa",
            texto:
              "Nesta região nasceram os microchips e a internet moderna: matemática, física e programação viram invenções.",
          },
        ],
      },
      perguntas: [
        {
          id: "d3-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "Os bondes de cabo foram inventados porque os morros eram íngremes demais para os cavalos. Hoje, robôs são criados para andar em Marte. O que esses dois inventos têm em comum sobre como o ser humano lida com os obstáculos da natureza?",
        },
        {
          id: "d3-comp",
          tipo: "comparacao",
          etapa: "observacao",
          texto:
            "O Atlântico no Brasil tem águas mornas em boa parte do litoral; o Pacífico na Califórnia é muito gelado. De que maneira a temperatura da água do mar afeta o clima das cidades de praia?",
        },
        {
          id: "d3-fauna",
          tipo: "observacao",
          etapa: "fauna",
          texto:
            "A nutria-marinha usa uma pedra como ferramenta para quebrar conchas. Que outro animal você conhece que usa alguma coisa como ferramenta?",
        },
        {
          id: "d3-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "Se você pudesse criar hoje uma invenção no Vale do Silício para resolver um problema grande do mundo (como a poluição ou a falta de água limpa), o que a sua máquina faria?",
        },
      ],
      fauna_do_dia: {
        id: "nutria-marinha",
        contexto:
          "Voltamos à beira das águas geladas do Pacífico. Olhe no meio daquela floresta de algas (kelp): viu quem está flutuando de costas?",
        texto_guia:
          "Como ela não tem uma camada espessa de gordura para se proteger da água gelada, a natureza deu a ela a pelagem mais densa de todo o reino animal — mais de 100 mil fios de pelo por centímetro quadrado!",
      },
      sabor_do_dia: {
        id: "torta-de-maca",
        contexto:
          "Para fechar a expedição com chave de ouro, fomos até uma confeitaria de fazenda.",
        texto_guia:
          "Parabéns pela sua dedicação! Você investigou a metrópole, o deserto, os cânions e a tecnologia do Pacífico. Seu passaporte oficial acaba de receber o carimbo de ouro dos Estados Unidos!",
      },
    },
  ],

  fauna_flora: [
    {
      id: "esquilo-cinzento",
      nome: "Esquilo-Cinzento-Americano",
      nome_cientifico: "Sciurus carolinensis",
      foto_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sciurus_carolinensis_eating_nuts.jpg/1920px-Sciurus_carolinensis_eating_nuts.jpg",
      som_url: null,
      curiosidade:
        "No outono ele trabalha sem parar: enterra centenas de sementes e nozes pelo chão do parque para ter o que comer quando a neve cobrir tudo. E esquece onde guardou quase metade delas! Essas nozes esquecidas germinam e viram novas árvores — eles são os grandes reflorestadores naturais da América do Norte.",
      habitat: "Parques, praças e árvores de rua das grandes cidades.",
    },
    {
      id: "condor-da-california",
      nome: "Condor-da-Califórnia",
      nome_cientifico: "Gymnogyps californianus",
      foto_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Grand_Canyon_National_Park_California_Condor_87_3462_%285735691958%29.jpg/1920px-Grand_Canyon_National_Park_California_Condor_87_3462_%285735691958%29.jpg",
      som_url: null,
      curiosidade:
        "Com mais de 3 metros de envergadura, usa as correntes térmicas — colunas de ar quente que sobem do chão aquecido do deserto — para ganhar centenas de metros de altura sem gastar quase nenhuma energia.",
      habitat: "Paredões rochosos e cânions do sudoeste americano.",
    },
    {
      id: "nutria-marinha",
      nome: "Nutria-Marinha",
      nome_cientifico: "Enhydra lutris",
      foto_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wild_Sea_Otter_%2817348235490%29.jpg/1920px-Wild_Sea_Otter_%2817348235490%29.jpg",
      som_url: null,
      curiosidade:
        "Pega uma pedra plana, coloca sobre a barriga enquanto flutua de costas e usa a pedra como bigorna para quebrar conchas de ouriços e mariscos. É um dos raríssimos animais que usam ferramentas de verdade.",
      habitat: "Florestas de algas (kelp) na costa fria do Pacífico.",
    },
  ],

  gastronomia: [
    {
      id: "bagel-cream-cheese",
      nome: "Bagel com cream cheese",
      foto_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Toasted_sesame_bagel_with_cream_cheese_-_Massachusetts.jpg/1920px-Toasted_sesame_bagel_with_cream_cheese_-_Massachusetts.jpg",
      adjetivo: "clássico",
      historia:
        "Foi trazido para os Estados Unidos por imigrantes judeus vindos da Europa Oriental no século 19. Eles trouxeram as receitas de família na bagagem, e o bagel virou o símbolo do café da manhã rápido de quem vive na correria da cidade. É fervido antes de assar, o que deixa a casca brilhante e o miolo macio.",
    },
    {
      id: "chili-com-carne",
      nome: "Chili com Carne e pão de milho",
      foto_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chili_con_carne_%287556966148%29.jpg/1920px-Chili_con_carne_%287556966148%29.jpg",
      adjetivo: "reconfortante",
      historia:
        "Ensopado de carne moída, feijões vermelhos, tomates e pimentas suaves, cozido lentamente em panelas de ferro e servido com cornbread. Nasceu da fusão entre a culinária dos povos nativos, os colonizadores espanhóis e os pioneiros que cruzavam o deserto.",
    },
    {
      id: "torta-de-maca",
      nome: "Torta de Maçã (Apple Pie)",
      foto_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mmm..._apple_pie_ala_mode.jpg/1920px-Mmm..._apple_pie_ala_mode.jpg",
      adjetivo: "tradicional",
      historia:
        "Massa crocante e dourada recheada com maçãs frescas, canela e noz-moscada, servida quentinha com uma bola de sorvete de baunilha. A maçã é uma das frutas mais cultivadas nas regiões frias e temperadas do norte dos EUA, e assar a torta é um jeito de celebrar a colheita.",
    },
  ],

  comparativo: {
    clima_predominante:
      "Muito variado: temperado no leste, desértico no sudoeste e frio-úmido na costa do Pacífico",
    bioma_principal:
      "Florestas temperadas, desertos e a costa fria do Pacífico",
    elemento_marcante:
      "A escala — cidades verticais, cânions gigantes e centros de tecnologia",
    agricultura_construcoes:
      "Grandes lavouras mecanizadas nas planícies, pomares de maçã no norte e cidades verticais de aço e vidro. Nas regiões áridas, tudo depende da irrigação e de veículos preparados para o terreno.",
    roupas_modo_de_vida:
      "As quatro estações são bem marcadas: casacos e cachecóis no outono e inverno do nordeste, roupas leves e chapéu no deserto e agasalho contra a névoa fria em São Francisco.",
    fauna_alimentacao:
      "Esquilos nos parques urbanos, condores planando nos cânions e nutrias-marinhas no Pacífico. A comida vai do lanche rápido de rua ao ensopado forte do deserto e à torta doce da colheita.",
  },
};

export default estadosUnidos;
