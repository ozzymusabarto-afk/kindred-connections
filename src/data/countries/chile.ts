import type { Pais } from "../types";

/**
 * Roteiro completo do Chile — 3 dias de expedição imersiva.
 * Foco: Geografia extrema (Deserto e Geleiras) e Astronomia.
 * Dia 1: Santiago e Valparaíso (A capital entre montanhas e as cores do porto)
 * Dia 2: Deserto do Atacama (Vulcões, salares e o céu mais limpo da Terra)
 * Dia 3: Torres del Paine (O fim do mundo com picos de granito e lagos azuis)
 */
export const chile: Pais = {
  id: "chile",
  nome: "Chile",
  continente: "america-do-sul",
  codigo_mapa: "cl",
  bandeira: "🇨🇱",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png",
  capital: "Santiago",
  coordenadas: { x: 310, y: 780 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Torres_del_Paine_National_Park_Chile.jpg/1280px-Torres_del_Paine_National_Park_Chile.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "O país mais comprido e estreito do mundo, espremido entre a Cordilheira dos Andes e o Oceano Pacífico. O Chile é uma terra de extremos: ao norte, o deserto mais seco do planeta; ao sul, campos de gelo milenares; e no centro, vales férteis e montanhas gigantescas que vigiam as cidades.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Santiago_Chile_City.jpg/1280px-Santiago_Chile_City.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Santiago com vista para os Andes",
      credito: "Wikimedia Commons"
    },
    idioma: "Espanhol",
    fuso_horario: "1 hora a menos que Brasília",
    temperatura: "22 °C, ar seco e céu muito limpo",
    fala_piloto_original: "¡Bienvenidos a Chile! Estamos descendiendo hacia el Aeropuerto Arturo Merino Benítez en Santiago. A su derecha pueden ver la imponente Cordillera de los Andes. La temperatura es de 22 grados. ¡Disfruten su viaje!",
    fala_piloto_traducao: "Bem-vindos ao Chile! Estamos descendo em direção ao Aeroporto Arturo Merino Benítez em Santiago. À sua direita podem ver a imponente Cordilheira dos Andes. A temperatura é de 22 graus. Aproveitem sua viagem!",
    texto: "Prepare-se para uma vista inesquecível! À direita do avião, a Cordilheira dos Andes se estende como um muro de pedra e neve que parece não ter fim. Estamos pousando em Santiago, uma cidade moderna protegida por essas montanhas gigantes. O ar aqui é seco e o céu é de um azul tão profundo que você vai querer fotografar cada minuto!",
    galeria: [
      {
        id: "cl-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Andes_Mountains_from_Plane.jpg/1280px-Andes_Mountains_from_Plane.jpg",
        legenda: "A imensidão dos Andes vista da janela do avião",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Hotel Boutique no Bairro Lastarria, Santiago",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Barrio_Lastarria_Santiago.jpg/1280px-Barrio_Lastarria_Santiago.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Santiago_City_Ambience.mp3",
      legenda: "Sons do centro de Santiago",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Hola! Meu nome é Javiera e serei sua guia nesta longa jornada pelo Chile. Nossa base é o bairro Lastarria, o coração cultural de Santiago, cheio de livrarias, cafés e parques. Daqui podemos caminhar até o Cerro Santa Lucía para ver a cidade do alto. O Chile é um país de poetas e exploradores, e vamos descobrir o porquê!”",
    galeria: [
      {
        id: "cl-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Barrio_Lastarria_Santiago.jpg/1280px-Barrio_Lastarria_Santiago.jpg",
        legenda: "Bairro Lastarria em Santiago",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Santiago e os Andes — A Cidade e a Montanha",
      descricao: "Exploraremos o centro histórico e subiremos em um dos cerros (colinas) para entender como a cidade se organiza aos pés da cordilheira.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Santiago_de_Chile_view.jpg/1280px-Santiago_de_Chile_view.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Javiera",
      guia_local: "Javiera, urbanista",
      clima_do_dia: "24 °C, ensolarado",
      transporte: {
        nome: "Funicular do Cerro San Cristóbal",
        icone: "🚠",
        descricao: "Um elevador inclinado que sobe a montanha sobre trilhos, levando as pessoas do calor da cidade para o ar fresco do topo do morro.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Funicular_Santiago_Chile.jpg/1280px-Funicular_Santiago_Chile.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Vista do Cerro San Cristóbal",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Santiago_de_Chile_view.jpg/1280px-Santiago_de_Chile_view.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "cordilheira",
            x: 80,
            y: 30,
            titulo: "Cordilheira dos Andes",
            texto: "As montanhas são tão altas que funcionam como uma barreira natural, impedindo as nuvens de passarem e criando o clima seco de Santiago."
          },
          {
            id: "sky-costanera",
            x: 50,
            y: 50,
            titulo: "Sky Costanera",
            texto: "O prédio mais alto da América do Sul! Ele foi construído com tecnologia especial para resistir aos terremotos, que são comuns no Chile."
          }
        ]
      },
      fauna_do_dia: {
        id: "zorzal",
        contexto: "Um pássaro de peito alaranjado que canta todas as manhãs nos parques de Santiago.",
        galeria: [
          {
            id: "cl-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Austral_thrush_Chile.jpg/1280px-Austral_thrush_Chile.jpg",
            legenda: "Zorzal-austral em Santiago",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "mote-con-huesillo",
        contexto: "Uma bebida doce e gelada com grãos de trigo e pêssego desidratado, perfeita para o calor."
      },
      perguntas: [
        {
          id: "cl-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Santiago vive cercada por montanhas altíssimas. Como você acha que seria viver em um lugar onde você sempre vê neve no topo das montanhas, mesmo quando está calor na rua?"
        }
      ],
      desafio: {
        pergunta: "Por que os prédios modernos do Chile precisam de tecnologia especial?",
        opcoes: ["Por causa da neve", "Por causa dos terremotos", "Por causa do vento"],
        correta: 1,
        explicacao: "O Chile fica em uma zona de encontro de placas tectônicas, por isso os engenheiros são mestres em construir prédios seguros contra tremores!"
      }
    },
    {
      dia: 2,
      titulo: "Dia 2: Atacama — O Deserto e as Estrelas",
      descricao: "Voamos para o norte até San Pedro de Atacama para ver vulcões, lagoas de sal e o céu mais estrelado que você já imaginou.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Valle_de_la_Luna_Atacama.jpg/1280px-Valle_de_la_Luna_Atacama.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Javiera",
      guia_local: "Javiera, no deserto",
      clima_do_dia: "28 °C de dia e 5 °C à noite, ar extremamente seco",
      transporte: {
        nome: "Bicicleta de Montanha",
        icone: "🚲",
        descricao: "No deserto, muitos exploradores usam bicicletas para cruzar o Vale da Lua. É preciso levar muita água, pois o corpo perde umidade muito rápido sem a gente perceber!",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Biking_in_Atacama.jpg/1280px-Biking_in_Atacama.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Vale da Lua",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Valle_de_la_Luna_Atacama.jpg/1280px-Valle_de_la_Luna_Atacama.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "sal",
            x: 30,
            y: 70,
            titulo: "Crosta de Sal",
            texto: "O que parece neve no chão é na verdade sal! Antigamente este lugar era o fundo de um mar que secou há milhões de anos."
          },
          {
            id: "vulcao",
            x: 70,
            y: 40,
            titulo: "Vulcão Licancabur",
            texto: "Um vulcão perfeito na fronteira com a Bolívia. Ele é inativo, mas a sua forma cônica domina toda a paisagem do deserto."
          }
        ]
      },
      fauna_do_dia: {
        id: "flamenco-andino",
        contexto: "Sim, existem flamingos no deserto! Eles vivem nas lagoas de sal que nunca secam."
      },
      sabor_do_dia: {
        id: "empanada-pino",
        contexto: "A empanada clássica chilena, recheada com carne, cebola, ovo e azeitona."
      },
      perguntas: [
        {
          id: "cl-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "No Atacama quase nunca chove. De onde você acha que os animais e as plantas conseguem tirar água para sobreviver?"
        }
      ],
      desafio: {
        pergunta: "Por que o Atacama é considerado o melhor lugar do mundo para ver as estrelas?",
        opcoes: ["Porque é muito alto", "Porque o ar é muito seco e sem nuvens", "Porque as estrelas são maiores lá"],
        correta: 1,
        explicacao: "A falta de umidade e de luzes das cidades faz com que o céu seja perfeitamente transparente para os telescópios!"
      }
    },
    {
      dia: 3,
      titulo: "Dia 3: Patagônia — Picos de Granito e Gelo",
      descricao: "Terminamos nossa jornada no extremo sul, no Parque Torres del Paine, onde o vento é forte e a natureza é indomável.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Torres_del_Paine_National_Park_Chile.jpg/1280px-Torres_del_Paine_National_Park_Chile.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Javiera",
      guia_local: "Javiera, guia de trekking",
      clima_do_dia: "10 °C, vento fortíssimo e mudanças rápidas de tempo",
      transporte: {
        nome: "Barco de Gelo",
        icone: "🚢",
        descricao: "Usamos barcos para cruzar lagos de cor cinza e azul leitoso que vêm direto do derretimento das geleiras.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Grey_Glacier_Chile.jpg/1280px-Grey_Glacier_Chile.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "As Torres del Paine",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Torres_del_Paine_National_Park_Chile.jpg/1280px-Torres_del_Paine_National_Park_Chile.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "torres",
            x: 50,
            y: 40,
            titulo: "Picos de Granito",
            texto: "Estas torres verticais foram esculpidas pelo gelo e pelo vento por milhões de anos. Elas são feitas de uma rocha extremamente dura."
          },
          {
            id: "lago",
            x: 30,
            y: 80,
            titulo: "Lagos Glaciais",
            texto: "A cor azul-bebê destes lagos vem do 'leite glacial', um pó de rocha finíssimo que fica suspenso na água fria."
          }
        ]
      },
      fauna_do_dia: {
        id: "guanaco",
        contexto: "Parente da lhama, ele corre livre pelas planícies patagônicas fugindo do puma."
      },
      sabor_do_dia: {
        id: "centolla",
        contexto: "O caranguejo gigante das águas geladas do sul, uma iguaria da Patagônia."
      },
      perguntas: [
        {
          id: "cl-d3-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "O vento na Patagônia pode ser tão forte que derruba uma pessoa. Como você acha que as plantas e árvores conseguem crescer sem serem arrancadas?"
        }
      ],
      desafio: {
        pergunta: "O que dá aos lagos da Patagônia aquela cor azul leitosa?",
        opcoes: ["Tinta azul", "Leite de vaca", "Pó de rocha das geleiras"],
        correta: 2,
        explicacao: "As geleiras moem as rochas da montanha transformando-as em um pó fino que dá essa cor mágica à água!"
      }
    }
  ],

  fauna_flora: [
    {
      id: "guanaco",
      nome: "Guanaco",
      nome_cientifico: "Lama guanicoe",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Guanaco_Chile.jpg/1280px-Guanaco_Chile.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Guanaco_Sound.mp3",
      curiosidade: "É um dos maiores animais terrestres da América do Sul. Ele consegue beber água salgada e sobreviver em lugares onde quase nada cresce.",
      habitat: "Estepes frias e montanhas da Patagônia.",
      credito: "Wikimedia Commons"
    },
    {
      id: "flamenco-andino",
      nome: "Flamingo Andino",
      nome_cientifico: "Phoenicoparrus andinus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Andean_Flamingo.jpg/1280px-Andean_Flamingo.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Andean_Flamingo_Sound.mp3",
      curiosidade: "Eles ganham essa cor rosada por causa da comida que encontram nas lagoas de sal. Conseguem aguentar águas que congelariam a maioria dos animais.",
      habitat: "Lagoas de sal em grandes altitudes nos Andes.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "empanada-pino",
      nome: "Empanada de Pino",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Empanada_de_pino_chilena.jpg/1280px-Empanada_de_pino_chilena.jpg",
      adjetivo: "tradicional",
      historia: "O recheio de 'pino' é uma herança dos povos indígenas (Mapuche) misturada com a cultura espanhola. É a comida oficial das festas nacionais.",
      credito: "Wikimedia Commons"
    },
    {
      id: "mote-con-huesillo",
      nome: "Mote con Huesillo",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mote_com_huesillo.jpg/1280px-Mote_com_huesillo.jpg",
      adjetivo: "refrescante",
      historia: "Uma sobremesa que se bebe! O 'mote' é trigo cozido e o 'huesillo' é o pêssego seco. É o símbolo do verão chileno.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "De deserto ao norte, mediterrânico ao centro e polar ao sul",
    bioma_principal: "Deserto, Floresta temperada valdiviana e Estepa patagônica",
    elemento_marcante: "A Cordilheira dos Andes presente em todo o território",
    agricultura_construcoes: "Uvas, maçãs, mineração de cobre. Casas coloridas de madeira no sul e prédios anti-terremoto em Santiago.",
    roupas_modo_de_vida: "Ponchos de lã (Chamantos) e roupas térmicas. Vida ligada à natureza e aos vinhos.",
    fauna_alimentacao: "Frutos do mar (muitos!), empanadas, milho e frutas de clima temperado."
  }
};
