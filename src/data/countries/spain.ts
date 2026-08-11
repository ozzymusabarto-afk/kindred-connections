import { Pais } from "../types";
export const spain: Pais = {
  id: "spain",
  nome: "Espanha",
  continente: "europa",
  codigo_mapa: "es",
  bandeira: "🇪🇸",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-es.png",
  capital: "Madri",
  coordenadas: { x: 46, y: 37 },
  imagem_capa: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
  resumo_geografico: "País de sol, paixão e arquitetura única. A Espanha é famosa por suas festas vibrantes, artes icônicas e uma culinária que encanta o mundo.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sagrada_Familia_Barcelona.jpg/1280px-Sagrada_Familia_Barcelona.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Madri-Barajas",
      credito: "Wikimedia Commons"
    },
    idioma: "Espanhol",
    fuso_horario: "+4 horas em relação a Brasília",
    temperatura: "20 °C, ensolarado",
    fala_piloto_original: "¡Bienvenidos a Madrid! The temperature is 20 degrees Celsius.",
    fala_piloto_traducao: "Bem-vindos a Madri! A temperatura é de 20 graus Celsius.",
    texto: "Estamos sobrevoando a meseta espanhola! Preparem-se para conhecer castelos, praças vibrantes e muita alegria.",
    galeria: []
  },
  base: {
    nome: "Hostal em Madri",
    imagem_url: "https://images.unsplash.com/photo-1543783230-278358a7ecef?auto=format&fit=crop&q=80&w=1280",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Madrid_Plaza_Mayor_Ambience.mp3",
      legenda: "O som vibrante das ruas de Madri",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Hola! Sou Carlos, seu guia. Bem-vindos à Espanha!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Madri Imperial",
      descricao: "Visita ao Palácio Real.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sagrada_Familia_Barcelona.jpg/1280px-Sagrada_Familia_Barcelona.jpg",
      guia_nome: "Carlos",
      guia_local: "Carlos, guia de Madri",
      clima_do_dia: "20 °C",
      transporte: {
        nome: "Metrô de Madri",
        icone: "🚇",
        descricao: "Rápido e eficiente."
      },
      fauna_do_dia: {
        id: "touro",
        contexto: "O touro é um símbolo icônico da cultura espanhola."
      },
      sabor_do_dia: {
        id: "tapas",
        contexto: "Pequenas porções de comida para compartilhar."
      },
      observacao: {
        titulo: "Praça Maior",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sagrada_Familia_Barcelona.jpg/1280px-Sagrada_Familia_Barcelona.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "touro",
      nome: "Touro",
      nome_cientifico: "Bos taurus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bull_Spain.jpg/1280px-Bull_Spain.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cow_Sound.mp3",
      curiosidade: "Símbolo de força na Espanha.",
      habitat: "Campos.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "tapas",
      nome: "Tapas",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tapas_Spain.jpg/1280px-Tapas_Spain.jpg",
      adjetivo: "variadas",
      historia: "Diz a lenda que as tampas (tapas) eram usadas para cobrir as bebidas.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { clima_predominante: "Mediterrâneo", bioma_principal: "Florestas e arbustos", elemento_marcante: "Cultura vibrante", agricultura_construcoes: "Azeite e arquitetura histórica", roupas_modo_de_vida: "Vida ao ar livre", fauna_alimentacao: "Tapas e frutos do mar" }
};
