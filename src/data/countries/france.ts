import { Pais } from "../types";

/**
 * Roteiro completo da França — 3 dias de expedição imersiva.
 * Dia 1: Paris (A Torre Eiffel e o Rio Sena)
 * Dia 2: Vale do Loire (Castelos medievais e história real)
 * Dia 3: Provença (Campos de lavanda e o clima mediterrâneo)
 */
export const france: Pais = {
  id: "france",
  nome: "França",
  continente: "europa",
  codigo_mapa: "fr",
  bandeira: "🇫🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-fr.png",
  capital: "Paris",
  coordenadas: { x: 48, y: 32 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques.jpg",
  resumo_geografico: "A terra da arte, da moda e da gastronomia. Da luz de Paris aos vinhedos de Bordeaux, a França é um ícone de sofisticação e história.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Paris_Aerial_View.jpg/1280px-Paris_Aerial_View.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto Charles de Gaulle, Paris",
      credito: "Wikimedia Commons"
    },
    idioma: "Francês",
    fuso_horario: "4 horas à frente de Brasília",
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
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Place_des_Vosges_Paris.jpg/1280px-Place_des_Vosges_Paris.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Paris_Street_Ambience.mp3",
      legenda: "Sons das ruas de Paris: conversas e passos",
      credito: "Wikimedia Commons"
    },
    descricao: "“Bonjour! Eu sou Pierre, seu guia. Estamos em Le Marais, um bairro medieval charmoso em Paris. Sinta o cheiro dos croissants frescos vindo da padaria da esquina! A França é o país dos detalhes e do bom gosto.”",
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
      clima_do_dia: "15 °C, nublado",
      transporte: {
        nome: "Metrô de Paris",
        icone: "🚇",
        descricao: "O metrô parisiense é um dos mais antigos e eficientes do mundo, com entradas decoradas em estilo Art Nouveau.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Metropolitain_Paris_Station_Abbesses.jpg/1280px-Metropolitain_Paris_Station_Abbesses.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Torre Eiffel",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_2014.jpg/1280px-Tour_Eiffel_2014.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "ferro",
            x: 50,
            y: 40,
            titulo: "Dama de Ferro",
            texto: "Feita de ferro forjado, foi construída para uma grande feira e deveria ter sido desmontada, mas os parisienses se apaixonaram por ela!"
          }
        ]
      },
      fauna_do_dia: {
        id: "pombo-paris",
        contexto: "Nas praças de Paris, as pombas são parte constante da paisagem urbana.",
        galeria: [
          {
            id: "fr-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pigeons_in_Plaza_de_Mayo.jpg/1280px-Pigeons_in_Plaza_de_Mayo.jpg",
            legenda: "Pombas em uma praça parisiense",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "croissant",
        contexto: "O clássico croissant francês: amanteigado, crocante por fora e macio por dentro."
      },
      perguntas: [
        {
          id: "fr1",
          tipo: "observacao",
          etapa: "observacao",
          texto: "A Torre Eiffel é feita inteiramente de metal. Por que você acha que ela brilha tanto quando as luzes se acendem à noite?"
        }
      ],
      desafio: {
        pergunta: "Qual o apelido famoso da Torre Eiffel?",
        opcoes: ["Dama de Ouro", "Dama de Ferro", "Gigante de Paris"],
        correta: 1,
        explicacao: "A Torre Eiffel é conhecida como a 'Dama de Ferro' por causa de sua estrutura metálica imensa."
      }
    }
  ],

  fauna_flora: [
    {
      id: "pombo-paris",
      nome: "Pombo",
      nome_cientifico: "Columba livia",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pigeons_in_Plaza_de_Mayo.jpg/1280px-Pigeons_in_Plaza_de_Mayo.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Pigeon_Sound.mp3",
      curiosidade: "São aves muito adaptadas às cidades europeias e conseguem reconhecer rostos humanos!",
      habitat: "Zonas urbanas e parques.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "croissant",
      nome: "Croissant",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Croissants_at_Paris_bakery.jpg/1280px-Croissants_at_Paris_bakery.jpg",
      adjetivo: "crocante",
      historia: "Dizem que o croissant foi inspirado em um pão austríaco, mas foram os padeiros franceses que o tornaram essa maravilha folhada.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Temperado",
    bioma_principal: "Florestas temperadas e campos agrícolas",
    elemento_marcante: "A arte, a história e o prazer de comer bem",
    agricultura_construcoes: "Vinhos e construções históricas de pedra. Cidades com arquitetura clássica preservada.",
    roupas_modo_de_vida: "Moda e elegância no dia a dia. Valorização do tempo nas refeições.",
    fauna_alimentacao: "Queijos, vinhos, pães e patisseries maravilhosas."
  }
};
