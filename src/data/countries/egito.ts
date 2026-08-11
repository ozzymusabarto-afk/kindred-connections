import type { Pais } from "../types";

export const egito: Pais = {

  id: "egito",

  nome: "Egito",

  continente: "africa",

  codigo_mapa: "eg",

  bandeira: "🇪🇬",

  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-eg.png",

  capital: "Cairo",

  coordenadas: { x: 58, y: 46 },

  imagem_capa: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",

  credito: "Unsplash",

  resumo_geografico: "A dádiva do Rio Nilo no norte da África! O Egito conecta o Mar Mediterrâneo ao Mar Vermelho, unindo o vasto Deserto do Saara a oásis cheios de vida, monumentos faraônicos e milênios de história humanitária.",

  

  // ==========================================

  // 1. CHEGADA (O Voo e as Boas-vindas)

  // ==========================================

  chegada: {

    imagem_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",

    },

    idioma: "Árabe",

    fuso_horario: "16h00 no horário local — 5 horas a mais que Brasília",

    temperatura: "31 °C, sol radiante e ar seco do deserto",

    fala_piloto_original: "Ahlan wa sahlan bikum fi Misr! Yurja ihtidad al-amti'ati lil-hubut fi al-Qahira...",

    fala_piloto_traducao: "Sejam bem-vindos ao Egito! Por favor, preparem suas bagagens para pousar no Cairo...",

    texto: "Olhe pela janela! Do alto, vemos o exuberante e verdejante Vale do Rio Nilo rasgando as areias douradas do deserto e, ao fundo, as silhuetas monumentais das Pirâmides de Gizé.",

    galeria: [
      { id: "eg-chegada-1", imagem_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80", legenda: "Pirâmides de Gizé" },
      { id: "eg-chegada-2", imagem_url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80", legenda: "Barcos no Rio Nilo" }
    ]

  },

  // ==========================================

  // 2. CHECK-IN (Base de Operações)

  // ==========================================

  base: {

    nome: "Hospedagem Histórica à beira do Rio Nilo no Cairo / Luxor",

    imagem_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Melodia hipnotizante de oud (alaúde árabe) ecoando ao pôr do sol"

    },

    descricao: "“Ahlan wa sahlan, exploradores! Vocês acabam de chegar a uma das civilizações mais antigas e brilhantes da história. Preparem-se para desvendar mistérios gravados em pedra há milênios.”",

    galeria: [
      { id: "eg-base-1", imagem_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80", legenda: "O Rio Nilo ao amanhecer" }
    ]

  },

  // ==========================================

  // 3. ROTEIRO (As 5 Estações)

  // ==========================================

  roteiro_viagem: [

    {

      dia: 1,

      titulo: "Dia 1: As Grandes Pirâmides de Gizé, a Esfinge e a Engenharia dos Faraós",

      descricao: "Um dia para descobrir como os antigos egípcios construíram as maiores estruturas do mundo antigo.",

      imagem_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",

      clima_do_dia: "30 °C, ensolarado e céus limpos",

      

      // ESTAÇÃO 1: TRANSPORTE

      transporte: {

        nome: "Felucca (Barco a Vela Tradicional do Nilo)",

        icone: "⛵",

        descricao: "Embarcações tradicionais de madeira com grandes velas triangulares que navegam pelas águas do Rio Nilo há milhares de anos aproveitando os ventos do deserto.",

        imagem_url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80",

        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Vento suave inflando as velas de pano sobre as águas calmas do Nilo" }

      },

      // ESTAÇÃO 2: OBSERVAÇÃO

      observacao: {

        titulo: "Necrópole de Gizé (Grande Pirâmide de Khufu e a Grande Esfinge)",

        imagem_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",

        hotspots: [

          { id: "piramide-khufu", x: 45, y: 35, titulo: "A Grande Pirâmide de Quéops (Khufu)", texto: "Erguida com mais de 2,3 milhões de blocos de pedra perfeitamente cortados e ajustados, medindo mais de 138 metros de altura." },

          { id: "grande-esfinge", x: 70, y: 65, titulo: "A Grande Esfinge", texto: "Estátua colossal esculpida em uma única rocha com corpo de leão e cabeça de faraó, guardando as pirâmides há mais de 4.500 anos." }

        ]

      },

      // ESTAÇÃO 3: NATUREZA

      fauna_do_dia: {

        id: "dromedario-e-raposo-feneco",

        contexto: "Observe as dunas do Saara e as margens férteis do Nilo!",

        texto_guia: "O Dromedário (perfeitamente adaptado ao deserto, capaz de armazenar gordura na corcova) é o companheiro dos nômades, enquanto nas areias habita o Feneco (raposo-do-deserto) com suas orelhas gigantes que dissipam o calor."

      },

      // ESTAÇÃO 4: SABORES

      sabor_do_dia: {

        id: "koshari-e-falafel",

        contexto: "Hora de experimentar os sabores marcantes e aromáticos da culinária egípcia!",

        texto_guia: "Provo o tradicional Koshari (prato nacional feito de macarrão, arroz, lentilhas, grão-de-bico, alho e molho de tomate temperado) e bolinhos crocantes de Falafel com pão pita bem quentinho."

      },

      // ESTAÇÃO 5: CARIMBO

      desafio: {

        pergunta: "Qual é o famoso rio que atravessa o Egito de sul a norte e foi essencial para o surgimento da civilização egípcia?",

        opcoes: ["Rio Amazonas", "Rio Nilo", "Rio Mississippi"],

        correta: 1,

        explicacao: "O Rio Nilo é um dos rios mais longos do mundo e suas inundações anuais tornavam as terras do deserto férteis para a agricultura."

      },

      // CONEXÃO PEDAGÓGICA

      notas_brasil: {

        transporte: { texto: "Em 1876, o Imperador Dom Pedro II do Brasil visitou o Egito, subiu as pirâmides e comprou múmias e antiguidades que formaram a famosa coleção egípcia do Museu Nacional do Rio de Janeiro." },

        observacao: { texto: "A escrita em hieróglifos usava símbolos e desenhos para representar sons e ideias, algo parecido com os pictogramas e emojis que usamos hoje em nossas mensagens digitais no Brasil!" }

      }

    }

  ],

  fauna_flora: [],
  gastronomia: [],
  comparativo: {
    clima_predominante: "Desértico e subtropical",
    bioma_principal: "Deserto árido e oásis fluviais",
    elemento_marcante: "O Rio Nilo e os monumentos antigos",
    agricultura_construcoes: "Algodão, arroz e trigo. Monumentos de pedra e casas de tijolos de barro.",
    roupas_modo_de_vida: "Túnicas de algodão, vida centrada no Nilo e hospitalidade árabe.",
    fauna_alimentacao: "Camélidos, aves aquáticas e uma culinária baseada em grãos e vegetais."
  }

};