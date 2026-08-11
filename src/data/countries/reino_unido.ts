import type { Pais } from "../types";

export const reino_unido: Pais = {

  id: "reino_unido",

  nome: "Reino Unido",

  continente: "europa",

  codigo_mapa: "gb",

  bandeira: "🇬🇧",

  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-gb.png",

  capital: "Londres",

  coordenadas: { x: 48, y: 30 },

  imagem_capa: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",

  credito: "Unsplash",

  resumo_geografico: "As ilhas britânicas no Atlântico Norte! O Reino Unido une quatro nações (Inglaterra, Escócia, País de Gales e Irlanda do Norte) com paisagens de colinas verdes, castelos seculares, falésias de giz branco e capitais vibrantes.",

  

  // ==========================================

  // 1. CHEGADA (O Voo e as Boas-vindas)

  // ==========================================

  chegada: {

    imagem_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",

    },

    idioma: "Inglês (além do Galês, Gaélico Escocês e Irlandês)",

    fuso_horario: "14h00 no horário local — 4 horas a mais que Brasília",

    temperatura: "17 °C, dia nublado com névoa leve e brisa suave",

    fala_piloto_original: "Welcome to the United Kingdom! Please prepare your luggage as we land in London...",

    fala_piloto_traducao: "Bem-vindos ao Reino Unido! Preparem suas bagagens para pousarmos em Londres...",

    texto: "Olhe pela janela! Do alto, avistamos o Rio Tâmisa serpenteando por Londres, a gigantesca roda-gigante London Eye e o histórico Palácio de Westminster com o Big Ben.",

    galeria: [
      { id: "ru-chegada-1", imagem_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", legenda: "Londres de cima" },
      { id: "ru-chegada-2", imagem_url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=800&q=80", legenda: "Big Ben" }
    ]

  },

  // ==========================================

  // 2. CHECK-IN (Base de Operações)

  // ==========================================

  base: {

    nome: "Hotel de Charme Georgiano em Londres / Castelo na Escócia",

    imagem_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",

    som: {

      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",

      legenda: "Melodia épica de gaita de foles escocesa com badalar suave de sinos ao fundo"

    },

    descricao: "“Welcome, explorers! No Reino Unido, a inovação científica e tecnológica caminha lado a lado com tradições reais, literatura imortal e castelos cheios de mistério.”",

    galeria: [
      { id: "ru-base-1", imagem_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", legenda: "Interior clássico" }
    ]

  },

  // ==========================================

  // 3. ROTEIRO (As 5 Estações)

  // ==========================================

  roteiro_viagem: [

    {

      dia: 1,

      titulo: "Dia 1: O Big Ben, os Ônibus de Dois Andares e os Mistérios de Stonehenge",

      clima_do_dia: "18 °C, clima fresco típico das ilhas britânicas",

      descricao: "Um dia explorando os ícones da capital britânica e mistérios antigos.",

      imagem_url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",

      // ESTAÇÃO 1: TRANSPORTE

      transporte: {

        nome: "Ônibus Vermelho de Dois Andares (Double-Decker) e Metrô (The Tube)",

        icone: "🚌",

        descricao: "Os famosos ônibus vermelhos de dois andares oferecem vista panorâmica das ruas históricas, integrados ao metropolitano mais antigo do mundo, inaugurado em 1863.",

        imagem_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",

        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Aviso clássico do metrô de Londres: 'Mind the Gap'" }

      },

      // ESTAÇÃO 2: OBSERVAÇÃO

      observacao: {

        titulo: "Torre do Relógio (Elizabeth Tower / Big Ben)",

        imagem_url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",

        hotspots: [

          { id: "sino-big-ben", x: 50, y: 30, titulo: "O Grande Sino Big Ben", texto: "Embora muitos chamem a torre inteira de Big Ben, o nome pertence originalmente ao enorme sino de 13,7 toneladas no seu interior." },

          { id: "mostrador-neogotico", x: 50, y: 48, titulo: "Relógio Monumental", texto: "Os quatro mostradores de vidro Opala medem 7 metros de diâmetro cada e mantêm a hora precisa do Reino Unido há mais de 160 anos." }

        ]

      },

      // ESTAÇÃO 3: NATUREZA

      fauna_do_dia: {

        id: "vaca-das-highlands-e-papagaio-do-mar",

        contexto: "Observe as Terras Altas da Escócia e as ilhas oceânicas!",

        texto_guia: "Nas montanhas escocesas vive a Vaca das Highlands (com sua pelagem ruiva e longa para suportar o frio), enquanto nas falésias praianas os Papagaios-do-mar (Puffins) constroem seus ninhos."

      },

      // ESTAÇÃO 4: SABORES

      sabor_do_dia: {

        id: "fish-and-chips-e-cha-da-tarde",

        contexto: "Hora de experimentar os pratos clássicos da culinária britânica!",

        texto_guia: "Saboreie o crocante *Fish and Chips* (peixe empanado acompanhado de batatas fritas bem quentinhas) e experimente o tradicional Chá da Tarde acompanhado de *Scones* com geleia."

      },

      // ESTAÇÃO 5: CARIMBO

      desafio: {

        pergunta: "Como se chama o famoso rio que atravessa a cidade de Londres e foi fundamental para o comércio marítimo britânico?",

        opcoes: ["Rio Sena", "Rio Tâmisa", "Rio Danúbio"],

        correta: 1,

        explicacao: "O Rio Tâmisa é o maior rio da Inglaterra e corta toda a cidade de Londres, passando ao lado de monumentos como a Tower Bridge e o Parlamento."

      },

      // CONEXÃO PEDAGÓGICA

      notas_brasil: {

        transporte: { texto: "Engenheiros britânicos ajudaram a construir as primeiras grandes lines férreas no Brasil no século XIX, incluindo a São Paulo Railway (famosa linha de Santos a Jundiaí)." },

        observacao: { texto: "O futebol, o esporte mais popular do Brasil, foi introduzido no país pelo paulistano Charles Miller após retornar de seus estudos no Reino Unido em 1894!" }

      }

    }

  ],

  fauna_flora: [],
  gastronomia: [],
  comparativo: {
    clima_predominante: "Temperado oceânico, nublado e chuvoso",
    bioma_principal: "Pradarias, florestas decíduas e terras altas montanhosas",
    elemento_marcante: "História monárquica e revolução industrial",
    agricultura_construcoes: "Cevada, trigo e batata. Cidades vitorianas e castelos.",
    roupas_modo_de_vida: "Estilo clássico, pontualidade e o chá das cinco.",
    fauna_alimentacao: "Raposas, cervos e uma dieta rica em pães e peixes."
  }

};