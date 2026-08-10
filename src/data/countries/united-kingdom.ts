import { Pais } from "../types";
export const unitedKingdom: Pais = {
  id: "united-kingdom",
  nome: "Reino Unido",
  continente: "europa",
  codigo_mapa: "gb",
  bandeira: "🇬🇧",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
  capital: "Londres",
  coordenadas: { x: 580, y: 350 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Big_Ben_and_Houses_of_Parliament.jpg/1280px-Big_Ben_and_Houses_of_Parliament.jpg",
  resumo_geografico: "Uma terra de monarquia, história literária e paisagens verdes. O Reino Unido é um centro de tradições milenares e cultura global influente.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Big_Ben_and_Houses_of_Parliament.jpg/1280px-Big_Ben_and_Houses_of_Parliament.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto de Heathrow, Londres",
      credito: "Wikimedia Commons"
    },
    idioma: "Inglês",
    fuso_horario: "+3 ou +4 horas em relação a Brasília",
    temperatura: "12 °C, nublado",
    fala_piloto_original: "Welcome to London! The local time is 2 PM.",
    fala_piloto_traducao: "Bem-vindos a Londres! O horário local é 14h.",
    texto: "Estamos sobrevoando o Rio Tâmisa! Preparem-se para ver o Big Ben, cabines de telefone vermelhas e muitos castelos.",
    galeria: []
  },
  base: {
    nome: "Hotel em Kensington, Londres",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Big_Ben_and_Houses_of_Parliament.jpg/1280px-Big_Ben_and_Houses_of_Parliament.jpg",
    descricao: "“Hello! Sou James, seu guia. Bem-vindos ao Reino Unido!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Coração de Londres",
      descricao: "Visita ao Big Ben e ao Parlamento.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Big_Ben_and_Houses_of_Parliament.jpg/1280px-Big_Ben_and_Houses_of_Parliament.jpg",
      guia_nome: "James",
      guia_local: "James, guia londrino",
      clima_do_dia: "12 °C",
      transporte: {
        nome: "Ônibus de Dois Andares",
        icone: "🚌",
        descricao: "O icônico ônibus vermelho que permite ver a cidade do alto."
      },
      fauna_do_dia: {
        id: "raposa-urbana",
        contexto: "As raposas são comuns nos subúrbios de Londres."
      },
      sabor_do_dia: {
        id: "fish-and-chips",
        contexto: "O prato nacional: peixe frito com batatas crocantes."
      },
      observacao: {
        titulo: "Big Ben",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Big_Ben_and_Houses_of_Parliament.jpg/1280px-Big_Ben_and_Houses_of_Parliament.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "raposa-urbana",
      nome: "Raposa",
      nome_cientifico: "Vulpes vulpes",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Red_fox.jpg/1280px-Red_fox.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fox_Sound.mp3",
      curiosidade: "São muito espertas e vivem perto dos humanos.",
      habitat: "Cidades e florestas.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "fish-and-chips",
      nome: "Fish and Chips",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Fish_and_Chips.jpg/1280px-Fish_and_Chips.jpg",
      adjetivo: "tradicional",
      historia: "Tornou-se popular durante a Revolução Industrial como uma refeição rápida.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { clima_predominante: "Temperado oceânico", bioma_principal: "Florestas e colinas", elemento_marcante: "Tradição e história", agricultura_construcoes: "Arquitetura vitoriana", roupas_modo_de_vida: "Chá das cinco", fauna_alimentacao: "Peixe com fritas" }
};
