import type { Pais } from "../types";

export const grecia: Pais = {

  id: "grecia",

  nome: "Grécia",

  continente: "europa",

  codigo_mapa: "gr",

  bandeira: "🇬🇷",

  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-gr.png",

  capital: "Atenas",

  coordenadas: { x: 58, y: 40 },

  imagem_capa: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",

  credito: "Unsplash",

  resumo_geografico: "O berço do pensamento ocidental no Mar Mediterrâneo! A Grécia reúne milhares de ilhas banhadas pelas águas turquesa dos mares Egeu e Jônio, montanhas míticas como o Monte Olimpo e templos de mármore com milênios de história.",

  

  // ==========================================

  // 1. CHEGADA (O Voo e as Boas-vindas)

  // ==========================================

  chegada: {

    imagem_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",

    },

    idioma: "Grego",

    fuso_horario: "16h00 no horário local — 5 horas a mais que Brasília",

    temperatura: "26 °C, dia ensolarado e clima mediterrâneo",

    fala_piloto_original: "Kalosorisate stin Ellada! Parakaló etoimáste tis aposkevés sas gia na proseidōthoúme stin Athína...",

    fala_piloto_traducao: "Bem-vindos à Grécia! Por favor, preparem suas bagagens para pousarmos em Atenas...",

    texto: "Olhe pela janela! Do alto, avistamos a colina sagrada da Acrópole dominando a cidade de Atenas, cercada pelo azul reluzente do Mar Egeu e suas inúmeras ilhas.",

    galeria: [
      { id: "gr-chegada-1", imagem_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", legenda: "Vista aérea de Atenas" },
      { id: "gr-chegada-2", imagem_url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80", legenda: "Ilhas Gregas" }
    ]

  },

  // ==========================================

  // 2. CHECK-IN (Base de Operações)

  // ==========================================

  base: {

    nome: "Hotel de Charme aos pés da Acrópole em Atenas / Casa em Santorini",

    imagem_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Dedilhado alegre do bouzouki (instrumento tradicional grego) com ondas do mar ao fundo"

    },

    descricao: "“Kalasirdate, exploradores! Na Grécia, vocês pisam na terra dos filósofos, da matemática, do teatro, da democracia e dos primeiros Jogos Olímpicos da humanidade.”",

    galeria: [
      { id: "gr-base-1", imagem_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", legenda: "Acrópole Iluminada" }
    ]

  },

  // ==========================================

  // 3. ROTEIRO (As 5 Estações)

  // ==========================================

  roteiro_viagem: [

    {

      dia: 1,

      titulo: "Dia 1: O Parthenon na Acrópole, a Filosofia e as Navegações no Egeu",

      descricao: "Um mergulho na história antiga e nas águas turquesas da Grécia.",

      imagem_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",

      clima_do_dia: "25 °C, dia claro e ensolarado com brisa marinha",

      

      // ESTAÇÃO 1: TRANSPORTE

      transporte: {

        nome: "Ferries (Balsas de Conexão Marítima) e Barcos Tradicionais",

        icone: "⛴️",

        descricao: "Para conectar as centenas de ilhas habitadas do país, utilizam-se modernas e velozes balsas marítimas e barcos de madeira tradicionais que navegam entre Santorini, Mykonos e Creta.",

        imagem_url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",

        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Buzina suave do navio ecando pelo porto e barulho das ondas" }

      },

      // ESTAÇÃO 2: OBSERVAÇÃO

      observacao: {

        titulo: "O Parthenon (Templo de Atena na Acrópole)",

        imagem_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",

        hotspots: [

          { id: "colunas-doricas", x: 48, y: 40, titulo: "Colunas Dóricas de Mármore Pentélico", texto: "Construído no século V a.C., o templo utiliza colunas levemente inclinadas para dentro para criar uma ilusão de ótica de perfeição e simetria absoluta para quem olha de baixo." },

          { id: "frontao-esculturas", x: 50, y: 22, titulo: "Esculturas da Mitologia", texto: "No topo do templo, escultores gregos entalharam em mármore as histórias dos deuses e mitos da Antiguidade." }

        ]

      },

      // ESTAÇÃO 3: NATUREZA

      fauna_do_dia: {

        id: "foca-monge-e-tartaruga-caretta",

        contexto: "Observe as águas cristalinas do Parque Marinho de Alonissos e Zakynthos!",

        texto_guia: "A Foca-Monge-do-Mediterrâneo (uma das focas mais raras do planeta) encontra refúgio nas cavernas marinhas da Grécia, enquanto as praias abrigam o aninhamento da Tartaruga-Cabeçuda (*Caretta caretta*)."

      },

      // ESTAÇÃO 4: SABORES

      sabor_do_dia: {

        id: "moussaka-salada-grega-e-iogurte",

        contexto: "Hora de provar os ingredientes frescos e saudáveis do Mediterrâneo!",

        texto_guia: "Delicie-se com a tradicional Moussaka (gratinado de berinjela, carne moída e molho bechamel), acompanhada de Salada Grega com queijo Feta fresco, azeite de oliva e Iogurte Grego com mel."

      },

      // ESTAÇÃO 5: CARIMBO

      desafio: {

        pergunta: "Em qual cidade da Grécia antiga nasceram os Jogos Olímpicos no ano 776 a.C.?",

        opcoes: ["Atenas", "Olímpia", "Esparta"],

        correta: 1,

        explicacao: "Os Jogos Olímpicos nasceram na cidade sagrada de Olímpia, na Grécia, onde atletas de diversas cidades-estado se reuniam para competir em paz."

      },

      // CONEXÃO PEDAGÓGICA

      notas_brasil: {

        transporte: { texto: "Muitas palavras do português falado no Brasil têm origem grega, como *democracia*, *filosofia*, *geografia*, *escola*, *atleta* e *teatro*!" },

        observacao: { texto: "Os conceitos de geometria e matemática desenvolvidos por gregos como Pitágoras e Arquimedes são estudados por todos os estudantes nas escolas brasileiras até hoje." }

      }

    }

  ],

  fauna_flora: [],
  gastronomia: [],
  comparativo: {
    clima_predominante: "Mediterrânico quente e seco",
    bioma_principal: "Costa marinha, matagal mediterrânico e montanhas calcárias",
    elemento_marcante: "Mitologia clássica e templos de mármore",
    agricultura_construcoes: "Azeitonas, uvas e algodão. Casas brancas com cúpulas azuis.",
    roupas_modo_de_vida: "Estilo leve, hospitalidade (Philoxenia) e festivais tradicionais.",
    fauna_alimentacao: "Focas, tartarugas e uma dieta baseada em azeite, queijo feta e peixes."
  }

};