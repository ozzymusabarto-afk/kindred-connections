import type { Pais } from "../types";

export const marrocos: Pais = {

  id: "marrocos",

  nome: "Marrocos",

  continente: "africa",

  codigo_mapa: "ma",

  bandeira: "🇲🇦",

  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-ma.png",

  capital: "Rabat",

  coordenadas: { x: 45, y: 44 },

  imagem_capa: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",

  credito: "Unsplash",

  resumo_geografico: "Onde o Oceano Atlântico e o Mar Mediterrâneo encontram o Saara! O Marrocos é marcado pelas cordilheiras do Atlas, cidades imperiais cercadas por muralhas seculares, oásis verdes e os deslumbrantes mercados das medinas.",

  

  // ==========================================

  // 1. CHEGADA (O Voo e as Boas-vindas)

  // ==========================================

  chegada: {

    imagem_url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",

    },

    idioma: "Árabe e Amazigh (Berbere) [Francês amplamente utilizado]",

    fuso_horario: "15h00 no horário local — 4 horas a mais que Brasília",

    temperatura: "27 °C, dia seco e ensolarado com brisa atlântica",

    fala_piloto_original: "Marhaban bikum fi al-Maghrib! Yurja ihtidad al-amti'ati lil-hubut fi al-Dar al-Bayda...",

    fala_piloto_traducao: "Sejam bem-vindos ao Marrocos! Por favor, preparem suas bagagens para pousar em Casablanca...",

    texto: "Olhe pela janela! Do alto, vemos o contraste dramático das águas azuis do Atlântico com a terra avermelhada, a grande Mesquita Hassan II e as cordilheiras do Atlas ao fundo.",

    galeria: [
      { id: "ma-chegada-1", imagem_url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80", legenda: "Casablanca da janela do avião" },
      { id: "ma-chegada-2", imagem_url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80", legenda: "Dunas do Saara" }
    ]

  },

  // ==========================================

  // 2. CHECK-IN (Base de Operações)

  // ==========================================

  base: {

    nome: "Riad Tradicional com Pátio e Mosaicos em Marrakech / Fez",

    imagem_url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Dedilhado hipnotizante do gimbri (instrumento gnawa) e murmúrio festivo da praça Jemaa el-Fna"

    },

    descricao: "“Marhaban bikum, exploradores! No Marrocos, vocês entram em um mundo de aromas de especiarias, portas artesanais detalhadas, tapetes tecidos à mão e histórias milenares das caravanas do deserto.”",

    galeria: [
      { id: "ma-base-1", imagem_url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80", legenda: "Interior de um Riad" }
    ]

  },

  // ==========================================

  // 3. ROTEIRO (As 5 Estações)

  // ==========================================

  roteiro_viagem: [

    {

      dia: 1,

      titulo: "Dia 1: A Medina de Marrakech, os Mosaicos e as Caravanas do Deserto",

      descricao: "Explorando os mercados vibrantes e a arte dos mosaicos marroquinos.",

      imagem_url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",

      clima_do_dia: "26 °C, ensolarado e clima agradável",

      

      // ESTAÇÃO 1: TRANSPORTE

      transporte: {

        nome: "Trem de Alta Velocidade Al Boraq e Caravanas Tradicionais",

        icone: "🚆",

        descricao: "O Al Boraq é o primeiro trem de alta velocidade da África (ultrapassando 320 km/h entre Tanger e Casablanca), convivendo harmonicamente com as tradicionais caminhadas e caravanas no deserto.",

        imagem_url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",

        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Deslizar suave do trem moderno de alta velocidade ao longo da costa" }

      },

      // ESTAÇÃO 2: OBSERVAÇÃO

      observacao: {

        titulo: "Medina de Marrakech e a Praça Jemaa el-Fna",

        imagem_url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",

        hotspots: [

          { id: "zellige-mosaicos", x: 45, y: 50, titulo: "Arte do Zellige (Mosaicos Cerâmicos)", texto: "Geometria perfeita criada por artesãos que cortam manualmente pequenas peças de cerâmica colorida para formar padrões impressionantes nas paredes." },

          { id: "souks-especiarias", x: 70, y: 60, titulo: "Souks (Mercados Tradicionais)", texto: "Labirintos cheios de vida com pirâmides de especiarias coloridas (açafrão, canela, cominho), lâmpadas de latão perfurado e tapetes artesanais." }

        ]

      },

      // ESTAÇÃO 3: NATUREZA

      fauna_do_dia: {

        id: "macaco-de-gibraltar-e-feneco",

        contexto: "Observe as florestas de cedro das Montanhas do Atlas e as dunas de Merzouga!",

        texto_guia: "O Macaco-de-Gibraltar (Macaca sylvanus) habita as florestas de cedro dos Atlas marroquinos, enquanto raposos-do-deserto e dromedários caminham livremente pelas dunas de areia do Saara."

      },

      // ESTAÇÃO 4: SABORES

      sabor_do_dia: {

        id: "tajine-cuscuz-e-cha-de-menta",

        contexto: "Hora de saborear uma das culinárias mais aromáticas do planeta!",

        texto_guia: "Experimente o tradicional Tajine (cozido lento de legumes e carnes feito em panela de barro cônica com amêndoas e ameixas), acompanhado de Cuscuz marroquino e do famoso Chá de Menta servido bem alto."

      },

      // ESTAÇÃO 5: CARIMBO

      desafio: {

        pergunta: "Como se chama o famoso prato cozinhado em uma panela artesanal de barro com tampa cônica típico do Marrocos?",

        opcoes: ["Feijoada", "Tajine", "Paella"],

        correta: 1,

        explicacao: "O Tajine é o prato mais emblemático da gastronomia marroquina, mantendo o sabor dos temperos e a suculência dos alimentos no cozimento lento a vapor."

      },

      // CONEXÃO PEDAGÓGICA

      notas_brasil: {

        transporte: { texto: "O cuscuz, que é a base da alimentação no Marrocos, chegou ao Brasil com os colonizadores e se transformou no famoso cuscuz nordestino e paulista!" },

        observacao: { texto: "A arquitetura e os azulejos ornamentados marroquinos influenciaram diretamente as construções e pátios internos coloniais presentes no Brasil urbano desde o século XVI." }

      }

    }

  ],

  fauna_flora: [],
  gastronomia: [],
  comparativo: {
    clima_predominante: "Mediterrânico ao norte e desértico ao sul",
    bioma_principal: "Montanhas, deserto e costa atlântica",
    elemento_marcante: "Medinas, especiarias e mosaicos zellige",
    agricultura_construcoes: "Azeitonas, tâmaras e argão. Riads e cidades de adobe.",
    roupas_modo_de_vida: "Chilabas, chá de hortelã e hospitalidade calorosa.",
    fauna_alimentacao: "Dromedários, raposas e uma culinária rica em especiarias e cuscuz."
  }

};