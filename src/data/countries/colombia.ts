import { Pais } from "../types";
export const colombia: Pais = {
  id: "colombia",
  nome: "Colômbia",
  continente: "america-do-sul",
  codigo_mapa: "co",
  bandeira: "🇨🇴",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-co.png",
  capital: "Bogotá",
  coordenadas: { x: 26, y: 56 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cartagena_de_Indias.jpg/1280px-Cartagena_de_Indias.jpg",
  resumo_geografico: "O país com a maior biodiversidade do mundo. Da costa caribenha às montanhas andinas, a Colômbia é um país de ritmos latinos, café de alta qualidade e uma cultura vibrante e acolhedora.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cartagena_de_Indias.jpg/1280px-Cartagena_de_Indias.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Bogotá",
      credito: "Wikimedia Commons"
    },
    idioma: "Espanhol",
    fuso_horario: "-2 horas em relação a Brasília",
    temperatura: "18 °C, clima de montanha",
    fala_piloto_original: "¡Bienvenidos a Colombia! The temperature in Bogotá is 18 degrees.",
    fala_piloto_traducao: "Bem-vindos à Colômbia! A temperatura em Bogotá é de 18 graus.",
    texto: "Estamos sobrevoando as cordilheiras! Preparem-se para sentir o perfume do café e ouvir ritmos alegres em cada esquina.",
    galeria: []
  },
  base: {
    nome: "Hacienda de Café em Quindío",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Salento_Quindio_Colombia.jpg/1280px-Salento_Quindio_Colombia.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Colombia_Rainforest_Ambience.mp3",
      legenda: "O som da biodiversidade colombiana",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Hola! Sou Juan, seu guia. Bem-vindos ao Eixo Cafeeiro!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Mundo do Café",
      descricao: "Visita a uma plantação de café.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cartagena_de_Indias.jpg/1280px-Cartagena_de_Indias.jpg",
      guia_nome: "Juan",
      guia_local: "Juan, mestre cafeeiro",
      clima_do_dia: "22 °C",
      transporte: {
        nome: "Willys (Jipe)",
        icone: "🛻",
        descricao: "O jipe clássico usado nas montanhas para carregar café."
      },
      fauna_do_dia: {
        id: "beija-flor-gigante",
        contexto: "A Colômbia tem a maior variedade de beija-flores do mundo."
      },
      sabor_do_dia: {
        id: "arepa",
        contexto: "Massa de milho redonda e recheada, o lanche favorito."
      },
      observacao: {
        titulo: "Cafezais",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cartagena_de_Indias.jpg/1280px-Cartagena_de_Indias.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "beija-flor-gigante",
      nome: "Beija-flor",
      nome_cientifico: "Trochilidae",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Hummingbird.jpg/1280px-Hummingbird.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bird_Sound.mp3",
      curiosidade: "Podem bater as asas até 80 vezes por segundo.",
      habitat: "Florestas e jardins.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "arepa",
      nome: "Arepa",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Arepa_Colombia.jpg/1280px-Arepa_Colombia.jpg",
      adjetivo: "quentinha",
      historia: "Comida base dos povos indígenas da região.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { clima_predominante: "Tropical", bioma_principal: "Florestas e montanhas", elemento_marcante: "Café e ritmos latinos", agricultura_construcoes: "Café e cidades coloniais", roupas_modo_de_vida: "Alegria e dança", fauna_alimentacao: "Arepas e café" }
};
