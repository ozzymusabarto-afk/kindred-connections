import { Pais } from "../types";

export const mexico: Pais = {
  id: "mexico",
  nome: "México",
  continente: "america-do-norte",
  codigo_mapa: "mx",
  bandeira: "🇲🇽",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
  capital: "Cidade do México",
  coordenadas: { x: 260, y: 440 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "Uma terra de civilizações antigas, cores vibrantes e sabores intensos. O México une desertos, selvas tropicais e montanhas vulcânicas, sendo o berço de povos como os Maias e Astecas. É um país onde a história está gravada em pirâmides de pedra e celebrada em festas cheias de música e alegria.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mexico_City_Zocalo_Skyline.jpg/1280px-Mexico_City_Zocalo_Skyline.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto Internacional da Cidade do México",
      credito: "Wikimedia Commons"
    },
    idioma: "Espanhol",
    fuso_horario: "09h00 no horário local — 3 horas a menos que Brasília",
    temperatura: "22 °C, ensolarado e ar seco da altitude",
    fala_piloto_original: "¡Bienvenidos a México! Estamos sobrevolando la Ciudad de México. A su derecha pueden ver los volcanes Popocatépetl e Iztaccíhuatl. Prepárense para el aterrizaje en el Aeropuerto Internacional Benito Juárez.",
    fala_piloto_traducao: "Bem-vindos ao México! Estamos sobrevoando a Cidade do México. À sua direita podem ver os vulcões Popocatépetl e Iztaccíhuatl. Preparem-se para o pouso no Aeroporto Internacional Benito Juárez.",
    texto: "Olhe pela janela! A Cidade do México é uma das maiores do mundo e foi construída sobre um antigo lago. Veja como as montanhas cercam todo o vale. Ao longe, se o céu estiver limpo, conseguimos ver os picos nevados dos vulcões Popocatépetl e Iztaccíhuatl. Eles parecem gigantes guardiões da cidade!",
    galeria: [
      {
        id: "mx-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mexico_City_from_Above.jpg/1280px-Mexico_City_from_Above.jpg",
        legenda: "A imensidão da Cidade do México vista de cima",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Hotel Boutique no Centro Histórico",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Interior_del_Gran_Hotel_Ciudad_de_M%C3%A9xico.jpg/1280px-Interior_del_Gran_Hotel_Ciudad_de_M%C3%A9xico.jpg",
    credito: "Wikimedia Commons",
    descricao: "“¡Hola, exploradores! Me llamo Diego e serei o vosso guia por esta terra mágica. Estamos no coração do México, rodeados por prédios de pedra vulcânica vermelha e praças cheias de história. Aqui, cada esquina tem um segredo: de ruínas de templos astecas a igrejas coloniais. Deixem as mochilas e preparem o apetite, pois o México se conhece pelo olhar e pelo paladar!”"
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Teotihuacán — A Cidade dos Deuses",
      descricao: "Hoje visitaremos as gigantescas pirâmides construídas há quase 2 mil anos. É um lugar de mistérios e construções que parecem tocar o céu.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pir%C3%A1mide_del_Sol_Teotihuacan.jpg/1280px-Pir%C3%A1mide_del_Sol_Teotihuacan.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Diego",
      guia_local: "Diego, arqueólogo",
      clima_do_dia: "24 °C, sol forte e céu azul",
      transporte: {
        nome: "Turibús (Ônibus Panorâmico)",
        icone: "🚌",
        descricao: "Para sair da cidade e chegar às pirâmides, usamos um ônibus de dois andares. Lá de cima, vemos as cores das casas e os jardins cheios de cactos.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Turibus_Mexico_City.jpg/1280px-Turibus_Mexico_City.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Pirâmide do Sol",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pir%C3%A1mide_del_Sol_Teotihuacan.jpg/1280px-Pir%C3%A1mide_del_Sol_Teotihuacan.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "degraus",
            x: 50,
            y: 60,
            titulo: "Degraus de Pedra",
            texto: "As pirâmides mexicanas não são pontiagudas como as do Egito; elas têm o topo plano onde ficavam os templos."
          },
          {
            id: "calcada",
            x: 50,
            y: 90,
            titulo: "Calçada dos Mortos",
            texto: "Esta rua principal tem mais de 2 quilômetros de comprimento! Imagine os sacerdotes caminhando por aqui há mil anos."
          }
        ]
      },
      fauna_do_dia: {
        id: "axolote",
        contexto: "Nas águas de Xochimilco, vive um bichinho que parece um dragão sorridente.",
        galeria: [
          {
            id: "mx-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Axolotl_san_francisco.jpg/1280px-Axolotl_san_francisco.jpg",
            legenda: "Axolote em seu habitat aquático",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "taco",
        contexto: "Hora de experimentar a tortilha de milho feita na hora, a base de toda a comida mexicana.",
        galeria: [
          {
            id: "mx-sabor-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_Mi_Pueblo%2C_Puebla.jpg/1280px-001_Tacos_de_carnitas%2C_Mi_Pueblo%2C_Puebla.jpg",
            legenda: "Tacos mexicanos tradicionais",
            credito: "Wikimedia Commons"
          }
        ]
      },
      perguntas: [
        {
          id: "mx-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "A Pirâmide do Sol é imensa. Como você acha que as pessoas carregavam pedras tão pesadas há tanto tempo, sem caminhões?"
        }
      ],
      notas_brasil: {
        transporte: {
          texto: "O Turibús é parecido com os ônibus de turismo de Curitiba ou Gramado, onde você pode ver a cidade do alto!"
        }
      },
      desafio: {
        pergunta: "Qual o nome da principal rua de Teotihuacán?",
        opcoes: ["Avenida das Flores", "Calçada dos Mortos", "Rua do Sol"],
        correta: 1,
        explicacao: "A Calçada dos Mortos é a espinha dorsal da cidade antiga, ligando as pirâmides e templos."
      }
    }
  ],

  fauna_flora: [
    {
      id: "axolote",
      nome: "Axolote",
      nome_cientifico: "Ambystoma mexicanum",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Axolotl_san_francisco.jpg/1280px-Axolotl_san_francisco.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Water_Ambience.mp3",
      curiosidade: "É uma salamandra que nunca cresce: ela passa a vida inteira 'jovem' e dentro da água. O mais incrível é que ela pode regenerar partes do corpo!",
      habitat: "Canais de água doce de Xochimilco.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "taco",
      nome: "Tacos",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_Mi_Pueblo%2C_Puebla.jpg/1280px-001_Tacos_de_carnitas%2C_Mi_Pueblo%2C_Puebla.jpg",
      adjetivo: "picante",
      historia: "O segredo do taco é a tortilha de milho, que os mexicanos comem há milhares de anos. Pode ser recheado com quase tudo!",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Variado: quente e seco no norte, tropical e úmido no sul",
    bioma_principal: "Desertos, selvas e montanhas vulcânicas",
    elemento_marcante: "O artesanato colorido (Alebrijes) e as festas de rua",
    agricultura_construcoes: "Milho, feijão, pimenta e abacate. Casas coloridas com pátios internos e fontes de água.",
    roupas_modo_de_vida: "Vida vibrante nas praças (Zócalos). Uso de chapéus de aba larga (Sombreros) para proteção do sol forte.",
    fauna_alimentacao: "Muitas frutas tropicais, tortilhas de milho e cacau (a origem do chocolate!)."
  }
};