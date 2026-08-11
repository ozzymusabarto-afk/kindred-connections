import type { Pais } from "../types";

export const india: Pais = {
  id: "india",
  nome: "Índia",
  continente: "asia",
  codigo_mapa: "in",
  bandeira: "🇮🇳",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-in.png",
  capital: "Nova Deli",
  coordenadas: { x: 70, y: 45 },
  imagem_capa: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "Uma terra de cores, sons e tradições milenares! Do Himalaia no norte às praias tropicais do sul, a Índia encanta com o monumental Taj Mahal, reservas de vida selvagem e uma cultura vibrante que celebra a diversidade.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Hindi e Inglês (além de 21 outros idiomas oficiais)",
    fuso_horario: "08h30 no horário local — 8 horas e meia a mais que Brasília",
    temperatura: "26 °C, clima quente com brisa ensolarada",
    fala_piloto_original: "Bhárat meṁ āpka svāgat hai! Namaste! Prepare your luggage to land in New Delhi...",
    fala_piloto_traducao: "Bem-vindos à Índia! Namaste! Preparem suas bagagens para pousar em Nova Deli...",
    texto: "Olhe pela janela! Do alto, avistamos as curvas dos rios sagrados, os cúpulas brancas reluzentes dos monumentos históricos e a vibrante agitação das cidades indianas.",
    galeria: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Hospedagem em Agra / Lodges na Reserva de Ranthambore",
    imagem_url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Som místico e relaxante da Sitar acompanhada do ritmo suave das Tablas"
    },
    descricao: "“Namaste, exploradores! Na Índia, celebramos a união entre a natureza, a arte, a ciência e a espiritualidade, aprendendo o respeito por todas as formas de vida.”",
    galeria: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Taj Mahal, os Trens Expressos e os Tigres de Ranthambore",
      clima_do_dia: "27 °C, dia quente e ensolarado",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Trens Expressos de Alta Velocidade (Vande Bharat e Gatimaan Express)",
        icone: "🚆",
        descricao: "A rede ferroviária da Índia é uma das maiores do planeta! Trens modernos e confortáveis interligam as grandes capitais às cidades históricas cruzando paisagens surpreendentes.",
        imagem_url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Apito suave e trilho do trem expresso cortando o interior da Índia" }
      },
      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "Taj Mahal (Monumento ao Amor na Cidade de Agra)",
        imagem_url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "marmore-mosaico", x: 50, y: 35, titulo: "Mármore Branco e Incrustações", texto: "Construído no século XVII toda em mármore branco entalhado com pedras semipreciosas que mudam de cor conforme a luz do sol e da lua." },
          { id: "espelho-agua", x: 50, y: 80, titulo: "Jardins e Espelho D'Água", texto: "Jardins simétricos divididos em quatro partes com um longo canal d'água central que reflete a imagem perfeita do monumento." }
        ]
      },
      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "tigre-de-bengala-e-elefante-asiatico",
        contexto: "Observe os Parques Nacionais de Ranthambore e Jim Corbett!",
        texto_guia: "A Índia é o lar do majestoso Tigre-de-Bengala e do amado Elefante-Asiático. O país lidera grandes esforços internacionais para salvar e proteger esses incríveis animais em seus habitats naturais."
      },
      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "tikka-masala-e-samosa",
        contexto: "Hora de explorar a alquimia das ervas e especiarias aromáticas!",
        texto_guia: "Experimente o delicioso *Chicken Tikka Masala* (ou opção vegetariana com queijo Paneer) rico em especiarias como açafrão, gengibre e cominho, e a *Samosa* (pastelzinho crocante recheado com batatas e ervilhas temperadas)."
      },
      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "De que material nobre é feito o icônico Taj Mahal, conhecido por mudar de tom com a luz do sol?",
        opcoes: ["Mármore Branco", "Granito Vermelho", "Arenito Amarelo"],
        correta: 0,
        explicacao: "O Taj Mahal foi construído inteiramente em mármore branco translúcido trazido de pedreiras distantes, decorado com raras pedras semipreciosas."
      },
      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "O Brasil e a Índia compartilham parcerias em tecnologia e ciência!" },
        observacao: { texto: "A prática do Yoga e da Ayurveda, milenares tradições indianas de bem-estar, respiração e equilíbrio entre corpo e mente, são imensamente populares em todo o Brasil." }
      }
    }
  ]
};
