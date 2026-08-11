import { Pais } from "../types";

/**
 * Roteiro completo do Japão — 3 dias de expedição imersiva.
 * Dia 1: Tóquio (A metrópole do futuro e o cruzamento de Shibuya)
 * Dia 2: Quioto (Templos, tradição e o silêncio dos jardins Zen)
 * Dia 3: Monte Fuji / Hakone (Natureza vulcânica e águas termais)
 */
export const japao: Pais = {
  id: "japao",
  nome: "Japão",
  continente: "asia",
  codigo_mapa: "jp",
  bandeira: "🇯🇵",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-jp.png",
  capital: "Tóquio",
  coordenadas: { x: 88, y: 38 },
  imagem_capa: "/__l5e/assets-v1/9f0d4526-6b9c-4e8e-b124-91e0901e4b3c/japan-capa.jpg",
  resumo_geografico: "Um arquipélago formado por mais de 6.000 ilhas, onde o futuro e o passado caminham lado a lado. Das luzes de neon de Tóquio aos templos silenciosos de Quioto, o Japão é uma terra de montanhas vulcânicas, florestas de bambu e uma cultura baseada no respeito, na tecnologia e na harmonia com as estações do ano.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tokyo_Bay_from_above.jpg/1920px-Tokyo_Bay_from_above.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto de Narita, Tóquio",
      credito: "Wikimedia Commons"
    },
    idioma: "Japonês",
    fuso_horario: "12 horas à frente de Brasília",
    temperatura: "22 °C, dia ensolarado",
    fala_piloto_original: "Minasama, konnichiwa! Captain speaking. We are approaching Tokyo Narita Airport. The temperature is 22 degrees with clear skies. Welcome to Japan!",
    fala_piloto_traducao: "Boa tarde a todos! Aqui é o capitão. Estamos nos aproximando do Aeroporto de Narita, em Tóquio. A temperatura é de 22 graus com céu limpo. Bem-vindos ao Japão!",
    texto: "Aperte o cinto, explorador! Estamos sobrevoando a Baía de Tóquio. Olhe pela janela: a cidade parece um oceano infinito de prédios e luzes. Lá ao fundo, em dias claros, podemos ver o pico nevado do Monte Fuji. O Japão está 12 horas à frente do Brasil — aqui o sol nasce primeiro! Vamos pousar no Aeroporto de Narita e começar nossa jornada pelo 'País do Sol Nascente'.",
    galeria: [
      {
        id: "jp-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tokyo_Aerial_View.jpg/1920px-Tokyo_Aerial_View.jpg",
        legenda: "A imensidão urbana de Tóquio vista do céu",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Ryokan Tradicional em Quioto",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ryokan_room_in_Kyoto.jpg/1920px-Ryokan_room_in_Kyoto.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Japanese_Garden_Ambience.mp3",
      legenda: "Silêncio e sons de um jardim japonês",
      credito: "Wikimedia Commons"
    },
    descricao: "“Kon'nichiwa! Eu me chamo Akiko e serei sua guia nesta expedição. Para começar nossa viagem, estamos em um Ryokan — uma hospedaria tradicional. Repare que não há sapatos dentro do quarto, o chão é feito de palha trançada (tatami) e dormiremos em colchões macios chamados futons. O Japão é um país que valoriza muito o espaço e o silêncio. Prepare seu agasalho leve, vamos pegar o trem mais rápido do mundo!”",
    galeria: [
      {
        id: "jp-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ryokan_room_in_Kyoto.jpg/1920px-Ryokan_room_in_Kyoto.jpg",
        legenda: "Um quarto Ryokan com tatamis",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Velocidade da Luz em Tóquio",
      descricao: "Tóquio é uma das cidades mais modernas e limpas do mundo. Aqui, robôs ajudam as pessoas e os trens chegam no segundo exato.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Shibuya_Crossing%2C_Tokyo%2C_Japan.jpg/1920px-Shibuya_Crossing%2C_Tokyo%2C_Japan.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Akiko",
      guia_local: "Akiko, guia de Tóquio",
      clima_do_dia: "22 °C, ensolarado",
      transporte: {
        nome: "Shinkansen (Trem Bala)",
        icone: "🚄",
        descricao: "O Shinkansen flutua sobre os trilhos a mais de 300 km/h! Ele é tão suave que você pode equilibrar uma moeda na mesa sem que ela caia.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Series_E5_Hayabusa_201201.jpg/1280px-Series_E5_Hayabusa_201201.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Cruzamento de Shibuya",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Shibuya_Crossing%2C_Tokyo%2C_Japan.jpg/1920px-Shibuya_Crossing%2C_Tokyo%2C_Japan.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "multidao",
            x: 50,
            y: 70,
            titulo: "Organização Impecável",
            texto: "Milhares de pessoas atravessam ao mesmo tempo, mas ninguém esbarra em ninguém. A regra é sempre manter a esquerda."
          },
          {
            id: "neon",
            x: 20,
            y: 30,
            titulo: "Luzes de Neon",
            texto: "À noite, as fachadas dos prédios viram telas gigantes. Tóquio gasta muita energia, mas usa tecnologia LED para ser eficiente."
          }
        ]
      },
      fauna_do_dia: {
        id: "macaco-japones",
        contexto: "Nas montanhas nevadas, os macacos japoneses relaxam em fontes de água termal quente para fugir do frio.",
        galeria: [
          {
            id: "jp-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Macaca_fuscata_it_is_snowing.jpg/1920px-Macaca_fuscata_it_is_snowing.jpg",
            legenda: "Macaco Japonês na neve",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "sushi",
        contexto: "Peixe fresquíssimo combinado com arroz temperado. No Japão, a comida é uma obra de arte visual!"
      },
      perguntas: [
        {
          id: "j1",
          tipo: "observacao",
          etapa: "transporte",
          texto: "O trem bala é super silencioso mesmo sendo muito rápido. Por que o silêncio é tão importante para os japoneses nos lugares públicos?"
        }
      ],
      desafio: {
        pergunta: "Qual o nome do famoso trem de alta velocidade do Japão?",
        opcoes: ["Foguete", "Shinkansen", "Expresso"],
        correta: 1,
        explicacao: "O Shinkansen é um dos trens mais rápidos e pontuais do mundo!"
      }
    }
  ],

  fauna_flora: [
    {
      id: "macaco-japones",
      nome: "Macaco Japonês",
      nome_cientifico: "Macaca fuscata",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Macaca_fuscata_it_is_snowing.jpg/1920px-Macaca_fuscata_it_is_snowing.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Japanese_Macaque_Sound.mp3",
      curiosidade: "Também chamados de Macacos da Neve, são os primatas que vivem mais ao norte do mundo. Eles aprenderam a tomar banho em águas termais quentes para sobreviver ao inverno rigoroso.",
      habitat: "Montanhas nevadas e florestas do Japão.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "sushi",
      nome: "Sushi",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_festival.jpg/1920px-Sushi_festival.jpg",
      adjetivo: "delicado",
      historia: "Originalmente era uma forma de conservar o peixe em arroz fermentado. Hoje, é apreciado pela pureza dos ingredientes.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Temperado com estações bem definidas e neve no norte",
    bioma_principal: "Florestas temperadas e arquipélagos vulcânicos",
    elemento_marcante: "A tecnologia de ponta convivendo com tradições milenares",
    agricultura_construcoes: "Terras limitadas levam ao uso de tecnologia hidropônica e prédios super resistentes a terremotos.",
    roupas_modo_de_vida: "Uso de Kimonos em festivais e roupas sociais modernas no trabalho. Grande foco em educação e limpeza pública.",
    fauna_alimentacao: "Baseada em frutos do mar, arroz e vegetais, com destaque para a preservação de espécies como o grou-japones."
  }
};
