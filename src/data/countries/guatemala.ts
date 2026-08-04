import { Pais } from "../types";

export const guatemala: Pais = {
  id: "guatemala",
  nome: "Guatemala",
  continente: "america-central",
  codigo_mapa: "gt",
  bandeira: "🇬🇹",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png",
  capital: "Cidade da Guatemala",
  coordenadas: { x: 270, y: 430 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tikal_Temple_I.jpg/1280px-Tikal_Temple_I.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "O coração do mundo Maia! A Guatemala é um país montanhoso, repleto de templos antigos escondidos na selva e cidades coloniais preservadas. A cultura viva dos povos ancestrais define o dia a dia, com suas roupas coloridas e tradições milenares.",

  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Antigua_Guatemala_Street.jpg/1280px-Antigua_Guatemala_Street.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Chegada à Guatemala, o coração do mundo Maia",
      credito: "Wikimedia Commons"
    },
    texto: "Chegamos a Antigua, uma cidade cercada por vulcões! Veja as construções antigas e o mercado vibrante que nos dá as boas-vindas.",
    idioma: "Espanhol e línguas maias",
    fuso_horario: "08h00 local — 3 horas a menos que Brasília",
    temperatura: "20 °C, clima de montanha agradável",
    galeria: [
      {
        id: "gt-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Guatemala_Volcanoes_Aerial.jpg/1280px-Guatemala_Volcanoes_Aerial.jpg",
        legenda: "Vulcões majestosos da Guatemala vistos de cima",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Casarão Colonial em Antigua",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Antigua_Guatemala_Street.jpg/1280px-Antigua_Guatemala_Street.jpg",
    descricao: "“¡Hola! Sou a Maya. Vamos explorar templos escondidos na floresta e aprender sobre o tempo dos Maias.”"
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Mistérios de Tikal",
      descricao: "Caminharemos pelo meio da selva densa até encontrar as pirâmides que foram a base da civilização Maia.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tikal_Temple_I.jpg/1280px-Tikal_Temple_I.jpg",
      guia_nome: "Maya",
      clima_do_dia: "25 °C, úmido e quente",
      transporte: {
        nome: "Barco e caminhada na selva",
        icone: "🚣",
        descricao: "Cruzamos um rio para chegar à entrada do parque nacional de Tikal."
      },
      fauna_do_dia: {
        id: "bugio",
        contexto: "O grito de um bugio (macaco) ecoa pela floresta, parecendo um rugido de leão."
      },
      sabor_do_dia: {
        id: "tamales",
        contexto: "Massa de milho recheada e cozida na folha de bananeira."
      },
      perguntas: [
        { id: "gt-d1-1", tipo: "observacao", etapa: "observacao", texto: "Por que você acha que os Maias construíram templos tão altos, acima da altura das árvores?" }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "bugio",
      nome: "Macaco-bugio",
      nome_cientifico: "Alouatta palliata",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mantled_Howler_Monkey.jpg/1280px-Mantled_Howler_Monkey.jpg",
      som_url: null,
      curiosidade: "O bugio é famoso pelo seu grito alto, que pode ser ouvido a quilômetros de distância na floresta.",
      habitat: "Florestas tropicais."
    }
  ],
  gastronomia: [
    {
      id: "tamales",
      nome: "Tamales",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tamales_guatemaltecos.jpg/1280px-Tamales_guatemaltecos.jpg",
      adjetivo: "tradicional",
      historia: "Um preparo ancestral, feito com massa de milho temperada e recheios diversos, cozido em folha de bananeira."
    }
  ],
  comparativo: {
    clima_predominante: "Variado conforme a altitude",
    bioma_principal: "Floresta tropical e montanhas vulcânicas",
    elemento_marcante: "A cultura Maia viva e as pirâmides de selva",
    agricultura_construcoes: "Milho, café e cacau. Casas de adobe com pátios.",
    roupas_modo_de_vida: "Roupas tradicionais muito coloridas com padrões geométricos únicos.",
    fauna_alimentacao: "Base de milho, feijão e pratos ancestrais como os tamales."
  }
};
