import type { Pais } from "../types";

export const china: Pais = {
  id: "china",
  nome: "China",
  continente: "asia",
  codigo_mapa: "cn",
  bandeira: "🇨🇳",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-cn.png",
  capital: "Pequim",
  coordenadas: { x: 80, y: 40 },
  imagem_capa: "/__l5e/assets-v1/c8e30a00-b270-4580-8a27-90dcc62ebfca/china-capa.jpg",
  resumo_geografico: "Uma das civilizações mais antigas do mundo, a China é um país de proporções gigantescas. Da Grande Muralha que serpenteia as montanhas às cidades futuristas como Xangai, o país oferece um contraste fascinante entre tradições milenares e inovação tecnológica de ponta.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Forbidden_City_Beijing_Aerial_View.jpg/1200px-Forbidden_City_Beijing_Aerial_View.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Chegada a Pequim, no coração da Ásia",
      credito: "Wikimedia Commons"
    },
    texto: "Estamos sobrevoando Pequim! Olhe para baixo e tente avistar a Cidade Proibida, um enorme complexo de palácios vermelhos e amarelos que já foi o coração do império. A China é o país mais populoso do mundo e aqui tudo é grandioso. O idioma é o mandarim e o fuso horário está 11 horas à frente do Brasil. Vamos pousar e explorar!",
    fala_piloto_original: "Nín hǎo! Huānyíng lái dào Běijīng. Welcome to Beijing Capital International Airport. The temperature is 24 degrees.",
    fala_piloto_traducao: "Olá! Bem-vindos a Pequim. A temperatura é de 24 graus. Bem-vindos ao Aeroporto Internacional de Pequim!",
    idioma: "Mandarim",
    fuso_horario: "+11 horas em relação a Brasília",
    temperatura: "24 °C",
    galeria: [
      {
        id: "cn-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Beijing_Skyline_Aerial.jpg/1200px-Beijing_Skyline_Aerial.jpg",
        legenda: "Vista aérea de Pequim e seus palácios imperiais",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Hutong Tradicional em Pequim",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Beijing_Hutong_2011.JPG/1200px-Beijing_Hutong_2011.JPG",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Beijing_Hutong_Ambience.mp3",
      legenda: "O som calmo das vielas (Hutongs) de Pequim",
      credito: "Wikimedia Commons"
    },
    descricao: "“Nín hǎo! Sou Li, seu guia na China. Estamos hospedados em um Hutong, um bairro tradicional de vielas estreitas e casas com pátios internos. Aqui vive o verdadeiro espírito de Pequim. Prepare-se, pois hoje caminharemos sobre a história!”",
    galeria: [
      {
        id: "cn-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Beijing_Hutong_2011.JPG/1200px-Beijing_Hutong_2011.JPG",
        legenda: "Um pátio tradicional em Pequim",
        credito: "Wikimedia Commons"
      }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Grande Muralha",
      descricao: "Caminhar sobre a Grande Muralha é como andar sobre o dorso de um dragão de pedra. Ela foi construída há séculos para proteger o país. Olhe como ela segue o topo das montanhas até onde a vista alcança!",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
      guia_nome: "Li",
      transporte: {
        nome: "Teleférico e Caminhada",
        icone: "🚠",
        descricao: "Subimos as montanhas de teleférico para alcançar as torres de vigia da muralha sem cansar muito antes da exploração."
      },
      fauna_do_dia: {
        id: "panda-gigante",
        contexto: "O Panda Gigante é o tesouro nacional da China. Ele passa a maior parte do dia comendo bambu nas florestas úmidas.",
        galeria: [
          {
            id: "cn-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
            legenda: "Panda Gigante comendo bambu",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "dim-sum",
        contexto: "Pequenos bolinhos cozidos no vapor em cestas de bambu. Cada um é uma surpresa de sabor diferente!"
      },
      observacao: {
        titulo: "As Torres de Vigia",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
        hotspots: [
          {
            id: "muralha-pedra",
            x: 50,
            y: 60,
            titulo: "Engenharia Milenar",
            texto: "As pedras foram encaixadas com tanta precisão que a muralha resiste a terremotos e ao tempo há mais de 2 mil anos."
          }
        ]
      },
      perguntas: [
        {
          id: "c1",
          tipo: "observacao",
          etapa: "observacao",
          texto: "A muralha é muito larga, cabiam até cavalos correndo sobre ela. Por que você acha que eles precisavam de tanto espaço no topo?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "panda-gigante",
      nome: "Panda Gigante",
      nome_cientifico: "Ailuropoda melanoleuca",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Giant_Panda_Sound.mp3",
      curiosidade: "Um panda adulto come cerca de 12 a 38 kg de bambu por dia! Eles têm um 'sexto dedo' no pulso que ajuda a segurar os caules de bambu.",
      habitat: "Florestas de bambu nas montanhas da China central."
    }
  ],
  gastronomia: [
    {
      id: "dim-sum",
      nome: "Dim Sum",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dim_Sum_San_Francisco.jpg/1200px-Dim_Sum_San_Francisco.jpg",
      adjetivo: "delicado",
      historia: "Significa 'tocar o coração'. Surgiu como um lanche para viajantes que paravam para tomar chá nas Rotas da Seda."
    }
  ],
  comparativo: {
    clima_predominante: "Extremamente variado, de desertos gelados a florestas tropicais",
    bioma_principal: "Montanhas, planaltos e vales fluviais",
    elemento_marcante: "A convivência entre o progresso tecnológico e a sabedoria milenar",
    agricultura_construcoes: "Terras em degraus (terraços de arroz) e arquitetura tradicional de telhados curvos.",
    roupas_modo_de_vida: "Vida comunitária intensa nos parques e grande foco em caligrafia e artes marciais.",
    fauna_alimentacao: "Dieta baseada em arroz, soja e chás, com animais icônicos como o panda e o tigre de Amoy."
  }
};
