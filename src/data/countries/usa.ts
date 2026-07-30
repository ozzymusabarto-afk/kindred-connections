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
  bandeira_url:
    "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-us.png",
  capital: "Washington, D.C.",
  coordenadas: { x: 675, y: 370 },
  imagem_capa:
    "/__l5e/assets-v1/b3acabd4-e1ab-4379-94bf-1f4cb0e96b42/grand-canyon-view-with-colorado-river.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico:
    "Um país continental de 50 estados e paisagens completamente diferentes: metrópoles verticais no leste, desertos alaranjados no Arizona, montanhas nevadas no Alasca, vulcões no Havaí e a costa fria do Pacífico no oeste. Aqui as quatro estações são muito marcadas — o inverno traz neve de verdade, o outono pinta as árvores de vermelho e dourado e a primavera floresce com força. Essa variedade explica por que o modo de vida muda tanto de um estado para outro.",

  chegada: {
    imagem_url: "/__l5e/assets-v1/9f0d4526-6b9c-4e8e-b124-91e0901e4b3c/usa-chegada-janela.jpg",
    credito:
      "Recriação da vista da janela do avião sobre Manhattan em tarde de outono (ilustração fiel à paisagem real)",
    som: {
      url: "/__l5e/assets-v1/9afe377d-cb48-4411-9a63-1faf031180a1/usa-som-pouso.mp3",
      legenda:
        "Gravação real feita dentro de um avião durante a descida e o pouso: o ronco dos motores e o barulho do ar",
      credito: "Wilfredor — Wikimedia Commons · CC0",
    },
    idioma: "Inglês",
    fuso_horario: "15h00 no horário local — 1 hora a menos que Brasília",
    temperatura: "12 °C, brisa fresca de outono",
    fala_piloto_original:
      "Good afternoon, ladies and gentlemen! This is your captain speaking. We have begun our final descent into John F. Kennedy International Airport in New York. The current temperature is 12 degrees Celsius with a cool, crisp autumn breeze. Local time is 3:00 PM, which is one hour behind Brasilia time. Welcome to the United States!",
    fala_piloto_traducao:
      "Boa tarde, senhoras e senhores passageiros! Aqui quem fala é o capitão. Iniciamos nossa descida final para o Aeroporto Internacional JFK, em Nova York. A temperatura atual é de 12 °C, com uma brisa fresca de outono. O fuso horário local marca 15h00 — exatamente 1 hora a menos em relação ao horário de Brasília. Sejam muito bem-vindos aos Estados Unidos!",
    texto:
      "Aperte bem o cinto, explorador! Olhe só pela nossa janela… Lá embaixo, cercada pelas águas do Rio Hudson e do Oceano Atlântico, está a ilha de Manhattan. Você consegue ver como os prédios parecem torres gigantes de vidro e aço espetadas no chão? E aquele retângulo alaranjado no meio da cidade é o Central Park, com as árvores pintadas de vermelho e dourado pelo outono. Diferente do clima tropical do Brasil, aqui o ar está geladinho e seco. O idioma oficial é o inglês — você acabou de ouvir o piloto falar! Vamos desembarcar, pegar as malas e começar nossa investigação por essa metrópole que nunca dorme.",
    galeria: [
      {
        id: "us-chegada-g1",
        imagem_url:
          "/__l5e/assets-v1/c8e30a00-b270-4580-8a27-90dcc62ebfca/usa-chegada-avion-manhattan.jpg",
        legenda: "Manhattan fotografada de dentro de um voo que chega a Nova York",
        credito: "panoramio (CC BY 3.0) — Wikimedia Commons",
      },
      {
        id: "us-chegada-g2",
        imagem_url:
          "/__l5e/assets-v1/5f43d081-0c48-4e1a-ba4c-5b0daa8de515/usa-chegada-manhattan-alto.jpg",
        legenda: "A ponta da ilha vista do alto: prédios cercados por água por todos os lados",
        credito: "Wikimedia Commons (CC BY-SA 2.0)",
      },
      {
        id: "us-chegada-g3",
        imagem_url:
          "/__l5e/assets-v1/6a5a26da-224d-42cc-9199-8b1f171ff28e/usa-chegada-jfk-terminal.jpg",
        legenda: "Dentro do Terminal 4 do aeroporto JFK, onde desembarcamos",
        credito: "Wikimedia Commons (CC BY 2.0)",
      },
      {
        id: "us-chegada-g4",
        imagem_url:
          "/__l5e/assets-v1/23caacea-48d0-4e94-b9e5-fe6a556b8230/usa-chegada-jfk-twa.jpg",
        legenda: "O saguão curvo do antigo terminal TWA, um clássico do JFK",
        credito: "Wikimedia Commons (CC BY-SA 4.0)",
      },
    ],
  },

  base: {
    nome: "Hotel boutique no coração de Nova York",
    imagem_url: "/__l5e/assets-v1/abb8ecf9-d56c-4e95-aaae-9f4eb00bd801/rep-base-eua.jpg",
    credito: "Saguão do Waldorf Astoria, Nova York (Wikimedia Commons)",
    som: {
      url: "/__l5e/assets-v1/e7de99c4-bb1d-4626-b02c-e4716b4cafd6/usa-som-saguao.mp3",
      legenda:
        "Gravação real do saguão de um grande hotel: passos no piso, malas rolando e conversas baixinhas na recepção",
      credito: "radio aporee ::: maps — Internet Archive · domínio público",
    },
    descricao:
      "“Welcome to New York! Eu me chamo Sarah e vou acompanhar cada passo da sua jornada pelos Estados Unidos. Os EUA são um país continental imenso: 50 estados, desertos alaranjados no Arizona, vulcões no Havaí, montanhas nevadas no Alasca e florestas densas. Hoje nossa base é este hotel no coração de uma das maiores cidades do mundo. Dê uma olhada no termômetro do saguão: lá fora faz 12 °C. No Brasil, com essa temperatura, a gente já busca o casaco pesado, não é? Aqui as pessoas já estão acostumadas e caminham rápido pelas calçadas. Coloque seu agasalho: nosso primeiro transporte já está na porta!”",
    galeria: [
      {
        id: "us-base-g1",
        imagem_url: "/__l5e/assets-v1/daca442e-dddd-4e17-8f8c-1433c46d76ed/usa-hotel-fachada.jpg",
        legenda: "A fachada e a marquise da entrada do hotel, na Park Avenue",
        credito: "Wikimedia Commons (CC BY-SA 3.0)",
      },
      {
        id: "us-base-g2",
        imagem_url: "/__l5e/assets-v1/b1bbf58f-6366-40bf-8d48-93e7ffee3ebd/usa-hotel-predio.jpg",
        legenda: "Visto da rua, o hotel é um prédio altíssimo entre outros arranha-céus",
        credito: "Wikimedia Commons (CC BY 2.0)",
      },
      {
        id: "us-base-g3",
        imagem_url: "/__l5e/assets-v1/6bdeeeca-02e9-4997-9704-733827d4c815/usa-hotel-balcao.jpg",
        legenda: "O balcão da recepção: é aqui que fazemos o check-in e pegamos a chave",
        credito: "Wikimedia Commons (CC BY-SA 4.0)",
      },
      {
        id: "us-base-g4",
        imagem_url: "/__l5e/assets-v1/a1415771-f365-4caf-97b7-bb4724c33f49/usa-hotel-quarto.jpg",
        legenda: "O quarto onde deixamos as malas antes de sair para o primeiro passeio",
        credito: "Wikimedia Commons (CC BY-SA 4.0)",
      },
    ],
  },


  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Os arranha-céus, o ritmo da metrópole e a natureza urbana",
      descricao:
        "Nova York vista de dentro: as avenidas em grelha, o táxi amarelo e um parque gigante criado de propósito no meio do concreto.",
      imagem_url:
        "/__l5e/assets-v1/132b5e70-2b4f-493b-85b2-79c49849a11a/new-york-yellow-cab-ford-crown-victoria-1020716.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Sarah",
      guia_local: "Sarah, guia de expedição em Nova York",
      clima_do_dia: "12 °C, outono seco e ensolarado",
      transporte: {
        nome: "Yellow Cab (o táxi amarelo nova-iorquino)",
        icone: "🚕",
        descricao:
          "Sabe aquele carro que a gente vê em tantos filmes? Aí está ele! Existem mais de 13 mil táxis amarelos rodando por essas ruas todos os dias. Numa cidade onde estacionar é caro e difícil, o transporte público e os táxis são a verdadeira artéria que faz a população se mover. Entre e acomode-se: vamos cruzar avenidas retas e organizadas em formato de grelha até a nossa primeira parada de observação.",
        imagem_url:
          "/__l5e/assets-v1/132b5e70-2b4f-493b-85b2-79c49849a11a/new-york-yellow-cab-ford-crown-victoria-1020716.jpg",
        credito: "Wikimedia Commons",
        som: {
          url: "/__l5e/assets-v1/1250e12d-35e1-46e5-824e-e08141ac918a/usa-som-taxi.mp3",
          legenda:
            "Gravação real feita na 7ª Avenida, em Nova York: motores, buzinas dos táxis e o vozerio da multidão",
          credito: "radio aporee ::: maps — Internet Archive · domínio público",
        },

        galeria: [
          {
            id: "taxi-times",
            imagem_url:
              "/__l5e/assets-v1/0a1213fb-7b9d-462c-99bf-4c7bd07af507/usa-taxi-times.jpg",
            credito: "Marc Lautenbacher / CC BY-SA 4.0",
            legenda: "Táxi cruzando a Times Square",
          },
          {
            id: "taxi-fila",
            imagem_url:
              "/__l5e/assets-v1/2965242d-ac09-4cfd-9f2c-0ec5ae93b982/usa-taxi-fila.jpg",
            credito: "Matt Kieffer / CC BY-SA 2.0",
            legenda: "Vários táxis na mesma avenida",
          },
          {
            id: "taxi-neve",
            imagem_url:
              "/__l5e/assets-v1/998e2943-3675-4752-9636-58c19a0fa923/usa-taxi-neve.jpg",
            credito: "Tomás Fano / CC BY-SA 2.0",
            legenda: "O mesmo táxi no inverno com neve",
          },
        ],
      },
      observacao: {
        titulo: "O Central Park",
        som: {
          url: "/__l5e/assets-v1/b41dcd77-b706-4b5d-9334-868e7e303076/usa-som-parque.mp3",
          legenda: "Brisa leve e pássaros cantando, como no parque em dia de outono",
          credito: "Wikimedia Commons · domínio público",
        },

        imagem_url:
          "/__l5e/assets-v1/4c7d8f83-36ef-4636-b10e-c774de123856/the-lake-in-central-park-in-autumn-10.jpg",
        credito: "Wikimedia Commons",
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
        galeria: [
          {
            id: "cp-aerea",
            imagem_url:
              "/__l5e/assets-v1/afbe2ab2-731d-4b30-86a6-fa42e75c4856/rep-galeria-centralpark-aerea.jpg",
            credito: "Central Park visto de cima — Carol M. Highsmith / Library of Congress (domínio público)",
            legenda: "Vista de cima: o parque entre os prédios",
          },
          {
            id: "cp-caminho",
            imagem_url:
              "/__l5e/assets-v1/9cccc836-0ec2-4d50-b8a2-9743b4b4ba8a/walk-through-central-park-nyc.jpg",
            credito: "Wikimedia Commons",
            legenda: "Caminhos do parque no outono",
          },
          {
            id: "cp-ponte",
            imagem_url:
              "/__l5e/assets-v1/fa78983f-e760-4665-a965-a62775671ea7/bow-bridge-over-the-lake-central-park-manhattan-new-york.jpg",
            credito: "Wikimedia Commons",
            legenda: "Outro ângulo do lago, na ponte Bow",
          },
          {
            id: "cp-folhas",
            imagem_url:
              "/__l5e/assets-v1/a075e0d7-e25a-4fbd-b00a-538dfbbaffe0/central-park-during-peak-fall-foliage.jpg",
            credito: "Wikimedia Commons",
            legenda: "Folhas douradas no auge do outono",
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
        contexto: "Fique bem quietinho… veja quem surgiu ali no pé daquele carvalho!",
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
      notas_brasil: {
        transporte: {
          texto:
            "O metrô de Nova York funciona 24 horas por dia, todos os dias do ano. No Brasil, o metrô de São Paulo fecha por volta da meia-noite para manutenção dos trilhos — por isso lá as estações precisam de trilhos duplicados em muitos trechos.",
        },
        observacao: {
          texto:
            "O Central Park tem 3,4 km² no meio dos arranha-céus. O Parque Ibirapuera, em São Paulo, tem cerca de 1,5 km² — menos da metade — e também nasceu da mesma ideia: guardar um pedaço de natureza dentro da cidade.",
        },
        fauna: {
          texto:
            "O esquilo-cinzento faz nos parques de Nova York o mesmo papel que o sagui-de-tufos-brancos faz nas praças brasileiras: um mamífero pequeno e ágil que aprendeu a viver junto das pessoas.",
        },
        sabor: {
          texto:
            "O bagel é o pão de esquina de Nova York, comprado a caminho do trabalho — igualzinho ao nosso pão na chapa ou ao pão de queijo da padaria de manhã.",
        },
      },
      desafio: {
        pergunta:
          "Você observou o Central Park do alto. Por que aquele retângulo verde tem exatamente esse formato tão reto?",
        opcoes: [
          "Porque é um lago natural que secou",
          "Porque a cidade foi desenhada em quadras e o parque foi reservado dentro desse desenho",
          "Porque os prédios ao redor caíram",
        ],
        correta: 1,
        explicacao:
          "Nova York foi planejada em uma grade de quadras retas antes de crescer. O parque foi reservado dentro dessa grade, e por isso tem bordas retas — diferente dos parques brasileiros, que muitas vezes seguem o curso de rios e morros.",
      },
    },


    {
      dia: 2,
      titulo: "Dia 2: A força do tempo, os cânions e a natureza do deserto",
      descricao:
        "Do concreto de Nova York ao deserto do Arizona: terra vermelha, ar seco e um abismo escavado gota a gota pela água.",
      imagem_url: "/__l5e/assets-v1/bc2eae83-010f-48ad-90e6-0f3e57eee93a/rep-transporte-arizona.jpg",
      credito: "Jeep no deserto do Arizona — BLM (domínio público)",
      guia_nome: "Sarah",
      guia_local: "Sarah, guia de expedição no Arizona",
      clima_do_dia: "Ar muito seco, sol forte e noites frias no deserto",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/407fc659-ee36-499b-8561-ac6ebf2e4d83/the-road-to-monument-valley-52031457443.jpg",
        credito: "Wikimedia Commons",
        texto:
          "Bom dia, explorador! Hoje mudamos completamente de cenário: voamos de Nova York para o sudoeste do país, no estado do Arizona. Saímos de uma cidade fria e cheia de prédios para um dos desertos mais impressionantes do planeta. Ajuste os óculos de sol e prepare-se para ver o que a água e o vento fazem com a rocha ao longo de milhões de anos!",
      },
      transporte: {
        nome: "caminhonete 4x4 de expedição",
        icone: "🛻",
        descricao:
          "Para rodar pelas estradas de terra e pedras do Arizona, nosso transporte tem tração nas quatro rodas e pneus altos reforçados. No solo arenoso e irregular do deserto, um carro comum ficaria atolado facilmente. A engenharia dos transportes precisa sempre se adaptar ao terreno da geografia local!",
        imagem_url: "/__l5e/assets-v1/bc2eae83-010f-48ad-90e6-0f3e57eee93a/rep-transporte-arizona.jpg",
        credito: "Jeep no deserto do Arizona — BLM (domínio público)",
        som: {
          url: "/__l5e/assets-v1/def20d3e-b2ce-48a8-81d9-3c10e60675be/usa-som-terra.mp3",
          legenda:
            "Gravação real de um veículo passando numa estrada de terra e cascalho — o mesmo chiado que os pneus da nossa caminhonete fazem no deserto",
          credito: "radio aporee ::: maps — Internet Archive · CC BY-SA 3.0",
        },

        galeria: [
          {
            id: "suv-estrada",
            imagem_url:
              "/__l5e/assets-v1/2e00b9f1-79da-4914-9c96-eb78fad78c9f/usa-suv-estrada.jpg",
            credito: "mypubliclands / domínio público",
            legenda: "Estrada de terra entre os cactos",
          },
          {
            id: "suv-mirante",
            imagem_url:
              "/__l5e/assets-v1/30b3e03c-5fb5-4843-875a-eaa18e922cfb/usa-suv-mirante.jpg",
            credito: "Fabio Achilli / CC BY 2.0",
            legenda: "O mirante onde o carro para",
          },
        ],
      },
      observacao: {
        titulo: "O Grand Canyon",
        som: {
          url: "/__l5e/assets-v1/fdf8ffd2-21f2-416c-8ea3-7475b7bb1932/usa-som-vento.mp3",
          legenda:
            "Vento soprando ao ar livre, como na borda do cânion — é essa corrente de ar que a águia usa para planar",
          credito: "Gravity Sound — Wikimedia Commons · CC BY 4.0",
        },
        imagem_url:
          "/__l5e/assets-v1/b3acabd4-e1ab-4379-94bf-1f4cb0e96b42/grand-canyon-view-with-colorado-river.jpg",
        credito: "Wikimedia Commons",
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
            texto: "São mais de 1.600 metros de profundidade e 446 quilômetros de extensão.",
          },
        ],
        galeria: [
          {
            id: "gc-aerea",
            imagem_url:
              "/__l5e/assets-v1/09f17fc2-85f5-42dd-9d68-f59085e37631/grand-canyon-arizona-usa-luftaufnahme-2012-5963.jpg",
            credito: "Wikimedia Commons",
            legenda: "Vista de cima: o cânion sem fim",
          },
          {
            id: "gc-borda",
            imagem_url:
              "/__l5e/assets-v1/900c6eeb-618d-4327-b9a9-d6dcfd55b418/grand-canyon-arizona-usa-south-rim-nahe-tusayan-2012-5892.jpg",
            credito: "Wikimedia Commons",
            legenda: "A trilha da borda sul",
          },
          {
            id: "gc-camadas",
            imagem_url:
              "/__l5e/assets-v1/6554b747-b13d-4a3b-904b-4aa5f4d6b571/colorado-canyon-arizona-4904885912.jpg",
            credito: "Wikimedia Commons",
            legenda: "As camadas de rocha bem de perto",
          },
          {
            id: "gc-por-do-sol",
            imagem_url:
              "/__l5e/assets-v1/29b35079-437a-4a16-af2d-a9db0e986b19/usa-09847-grand-canyon-luca-galuzzi-2007.jpg",
            credito: "Wikimedia Commons",
            legenda: "O cânion ao pôr do sol",
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
            "A águia quase não bate as asas: ela sobe usando colunas de ar quente. Que outras coisas você conhece que sobem sozinhas quando o ar esquenta?",
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
        id: "aguia-de-cabeca-branca",
        contexto:
          "Olhe para o céu, bem acima dos paredões: está vendo aquela ave de cabeça branca cruzando o cânion?",
        texto_guia:
          "É a águia-de-cabeça-branca, o símbolo dos Estados Unidos — ela está no selo do país e nas moedas. Repare que ela quase não bate as asas: simplesmente plana em círculos, subindo com o ar quente. E enxerga tão bem que localiza um peixe na água a mais de um quilômetro de distância!",
      },

      sabor_do_dia: {
        id: "chili-com-carne",
        contexto:
          "Depois de explorar a imensidão do deserto, é hora de repor as energias na parada dos exploradores.",
        texto_guia:
          "Nosso prato de hoje é o Chili com Carne acompanhado de cornbread, o pão de milho dourado. É uma comida forte, bem temperada e quente, perfeita para o deserto que esfria rapidamente assim que o sol se põe.",
      },
      notas_brasil: {
        transporte: {
          texto:
            "Nos EUA quase todo passeio longo é feito de carro por estradas retas e vazias. No Brasil, entre cidades do interior, muita gente viaja de ônibus rodoviário — e no Norte a estrada principal é o próprio rio, percorrido de barco.",
        },
        observacao: {
          texto:
            "O Grand Canyon foi escavado pelo rio Colorado em rocha seca. No Brasil temos algo parecido nos Cânions do Itaimbezinho e do Fortaleza, no Rio Grande do Sul — só que lá as paredes vivem cobertas de mata e cachoeiras, porque chove muito mais.",
        },
        fauna: {
          texto:
            "A águia-de-cabeça-branca é o símbolo dos Estados Unidos e plana sobre o cânion usando o ar quente que sobe das rochas. No Brasil, o nosso grande símbolo do céu é o gavião-real (harpia), a águia mais forte das Américas, que vive no alto das árvores da Amazônia.",
        },
        sabor: {
          texto:
            "O chili é um cozido apimentado de feijão e carne, servido bem quente — a mesma ideia da nossa feijoada ou do baião de dois: um prato de energia para depois de um dia inteiro fora de casa.",
        },
      },
      desafio: {
        pergunta:
          "Você observou as camadas coloridas nas paredes do cânion. O que elas mostram?",
        opcoes: [
          "Alguém pintou as rochas para os turistas",
          "Cada faixa é uma camada de rocha de uma época diferente, empilhada ao longo de milhões de anos",
          "São sombras das nuvens",
        ],
        correta: 1,
        explicacao:
          "Cada faixa é um tipo de rocha formado numa era diferente. O rio Colorado cortou tudo isso como uma faca num bolo de camadas, deixando a história da Terra à vista.",
      },
    },


    {
      dia: 3,
      titulo: "Dia 3: O Oceano Pacífico, a tecnologia e o olhar para as estrelas",
      descricao:
        "Na costa oeste: névoa fria, colinas íngremes, bondes puxados por cabo e os laboratórios que criaram robôs para explorar Marte.",
      imagem_url:
        "/__l5e/assets-v1/44cd7787-1f9c-4895-98ae-9749462d61bc/san-francisco-cable-car-55-dllu.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Sarah",
      guia_local: "Sarah, guia de expedição na Califórnia",
      clima_do_dia: "Névoa marinha fria pela manhã, sol dourado à tarde",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/0b26672f-b6df-4cbc-8603-7a417dd611b2/golden-gate-bridge-in-light-morning-fog.jpg",
        credito: "Wikimedia Commons",
        texto:
          "Bem-vindo ao nosso terceiro dia de expedição! Cruzamos o mapa em direção ao oeste até chegar à costa do Oceano Pacífico, na Califórnia. Diferente do Atlântico que banha o Brasil, as águas daqui são alimentadas por correntes geladas vindas do norte. É por isso que São Francisco é famosa pelas névoas marinhas densas e pelas colinas inclinadas!",
      },
      transporte: {
        nome: "Cable Car de São Francisco",
        icone: "🚃",
        descricao:
          "Como a cidade é cheia de morros íngremes, os carros de tração animal não conseguiam subir sem escorregar. Foi assim que, em 1873, inventaram o cable car. Ele não tem motor: sob os trilhos passa um cabo de aço gigante que se move sem parar debaixo da terra, e o condutor usa uma alavanca de ferro para “agarrar” esse cabo e ser puxado morro acima. Suba e segure-se firme no balaústre!",
        imagem_url:
          "/__l5e/assets-v1/44cd7787-1f9c-4895-98ae-9749462d61bc/san-francisco-cable-car-55-dllu.jpg",
        credito: "Wikimedia Commons",
        som: {
          url: "/__l5e/assets-v1/1180a46d-6387-4e85-9119-108a3455c7ca/usa-som-cablecar.mp3",
          legenda:
            "Gravação real dentro de um cable car em movimento em São Francisco: o cabo rangendo, o sino e a voz do condutor",
          credito: "radio aporee ::: maps — Internet Archive · CC BY-NC 3.0",
        },

        galeria: [
          {
            id: "cable-ladeira",
            imagem_url:
              "/__l5e/assets-v1/5c9916ed-85a3-4dab-b9e8-75c85a7e5395/usa-cable-ladeira.jpg",
            credito: "Frank Schulenburg / CC BY-SA 4.0",
            legenda: "Subindo uma ladeira bem íngreme",
          },
          {
            id: "cable-giratorio",
            imagem_url:
              "/__l5e/assets-v1/c6c1f3af-327d-4b1d-83ed-b8ecdecf0b0f/usa-cable-giratorio.jpg",
            credito: "Dietmar Rabich / CC BY-SA 4.0",
            legenda: "O giratório que vira o bonde",
          },
          {
            id: "cable-baia",
            imagem_url:
              "/__l5e/assets-v1/6cfd76aa-6e1c-4d83-b4d1-803533a28d09/usa-cable-baia.jpg",
            credito: "Thomas Wolf / CC BY-SA 3.0",
            legenda: "Vista para a baía e Alcatraz",
          },
        ],
      },
      observacao: {
        titulo: "O laboratório onde nascem os robôs de Marte (JPL)",
        som: {
          url: "/__l5e/assets-v1/a7797c55-a4c5-4d28-8b2d-8c2a58b9cec2/usa-som-ondas.mp3",
          legenda: "Ondas do Oceano Pacífico batendo na costa rochosa da Califórnia",
          credito: "Wikimedia Commons · CC BY 3.0",
        },
        imagem_url: "/__l5e/assets-v1/b362a85d-3541-46e9-9061-3d59b860a378/rep-observacao-california.jpg",
        credito: "Rover Curiosity na sala limpa do JPL, Pasadena — NASA/JPL (domínio público)",
        hotspots: [
          {
            id: "mastro",
            x: 48,
            y: 24,
            titulo: "A cabeça com câmeras",
            texto:
              "No alto do mastro ficam as câmeras e um laser: são os “olhos” do robô, que fotografam e analisam as rochas de Marte.",
          },
          {
            id: "rodas",
            x: 34,
            y: 72,
            titulo: "As seis rodas de alumínio",
            texto:
              "Cada roda tem seu próprio motor e ranhuras fundas para não atolar na areia marciana nem escorregar nas pedras.",
          },
          {
            id: "sala-limpa",
            x: 84,
            y: 34,
            titulo: "A sala limpa do laboratório",
            texto:
              "Tudo aqui é montado num ambiente sem poeira e sem micróbios, para que nenhuma bactéria da Terra pegue carona até Marte.",
          },
        ],
        galeria: [
          {
            id: "ca-aerea",
            imagem_url:
              "/__l5e/assets-v1/03bf244d-22fb-4c71-93ae-9383841f1c93/aerial-view-of-silicon-valley.jpg",
            credito: "Wikimedia Commons",
            legenda: "Vista de cima: o Vale do Silício e a baía",
          },
          {
            id: "ca-rover",
            imagem_url:
              "/__l5e/assets-v1/e00b5804-afde-441f-8547-471c86924d15/rep-galeria-rover.jpg",
            credito: "Réplica em tamanho real do rover Curiosity (CC BY-SA 4.0)",
            legenda: "Réplica de um robô rover de Marte",
          },
          {
            id: "ca-controle",
            imagem_url:
              "/__l5e/assets-v1/f6fc2626-5657-4103-be09-0224bb6dce3d/rep-galeria-controle.jpg",
            credito: "Sala de operações de voo do JPL — NASA/JPL (domínio público)",
            legenda: "A sala de controle das missões",
          },
          {
            id: "ca-antena",
            imagem_url:
              "/__l5e/assets-v1/77433c5f-f727-423d-8386-d1ede694cfae/goldstone-dsn-antenna.jpg",
            credito: "Wikimedia Commons",
            legenda: "Antena gigante que escuta as sondas",
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
      notas_brasil: {
        transporte: {
          texto:
            "São Francisco ainda usa bondes que sobem ladeiras puxados por cabos de aço. No Brasil temos o bondinho de Santa Teresa, no Rio de Janeiro, que faz a mesma coisa: vencer a ladeira sem depender de pneus.",
        },
        observacao: {
          texto:
            "A névoa fria que cobre a ponte Golden Gate nasce do encontro do ar quente com um mar muito frio. No litoral de Santa Catarina acontece algo parecido em dias de vento sul — só que o mar brasileiro nunca chega a ser tão gelado.",
        },
        fauna: {
          texto:
            "A nútria-marinha vive nas algas do Pacífico. No litoral brasileiro, quem cumpre o papel de mamífero das águas costeiras é o boto-cinza, que aparece em baías como a de Cananéia e a Babitonga.",
        },
        sabor: {
          texto:
            "A torta de maçã é o doce símbolo dos EUA, feita com a fruta que cresce bem no clima frio. No Brasil, o doce que aparece em toda festa de família é a torta de banana ou o bolo de milho — cada país usa a fruta que sua terra dá.",
        },
      },
      desafio: {
        pergunta:
          "Você observou a nútria-marinha flutuando de barriga para cima dentro das algas. Para que serve essa floresta de algas para ela?",
        opcoes: [
          "Só para enfeitar o mar",
          "Serve de âncora e de esconderijo: ela se enrola nas algas para não ser levada pela correnteza enquanto dorme",
          "Ela come as algas no lugar de peixes",
        ],
        correta: 1,
        explicacao:
          "A nútria se enrola nas algas como um cinto de segurança para não ser arrastada pela corrente enquanto descansa — e ainda usa a barriga como mesinha para quebrar conchas com uma pedra.",
      },
    },

  ],

  fauna_flora: [
    {
      id: "esquilo-cinzento",
      nome: "Esquilo-Cinzento-Americano",
      nome_cientifico: "Sciurus carolinensis",
      foto_url:
        "/__l5e/assets-v1/44072460-3174-4e38-af33-e3876bf8043c/sciurus-carolinensis-eating-nuts.jpg",
      credito: "Wikimedia Commons",
      som_url: null,
      som: {
        url: "/__l5e/assets-v1/c102484d-9069-4d52-a600-da16295e0059/usa-som-esquilo.mp3",
        legenda: "Gravação real do chamado do esquilo-cinzento-americano",
        credito: "Wikimedia Commons · CC BY-SA 4.0",
      },
      curiosidade:
        "No outono ele trabalha sem parar: enterra centenas de sementes e nozes pelo chão do parque para ter o que comer quando a neve cobrir tudo. E esquece onde guardou quase metade delas! Essas nozes esquecidas germinam e viram novas árvores — eles são os grandes reflorestadores naturais da América do Norte.",
      habitat: "Parques, praças e árvores de rua das grandes cidades.",
      galeria: [
        {
          id: "esq-bolota",
          imagem_url:
            "/__l5e/assets-v1/70b11e4b-e4c1-494e-ba8b-74e0ff2dd977/usa-esq-bolota.jpg",
          credito: "Rhododendrites / CC BY-SA 4.0",
          legenda: "Carregando uma noz na boca",
        },
        {
          id: "esq-parque",
          imagem_url:
            "/__l5e/assets-v1/1bdda48d-b9f5-417f-8e35-440f59b2d970/usa-esq-parque.jpg",
          credito: "JoeInQueens / CC BY 2.0",
          legenda: "Num parque de Nova York",
        },
        {
          id: "esq-ninho",
          imagem_url:
            "/__l5e/assets-v1/06a70938-3bd3-49c2-8d7b-dce2c2bf2269/usa-esq-ninho.jpg",
          credito: "Rhododendrites / CC BY-SA 4.0",
          legenda: "Subindo o tronco no outono",
        },
      ],
    },
    {
      id: "aguia-de-cabeca-branca",
      nome: "Águia-de-Cabeça-Branca",
      nome_cientifico: "Haliaeetus leucocephalus",
      foto_url:
        "/__l5e/assets-v1/305448aa-354f-4789-ab25-8300c26b7b28/usa-aguia-voo.jpg",
      credito: "U.S. Fish and Wildlife Service — domínio público",
      som_url: null,
      som: {
        url: "/__l5e/assets-v1/62389578-5c76-47a0-b324-6b5256795a48/usa-som-aguia.mp3",
        legenda:
          "A voz real da águia-de-cabeça-branca, gravada em campo no Parque Nacional de Yellowstone",
        credito:
          "Yellowstone Sound Library / National Park Service · domínio público",
      },
      curiosidade:
        "É o símbolo dos Estados Unidos: aparece no selo do país, nas moedas e nos documentos oficiais. Com cerca de 2 metros de envergadura, ela plana em círculos usando as correntes de ar quente e enxerga um peixe na água a mais de 1 km de distância.",
      habitat:
        "Perto de rios, lagos e costas de todo o território americano, sempre com árvores altas para o ninho.",
      galeria: [
        {
          id: "aguia-pesca",
          imagem_url:
            "/__l5e/assets-v1/70e40700-592c-4ddd-b9e3-3494970ec9cc/usa-aguia-pesca.jpg",
          credito: "NPS / Jacob W. Frank — domínio público",
          legenda: "Pescando com as garras no lago",
        },
        {
          id: "aguia-ninho",
          imagem_url:
            "/__l5e/assets-v1/41f7368d-ad1c-4819-b887-eb10acd5bead/usa-aguia-ninho.jpg",
          credito: "USFWS / Jeremy N. Moore — domínio público",
          legenda: "No ninho gigante, com o filhote",
        },
        {
          id: "aguia-retrato",
          imagem_url:
            "/__l5e/assets-v1/d9775c91-35ea-4b00-8ef4-6c1f70e8369b/usa-aguia-retrato.jpg",
          credito: "USFWS Midwest Region / CC BY 2.0",
          legenda: "De perto: o bico amarelo e o olhar",
        },
      ],
    },

    {
      id: "nutria-marinha",
      nome: "Nutria-Marinha",
      nome_cientifico: "Enhydra lutris",
      foto_url:
        "/__l5e/assets-v1/2a250c30-da71-4c4a-b265-f67e551c2e1a/wild-sea-otter-17348235490.jpg",
      credito: "Wikimedia Commons",
      som_url: null,
      som: {
        url: "/__l5e/assets-v1/4934d935-a107-4cf6-97c1-811f9f86e563/usa-som-lontra.mp3",
        legenda: "Gravação real da voz de uma nutria-marinha",
        credito: "Rosa, aquário da Califórnia — Wikimedia Commons · CC BY 4.0",
      },
      curiosidade:
        "Pega uma pedra plana, coloca sobre a barriga enquanto flutua de costas e usa a pedra como bigorna para quebrar conchas de ouriços e mariscos. É um dos raríssimos animais que usam ferramentas de verdade.",
      habitat: "Florestas de algas (kelp) na costa fria do Pacífico.",
      galeria: [
        {
          id: "nutria-comendo",
          imagem_url:
            "/__l5e/assets-v1/9188a314-1fc7-4897-9586-276a2bd20bdf/usa-nutria-comendo.jpg",
          credito: "Mike Baird / CC BY 2.0",
          legenda: "Boiando de barriga para cima",
        },
        {
          id: "nutria-grupo",
          imagem_url:
            "/__l5e/assets-v1/f50bc8f2-bfb1-443c-930e-e54e1093ed27/usa-nutria-grupo.jpg",
          credito: "Mike Baird / CC BY 2.0",
          legenda: "Grupo enrolado nas algas",
        },
        {
          id: "nutria-patas",
          imagem_url:
            "/__l5e/assets-v1/0329f92b-8cbb-4c69-9178-53b45cb61933/usa-nutria-patas.jpg",
          credito: "Mike Baird / CC BY 2.0",
          legenda: "De perto: as patinhas peludas",
        },
      ],
    },
  ],

  gastronomia: [
    {
      id: "bagel-cream-cheese",
      nome: "Bagel com cream cheese",
      foto_url:
        "/__l5e/assets-v1/6a82083c-2cc3-45da-8d77-7b78ed520412/toasted-sesame-bagel-with-cream-cheese-massachusetts.jpg",
      credito: "Wikimedia Commons",
      adjetivo: "clássico",
      som: {
        url: "/__l5e/assets-v1/b258c296-ab8d-4933-8a8d-dfba24668432/usa-som-padaria.mp3",
        legenda: "Burburinho real de pessoas conversando dentro de um salão movimentado",
        credito: "Wikimedia Commons · domínio público",
      },
      historia:
        "Foi trazido para os Estados Unidos por imigrantes judeus vindos da Europa Oriental no século 19. Eles trouxeram as receitas de família na bagagem, e o bagel virou o símbolo do café da manhã rápido de quem vive na correria da cidade. É fervido antes de assar, o que deixa a casca brilhante e o miolo macio.",
      destaque: "Nas padarias de Nova York, o pedido nº 1 é o everything bagel com cream cheese, comido em pé no balcão antes do trabalho.",
      galeria: [
        {
          id: "bagel-balcao",
          imagem_url:
            "/__l5e/assets-v1/2ee72f10-6680-4b4d-a468-218cb5f1bc73/usa-bagel-balcao.jpg",
          credito: "OathOn / CC BY-SA 4.0",
          legenda: "O balcão da padaria",
        },
        {
          id: "bagel-fachada",
          imagem_url:
            "/__l5e/assets-v1/81cdcba5-9a73-40ae-8bce-a6c01ce66e34/usa-bagel-fachada.jpg",
          credito: "Mdineenwob / domínio público",
          legenda: "Fachada de uma bagel shop",
        },
        {
          id: "bagel-salmao",
          imagem_url:
            "/__l5e/assets-v1/5caf47b3-30e8-48f3-a89d-3563bc23f0d1/usa-bagel-salmao.jpg",
          credito: "Pug50 / CC BY 2.0",
          legenda: "Outra opção: bagel com salmão",
        },
      ],
    },
    {
      id: "chili-com-carne",
      nome: "Chili com Carne e pão de milho",
      foto_url:
        "/__l5e/assets-v1/9a1d018a-d539-4fa8-a797-1c1c25de7774/chili-con-carne-7556966148.jpg",
      credito: "Wikimedia Commons",
      adjetivo: "reconfortante",
      som: {
        url: "/__l5e/assets-v1/a2244262-f4ce-42c8-aa12-4742ea7a440b/usa-som-diner.mp3",
        legenda: "Burburinho real de um restaurante cheio: conversas, pratos e talheres",
        credito: "Wikimedia Commons · domínio público",
      },
      historia:
        "Ensopado de carne moída, feijões vermelhos, tomates e pimentas suaves, cozido lentamente em panelas de ferro e servido com cornbread. Nasceu da fusão entre a culinária dos povos nativos, os colonizadores espanhóis e os pioneiros que cruzavam o deserto.",
      destaque: "No sudoeste, o prato mais pedido é o chili servido com uma fatia de cornbread quentinho ao lado.",
      galeria: [
        {
          id: "chili-panela",
          imagem_url:
            "/__l5e/assets-v1/c0ca2ca7-e9fd-4a48-aa70-195ef8d1465b/usa-chili-panela.jpg",
          credito: "Punkgobliner / CC BY-SA 4.0",
          legenda: "A panela grande no fogo",
        },
        {
          id: "chili-cornbread",
          imagem_url:
            "/__l5e/assets-v1/07e1ef05-ebc4-49df-94a9-fd229ac10141/usa-chili-cornbread.jpg",
          credito: "Alabama Extension / CC0",
          legenda: "Cornbread na frigideira de ferro",
        },
        {
          id: "chili-diner",
          imagem_url:
            "/__l5e/assets-v1/15af4019-2768-4a9f-9771-671df7ff26c2/usa-chili-diner.jpg",
          credito: "Paul Lowry / CC BY 2.0",
          legenda: "O salão de um diner americano",
        },
      ],
    },
    {
      id: "torta-de-maca",
      nome: "Torta de Maçã (Apple Pie)",
      foto_url:
        "/__l5e/assets-v1/3370ea3c-a3ce-4f57-9ee3-eedd674e5ce5/mmm-apple-pie-ala-mode.jpg",
      credito: "Wikimedia Commons",
      adjetivo: "tradicional",
      som: {
        url: "/__l5e/assets-v1/b41dcd77-b706-4b5d-9334-868e7e303076/usa-som-parque.mp3",
        legenda: "Brisa e pássaros, como num pomar de maçãs ao ar livre",
        credito: "Wikimedia Commons · domínio público",
      },
      historia:
        "Massa crocante e dourada recheada com maçãs frescas, canela e noz-moscada, servida quentinha com uma bola de sorvete de baunilha. A maçã é uma das frutas mais cultivadas nas regiões frias e temperadas do norte dos EUA, e assar a torta é um jeito de celebrar a colheita.",
      destaque: "A versão mais pedida é a à la mode: fatia quente com uma bola de sorvete de baunilha derretendo por cima.",
      galeria: [
        {
          id: "pie-inteira",
          imagem_url:
            "/__l5e/assets-v1/5988bff5-2487-447e-ba1b-eaef37ac89ef/usa-pie-inteira.jpg",
          credito: "Jonathunder / GFDL 1.2",
          legenda: "A torta inteira antes de fatiar",
        },
        {
          id: "pie-trancada",
          imagem_url:
            "/__l5e/assets-v1/d2a69823-bb34-4fec-b968-95f82c9c48af/usa-pie-trancada.jpg",
          credito: "The-Wuje / CC BY-SA 4.0",
          legenda: "Massa trançada, um clássico",
        },
        {
          id: "pie-pomar",
          imagem_url:
            "/__l5e/assets-v1/7da08271-2c64-4a2e-8bdd-2a032207e54c/usa-pie-pomar.jpg",
          credito: "inkknife_2000 / CC BY-SA 2.0",
          legenda: "O pomar de maçãs na colheita",
        },
      ],
    },
  ],

  comparativo: {
    clima_predominante:
      "Muito variado: temperado no leste, desértico no sudoeste e frio-úmido na costa do Pacífico",
    bioma_principal: "Florestas temperadas, desertos e a costa fria do Pacífico",
    elemento_marcante: "A escala — cidades verticais, cânions gigantes e centros de tecnologia",
    agricultura_construcoes:
      "Grandes lavouras mecanizadas nas planícies, pomares de maçã no norte e cidades verticais de aço e vidro. Nas regiões áridas, tudo depende da irrigação e de veículos preparados para o terreno.",
    roupas_modo_de_vida:
      "As quatro estações são bem marcadas: casacos e cachecóis no outono e inverno do nordeste, roupas leves e chapéu no deserto e agasalho contra a névoa fria em São Francisco.",
    fauna_alimentacao:
      "Esquilos nos parques urbanos, águias-de-cabeça-branca planando nos cânions e nutrias-marinhas no Pacífico. A comida vai do lanche rápido de rua ao ensopado forte do deserto e à torta doce da colheita.",
  },
};

export default estadosUnidos;
