import { Pais } from "../types";

export const escocia: Pais = {
  id: "escocia",
  nome: "Escócia",
  continente: "europa",
  codigo_mapa: "gb", // Nota: gb engloba UK, mas usamos para a Escócia neste contexto lúdico
  bandeira: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",
  capital: "Edimburgo",
  coordenadas: { x: 590, y: 220 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Glencoe_Scotland.jpg/1280px-Glencoe_Scotland.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "Uma terra de lendas, neblina e montanhas selvagens conhecidas como Highlands. A Escócia é famosa por seus castelos de pedra, lagos profundos (onde dizem morar monstros!) e por um povo orgulhoso que mantém vivas tradições milenares, como o som das gaitas de fole e o uso do kilt.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edinburgh_Castle_from_Grassmarket.jpg/1280px-Edinburgh_Castle_from_Grassmarket.jpg",
    credito: "Wikimedia Commons",
    idioma: "Inglês (com um sotaque forte e único!)",
    fuso_horario: "14h00 no horário local — 4 horas a mais que Brasília",
    temperatura: "12 °C, vento fresco e céu cinzento",
    fala_piloto_original: "Good afternoon! Welcome to Scotland. We are descending into Edinburgh Airport. The weather is typical: cloudy with a light breeze and 12 degrees. Local time is 2:00 PM. Enjoy the magic of the Highlands!",
    fala_piloto_traducao: "Boa tarde! Bem-vindos à Escócia. Estamos descendo para o Aeroporto de Edimburgo. O clima é o típico: nublado com uma brisa leve e 12 graus. O fuso horário local é 14h00. Aproveitem a magia das Highlands!",
    texto: "Aperte o casaco, explorador! Estamos chegando na Escócia. Veja como os prédios de pedra cinza dão à cidade um ar de mistério e antiguidade. Lá no alto da colina, vigiando tudo, está o Castelo de Edimburgo, construído sobre um vulcão extinto há milhões de anos. O ar aqui é úmido e fresco, perfeito para histórias de fantasmas e heróis medievais!"
  },

  base: {
    nome: "Pousada Aconchegante na Royal Mile, Edimburgo",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_Royal_Mile_Edinburgh.jpg/1280px-The_Royal_Mile_Edinburgh.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bagpipes_Edinburgh_Ambience.mp3",
      legenda: "Gaitas de fole ecoando pela Royal Mile",
      credito: "Wikimedia Commons"
    },
    descricao: "“Welcome! Meu nome é Angus e serei o vosso guia pelas terras altas. Nossa base é esta casa de pedra na Royal Mile, a rua mais famosa da cidade. Conseguem ouvir ao longe? É o som da gaita de fole ecoando pelas paredes. Preparem-se, pois aqui o tempo muda rápido: podemos ter sol, chuva e vento tudo em um só dia. É o que chamamos de 'clima escocês'!”",
    galeria: [
      {
        id: "sc-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_Royal_Mile_Edinburgh.jpg/1280px-The_Royal_Mile_Edinburgh.jpg",
        legenda: "A Royal Mile em um dia nublado",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Highlands — Montanhas, Névoa e o Som das Gaitas",
      descricao: "Hoje entraremos no coração selvagem da Escócia, onde as montanhas de Glencoe guardam silêncio e as ovelhas pastam livres no verde infinito.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Glencoe_Scotland.jpg/1280px-Glencoe_Scotland.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Angus",
      guia_local: "Angus, montanhista",
      clima_do_dia: "10 °C, neblina descendo as montanhas",
      transporte: {
        nome: "Jipe Land Rover",
        icone: "🚙",
        descricao: "Para cruzar os pântanos e as estradas sinuosas das Highlands, precisamos de um carro robusto. O jipe nos leva até os pontos mais isolados, onde a natureza ainda é intocada.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Land_Rover_Defender_Highlands.jpg/1280px-Land_Rover_Defender_Highlands.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Glencoe",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Glencoe_Scotland.jpg/1280px-Glencoe_Scotland.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "nevoa",
            x: 50,
            y: 30,
            titulo: "Névoa de Montanha",
            texto: "A umidade do mar bate nas montanhas e vira essa neblina constante, que dá à Escócia um clima de mistério e fantasia."
          },
          {
            id: "vegetacao",
            x: 40,
            y: 70,
            titulo: "Urze (Heather)",
            texto: "Estas plantas baixinhas cobrem as montanhas e ficam roxas no verão. São muito resistentes ao frio e ao vento forte."
          }
        ]
      },
      fauna_do_dia: {
        id: "vaca-highland",
        contexto: "Veja só aquela vaca com franja! Ela parece usar um casaco de lã bem grosso.",
        galeria: [
          {
            id: "sc-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Highland_cow_Scotland.jpg/1200px-Highland_cow_Scotland.jpg",
            legenda: "Vaca das Terras Altas",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "shortbread",
        contexto: "Biscoitos de manteiga que derretem na boca, perfeitos para acompanhar o chá da tarde."
      },
      perguntas: [
        {
          id: "sc-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "A paisagem das Highlands não tem muitas árvores altas, mas sim grama e musgo. Por que você acha que o vento forte impede as árvores de crescerem muito nestes picos?"
        }
      ],
      desafio: {
        pergunta: "Qual o nome do instrumento musical mais famoso da Escócia?",
        opcoes: ["Violão", "Gaita de Fole", "Piano"],
        correta: 1,
        explicacao: "A gaita de fole é o símbolo sonoro da Escócia, usada em cerimônias e festas tradicionais."
      }
    },
    {
      dia: 2,
      titulo: "Dia 2: Loch Ness — Em busca do Monstro",
      descricao: "Visitaremos o lago mais famoso do mundo, tão profundo que suas águas são quase negras. Será que o monstro Nessie vai aparecer hoje?",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Urquhart_Castle_Loch_Ness.jpg/1280px-Urquhart_Castle_Loch_Ness.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Angus",
      guia_local: "Angus, no lago",
      clima_do_dia: "11 °C, garoa fina e vento no lago",
      transporte: {
        nome: "Barco de Expedição",
        icone: "🚢",
        descricao: "Para explorar o Loch Ness, usamos um barco equipado com radares que olham para o fundo do lago. A profundidade aqui chega a mais de 200 metros!",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Loch_Ness_Cruise_Boat.jpg/1280px-Loch_Ness_Cruise_Boat.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Ruínas de Urquhart",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Urquhart_Castle_Loch_Ness.jpg/1280px-Urquhart_Castle_Loch_Ness.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "torre",
            x: 60,
            y: 40,
            titulo: "Torre de Vigia",
            texto: "Desta torre, os soldados vigiavam quem chegava pelo lago. O castelo foi destruído há séculos, mas as pedras ainda contam muitas batalhas."
          },
          {
            id: "lago",
            x: 30,
            y: 60,
            titulo: "Águas Escuras",
            texto: "A água é escura por causa da turfa, um tipo de terra vegetal que vem das montanhas. Por isso é tão difícil ver o que existe lá no fundo!"
          }
        ]
      },
      fauna_do_dia: {
        id: "veado-vermelho",
        contexto: "O rei das montanhas escocesas observa o lago de cima dos rochedos."
      },
      sabor_do_dia: {
        id: "haggis",
        contexto: "Um prato tradicional feito com carne e aveia, servido com purê de batatas."
      },
      perguntas: [
        {
          id: "sc-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Muitas pessoas acreditam que um monstro vive no fundo do Loch Ness. Por que as águas escuras ajudam a manter essa lenda viva por tanto tempo?"
        }
      ],
      desafio: {
        pergunta: "Qual o apelido carinhoso que o monstro do Loch Ness recebeu?",
        opcoes: ["Bibi", "Nessie", "Dino"],
        correta: 1,
        explicacao: "Nessie é o nome pelo qual o suposto monstro do lago é conhecido mundialmente."
      }
    }
  ],

  fauna_flora: [
    {
      id: "vaca-highland",
      nome: "Vaca das Highlands",
      nome_cientifico: "Bos taurus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Highland_Cow_near_Edzell.jpg/1280px-Highland_Cow_near_Edzell.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Highland_Cow_Sound.mp3",
      curiosidade: "Elas têm duas camadas de pelo: um longo e grosso para a chuva escorrer, e um macio por baixo para manter o calor. A franja protege os olhos do vento forte.",
      habitat: "Montanhas e pastagens frias da Escócia.",
      credito: "Wikimedia Commons"
    },
    {
      id: "veado-vermelho",
      nome: "Veado Vermelho",
      nome_cientifico: "Cervus elaphus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_Deer_Stag.jpg/1280px-Red_Deer_Stag.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Red_Deer_Stag_Roar.mp3",
      curiosidade: "É o maior mamífero selvagem da Escócia. No outono, os machos dão bramidos altos que ecoam por todos os vales.",
      habitat: "Florestas e encostas de montanhas.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "shortbread",
      nome: "Shortbread",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Shortbread_cookies.jpg/1280px-Shortbread_cookies.jpg",
      adjetivo: "amanteigado",
      historia: "Era o doce favorito da Rainha Mary da Escócia no século 16. Hoje é o biscoito que todo visitante quer levar para casa.",
      credito: "Wikimedia Commons"
    },
    {
      id: "haggis",
      nome: "Haggis",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Haggis_neeps_tatties.jpg/1280px-Haggis_neeps_tatties.jpg",
      adjetivo: "tradicional",
      historia: "É o prato nacional escocês, servido com 'neeps and tatties' (nabo e batata). É um prato de camponeses que precisavam de muita energia para o frio.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Temperado oceânico, muito úmido, ventoso e mutável",
    bioma_principal: "Charnecas, pântanos e florestas de pinheiros",
    elemento_marcante: "O Tartan (padrão xadrez) que identifica cada clã familiar",
    agricultura_construcoes: "Criação de ovelhas e cultivo de cevada. Casas de pedra escura com lareiras para aquecer os dias de neblina.",
    roupas_modo_de_vida: "Kilts em ocasiões especiais e roupas de lã grossa (Tweed) para o dia a dia. Vida ligada à terra e às tradições dos clãs.",
    fauna_alimentacao: "Salmão fresco, carnes assadas, aveia e doces amanteigados."
  }
};
