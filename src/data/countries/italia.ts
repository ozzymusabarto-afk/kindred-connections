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
      { id: "it-chegada-1", imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", legenda: "Roma, a Cidade Eterna" },
      { id: "it-chegada-2", imagem_url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80", legenda: "Costa Italiana" }
    ]
  },

  base: {
    nome: "Residência Histórica no Centro Antigo de Roma / Florença",
    imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Bandolim e acordeão tocando tarantela tradicional"
    },
    descricao: "“Benvenuti, esploratori! Na Itália, cada pedra guarda milênios de engenharia, arte de mestres como Leonardo da Vinci e uma paixão única por reunir as pessoas à mesa.”",
    galeria: [
      { id: "it-base-1", imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", legenda: "Arquitetura Clássica" }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Coliseu Romano, as Gôndolas e os Segredos da Engenharia Antiga",
      descricao: "Explorando as maravilhas da engenharia romana e os canais de Veneza.",
      imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "24 °C, clima quente e agradável",
      
      transporte: {
        nome: "Gôndola de Veneza e Trens Frecciarossa",
        icone: "🚣‍♂️",
        descricao: "Em Veneza, usam-se as tradicionais gôndolas de madeira para navegar pelos canais sem estradas, enquanto entre as grandes cidades rodamos nos velozes trens Frecciarossa.",
        imagem_url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Remo mergulhando suavemente na água dos canais venezianos" }
      },

      observacao: {
        titulo: "Anfiteatro Flávio (O Coliseu de Roma)",
        imagem_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "arcos-romanos", x: 48, y: 45, titulo: "Arcos de Concreto Romano", texto: "Construído há quase 2.000 anos com uma mistura especial de puzolana (cinza vulcânica) e pedra, criando arcos resistentes que influenciaram toda a arquitetura mundial." },
          { id: "hipogeu", x: 52, y: 70, titulo: "O Hipogeu (Labirinto Subterrâneo)", texto: "Abaixo da arena havia uma complexa rede de túneis, elevadores mecânicos e alçapões para preparar as grandes celebrações e espetáculos." }
        ]
      },

      fauna_do_dia: {
        id: "lobo-apenino-e-urso-marsicano",
        contexto: "Observe a cadeia de montanhas dos Apeninos e o Parque do Gran Sasso!",
        texto_guia: "O Lobo-Apenino é o animal nacional da Itália e habita as montanhas preservadas, ao lado do raro Urso-Pardo-Marsicano e dos íbex-alpinos que escalam paredões rochosos com facilidade."
      },

      sabor_do_dia: {
        id: "pasta-fresca-e-gelato",
        contexto: "Hora de celebrar a tradição gastronômica mais famosa do mundo!",
        texto_guia: "Saboreie uma autêntica Pasta Fresca de sêmola de trigo cozida *al dente*, acompanhada de um verdadeiro Gelato artesanal italiano ou de uma Pizza napolitana com queijo Mozzarella fresco."
      },

      desafio: {
        pergunta: "Qual grande monumento de pedra em formato circular, construído há quase dois mil anos em Roma, é uma das Sete Maravilhas do Mundo Moderno?",
        opcoes: ["A Torre de Pisa", "O Coliseu", "O Parthenon"],
        correta: 1,
        explicacao: "O Coliseu de Roma é o maior anfiteatro construído no Império Romano e recebe milhões de visitantes todos os anos."
      },

      notas_brasil: {
        transporte: { texto: "Centenas de milhares de imigrantes italianos chegaram ao Brasil entre os séculos XIX e XX, ajudando a construir ferrovias, indústrias e bairros inteiros como a Mooca e o Bixiga em São Paulo." },
        observacao: { texto: "A gastronomia italiana incorporou-se completamente à cultura brasileira: a pizza de domingo, o macarrão em família e a polenta são parte da rotina em quase todo o país!" }
      }
    }
  ],

  fauna_flora: [],
  gastronomia: [],
  comparativo: {
    clima_predominante: "Mediterrânico ao sul e continental ao norte",
    bioma_principal: "Floresta mediterrânica, montanhas e planícies férteis",
    elemento_marcante: "A arte e a arquitetura clássica em cada esquina",
    agricultura_construcoes: "Trigo, uvas, azeitonas e tomates. Cidades de pedra.",
    roupas_modo_de_vida: "Moda elegante e vida social intensa nas praças.",
    fauna_alimentacao: "Peixes, queijos variados, massas frescas e azeite."
  }
};