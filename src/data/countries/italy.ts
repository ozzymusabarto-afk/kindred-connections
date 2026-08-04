import { Pais } from "../types";

export const italia: Pais = {
  id: "italia",
  nome: "Itália",
  continente: "europa",
  codigo_mapa: "it",
  bandeira: "🇮🇹",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png",
  capital: "Roma",
  coordenadas: { x: 675, y: 405 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "Uma península em forma de bota que respira arte, história e gastronomia. A Itália é o berço do Império Romano e do Renascimento, onde cada cidade parece um museu ao ar livre. Das montanhas nevadas dos Alpes ao sol do Mediterrâneo, é um país de paisagens deslumbrantes e de um povo que celebra a vida ao redor de uma mesa farta.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/View_of_Rome_from_the_Janiculum.jpg/1280px-View_of_Rome_from_the_Janiculum.jpg",
    credito: "Wikimedia Commons",
    idioma: "Italiano",
    fuso_horario: "10h00 no horário local — 4 horas a mais que Brasília",
    temperatura: "20 °C, dia ensolarado com céu azul",
    fala_piloto_original: "Buongiorno, signore e signori! Benvenuti in Italia. Stiamo scendendo verso l'Aeroporto Internazionale Leonardo da Vinci a Roma. La temperatura è di 20 gradi e il cielo è sereno. Il fuso orario locale è avanti di quattro ore rispetto a Brasilia. Godetevi il vostro soggiorno!",
    fala_piloto_traducao: "Bom dia, senhoras e senhores! Bem-vindos à Itália. Estamos descendo em direção ao Aeroporto Internacional Leonardo da Vinci, em Roma. A temperatura é de 20 graus e o céu está limpo. O fuso horário local está quatro horas à frente de Brasília. Aproveitem a sua estadia!",
    texto: "Olhe para baixo, explorador! Estamos chegando na 'Cidade Eterna'. Veja como as cúpulas das igrejas e os prédios de terracota brilham sob o sol. Roma foi o centro de um dos maiores impérios da história. Quase tudo o que usamos hoje — como leis, estradas e até o nosso alfabeto — tem raízes aqui. Prepare-se para comer a melhor pizza da sua vida!"
  },

  base: {
    nome: "Hotel Histórico perto da Piazza di Spagna, Roma",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hotel_Hassler_Roma.jpg/1280px-Hotel_Hassler_Roma.jpg",
    credito: "Wikimedia Commons",
    descricao: "“Benvenuti! Meu nome é Marco e serei o vosso guia nesta jornada pela 'Bel Paese'. Estamos hospedados no coração de Roma, onde o barulho das fontes e o aroma do café fresco nos dão as boas-vindas. As ruas aqui são como labirintos de pedra cheios de estátuas e praças escondidas. Deixem as malas, pois a história de 2.000 anos está logo ali na esquina!”"
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Roma — O Coliseu e a Glória Imperial",
      descricao: "Hoje entraremos na maior arena da antiguidade, onde gladiadores lutavam e a história do Império Romano era escrita nas pedras.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Marco",
      guia_local: "Marco, historiador romano",
      clima_do_dia: "22 °C, brisa leve entre as ruínas",
      transporte: {
        nome: "Vespa (Motoneta Clássica)",
        icone: "🛵",
        descricao: "Em Roma, o trânsito é agitado! O transporte mais icônico é a Vespa. Ela é pequena, ágil e perfeita para cruzar as ruelas estreitas e sentir o vento no rosto enquanto passamos pelos monumentos.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vespa_GTS_300.jpg/1280px-Vespa_GTS_300.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "O Coliseu",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "arcos",
            x: 50,
            y: 40,
            titulo: "Arcos Romanos",
            texto: "Os romanos foram mestres na engenharia de arcos. Isso permitia construir prédios altíssimos e muito resistentes que duram até hoje!"
          },
          {
            id: "arena",
            x: 50,
            y: 70,
            titulo: "A Arena Central",
            texto: "Antigamente, o chão era coberto de areia. Embaixo dele, existiam túneis e elevadores para animais e gladiadores surgirem de surpresa."
          }
        ]
      },
      fauna_do_dia: {
        id: "lobo-italico",
        contexto: "Diz a lenda que uma loba amamentou os fundadores de Roma, Rômulo e Remo."
      },
      sabor_do_dia: {
        id: "pizza-margherita",
        contexto: "Nada como uma pizza autêntica com as cores da bandeira da Itália: manjericão, queijo e tomate."
      },
      perguntas: [
        {
          id: "it-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "O Coliseu tem quase 2.000 anos. Por que você acha que ele ainda está de pé, mesmo depois de tanto tempo?"
        },
        {
          id: "it-d1-comp",
          tipo: "comparacao",
          etapa: "transporte",
          texto: "A Vespa é uma moto muito comum na Itália. Como as pessoas se locomovem para evitar o trânsito na sua cidade?"
        }
      ],
      notas_brasil: {
        transporte: {
          texto: "No Brasil, as motonetas também são muito populares para fugir do trânsito, mas a Vespa se tornou um símbolo de estilo e design italiano no mundo todo."
        },
        observacao: {
          texto: "Os arcos romanos influenciaram a arquitetura de muitas igrejas no Brasil colonial, como as que vemos em Ouro Preto ou Olinda."
        }
      },
      desafio: {
        pergunta: "Quantos anos tem, aproximadamente, o Coliseu de Roma?",
        opcoes: ["500 anos", "2.000 anos", "5.000 anos"],
        correta: 1,
        explicacao: "O Coliseu foi concluído no ano 80 d.C., ou seja, tem cerca de 2 mil anos de história!"
      }
    },
    {
      dia: 2,
      titulo: "Dia 2: Veneza — A Cidade sobre a Água",
      descricao: "Viajamos para o norte até uma cidade onde não existem carros, apenas barcos que deslizam por canais silenciosos entre prédios centenários.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gondolas_in_Venice_2019.jpg/1280px-Gondolas_in_Venice_2019.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Marco",
      guia_local: "Marco, em Veneza",
      clima_do_dia: "18 °C, névoa suave sobre os canais",
      transporte: {
        nome: "Gôndola",
        icone: "🛶",
        descricao: "Em Veneza, as ruas são de água! A gôndola é um barco comprido e elegante conduzido pelo 'gondoleiro'. É o jeito mais tradicional e silencioso de conhecer a cidade.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Gondola_in_Venice_2.jpg/1280px-Gondola_in_Venice_2.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Grande Canal",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gondolas_in_Venice_2019.jpg/1280px-Gondolas_in_Venice_2019.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "palacios",
            x: 20,
            y: 40,
            titulo: "Palácios Venezianos",
            texto: "Estas casas foram construídas sobre milhares de estacas de madeira cravadas no fundo do mar, que não apodrecem porque não entram em contato com o ar!"
          },
          {
            id: "pontes",
            x: 80,
            y: 30,
            titulo: "Ponte de Rialto",
            texto: "A ponte mais antiga de Veneza. Ela é feita de pedra e tem lojas de joias e lembranças ao longo do seu arco."
          }
        ]
      },
      fauna_do_dia: {
        id: "pombo-veneza",
        contexto: "Na Praça de São Marcos, milhares de pombos fazem parte da paisagem urbana."
      },
      sabor_do_dia: {
        id: "gelato",
        contexto: "Hora de refrescar com o sorvete italiano mais cremoso do mundo."
      },
      perguntas: [
        {
          id: "it-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Veneza é uma cidade sem carros. Como você imagina que os bombeiros ou as ambulâncias fazem para chegar rápido às emergências?"
        }
      ],
      desafio: {
        pergunta: "Qual o principal 'veículo' de transporte em Veneza?",
        opcoes: ["Bicicleta", "Carro", "Barco"],
        correta: 2,
        explicacao: "Em Veneza as ruas são canais, por isso tudo — de passageiros a mercadorias — é transportado por barcos."
      }
    },
    {
      dia: 3,
      titulo: "Dia 3: Toscana — Colinas, Ciprestes e a Vida no Campo",
      descricao: "Terminamos nossa jornada nas paisagens rurais da Toscana, onde o tempo parece passar mais devagar entre oliveiras e vinhedos.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Val_d%27Orcia_morning.jpg/1280px-Val_d%27Orcia_morning.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Giulia",
      guia_local: "Giulia, agricultora na Toscana",
      clima_do_dia: "21 °C, sol dourado de final de tarde",
      transporte: {
        nome: "Trator ou Caminhada",
        icone: "🚜",
        descricao: "No campo, o ritmo é outro. Usamos um trator para chegar aos olivais mais distantes ou simplesmente caminhamos pelas trilhas de terra batida.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fiat_tractor_in_Tuscany.jpg/1280px-Fiat_tractor_in_Tuscany.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Val d'Orcia",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Val_d%27Orcia_morning.jpg/1280px-Val_d%27Orcia_morning.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "ciprestes",
            x: 70,
            y: 50,
            titulo: "Ciprestes",
            texto: "Estas árvores altas e finas são o símbolo da Toscana. Elas costumam marcar o caminho até as casas de fazenda."
          },
          {
            id: "oliveiras",
            x: 30,
            y: 70,
            titulo: "Oliveiras",
            texto: "Dessas árvores retorcidas sai o azeite de oliva, o 'ouro líquido' da culinária italiana."
          }
        ]
      },
      fauna_do_dia: {
        id: "javali",
        contexto: "Nas florestas da Toscana, o javali selvagem busca raízes e frutos caídos."
      },
      sabor_do_dia: {
        id: "bruschetta",
        contexto: "Pão tostado com azeite fresco e tomates colhidos no jardim."
      },
      perguntas: [
        {
          id: "it-d3-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "A paisagem da Toscana foi moldada pelo trabalho dos agricultores por séculos. O que você vê de diferente entre esta área rural e as fazendas que conhece no Brasil?"
        }
      ],
      desafio: {
        pergunta: "Qual o nome das árvores altas e finas que marcam as estradas da Toscana?",
        opcoes: ["Palmeiras", "Ciprestes", "Pinheiros"],
        correta: 1,
        explicacao: "Os ciprestes são árvores clássicas da paisagem toscana, plantadas em fileiras ao longo dos caminhos."
      }
    }
  ],

  fauna_flora: [
    {
      id: "lobo-italico",
      nome: "Lobo-itálico",
      nome_cientifico: "Canis lupus italicus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/1280px-Canis_lupus_265b.jpg",
      som_url: null,
      curiosidade: "É o animal nacional da Itália. Quase desapareceu no século passado, mas agora está voltando a habitar as montanhas dos Apeninos.",
      habitat: "Zonas montanhosas e florestas.",
      credito: "Wikimedia Commons"
    },
    {
      id: "javali",
      nome: "Javali Selvagem",
      nome_cientifico: "Sus scrofa",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Wild_Boar_Hog.jpg/1280px-Wild_Boar_Hog.jpg",
      som_url: null,
      curiosidade: "São animais muito fortes e inteligentes que vivem em grupos familiares. Adoram comer bolotas de carvalho e raízes.",
      habitat: "Florestas e áreas de matagal.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "pizza-margherita",
      nome: "Pizza Margherita",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/1280px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
      adjetivo: "clássica",
      historia: "Dizem que foi criada em Nápoles para homenagear a Rainha Margherita, usando as cores da Itália: vermelho (tomate), branco (mozzarella) e verde (manjericão).",
      credito: "Wikimedia Commons"
    },
    {
      id: "gelato",
      nome: "Gelato Italiano",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_cream_with_whipped_cream%2C_chocolate_sauce%2C_and_a_wafer.jpg/1280px-Ice_cream_with_whipped_cream%2C_chocolate_sauce%2C_and_a_wafer.jpg",
      adjetivo: "cremoso",
      historia: "O gelato é diferente do sorvete comum: tem menos ar e é servido numa temperatura um pouco mais alta, o que realça muito mais o sabor!",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Mediterrânico ao sul e continental ao norte",
    bioma_principal: "Floresta mediterrânica, montanhas e planícies férteis",
    elemento_marcante: "A arte e a arquitetura clássica em cada esquina",
    agricultura_construcoes: "Trigo (para massa!), uvas, azeitonas e tomates. Cidades de pedra com telhados de cerâmica vermelha.",
    roupas_modo_de_vida: "Moda elegante e vida social intensa nas praças (Piazze). O 'Dolce Far Niente' (a doçura de não fazer nada) é valorizado.",
    fauna_alimentacao: "Peixes, queijos variados (Parmesão!), massas frescas e muito azeite de oliva."
  }
};
