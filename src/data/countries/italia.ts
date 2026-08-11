import type { Pais } from "../types";

export const italia: Pais = {

  id: "italia",

  nome: "Itália",

  continente: "europa",

  codigo_mapa: "it",

  bandeira: "🇮🇹",

  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-it.png",

  capital: "Roma",

  coordenadas: { x: 53, y: 38 },

  imagem_capa: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",

  credito: "Unsplash",

  resumo_geografico: "O berço da história romana e do Renascimento! Com seu famoso formato de bota avançando pelo Mar Mediterrâneo, a Itália reúne ruínas da Antiguidade, canais navegáveis em Veneza, colinas de vinhedos na Toscana e vulcões ativos.",

  

  // ==========================================

  // 1. CHEGADA (O Voo e as Boas-vindas)

  // ==========================================

  chegada: {

    imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",

    },

    idioma: "Italiano",

    fuso_horario: "15h00 no horário local — 4 horas a mais que Brasília",

    temperatura: "23 °C, dia ensolarado e clima mediterrâneo",

    fala_piloto_original: "Benvenuti in Italia! Preparate i vostri bagagli per atterrare a Roma...",

    fala_piloto_traducao: "Bem-vindos à Itália! Preparem suas bagagens para pousar em Roma...",

    texto: "Olhe pela janela! Do alto, avistamos as sete colinas históricas de Roma, os arcos milenares do Coliseu e as águas azuis do Mar Tirreno.",

    galeria: [

      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",

      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80"

    ]

  },

  // ==========================================

  // 2. CHECK-IN (Base de Operações)

  // ==========================================

  base: {

    nome: "Residência Histórica no Centro Antigo de Roma / Florença",

    imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Bandolim e acordeão tocando tarantela tradicional"

    },

    descricao: "“Benvenuti, esploratori! Na Itália, cada pedra guarda milênios de engenharia, arte de mestres como Leonardo da Vinci e uma paixão única por reunir as pessoas à mesa.”",

    galeria: [

      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"

    ]

  },

  // ==========================================

  // 3. ROTEIRO (As 5 Estações)

  // ==========================================

  roteiro_viagem: [

    {

      dia: 1,

      titulo: "Dia 1: O Coliseu Romano, as Gôndolas e os Segredos da Engenharia Antiga",

      clima_do_dia: "24 °C, clima quente e agradável",

      

      // ESTAÇÃO 1: TRANSPORTE

      transporte: {

        nome: "Gôndola de Veneza e Trens Frecciarossa",

        icone: "🚣\u200d♂️",

        descricao: "Em Veneza, usam-se as tradicionais gôndolas de madeira para navegar pelos canais sem estradas, enquanto entre as grandes cidades rodamos nos velozes trens Frecciarossa.",

        imagem_url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",

        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Remo mergulhando suavemente na água dos canais venezianos" }

      },

      // ESTAÇÃO 2: OBSERVAÇÃO

      observacao: {

        titulo: "Anfiteatro Flávio (O Coliseu de Roma)",

        imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",

        hotspots: [

          { id: "arcos-romanos", x: 48, y: 45, titulo: "Arcos de Concreto Romano", texto: "Construído há quase 2.000 anos com uma mistura especial de puzolana (cinza vulcânica) e pedra, criando arcos resistentes que influenciaram toda a arquitetura mundial." },

          { id: "hipogeu", x: 52, y: 70, titulo: "O Hipogeu (Labirinto Subterrâneo)", texto: "Abaixo da arena havia uma complexa rede de túneis, elevadores mecânicos e alçapões para preparar as grandes celebrações e espetáculos." }

        ]

      },

      // ESTAÇÃO 3: NATUREZA

      fauna_do_dia: {

        id: "lobo-apenino-e-urso-marsicano",

        contexto: "Observe a cadeia de montanhas dos Apeninos e o Parque do Gran Sasso!",

        texto_guia: "O Lobo-Apenino é o animal nacional da Itália e habita as montanhas preservadas, ao lado do raro Urso-Pardo-Marsicano e dos íbex-alpinos que escalam paredões rochosos com facilidade."

      },

      // ESTAÇÃO 4: SABORES

      sabor_do_dia: {

        id: "pasta-fresca-e-gelato",

        contexto: "Hora de celebrar a tradição gastronômica mais famosa do mundo!",

        texto_guia: "Saboreie uma autêntica Pasta Fresca de sêmola de trigo cozida *al dente*, acompanhada de um verdadeiro Gelato artesanal italiano ou de uma Pizza napolitana com queijo Mozzarella fresco."

      },

      // ESTAÇÃO 5: CARIMBO

      desafio: {

        pergunta: "Qual grande monumento de pedra em formato circular, construído há quase dois mil anos em Roma, é uma das Sete Maravilhas do Mundo Moderno?",

        opcoes: ["A Torre de Pisa", "O Coliseu", "O Parthenon"],

        correta: 1,

        explicacao: "O Coliseu de Roma é o maior anfiteatro construído no Império Romano e recebe milhões de visitantes todos os anos."

      },

      // CONEXÃO PEDAGÓGICA

      notas_brasil: {

        transporte: { texto: "Centenas de milhares de imigrantes italianos chegaram ao Brasil entre os séculos XIX e XX, ajudando a construir ferrovias, indústrias e bairros inteiros como a Mooca e o Bixiga em São Paulo." },

        observacao: { texto: "A gastronomia italiana incorporou-se completamente à cultura brasileira: a pizza de domingo, o macarrão em família e a polenta são parte da rotina em quase todo o país!" }

      }

    }

  ]

};