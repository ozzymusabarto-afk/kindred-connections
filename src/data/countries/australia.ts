import type { Pais } from "../types";

export const australia: Pais = {
  id: "australia",
  nome: "Austrália",
  continente: "oceania",
  codigo_mapa: "au",
  bandeira: "🇦🇺",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-au.png",
  capital: "Camberra",
  coordenadas: { x: 88, y: 78 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_front_view.jpg/1280px-Sydney_Opera_House_-_front_view.jpg",
  resumo_geografico: "A maior ilha do mundo e um continente inteiro. A Austrália é uma terra de contrastes, onde cidades ultra-modernas na costa dão lugar ao imenso 'Outback' — um deserto vermelho e selvagem no interior. É o lar de animais que não existem em nenhum outro lugar do planeta e da maior estrutura viva da Terra: a Grande Barreira de Corais.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_from_Air.jpg/1920px-Sydney_Opera_House_and_Harbour_Bridge_from_Air.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Chegada à Austrália no Aeroporto de Sydney",
      credito: "Wikimedia Commons"
    },
    texto: "Prepare-se para pousar na 'Terra de Cabeça para Baixo'! Olhe pela janela: a Baía de Sydney brilha sob o sol, com o desenho inconfundível da Opera House que parece velas de um barco ao vento. A Austrália é imensa e muito isolada, o que permitiu que a natureza seguisse caminhos únicos aqui. O fuso horário é quase o oposto do Brasil — quando lá é noite, aqui o dia está apenas começando!",
    fala_piloto_original: "G'day mates! This is your captain speaking. We are landing at Sydney Kingsford Smith Airport. The weather is beautiful, 25 degrees and sunny. Welcome to Australia!",
    fala_piloto_traducao: "Bom dia, parceiros! Aqui é o capitão. Estamos pousando no Aeroporto Kingsford Smith, em Sydney. O tempo está lindo, 25 graus e ensolarado. Bem-vindos à Austrália!",
    idioma: "Inglês",
    fuso_horario: "+13 a +14 horas em relação a Brasília",
    temperatura: "25 °C, brisa marinha",
    galeria: [
      {
        id: "au-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sydney_Harbour_Aerial.jpg/1920px-Sydney_Harbour_Aerial.jpg",
        legenda: "A icônica baía de Sydney vista do alto",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Acampamento de Luxo no Outback",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Uluru_Panorama.jpg/1920px-Uluru_Panorama.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Outback_Ambience.mp3",
      legenda: "Vento e pássaros no deserto Outback",
      credito: "Wikimedia Commons"
    },
    descricao: "“G'day! Eu sou o Jack e vou te mostrar as maravilhas da nossa ilha. Estamos acampados no coração do Outback, perto da rocha sagrada de Uluru. O solo aqui é vermelho por causa do ferro na terra. À noite, o céu é tão limpo que você verá milhares de estrelas que não aparecem no hemisfério norte. Cuidado com as botas antes de calçar — algum bichinho pode ter resolvido tirar um cochilo dentro delas!”",
    galeria: [
      {
        id: "au-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Uluru_Panorama.jpg/1920px-Uluru_Panorama.jpg",
        legenda: "O imenso Uluru no pôr do sol",
        credito: "Wikimedia Commons"
      }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Sydney e a Vida na Costa",
      descricao: "Sydney é uma cidade que vive para o mar. Milhões de pessoas pegam balsas todos os dias para ir ao trabalho, aproveitando a vista da ponte e da famosa Opera House. Observe como a arquitetura da Opera House usa formas curvas para lembrar a natureza. Depois, vamos visitar a praia de Bondi, onde o surfe é quase uma religião.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sydney_Opera_House_2.jpg/1920px-Sydney_Opera_House_2.jpg",
      guia_nome: "Jack",
      transporte: {
        nome: "Ferry (Balsa) de Sydney",
        icone: "⛴️",
        descricao: "As balsas amarelas e verdes são o símbolo do transporte público de Sydney. É o jeito mais bonito e refrescante de circular pela cidade."
      },
      fauna_do_dia: {
        id: "canguru",
        contexto: "Ao entardecer, os cangurus saem para pastar nas áreas gramadas perto da costa. Eles são os maratonistas do salto!",
        galeria: [
          {
            id: "au-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Red_kangaroo_jumping02.jpg/1920px-Red_kangaroo_jumping02.jpg",
            legenda: "Canguru saltando no Outback",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "vegemite",
        contexto: "Torrada com Vegemite — uma pasta escura e salgada que todo australiano adora, mas que os turistas acham bem estranha no começo!"
      },
      observacao: {
        titulo: "Opera House de Sydney",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sydney_Opera_House_2.jpg/1920px-Sydney_Opera_House_2.jpg",
        hotspots: [
          {
            id: "telhado",
            x: 50,
            y: 35,
            titulo: "As Velas de Cerâmica",
            texto: "O telhado é coberto por mais de um milhão de azulejos brancos suecos que brilham sob o sol e refletem a luz do mar."
          },
          {
            id: "porto",
            x: 70,
            y: 80,
            titulo: "Porto de Sydney",
            texto: "Um dos portos naturais mais profundos do mundo. Aqui, a água é o caminho principal de muita gente."
          }
        ]
      },
      perguntas: [
        {
          id: "a1",
          tipo: "observacao",
          etapa: "transporte",
          texto: "A balsa balança suavemente com as ondas. Por que você acha que muitas cidades preferem usar barcos em vez de construir pontes em todos os lugares?"
        },
        {
          id: "a2",
          tipo: "comparacao",
          etapa: "observacao",
          texto: "A Opera House parece um barco ou conchas. Se você fosse desenhar um prédio inspirado na natureza da sua cidade, como ele seria?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "canguru",
      nome: "Canguru-Vermelho",
      nome_cientifico: "Osphranter rufus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Red_kangaroo_jumping02.jpg/1920px-Red_kangaroo_jumping02.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Kangaroo_Sound.mp3",
      curiosidade: "É o maior marsupial do mundo. Ele usa sua cauda musculosa como um 'terceiro pé' para se equilibrar e pode saltar até 9 metros de distância em um único pulo!",
      habitat: "Planícies abertas, desertos e bosques da Austrália."
    }
  ],
  gastronomia: [
    {
      id: "vegemite",
      nome: "Vegemite na Torrada",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vegemite_on_toast.jpg/1920px-Vegemite_on_toast.jpg",
      adjetivo: "salgado",
      historia: "Criado em 1922 a partir de extrato de levedura, tornou-se o café da manhã nacional. É riquíssimo em vitamina B e faz parte da identidade australiana."
    }
  ],
  comparativo: {
    clima_predominante: "Árido no interior e temperado/tropical na costa",
    bioma_principal: "Desertos, savanas e recifes de coral",
    elemento_marcante: "A fauna única de marsupiais e o isolamento geográfico",
    agricultura_construcoes: "Cidades litorâneas modernas e fazendas de ovelhas gigantescas no interior seco.",
    roupas_modo_de_vida: "Estilo de vida ao ar livre, muito surfe, churrasco (Barbie) e proteção solar rigorosa.",
    fauna_alimentacao: "Dieta rica em carnes, frutos do mar e influências asiáticas, com destaque para a preservação do coalas e cangurus."
  }
};
