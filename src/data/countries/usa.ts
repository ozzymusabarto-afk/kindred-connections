import type { Pais } from "../types";

/**
 * Roteiro completo dos Estados Unidos.
 * Narrativa da chegada (fala do piloto), base da expedição, guia Sarah,
 * imagens HD, hotspots e perguntas do caderno de campo por etapa.
 */
export const estadosUnidos: Pais = {
  "id": "estados-unidos",
  "nome": "Estados Unidos",
  "continente": "america-do-norte",
  "bandeira": "🇺🇸",
  "coordenadas": {
    "x": 675,
    "y": 370
  },
  "imagem_capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg/1920px-Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg",
  "resumo_geografico": "Um território vasto e diversificado que vai das cidades verticais aos desertos esculpidos, impulsionado pela inovação e exploração. Entre duas costas oceânicas cabem planícies de trigo, montanhas nevadas, pântanos quentes e cânions vermelhos. Essa variedade explica por que o modo de vida muda tanto de um estado para outro: cada paisagem pede uma solução diferente.",
  "roteiro_viagem": [
    {
      "dia": 1,
      "titulo": "Dia 1: A energia de Nova York e o ritmo das cidades verticais",
      "descricao": "Quando o espaço no chão acaba, a cidade cresce para cima. Nova York foi construída sobre rocha firme, capaz de sustentar torres de aço e vidro. Observe o ritmo: metrôs que substituem carros, escadas de incêndio nas fachadas, parques criados de propósito para dar ar e silêncio no meio do barulho.",
      "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/New_York_City_at_night_HDR.jpg/1920px-New_York_City_at_night_HDR.jpg",
      "guia_local": "Sarah, guia de expedição em Nova York",
      "clima_do_dia": "14 °C, noite iluminada",
      "transporte": {
        "nome": "Metrô e travessia de balsa",
        "icone": "🚇",
        "descricao": "Descemos ao metrô lotado e depois cruzamos a água de balsa para ver a cidade inteira de longe."
      },
      "fauna_do_dia": {
        "id": "esquilo-urbano",
        "contexto": "Nos parques, esquilos aprenderam a viver entre pessoas e pedem comida sem medo."
      },
      "sabor_do_dia": {
        "id": "bagel-cream-cheese",
        "contexto": "Bagel com cream cheese comprado numa banca de esquina, como fazem os nova-iorquinos."
      },
      "perguntas": [
        {
          "id": "q1",
          "tipo": "observacao",
          "texto": "Por que você acha que essa cidade cresceu para cima em vez de crescer para os lados?",
          "etapa": "observacao"
        },
        {
          "id": "q2",
          "tipo": "comparacao",
          "texto": "Qual é o prédio mais alto da sua cidade? Por que a sua cidade não é toda feita de arranha-céus?",
          "etapa": "transporte"
        },
        {
          "id": "qf",
          "tipo": "observacao",
          "etapa": "fauna",
          "texto": "Os esquilos da cidade não fogem das pessoas. O que a vida no meio dos prédios mudou no jeito deles?"
        },
        {
          "id": "qs",
          "tipo": "comparacao",
          "etapa": "sabor",
          "texto": "O bagel com cream cheese é comido andando, a caminho do trabalho. O que isso conta sobre o ritmo dessa cidade?"
        }
      ],
      "observacao": {
        "titulo": "A cidade que cresceu para cima",
        "hotspots": [
          {
            "id": "altura",
            "x": 50,
            "y": 30,
            "titulo": "Arranha-céus",
            "texto": "Como a ilha é pequena e a rocha embaixo é firme, a única direção possível para crescer era para cima."
          },
          {
            "id": "grade",
            "x": 30,
            "y": 66,
            "titulo": "Ruas em quadrícula",
            "texto": "O traçado em grade foi desenhado antes das casas existirem, para facilitar orientar-se."
          }
        ],
        "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/New_York_City_at_night_HDR.jpg/1920px-New_York_City_at_night_HDR.jpg"
      },
      "guia_nome": "Sarah"
    },
    {
      "dia": 2,
      "titulo": "Dia 2: A imensidão do Grand Canyon e a força que esculpe o deserto",
      "descricao": "O rio Colorado levou milhões de anos para cortar mais de 1,5 km de rocha. Cada faixa colorida da parede é uma camada de tempo: quanto mais fundo você olha, mais antiga é a história. Aqui a paciência da água e o vento fazem o trabalho que nenhuma máquina faria.",
      "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg/1920px-Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg",
      "guia_local": "Sarah, guia de expedição e geóloga do parque",
      "clima_do_dia": "18 °C, ar seco e chuva ao longe",
      "transporte": {
        "nome": "Veículo 4x4 de expedição",
        "icone": "🚙",
        "descricao": "Um 4x4 de expedição encara a estrada de terra até a borda do canyon, levantando poeira vermelha."
      },
      "fauna_do_dia": {
        "id": "aguia-careca",
        "contexto": "Uma águia-careca sobrevoa as rochas aproveitando o ar quente que sobe do canyon."
      },
      "sabor_do_dia": {
        "id": "pbj",
        "contexto": "Na parada da expedição, sanduíche PB&J e torta de maçã — comida simples de quem anda o dia todo."
      },
      "perguntas": [
        {
          "id": "q1",
          "tipo": "observacao",
          "texto": "Olhe para as diferentes cores e linhas nas paredes do Grand Canyon. O que você acha que esculpiu esse buraco gigante na terra ao longo de milhares de anos?",
          "etapa": "observacao"
        },
        {
          "id": "q2",
          "tipo": "comparacao",
          "texto": "Você já viu a água mudar o formato da terra em algum lugar perto de você? Onde?",
          "etapa": "transporte"
        },
        {
          "id": "qf",
          "tipo": "observacao",
          "etapa": "fauna",
          "texto": "A águia-careca enxerga um peixe a centenas de metros de altura. Para que serve uma visão tão boa aqui?"
        },
        {
          "id": "qs",
          "tipo": "comparacao",
          "etapa": "sabor",
          "texto": "O sanduíche de pasta de amendoim com geleia não estraga fácil no calor do deserto. Por que isso importa numa expedição?"
        }
      ],
      "observacao": {
        "titulo": "As camadas de rocha do Grand Canyon",
        "hotspots": [
          {
            "id": "camadas",
            "x": 32,
            "y": 42,
            "titulo": "Linhas de cores diferentes",
            "texto": "Cada faixa é um período da história da Terra. As de baixo têm quase 2 bilhões de anos."
          },
          {
            "id": "rio",
            "x": 58,
            "y": 78,
            "titulo": "O rio Colorado no fundo",
            "texto": "O rio corta a rocha há milhões de anos, carregando areia que funciona como lixa."
          },
          {
            "id": "chuva",
            "x": 76,
            "y": 26,
            "titulo": "Chuva ao longe",
            "texto": "No deserto a chuva é rara e violenta: em minutos, arranca pedra e terra do paredão."
          }
        ],
        "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg/1920px-Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg"
      },
      "guia_nome": "Sarah"
    },
    {
      "dia": 3,
      "titulo": "Dia 3: A ciência no Kennedy Space Center",
      "descricao": "Foi daqui que missões partiram rumo à Lua e a órbitas distantes. As bases de lançamento ficam na costa para que os foguetes partam sobre o mar, longe das cidades, aproveitando a rotação da Terra como impulso extra. Curiosidade e cálculo, juntos, transformam uma pergunta em viagem.",
      "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atlantis_Kennedy_Space_Center_Visitor_Complex_4.jpg/1920px-Atlantis_Kennedy_Space_Center_Visitor_Complex_4.jpg",
      "guia_local": "Sarah, guia de expedição na base espacial",
      "clima_do_dia": "28 °C, úmido e ensolarado",
      "transporte": {
        "nome": "Ônibus da base espacial",
        "icone": "🚌",
        "descricao": "Um ônibus da base leva os visitantes entre hangares gigantes e plataformas de lançamento."
      },
      "fauna_do_dia": {
        "id": "bisao",
        "contexto": "Nas reservas do país, o bisão voltou a existir depois de quase desaparecer."
      },
      "sabor_do_dia": {
        "id": "torta-de-maca",
        "contexto": "Torta de maçã na cantina da base — a sobremesa mais tradicional do país."
      },
      "perguntas": [
        {
          "id": "q1",
          "tipo": "observacao",
          "texto": "Por que você acha que quase todo o espaço de um foguete é ocupado por combustível?",
          "etapa": "observacao"
        },
        {
          "id": "q2",
          "tipo": "comparacao",
          "texto": "Que perguntas você faria a um astronauta que morou meses fora da Terra?",
          "etapa": "transporte"
        },
        {
          "id": "qf",
          "tipo": "observacao",
          "etapa": "fauna",
          "texto": "O bisão é enorme e vive em bando na pradaria. Como andar em grupo protege um animal desse tamanho?"
        },
        {
          "id": "qs",
          "tipo": "comparacao",
          "etapa": "sabor",
          "texto": "A torta de maçã é assada e guardada para durar dias. Que outras comidas da sua casa duram por serem assadas?"
        }
      ],
      "observacao": {
        "titulo": "O centro espacial e as máquinas de voar",
        "hotspots": [
          {
            "id": "foguete",
            "x": 45,
            "y": 40,
            "titulo": "O tamanho do foguete",
            "texto": "Quase todo o foguete é combustível: sobra pouquíssimo espaço para as pessoas."
          },
          {
            "id": "protecao",
            "x": 70,
            "y": 58,
            "titulo": "Escudo térmico",
            "texto": "As placas escuras protegem a nave do calor extremo da volta à atmosfera."
          }
        ],
        "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atlantis_Kennedy_Space_Center_Visitor_Complex_4.jpg/1920px-Atlantis_Kennedy_Space_Center_Visitor_Complex_4.jpg"
      },
      "guia_nome": "Sarah"
    },
    {
      "dia": 4,
      "titulo": "Dia 4: O coração da história em Washington, D.C.",
      "descricao": "A cidade foi desenhada antes de existir: avenidas largas, eixos que apontam para monumentos e um grande gramado central rodeado de museus gratuitos. Repare como o espaço público foi planejado para que as pessoas caminhem, encontrem e aprendam ao ar livre.",
      "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/National_Mall%2C_Washington%2C_D.C._%2820100325-DSC01362%29.jpg/1920px-National_Mall%2C_Washington%2C_D.C._%2820100325-DSC01362%29.jpg",
      "guia_local": "Sarah, guia de expedição na capital",
      "clima_do_dia": "20 °C, primavera com cerejeiras",
      "transporte": {
        "nome": "Bicicleta compartilhada",
        "icone": "🚲",
        "descricao": "Bicicletas compartilhadas levam a gente de museu em museu ao longo do grande gramado central."
      },
      "fauna_do_dia": {
        "id": "esquilo-urbano",
        "contexto": "Esquilos disputam espaço com visitantes debaixo das cerejeiras floridas."
      },
      "sabor_do_dia": {
        "id": "pbj",
        "contexto": "Piquenique no gramado com sanduíche PB&J, como fazem as escolas em visita."
      },
      "perguntas": [
        {
          "id": "q1",
          "tipo": "observacao",
          "texto": "Por que você acha que essa cidade foi desenhada com um gramado tão grande e aberto no meio?",
          "etapa": "observacao"
        },
        {
          "id": "q2",
          "tipo": "comparacao",
          "texto": "Se você pudesse criar um museu gratuito na sua cidade, sobre o que ele seria?",
          "etapa": "transporte"
        },
        {
          "id": "qf",
          "tipo": "observacao",
          "etapa": "fauna",
          "texto": "Nos parques da capital os esquilos vivem entre monumentos. O que eles encontram ali que uma floresta também tem?"
        },
        {
          "id": "qs",
          "tipo": "comparacao",
          "etapa": "sabor",
          "texto": "O sanduíche do piquenique foi feito em casa e comido na grama. O que muda quando a refeição acontece ao ar livre?"
        }
      ],
      "observacao": {
        "titulo": "O National Mall e a cidade planejada",
        "hotspots": [
          {
            "id": "eixo",
            "x": 50,
            "y": 52,
            "titulo": "Um grande eixo aberto",
            "texto": "O gramado foi desenhado para alinhar monumentos e permitir que multidões se reúnam."
          },
          {
            "id": "museus",
            "x": 24,
            "y": 64,
            "titulo": "Museus gratuitos",
            "texto": "Quase todos os museus daqui não cobram entrada: a ideia é que o conhecimento seja de todos."
          }
        ],
        "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/National_Mall%2C_Washington%2C_D.C._%2820100325-DSC01362%29.jpg/1920px-National_Mall%2C_Washington%2C_D.C._%2820100325-DSC01362%29.jpg"
      },
      "guia_nome": "Sarah"
    }
  ],
  "fauna_flora": [
    {
      "id": "aguia-careca",
      "nome": "Águia-Careca",
      "nome_cientifico": "Haliaeetus leucocephalus",
      "foto_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Weisskopf_Seeadler_haliaeetus_leucocephalus_8_amk.jpg/1920px-Weisskopf_Seeadler_haliaeetus_leucocephalus_8_amk.jpg",
      "som_url": null,
      "curiosidade": "Constrói um dos maiores ninhos do mundo animal: reaproveitado ano após ano, pode pesar quase uma tonelada. Pesca mergulhando as garras na superfície da água.",
      "habitat": "Perto de grandes lagos, rios e litorais com árvores altas."
    },
    {
      "id": "bisao",
      "nome": "Bisão",
      "nome_cientifico": "Bison bison",
      "foto_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/American_bison_in_Yellowstone_National_Park.jpg/1920px-American_bison_in_Yellowstone_National_Park.jpg",
      "som_url": null,
      "curiosidade": "Em vez de fugir das nevascas, caminha contra o vento e usa a cabeça enorme como pá para varrer a neve e alcançar o capim enterrado.",
      "habitat": "Pradarias e vales abertos das Grandes Planícies."
    },
    {
      "id": "esquilo-urbano",
      "nome": "Esquilo dos parques urbanos",
      "nome_cientifico": "Sciurus carolinensis",
      "foto_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Squirrel_in_CP_%2840494%29.jpg/1920px-Squirrel_in_CP_%2840494%29.jpg",
      "som_url": null,
      "curiosidade": "Aprendeu a viver entre pessoas: reconhece rotas seguras pelos galhos e fios, e memoriza quais bancos de praça costumam ter comida.",
      "habitat": "Parques, praças e árvores de rua das grandes cidades."
    }
  ],
  "gastronomia": [
    {
      "id": "bagel-cream-cheese",
      "nome": "Bagel com cream cheese",
      "foto_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Toasted_sesame_bagel_with_cream_cheese_-_Massachusetts.jpg/1920px-Toasted_sesame_bagel_with_cream_cheese_-_Massachusetts.jpg",
      "adjetivo": "clássico",
      "historia": "Trazido por imigrantes do leste europeu, virou o café da manhã de Nova York. É fervido antes de assar, o que deixa a casca brilhante e o miolo bem macio."
    },
    {
      "id": "pbj",
      "nome": "PB&J",
      "foto_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Peanut-Butter-Jelly-Sandwich.jpg/1920px-Peanut-Butter-Jelly-Sandwich.jpg",
      "adjetivo": "prático",
      "historia": "Pasta de amendoim com geleia entre duas fatias de pão: barato, energético e fácil de guardar na mochila. Virou o lanche escolar mais conhecido do país."
    },
    {
      "id": "torta-de-maca",
      "nome": "Torta de Maçã",
      "foto_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Apple_pie_24.jpg/1920px-Apple_pie_24.jpg",
      "adjetivo": "tradicional",
      "historia": "Receita levada por famílias europeias que encontraram pomares perfeitos no clima temperado do norte. Assar a torta no outono é um jeito de guardar a colheita para os dias frios."
    }
  ],
  "comparativo": {
    "clima_predominante": "Muito variado: temperado, desértico e subtropical",
    "bioma_principal": "Pradarias, desertos, florestas temperadas e pântanos",
    "elemento_marcante": "A escala — cidades verticais e paisagens gigantes",
    "agricultura_construcoes": "Grandes lavouras mecanizadas de milho, trigo e soja nas planícies, com irrigação por pivô. As construções vão de arranha-céus de aço e vidro a casas de madeira em subúrbios espalhados.",
    "roupas_modo_de_vida": "Roupas mudam muito de região para região: casacos no norte, roupas leves no sul e no deserto. A vida depende bastante do carro e das grandes distâncias.",
    "fauna_alimentacao": "Fauna de pradaria e floresta temperada, como bisões e águias-carecas. A comida é prática e portátil, feita para o ritmo acelerado do dia a dia."
  },
  "codigo_mapa": "us",
  "chegada": {
    "imagem_url": "/imagens/janela-eua.jpg",
    "texto": "“Aqui é o comandante falando. Estamos iniciando a descida sobre Nova York: por favor, apertem os cintos.” Pela janela aparece a ilha de Manhattan inteira — arranha-céus grudados uns nos outros, rios dos dois lados e pontes ligando tudo."
  },
  "base": {
    "nome": "Hotel Liberty, em Nova York",
    "imagem_url": "/imagens/base-eua.jpg",
    "descricao": "Um hotel antigo perto do parque, com janelas altas de onde se vê a cidade acordando. É aqui que a Sarah, nossa guia de expedição, encontra os exploradores todas as manhãs."
  }
};

export default estadosUnidos;
