import type { Pais } from "../types";

export const japao: Pais = {
  id: "japao",
  nome: "Japão",
  continente: "asia",
  codigo_mapa: "jp",
  bandeira: "🇯🇵",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-jp.png",
  capital: "Tóquio",
  coordenadas: { x: 88, y: 38 },
  imagem_capa: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "A terra do sol nascente! Um arquipélago vulcânico no Oceano Pacífico marcado pelo imponente Monte Fuji, ilhas montanhosas, florestas antigas, templos históricos e metrópoles tecnológicas ultramodernas.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Japonês",
    fuso_horario: "12h00 no horário local — 12 horas a mais que Brasília",
    temperatura: "20 °C, clima temperado com brisa suave de primavera",
    fala_piloto_original: "Nihon e yōkoso! Tōkyō ni chakuliku suru tame ni nimotsu no junbi o shite kudasa...",
    fala_piloto_traducao: "Bem-vindos ao Japão! Por favor, preparem suas bagagens para pousarmos em Tóquio...",
    texto: "Olhe pela janela! Do alto, avistamos a simetria perfeita do Monte Fuji coberto de neve no topo, a imensidão urbana de Tóquio e a Baía de Tóquio cortada por pontes e ilhas artificiais.",
    galeria: [
      {
        id: "jp-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        legenda: "Monte Fuji majestoso"
      },
      {
        id: "jp-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        legenda: "A vibrante metrópole de Tóquio"
      }
    ]
  },

  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Ryokan Tradicional em Quioto / Hospedagem Futurista em Tóquio",
    imagem_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Som sereno do koto (harpa japonesa) com o suave gotejar de uma fonte de bambu"
    },
    descricao: "“Yōkoso, exploradores! No Japão, cada detalhe expressa respeito, harmonia com a natureza, precisão técnica e uma busca constante pela excelência.”",
    galeria: [
      {
        id: "jp-base-1",
        imagem_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        legenda: "Espaço de paz e tradição"
      }
    ]
  },

  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Trem-Bala Shinkansen, o Monte Fuji e a Tecnologia Japonesa",
      descricao: "Uma jornada que une a velocidade do futuro com a serenidade milenar das montanhas sagradas.",
      imagem_url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "21 °C, dia ensolarado com céu limpo",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Shinkansen (Trem-Bala de Alta Velocidade)",
        icone: "🚄",
        descricao: "Com bico aerodinâmico inspirado no bico do passarinho martim-pescador, alcança velocidades superiores a 320 km/h com pontualidade medida em segundos e levitação magnética (Maglev).",
        imagem_url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Deslizar ultrarrápido e silencioso do Shinkansen pelas estações" }
      },

      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "Monte Fuji (Fujisan)",
        imagem_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "cone-vulcaniaco", x: 50, y: 35, titulo: "Vulcão Ativo com Pico Nevado", texto: "Com 3.776 metros de altitude, o Monte Fuji é a montanha mais alta do país e um vulcão sagrado admirado na arte japonesa há séculos." },
          { id: "cinco-lagos", x: 50, y: 70, titulo: "Região dos Cinco Lagos", texto: "Espelhos d'água naturais ao redor da base que refletem a imagem da montanha, emoldurada por florestas e cerejeiras em flor." }
        ]
      },

      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "macaco-das-neves-e-cervo-sika",
        contexto: "Observe as montanhas de Nagano e o Parque de Nara!",
        texto_guia: "O Macaco-japonês (conhecido como Macaco das Neves) relaxa em fontes termais naturais nos Alpes Japoneses, enquanto os Cervos Sika caminham livremente e curvam a cabeça em agradecimento pelos petiscos no Parque de Nara."
      },

      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "ramen-sushi-e-bento",
        contexto: "Hora de explorar uma gastronomia declarada Patrimônio Imaterial da Humanidade!",
        texto_guia: "Provo o fumegante *Ramen* (sopa de macarrão com caldo rico e legumes), acompanhado de *Sushi* preparado com precisão e um colorido *Bentô* (marmita equilibrada com arroz e acompanhamentos)."
      },

      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "Qual é o famoso e veloz meio de transporte japonês cujo design aerodinâmico foi inspirado no bico do passarinho martim-pescador?",
        opcoes: ["Teleférico", "Shinkansen (Trem-Bala)", "Submarino"],
        correta: 1,
        explicacao: "O Shinkansen (trem-bala) é referência mundial em engenharia ferroviária, alta velocidade, segurança e pontualidade."
      },

      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "O Brasil abriga a maior comunidade de descendentes de japoneses fora do Japão (mais de 2 milhões de nikkeis), concentrados especialmente nos estados de São Paulo e Paraná!" },
        observacao: { texto: "Artes marciais tradicionais do Japão, como o Judô e o Jiu-Jitsu (que no Brasil deu origem ao famoso Jiu-Jitsu Brasileiro), são praticadas por milhares de jovens brasileiros." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "macaco-japones",
      nome: "Macaco Japonês",
      nome_cientifico: "Macaca fuscata",
      foto_url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "Eles adoram tomar banhos quentes em águas termais durante o inverno rigoroso.",
      habitat: "Montanhas e florestas do Japão."
    }
  ],

  gastronomia: [
    {
      id: "ramen",
      nome: "Ramen",
      foto_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      adjetivo: "acolhedor",
      historia: "Uma tigela de ramen é muito mais que uma sopa; é uma arte que equilibra sabores e texturas de forma única."
    }
  ],

  comparativo: {
    clima_predominante: "Temperado e Subtropical",
    bioma_principal: "Arquipélago Montanhoso",
    elemento_marcante: "Monte Fuji e Tecnologia",
    agricultura_construcoes: "Arrozais e Pagodes",
    roupas_modo_de_vida: "Respeito e Modernidade",
    fauna_alimentacao: "Cervos e Sushi"
  }
};
