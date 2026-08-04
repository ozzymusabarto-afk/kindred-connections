import { Pais } from "../types";

export const portugal: Pais = {
  id: "portugal",
  nome: "Portugal",
  continente: "europa",
  codigo_mapa: "pt",
  bandeira: "🇵🇹",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
  capital: "Lisboa",
  coordenadas: { x: 615, y: 385 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Pra%C3%A7a_do_Com%C3%A9rcio_Lisbon_July_2011.jpg/1280px-Pra%C3%A7a_do_Com%C3%A9rcio_Lisbon_July_2011.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "A porta de entrada da Europa e um pedaço fundamental da história do Brasil. Portugal é um país de navegadores, com castelos medievais, bondes amarelos que sobem colinas íngremes e um litoral banhado pelo Atlântico de onde partiram as caravelas que chegaram ao solo brasileiro há séculos. É uma terra onde o antigo e o moderno caminham juntos pelas ruas de pedra.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Alfama_Lisbon.jpg/1280px-Alfama_Lisbon.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Som real de um avião pousando no aeroporto de Lisboa",
      credito: "Wikimedia Commons"
    },
    idioma: "Português (com um sotaque charmoso!)",
    fuso_horario: "12h00 no horário local — 4 horas a mais que Brasília",
    temperatura: "18 °C, sol entre nuvens e vento do mar",
    fala_piloto_original: "Bom dia, senhores passageiros! Aqui fala o comandante. Iniciamos a nossa descida para o Aeroporto Humberto Delgado, em Lisboa. O tempo está agradável, com 18 graus e o céu parcialmente nublado. O fuso horário local é de meio-dia, quatro horas à frente de Brasília. Sejam muito bem-vindos a Portugal!",
    fala_piloto_traducao: "Bom dia, senhores passageiros! Aqui fala o comandante. Iniciamos a nossa descida para o Aeroporto Humberto Delgado, em Lisboa. O tempo está agradável, com 18 graus e o céu parcialmente nublado. O fuso horário local é de meio-dia, quatro horas à frente de Brasília. Sejam muito bem-vindos a Portugal!",
    texto: "Olhe pela janela, explorador! Estamos sobrevoando a foz do Rio Tejo. Veja como a luz do sol brilha intensamente refletida nas águas e nas fachadas brancas dos prédios. Aquela ponte enorme que você vê é a Ponte 25 de Abril, muito parecida com a de San Francisco! Portugal é um país pequeno em tamanho, mas gigante em história. Quase tudo o que conhecemos no Brasil — a língua, muitas comidas, a arquitetura das cidades antigas — começou aqui. Prepare-se para uma viagem no tempo!",
    galeria: [
      {
        id: "pt-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lisboa_Aerial_View.jpg/1280px-Lisboa_Aerial_View.jpg",
        legenda: "Vista aérea de Lisboa e do Rio Tejo",
        credito: "Wikimedia Commons"
      },
      {
        id: "pt-chegada-2",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lisbon_Airport_Terminal.jpg/1280px-Lisbon_Airport_Terminal.jpg",
        legenda: "Terminal do Aeroporto Humberto Delgado",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Pousada no bairro de Alfama, Lisboa",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Alfama_Lisbon.jpg/1280px-Alfama_Lisbon.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lisbon_Street_Atmosphere.mp3",
      legenda: "Sons das ruas de Alfama: bondes e conversas",
      credito: "Wikimedia Commons"
    },
    descricao: "“Bem-vindos! Eu me chamo João e serei o vosso guia por esta terra de navegadores. Ficaremos hospedados aqui em Alfama, o bairro mais antigo de Lisboa. Ouçam... conseguem ouvir o som dos bondes subindo a ladeira e o cheiro de peixe assado vindo das janelas? As ruas aqui são tão estreitas que quase podemos tocar as paredes dos dois lados! Deixem as malas e calcem sapatos confortáveis, pois as calçadas de pedra portuguesa esperam por nós.”",
    galeria: [
      {
        id: "pt-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Alfama_Street_View.jpg/1280px-Alfama_Street_View.jpg",
        legenda: "As ruas estreitas de Alfama",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Belém — Onde o mar encontrou o Brasil",
      descricao: "Hoje visitaremos o ponto exato de onde partiram as caravelas de Pedro Álvares Cabral. É um lugar cheio de monumentos que parecem feitos de renda de pedra.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Torre_Bel%C3%A9m_November_2016-1.jpg/1280px-Torre_Bel%C3%A9m_November_2016-1.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "João",
      guia_local: "João, historiador de Lisboa",
      clima_do_dia: "18 °C, brisa fresca do Rio Tejo",
      transporte: {
        nome: "Elétrico 28 (Bonde Amarelo)",
        icone: "🚋",
        descricao: "Em Lisboa, o transporte mais famoso é o 'elétrico'. Ele parece um brinquedo antigo de madeira, mas é um herói que sobe e desce ladeiras onde nenhum ônibus conseguiria passar. Segurem-se bem, pois ele balança como um navio!",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tram_in_Lisbon.jpg/1280px-Tram_in_Lisbon.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Torre de Belém",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Torre_Bel%C3%A9m_November_2016-1.jpg/1280px-Torre_Bel%C3%A9m_November_2016-1.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "pedra",
            x: 50,
            y: 50,
            titulo: "Manuelino",
            texto: "Repare nos detalhes esculpidos na pedra: há cordas, esferas e símbolos do mar. Esse estilo de decoração se chama Manuelino e só existe em Portugal!"
          },
          {
            id: "rio",
            x: 20,
            y: 80,
            titulo: "O Rio Tejo",
            texto: "Deste rio partiram os navegadores para descobrir caminhos pelo mundo todo. Imagine o medo e a coragem deles ao sair daqui!"
          }
        ]
      },
      fauna_do_dia: {
        id: "gaivota",
        contexto: "As gaivotas dão um show à parte, mergulhando no rio para pescar."
      },
      sabor_do_dia: {
        id: "pastel-belem",
        contexto: "Hora da pausa mais doce da viagem: o famoso pastel de Belém."
      },
      perguntas: [
        {
          id: "pt-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "A Torre de Belém parece um castelo flutuando na água. Por que você acha que ela foi construída bem na beira do rio?"
        },
        {
          id: "pt-d1-comp",
          tipo: "comparacao",
          etapa: "transporte",
          texto: "O elétrico é um bonde que anda sobre trilhos na rua. Na sua cidade existe algum transporte que ande sobre trilhos?"
        }
      ],
      notas_brasil: {
        transporte: {
          texto: "O elétrico de Lisboa é o 'pai' dos bondinhos de Santa Teresa, no Rio de Janeiro. Eles funcionam do mesmíssimo jeito!"
        },
        observacao: {
          texto: "A Torre de Belém foi construída com a mesma pedra (calcário) que foi usada em muitas igrejas antigas de Salvador e Recife."
        }
      },
      desafio: {
        pergunta: "De qual cidade portuguesa partiram as caravelas que chegaram ao Brasil em 1500?",
        opcoes: ["Lisboa", "Porto", "Coimbra"],
        correta: 0,
        explicacao: "Foi de Lisboa, subindo o Rio Tejo até o mar, que a frota de Cabral iniciou a viagem que mudaria a história do Brasil."
      }
    },
    {
      dia: 2,
      titulo: "Dia 2: Sintra — A vila dos palácios coloridos",
      descricao: "Hoje sairemos de Lisboa para uma vila nas montanhas que parece ter saído de um livro de contos de fadas, com castelos de cores vibrantes.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Pal%C3%A1cio_da_Pena_em_Sintra.jpg/1280px-Pal%C3%A1cio_da_Pena_em_Sintra.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "João",
      guia_local: "João, guia de Sintra",
      clima_do_dia: "16 °C, neblina mágica entre as árvores",
      transporte: {
        nome: "Comboio (Trem)",
        icone: "🚆",
        descricao: "Em Portugal, o trem é chamado de 'comboio'. Vamos cruzar campos e vilas até chegar à serra de Sintra.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CP_3400_Cascais.jpg/1280px-CP_3400_Cascais.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Palácio da Pena",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Pal%C3%A1cio_da_Pena_em_Sintra.jpg/1280px-Pal%C3%A1cio_da_Pena_em_Sintra.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "cores",
            x: 40,
            y: 30,
            titulo: "Cores Vivas",
            texto: "O palácio é pintado de amarelo e vermelho para se destacar no meio do verde da floresta. Antigamente, servia como casa de verão para os reis."
          }
        ]
      },
      fauna_do_dia: {
        id: "lince-iberico",
        contexto: "Nas matas de Portugal, vive um dos felinos mais raros e bonitos do mundo."
      },
      sabor_do_dia: {
        id: "travesseiro-sintra",
        contexto: "Um doce de massa folhada e amêndoas que derrete na boca."
      },
      perguntas: [
        {
          id: "pt-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "O Palácio da Pena é cheio de torres, pontes e cores. Qual dessas cores você escolheria se pudesse pintar o seu próprio castelo?"
        }
      ],
      desafio: {
        pergunta: "Sintra é conhecida por seus palácios. Onde eles foram construídos?",
        opcoes: ["No topo da serra", "Na beira da praia", "Debaixo da terra"],
        correta: 0,
        explicacao: "Os palácios de Sintra ficam no alto da serra para aproveitar a vista e o clima fresco das montanhas."
      }
    },
    {
      dia: 3,
      titulo: "Dia 3: A Vida no Porto — Ribeira e Rio Douro",
      descricao: "Viajamos para o norte até a cidade que deu nome ao país: o Porto. É uma cidade de escadas, pontes de ferro e casas coloridas à beira do rio.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ribeira_Porto_Porto_Portugal.jpg/1280px-Ribeira_Porto_Porto_Portugal.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Maria",
      guia_local: "Maria, guia do Porto",
      clima_do_dia: "15 °C, nublado com chance de garoa",
      transporte: {
        nome: "Barco Rabelo",
        icone: "🛶",
        descricao: "Estes barcos de madeira transportavam os barris de vinho pelo Rio Douro. Hoje, levam os exploradores para ver as pontes da cidade.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Barcos_Rabelos_no_Rio_Douro.jpg/1280px-Barcos_Rabelos_no_Rio_Douro.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Ponte Luiz I",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Luiz_I_Bridge_Porto.jpg/1280px-Luiz_I_Bridge_Porto.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "ferro",
            x: 50,
            y: 40,
            titulo: "Estrutura de Ferro",
            texto: "Esta ponte foi desenhada por um aluno do criador da Torre Eiffel! Ela tem dois andares: um para o metrô e outro para os carros."
          }
        ]
      },
      fauna_do_dia: {
        id: "lobo-iberico",
        contexto: "No norte de Portugal, o lobo ainda caminha pelas montanhas rochosas."
      },
      sabor_do_dia: {
        id: "francesinha",
        contexto: "Um sanduíche gigante com muito queijo e um molho secreto especial."
      },
      perguntas: [
        {
          id: "pt-d3-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "As casas na Ribeira são estreitas e coladas umas nas outras. Por que você acha que elas foram construídas assim, tão juntinhas?"
        }
      ],
      desafio: {
        pergunta: "Qual o nome do rio que atravessa a cidade do Porto?",
        opcoes: ["Rio Tejo", "Rio Douro", "Rio Amazonas"],
        correta: 1,
        explicacao: "O Rio Douro é a alma do Porto, onde os barcos rabelos navegam e as pontes ligam as duas margens."
      }
    }
  ],

  fauna_flora: [
    {
      id: "gaivota",
      nome: "Gaivota-argentea",
      nome_cientifico: "Larus argentatus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/European_Herring_Gull_Larus_argentatus.jpg/1280px-European_Herring_Gull_Larus_argentatus.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Herring_Gull_Call.mp3",
      curiosidade: "São aves muito inteligentes que vivem no litoral. Elas aprenderam a seguir os barcos de pesca para conseguir comida fácil.",
      habitat: "Zonas costeiras e estuários.",
      credito: "Wikimedia Commons"
    },
    {
      id: "lince-iberico",
      nome: "Lince-ibérico",
      nome_cientifico: "Lynx pardinus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lince_ib%C3%A9rico_2.jpg/1280px-Lince_ib%C3%A9rico_2.jpg",
      som_url: null,
      curiosidade: "É o felino mais ameaçado do mundo. Portugal criou santuários para que ele volte a correr livre pelas matas.",
      habitat: "Florestas e matagais mediterrânicos.",
      credito: "Wikimedia Commons"
    },
    {
      id: "lobo-iberico",
      nome: "Lobo-ibérico",
      nome_cientifico: "Canis lupus signatus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Iberian_Wolf.jpg/1280px-Iberian_Wolf.jpg",
      som_url: null,
      curiosidade: "Diferente dos lobos dos contos de fadas, o lobo-ibérico é tímido e ajuda a equilibrar a natureza caçando javalis.",
      habitat: "Zonas montanhosas do norte.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "pastel-belem",
      nome: "Pastel de Belém",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pasteis_de_belem.jpg/1280px-Pasteis_de_belem.jpg",
      adjetivo: "crocante",
      historia: "A receita secreta nasceu em um mosteiro há centenas de anos. Só três pessoas no mundo sabem a receita original!",
      credito: "Wikimedia Commons"
    },
    {
      id: "bacalhau",
      nome: "Bacalhau à Brás",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bacalhau_a_bras.jpg/1280px-Bacalhau_a_bras.jpg",
      adjetivo: "saboroso",
      historia: "Dizem que em Portugal existem 365 receitas de bacalhau — uma para cada dia do ano!",
      credito: "Wikimedia Commons"
    },
    {
      id: "francesinha",
      nome: "Francesinha",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Francesinha_na_Baixa.jpg/1280px-Francesinha_na_Baixa.jpg",
      adjetivo: "caprichada",
      historia: "É o prato mais famoso do Porto. Leva bife, vários tipos de linguiça, queijo derretido e um molho picante.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Mediterrânico, com muito sol e verões quentes",
    bioma_principal: "Floresta mediterrânica e montanhas rochosas",
    elemento_marcante: "O azulejo azul e branco nas fachadas das casas",
    agricultura_construcoes: "Grandes plantações de oliveiras (azeite) e videiras (uvas). Casas de pedra ou pintadas de branco com faixas coloridas.",
    roupas_modo_de_vida: "Vida tranquila, caminhando muito a pé pelas praças e ruas de pedra. Roupas elegantes e agasalhos leves no outono.",
    fauna_alimentacao: "Peixes frescos (sardinha e bacalhau), azeite e pães rústicos maravilhosos."
  }
};
