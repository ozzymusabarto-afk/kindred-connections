import type { Pais } from "../types";

/**
 * Roteiro completo da Argentina — 3 dias de expedição imersiva.
 * Foco: Contrastes geográficos e cultura urbana.
 * Dia 1: Buenos Aires (Arquitetura europeia, Tango e a vida nas praças)
 * Dia 2: Patagônia / El Calafate (O rugido do Glaciar Perito Moreno)
 * Dia 3: Salta / Norte (Montanhas coloridas e tradições andinas)
 */
export const argentina: Pais = {
  id: "argentina",
  nome: "Argentina",
  continente: "america-do-sul",
  codigo_mapa: "ar",
  bandeira: "🇦🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-ar.png",
  capital: "Buenos Aires",
  coordenadas: { x: 29, y: 80 },
  imagem_capa: "/__l5e/assets-v1/c8e30a00-b270-4580-8a27-90dcc62ebfca/argentina-capa.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "O país mais ao sul da América Latina, estendendo-se desde as selvas do norte até as geleiras da Antártida. A Argentina é famosa pelas suas vastas planícies (os Pampas), pela cordilheira dos Andes e pela sua vibrante capital. É a terra dos gaúchos, do churrasco (asado) e de uma paixão sem limites pelo futebol.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Buenos_Aires_City.jpg/1280px-Buenos_Aires_City.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto de Ezeiza, Buenos Aires",
      credito: "Wikimedia Commons"
    },
    idioma: "Espanhol (Castelhano)",
    fuso_horario: "O mesmo de Brasília",
    temperatura: "18 °C, céu limpo e brisa do Rio da Prata",
    fala_piloto_original: "¡Bienvenidos a Argentina! Estamos aterrizando en el Aeropuerto Internacional de Ezeiza en Buenos Aires. La temperatura es de 18 grados. Es un gusto tenerlos con nosotros. ¡Disfruten de su estadia!",
    fala_piloto_traducao: "Bem-vindos à Argentina! Estamos pousando no Aeroporto Internacional de Ezeiza em Buenos Aires. A temperatura é de 18 graus. É um prazer tê-los conosco. Aproveitem sua estadia!",
    texto: "Bem-vindos à terra do Tango! Olhe pela janela: a cidade de Buenos Aires parece um tabuleiro de xadrez gigante com avenidas largas e prédios que lembram muito Paris. Estamos pousando à beira de um rio tão largo que não dá para ver a outra margem: o Rio da Prata. Prepare o paladar para as empanadas e prepare os olhos para paisagens que parecem pinturas!",
    galeria: [
      {
        id: "ar-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Buenos_Aires_Aerial_View.jpg/1280px-Buenos_Aires_Aerial_View.jpg",
        legenda: "As largas avenidas de Buenos Aires do céu",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Hotel Boutique em San Telmo, Buenos Aires",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/San_Telmo_Buenos_Aires.jpg/1280px-San_Telmo_Buenos_Aires.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Buenos_Aires_City_Ambience.mp3",
      legenda: "Atmosfera urbana de Buenos Aires",
      credito: "Wikimedia Commons"
    },
    descricao: "“¡Hola! Meu nome é Santiago e serei o vosso guia pela Argentina. Estamos em San Telmo, o bairro mais antigo da cidade. Aqui as ruas são de pedra e os casarões têm pátios internos cheios de plantas. No final de semana, a praça se enche de músicos e dançarinos. Deixem as malas e vamos provar nosso primeiro 'alfajor'!”",
    galeria: [
      {
        id: "ar-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/San_Telmo_Buenos_Aires.jpg/1280px-San_Telmo_Buenos_Aires.jpg",
        legenda: "Uma rua clássica de San Telmo",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Buenos Aires — A 'Paris da América'",
      descricao: "Caminharemos pelas avenidas elegantes, visitaremos a famosa Casa Rosada e veremos como o povo vive intensamente a vida nos cafés e praças.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Obelisco_Buenos_Aires_2017.jpg/1280px-Obelisco_Buenos_Aires_2017.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Santiago",
      guia_local: "Santiago, historiador",
      clima_do_dia: "19 °C, sol agradável",
      transporte: {
        nome: "Subte (Metrô)",
        icone: "🚇",
        descricao: "O metrô de Buenos Aires é o mais antigo da América Latina. Algumas estações parecem museus, com azulejos pintados à mão que contam a história do país.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Subte_Buenos_Aires_Linea_A.jpg/1280px-Subte_Buenos_Aires_Linea_A.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Praça de Maio",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Casa_Rosada_Buenos_Aires.jpg/1280px-Casa_Rosada_Buenos_Aires.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "casa-rosada",
            x: 50,
            y: 40,
            titulo: "Casa Rosada",
            texto: "É a sede do governo. Dizem que a cor rosa original veio da mistura de cal com sangue de boi para proteger as paredes da umidade!"
          },
          {
            id: "piramide",
            x: 50,
            y: 70,
            titulo: "Pirâmide de Maio",
            texto: "O monumento mais antigo da cidade, construído para celebrar a liberdade do país."
          }
        ]
      },
      fauna_do_dia: {
        id: "pombas-urbana",
        contexto: "Nas praças de Buenos Aires, as pombas são parte constante da paisagem urbana, quase tão famosas quanto os cães de rua.",
        galeria: [
          {
            id: "ar-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pigeons_in_Plaza_de_Mayo.jpg/1280px-Pigeons_in_Plaza_de_Mayo.jpg",
            legenda: "Pombas na Plaza de Mayo",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "empanada",
        contexto: "Um pastel assado suculento que é o lanche favorito de todos os argentinos."
      },
      perguntas: [
        {
          id: "ar-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Muitos prédios em Buenos Aires parecem ter vindo da França ou da Itália. Por que você acha que os imigrantes europeus queriam construir casas parecidas com as que deixaram para trás?"
        }
      ],
      desafio: {
        pergunta: "Qual a cor da sede do governo argentino?",
        opcoes: ["Branca", "Azul", "Rosa"],
        correta: 2,
        explicacao: "A Casa Rosada é um dos marcos mais famosos de Buenos Aires!"
      }
    },
    {
      dia: 2,
      titulo: "Dia 2: Patagônia — O Rugido do Gelo",
      descricao: "Viajamos para o extremo sul para conhecer o Perito Moreno, uma das poucas geleiras do mundo que ainda está crescendo.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Perito_Moreno_Glacier_Patagonia_Argentina.jpg/1280px-Perito_Moreno_Glacier_Patagonia_Argentina.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Santiago",
      guia_local: "Santiago, guia de montanha",
      clima_do_dia: "5 °C, vento frio e cortante vindo do gelo",
      transporte: {
        nome: "Catamarã (Barco)",
        icone: "⛴️",
        descricao: "Para chegar perto da parede de gelo, usamos um barco que navega pelo Lago Argentino. A parede tem mais de 60 metros de altura — como um prédio de 20 andares!",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Glaciar_Perito_Moreno_barco.jpg/1280px-Glaciar_Perito_Moreno_barco.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Glaciar Perito Moreno",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Perito_Moreno_Glacier_Patagonia_Argentina.jpg/1280px-Perito_Moreno_Glacier_Patagonia_Argentina.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "gelo-azul",
            x: 40,
            y: 50,
            titulo: "Gelo Azul",
            texto: "O gelo é tão compactado que expulsa as bolhas de ar e reflete apenas a cor azul da luz solar."
          },
          {
            id: "ruptura",
            x: 70,
            y: 60,
            titulo: "Desprendimento",
            texto: "De tempos em tempos, pedaços gigantes de gelo caem no lago fazendo um barulho de trovão. É o rugido da geleira!"
          }
        ]
      },
      fauna_do_dia: {
        id: "condor-andino",
        contexto: "A maior ave voadora do mundo plana sobre os picos nevados sem bater as asas."
      },
      sabor_do_dia: {
        id: "cordeiro-patagonico",
        contexto: "Assado lentamente no fogo de chão para suportar o frio intenso."
      },
      perguntas: [
        {
          id: "ar-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "O gelo das geleiras é formado por neve acumulada por milhares de anos. Como algo tão frio pode estar sempre em movimento?"
        }
      ],
      desafio: {
        pergunta: "Por que o gelo do glaciar parece azul?",
        opcoes: ["Porque é pintado", "Porque o gelo é muito compacto", "Por causa das algas"],
        correta: 1,
        explicacao: "A densidade do gelo milenar absorve as outras cores e reflete o azul!"
      }
    },
    {
      dia: 3,
      titulo: "Dia 3: Salta — As Cores do Norte",
      descricao: "Terminamos nossa jornada no deserto do norte, onde as montanhas têm camadas de sete cores e a vida é ligada às tradições andinas.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cerro_de_los_Siete_Colores.jpg/1280px-Cerro_de_los_Siete_Colores.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Santiago",
      guia_local: "Santiago, no deserto",
      clima_do_dia: "25 °C, ar muito seco e sol forte",
      transporte: {
        nome: "Trem para as Nuvens",
        icone: "🚂",
        descricao: "Um dos trens mais altos do mundo, que sobe as montanhas até chegar a viadutos incríveis a mais de 4.000 metros de altitude.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tren_a_las_Nubes.jpg/1280px-Tren_a_las_Nubes.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Cerro de los Siete Colores",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cerro_de_los_Siete_Colores.jpg/1280px-Cerro_de_los_Siete_Colores.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "camadas",
            x: 50,
            y: 40,
            titulo: "Minerais Coloridos",
            texto: "Cada cor é um mineral diferente depositado há milhões de anos: ferro (vermelho), cobre (verde) e enxofre (amarelo)."
          },
          {
            id: "povoado",
            x: 20,
            y: 80,
            titulo: "Purmamarca",
            texto: "Um povoado de casas de adobe (barro e palha) que combina perfeitamente com a paisagem do deserto."
          }
        ]
      },
      fauna_do_dia: {
        id: "lhama",
        contexto: "Elas são as rainhas da montanha, usadas há séculos para carregar carga e dar lã quente."
      },
      sabor_do_dia: {
        id: "humita",
        contexto: "Uma pamonha salgada feita de milho e queijo, cozida na própria palha."
      },
      perguntas: [
        {
          id: "ar-d3-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "No norte da Argentina as casas são feitas de barro e palha (adobe). Por que esse material é melhor para um lugar de deserto do que o vidro e o aço das cidades grandes?"
        }
      ],
      desafio: {
        pergunta: "O que dá as cores diferentes ao Cerro de los Siete Colores?",
        opcoes: ["Tinta", "Minerais na rocha", "Reflexo do sol"],
        correta: 1,
        explicacao: "Diferentes minerais como ferro e cobre criam as faixas coloridas na montanha!"
      }
    }
  ],

  fauna_flora: [
    {
      id: "lhama",
      nome: "Lhama",
      nome_cientifico: "Lama glama",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_roaming_in_Machu_Picchu.jpg/1280px-Llama_roaming_in_Machu_Picchu.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Llama_Sound.mp3",
      curiosidade: "São primas dos camelos, mas sem corcovas. Elas são muito resistentes à altitude e têm um pelo muito grosso para se proteger do frio das montanhas.",
      habitat: "Montanhas dos Andes.",
      credito: "Wikimedia Commons"
    },
    {
      id: "condor-andino",
      nome: "Condor Andino",
      nome_cientifico: "Vultur gryphus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Andean_Condor_P1130490.jpg/1280px-Andean_Condor_P1130490.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Andean_Condor_Sound.mp3",
      curiosidade: "Pode viver até 70 anos e tem uma envergadura de asas de mais de 3 metros. É um mestre em usar as correntes de ar quente para planar por horas.",
      habitat: "Cordilheira dos Andes.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "empanada",
      nome: "Empanada Argentina",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Empanada_argentina_2.jpg/1280px-Empanada_argentina_2.jpg",
      adjetivo: "suculenta",
      historia: "Cada região da Argentina tem sua própria receita. No norte elas são menores e picantes; no sul costumam levar carne de cordeiro.",
      credito: "Wikimedia Commons"
    },
    {
      id: "alfajor",
      nome: "Alfajor",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Alfajores_de_Maizena.jpg/1280px-Alfajores_de_Maizena.jpg",
      adjetivo: "doce",
      historia: "É o doce nacional. São dois biscoitos macios recheados com muito doce de leite e cobertos com chocolate ou açúcar.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Temperado, com frio intenso ao sul e calor seco ao norte",
    bioma_principal: "Pampas (planícies), Cordilheira dos Andes e Estepa Patagônica",
    elemento_marcante: "A cultura do churrasco (asado) e a paixão pelo futebol",
    agricultura_construcoes: "Criação de gado, cultivo de trigo e uvas. Cidades com forte influência arquitetônica europeia.",
    roupas_modo_de_vida: "Ponchos de lã no norte e sul, roupas urbanas em Buenos Aires. Vida em torno da família e dos amigos.",
    fauna_alimentacao: "Carne bovina, massas (influência italiana), empanadas e muito doce de leite."
  }
};
