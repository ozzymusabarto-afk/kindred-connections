import { Pais } from "../types";
export const india: Pais = {
  id: "india",
  nome: "Índia",
  continente: "asia",
  codigo_mapa: "in",
  bandeira: "🇮🇳",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-in.png",
  capital: "Nova Délhi",
  coordenadas: { x: 74, y: 48 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1280px-Taj-Mahal.jpg",
  resumo_geografico: "Uma explosão de cores, tradições e espiritualidade. A Índia é um continente de diversidade infinita, onde templos antigos convivem com a vida urbana moderna.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1280px-Taj-Mahal.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Nova Délhi",
      credito: "Wikimedia Commons"
    },
    idioma: "Hindi",
    fuso_horario: "+8 horas em relação a Brasília",
    temperatura: "30 °C, calor intenso",
    fala_piloto_original: "Namaste! Welcome to India. The temperature is 30 degrees.",
    fala_piloto_traducao: "Namastê! Bem-vindos à Índia. A temperatura é de 30 graus.",
    texto: "Estamos sobrevoando o Norte da Índia! Preparem-se para um festival de cores, temperos e muita história antiga.",
    galeria: []
  },
  base: {
    nome: "Hospedaria em Jaipur",
    imagem_url: "https://images.unsplash.com/photo-1524492707947-54b036573c05?auto=format&fit=crop&q=80&w=1280",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Delhi_Street_Market_Ambience.mp3",
      legenda: "A energia vibrante dos mercados de Nova Délhi",
      credito: "Wikimedia Commons"
    },
    descricao: "“Namastê! Eu sou Ravi, seu guia. Bem-vindos a esta terra sagrada!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Taj Mahal",
      descricao: "A maravilha do mundo em mármore branco.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1280px-Taj-Mahal.jpg",
      guia_nome: "Ravi",
      guia_local: "Ravi, guia local",
      clima_do_dia: "30 °C",
      transporte: {
        nome: "Tuc-Tuc",
        icone: "🛺",
        descricao: "O transporte rápido e divertido para se locomover entre os templos."
      },
      fauna_do_dia: {
        id: "tigre-bengala",
        contexto: "O majestoso tigre de bengala é o rei das florestas indianas."
      },
      sabor_do_dia: {
        id: "curry",
        contexto: "Um prato aromático de especiarias que aquece a alma."
      },
      observacao: {
        titulo: "Taj Mahal",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1280px-Taj-Mahal.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "tigre-bengala",
      nome: "Tigre de Bengala",
      nome_cientifico: "Panthera tigris tigris",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bengal_tiger.jpg/1280px-Bengal_tiger.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tiger_Roar.mp3",
      curiosidade: "É o maior felino da Índia.",
      habitat: "Florestas densas.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "curry",
      nome: "Curry",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Curry_India.jpg/1280px-Curry_India.jpg",
      adjetivo: "aromático",
      historia: "Uma mistura única de temperos feita em cada casa de uma maneira.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { clima_predominante: "Tropical", bioma_principal: "Florestas e desertos", elemento_marcante: "Espiritualidade e cores", agricultura_construcoes: "Especiarias e palácios majestosos", roupas_modo_de_vida: "Saris coloridos", fauna_alimentacao: "Especiarias e vegetais" }
};
