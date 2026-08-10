import { Pais } from "../types";
export const france: Pais = {
  id: "france",
  nome: "França",
  continente: "europa",
  codigo_mapa: "fr",
  bandeira: "🇫🇷",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
  capital: "Paris",
  coordenadas: { x: 650, y: 390 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg",
  resumo_geografico: "A terra da arte, da moda e da gastronomia. Da luz de Paris aos vinhedos de Bordeaux, a França é um ícone de sofisticação e história.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/View_of_Nile_river_and_Cairo_city_at_sunset.jpg/1920px-View_of_Nile_river_and_Cairo_city_at_sunset.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto Charles de Gaulle, Paris",
      credito: "Wikimedia Commons"
    },
    idioma: "Francês",
    fuso_horario: "+4 horas em relação a Brasília",
    temperatura: "15 °C, brisa fresca",
    fala_piloto_original: "Bonjour, mesdames et messieurs! Welcome to Paris Charles de Gaulle Airport. The temperature is 15 degrees Celsius.",
    fala_piloto_traducao: "Bom dia, senhoras e senhores passageiros! Bem-vindos ao Aeroporto Charles de Gaulle, em Paris. A temperatura é de 15 graus Celsius.",
    texto: "Estamos sobrevoando Paris, a Cidade Luz! Veja lá embaixo a Torre Eiffel brilhando ao sol e o Rio Sena serpenteando entre os prédios históricos. Prepare-se para explorar museus, padarias e muita história!",
    galeria: [
      {
        id: "fr-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg",
        legenda: "Torre Eiffel vista do alto",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Hotel Boutique em Le Marais, Paris",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Alfama_Lisbon.jpg/1280px-Alfama_Lisbon.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lisbon_Street_Atmosphere.mp3",
      legenda: "Sons das ruas de Paris",
      credito: "Wikimedia Commons"
    },
    descricao: "“Bonjour! Eu sou Pierre, seu guia. Estamos em Le Marais, um bairro medieval charmoso em Paris. Sinta o cheiro dos croissants frescos!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Torre e o Sena",
      descricao: "Um passeio pela Torre Eiffel e um cruzeiro pelo Rio Sena.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Pierre",
      guia_local: "Pierre, guia de Paris",
      clima_do_dia: "15 °C",
      transporte: {
        nome: "Metrô de Paris",
        icone: "🚇",
        descricao: "O metrô parisiense é uma das formas mais rápidas de percorrer a cidade."
      },
      fauna_do_dia: {
        id: "pombo-paris",
        contexto: "As pombas de Paris fazem parte da paisagem nas praças."
      },
      sabor_do_dia: {
        id: "croissant",
        contexto: "O clássico croissant francês, amanteigado e crocante."
      },
      observacao: {
        titulo: "Torre Eiffel",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "pombo-paris",
      nome: "Pombo",
      nome_cientifico: "Columba livia",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pigeons_in_Plaza_de_Mayo.jpg/1280px-Pigeons_in_Plaza_de_Mayo.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Pigeon_Sound.mp3",
      curiosidade: "São onipresentes em praças europeias.",
      habitat: "Cidades.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "croissant",
      nome: "Croissant",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Croissant_Paris.jpg/1280px-Croissant_Paris.jpg",
      adjetivo: "crocante",
      historia: "Massa folhada feita com muita manteiga, ícone da França.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { 
    clima_predominante: "Temperado", 
    bioma_principal: "Florestas", 
    elemento_marcante: "História e arte", 
    agricultura_construcoes: "Vinhos e construções históricas", 
    roupas_modo_de_vida: "Moda e elegância", 
    fauna_alimentacao: "Queijos e vinhos" 
  }
};
