import { Pais } from "../types";

export const costaRica: Pais = {
  id: "costa-rica",
  nome: "Costa Rica",
  continente: "america-central",
  codigo_mapa: "cr",
  bandeira: "🇨🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-cr.png",
  capital: "San José",
  coordenadas: { x: 22, y: 55 },
  imagem_capa: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?w=800&q=80",
  credito: "Wikimedia Commons",
  resumo_geografico: "O paraíso da biodiversidade! Com uma natureza exuberante que cobre boa parte do território, a Costa Rica é famosa por suas florestas tropicais, vulcões ativos e praias paradisíacas. Aqui, o lema é 'Pura Vida', celebrando a conexão profunda com a floresta e o respeito a todos os seres vivos.",

  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/San_Jose_Costa_Rica_skyline.jpg/1280px-San_Jose_Costa_Rica_skyline.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Chegada à Costa Rica, o paraíso da biodiversidade",
      credito: "Wikimedia Commons"
    },
    texto: "Estamos chegando em San José, cercada por vales e montanhas! O ar é fresco e o verde está por toda parte. Prepare-se para conhecer o coração da América Central.",
    idioma: "Espanhol",
    fuso_horario: "06h00 local — 3 horas a menos que Brasília",
    temperatura: "24 °C, clima ameno de montanha",
    galeria: [
      {
        id: "cr-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Costa_Rica_Nature_Aerial.jpg/1280px-Costa_Rica_Nature_Aerial.jpg",
        legenda: "As densas florestas tropicais da Costa Rica vistas de cima",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Ecolodge nas encostas do Vulcão Arenal",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Arenal_Volcano_and_Lake.jpg/1280px-Arenal_Volcano_and_Lake.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Rainforest_Ambience.mp3",
      legenda: "Sons da floresta tropical e pássaros",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Pura Vida, exploradores! Eu sou o guia Mateo. Aqui vivemos em harmonia com a floresta. Acordamos com o canto dos pássaros e dormimos com o som das águas termais.”",
    galeria: [
      {
        id: "cr-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Arenal_Volcano_and_Lake.jpg/1280px-Arenal_Volcano_and_Lake.jpg",
        legenda: "Vista do Vulcão Arenal a partir do lodge",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Floresta das Nuvens e o Vulcão",
      descricao: "Exploraremos a base do Vulcão Arenal, onde a floresta é tão úmida que as nuvens parecem flutuar entre as árvores.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Arenal_Volcano_Costa_Rica.jpg/1280px-Arenal_Volcano_Costa_Rica.jpg",
      guia_nome: "Mateo",
      clima_do_dia: "22 °C, nebuloso e úmido",
      transporte: {
        nome: "Jipe 4x4",
        icone: "🚙",
        descricao: "Um jipe resistente para subir as trilhas íngremes da montanha."
      },
      fauna_do_dia: {
        id: "preguica",
        contexto: "Uma preguiça de três dedos descansa lentamente no topo de uma árvore gigante.",
        galeria: [
          {
            id: "cr-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Three-toed_sloth_pygmy.jpg/1200px-Three-toed_sloth_pygmy.jpg",
            legenda: "Bicho-preguiça na selva",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "gallo-pinto",
        contexto: "O café da manhã tradicional: arroz com feijão temperado, delícia!"
      },
      perguntas: [
        { id: "cr-d1-1", tipo: "observacao", etapa: "observacao", texto: "Por que você acha que a floresta é chamada de 'floresta das nuvens'?" }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "preguica",
      nome: "Preguiça de três dedos",
      nome_cientifico: "Bradypus variegatus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bradypus_variegatus.jpg/1280px-Bradypus_variegatus.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sloth_Sound.mp3",
      curiosidade: "Elas se movem tão devagar que, às vezes, algas crescem em seu pelo, ajudando na camuflagem!",
      habitat: "Dossel das florestas tropicais."
    }
  ],
  gastronomia: [
    {
      id: "gallo-pinto",
      nome: "Gallo Pinto",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gallo_Pinto.jpg/1280px-Gallo_Pinto.jpg",
      adjetivo: "nutritivo",
      historia: "Um prato de arroz e feijão, temperado com pimentões e coentro. É a base da alimentação do país."
    }
  ],
  comparativo: {
    clima_predominante: "Tropical, com estações seca e chuvosa",
    bioma_principal: "Floresta tropical e floresta nublada",
    elemento_marcante: "O estilo 'Pura Vida' de viver",
    agricultura_construcoes: "Café, banana e abacaxi. Casas integradas à natureza.",
    roupas_modo_de_vida: "Vida ao ar livre, respeito máximo aos animais.",
    fauna_alimentacao: "Rica em frutas exóticas e grãos."
  }
};
