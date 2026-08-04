import { Pais } from "../types";

export const panama: Pais = {
  id: "panama",
  nome: "Panamá",
  continente: "america-central",
  codigo_mapa: "pa",
  bandeira: "🇵🇦",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1280px-Flag_of_Panama.svg.png",
  capital: "Cidade do Panamá",
  coordenadas: { x: 300, y: 480 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Panama_Canal_Miraflores_Locks.jpg/1280px-Panama_Canal_Miraflores_Locks.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "Onde dois oceanos se encontram! O Panamá é famoso pelo seu Canal, que conecta o Pacífico ao Atlântico, mudando a história da navegação mundial. Além disso, é um país com cidades modernas, ilhas paradisíacas e uma rica herança de povos indígenas.",

  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Panama_City_Skyline.jpg/1280px-Panama_City_Skyline.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Panamá, a ponte entre dois oceanos",
      credito: "Wikimedia Commons"
    },
    texto: "Bem-vindos à Cidade do Panamá! Veja os arranha-céus modernos que brilham sob o sol tropical. O Canal do Panamá é logo ali, o verdadeiro coração desta nação.",
    idioma: "Espanhol",
    fuso_horario: "09h00 local — 2 horas a menos que Brasília",
    temperatura: "28 °C, clima quente e úmido",
    galeria: [
      {
        id: "pa-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Panama_Canal_Aerial_View.jpg/1280px-Panama_Canal_Aerial_View.jpg",
        legenda: "O Canal do Panamá visto do céu",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Hotel próximo ao Canal do Panamá",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Panama_Canal_Miraflores_Locks.jpg/1280px-Panama_Canal_Miraflores_Locks.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Panama_Canal_Ambience.mp3",
      legenda: "O som industrial e das águas no Canal",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Hola! Sou o capitão Lucas. Aqui, verá navios gigantes passando entre dois oceanos. O Panamá é a ponte do mundo.”",
    galeria: [
      {
        id: "pa-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Panama_Canal_Miraflores_Locks.jpg/1280px-Panama_Canal_Miraflores_Locks.jpg",
        legenda: "As eclusas de Miraflores no Canal do Panamá",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Maravilha do Canal",
      descricao: "Veremos como gigantescos cargueiros sobem e descem usando o sistema de eclusas que regula o nível da água do canal.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Panama_Canal_Miraflores_Locks.jpg/1280px-Panama_Canal_Miraflores_Locks.jpg",
      guia_nome: "Lucas",
      clima_do_dia: "29 °C, quente e ensolarado",
      transporte: {
        nome: "Barco de turismo pelo canal",
        icone: "🛥️",
        descricao: "Navegaremos por uma pequena parte do caminho que os grandes navios fazem."
      },
      fauna_do_dia: {
        id: "tucano",
        contexto: "Um tucano de bico colorido observa a movimentação das árvores próximas às eclusas.",
        galeria: [
          {
            id: "pa-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Toco_Toucan_P1130498.jpg/1280px-Toco_Toucan_P1130498.jpg",
            legenda: "Tucano-toco no Panamá",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "sancocho",
        contexto: "Uma sopa de galinha bem temperada, o prato nacional."
      },
      perguntas: [
        { id: "pa-d1-1", tipo: "observacao", etapa: "observacao", texto: "Como a água consegue mover navios tão pesados para subir a montanha do canal?" }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "tucano",
      nome: "Tucano-toco",
      nome_cientifico: "Ramphastos toco",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Toco_toucan.jpg/1280px-Toco_toucan.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Toucan_Sound.mp3",
      curiosidade: "Seu bico enorme é super leve e ajuda a controlar a temperatura do corpo, além de alcançar frutas longe nos galhos.",
      habitat: "Florestas tropicais e áreas abertas."
    }
  ],
  gastronomia: [
    {
      id: "sancocho",
      nome: "Sancocho",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Sancocho_paname%C3%B1o.jpg/1280px-Sancocho_paname%C3%B1o.jpg",
      adjetivo: "reconfortante",
      historia: "Uma sopa feita com galinha, mandioca e ervas locais. É um prato para reunir a família toda."
    }
  ],
  comparativo: {
    clima_predominante: "Tropical, quente o ano todo",
    bioma_principal: "Floresta tropical e zona do canal",
    elemento_marcante: "O Canal do Panamá, a ponte entre dois oceanos",
    agricultura_construcoes: "Produção de frutas tropicais. Arquitetura moderna na capital e histórica no Casco Viejo.",
    roupas_modo_de_vida: "Roupas leves devido ao calor. Vida urbana intensa.",
    fauna_alimentacao: "Peixes, frutas frescas e pratos de raiz como o sancocho."
  }
};
