import { Pais } from "../types";
export const peru: Pais = {
  id: "peru",
  nome: "Peru",
  continente: "america-do-sul",
  codigo_mapa: "pe",
  bandeira: "🇵🇪",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png",
  capital: "Lima",
  coordenadas: { x: 25, y: 63 },
  imagem_capa: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1280",
  resumo_geografico: "O berço do império Inca. O Peru é uma terra de montanhas andinas íngremes, ruínas arqueológicas misteriosas e uma gastronomia que é uma das melhores do mundo.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Machu_Picchu_Peru.jpg/1280px-Machu_Picchu_Peru.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Lima",
      credito: "Wikimedia Commons"
    },
    idioma: "Espanhol",
    fuso_horario: "-2 horas em relação a Brasília",
    temperatura: "20 °C, úmido",
    fala_piloto_original: "¡Bienvenidos al Perú! The temperature in Lima is 20 degrees.",
    fala_piloto_traducao: "Bem-vindos ao Peru! A temperatura em Lima é de 20 graus.",
    texto: "Estamos sobrevoando a costa do Pacífico! Preparem-se para conhecer a história dos Incas e montanhas que tocam as nuvens.",
    galeria: []
  },
  base: {
    nome: "Pousada em Cusco",
    imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1280",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cusco_Market_Ambience.mp3",
      legenda: "Sons do mercado tradicional em Cusco",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Hola! Sou Elena, sua guia. Bem-vindos ao coração dos Andes!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Machu Picchu",
      descricao: "A cidade perdida dos Incas.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Machu_Picchu_Peru.jpg/1280px-Machu_Picchu_Peru.jpg",
      guia_nome: "Elena",
      guia_local: "Elena, guia de Cusco",
      clima_do_dia: "15 °C",
      transporte: {
        nome: "Trem Andino",
        icone: "🚂",
        descricao: "Um trem com teto de vidro para ver as montanhas durante a viagem."
      },
      fauna_do_dia: {
        id: "alpaca",
        contexto: "As alpacas são famosas por sua lã macia e quente."
      },
      sabor_do_dia: {
        id: "ceviche",
        contexto: "Peixe fresco marinado no limão, o prato nacional."
      },
      observacao: {
        titulo: "Ruínas de Machu Picchu",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Machu_Picchu_Peru.jpg/1280px-Machu_Picchu_Peru.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "alpaca",
      nome: "Alpaca",
      nome_cientifico: "Vicugna pacos",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Alpaca.jpg/1280px-Alpaca.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Llama_Sound.mp3",
      curiosidade: "São muito dóceis e vivem em grandes altitudes.",
      habitat: "Andes.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "ceviche",
      nome: "Ceviche",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ceviche_Peru.jpg/1280px-Ceviche_Peru.jpg",
      adjetivo: "refrescante",
      historia: "Prato milenar que usa a riqueza do Oceano Pacífico.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { clima_predominante: "Variado: costa, serra e selva", bioma_principal: "Andes e Floresta Amazônica", elemento_marcante: "Império Inca e Machu Picchu", agricultura_construcoes: "Batatas e milhos andinos", roupas_modo_de_vida: "Tecidos andinos", fauna_alimentacao: "Ceviche e batatas" }
};
