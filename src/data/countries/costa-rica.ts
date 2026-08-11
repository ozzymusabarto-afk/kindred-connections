import type { Pais } from "../types";

export const costaRica: Pais = {
  id: "costa-rica",
  nome: "Costa Rica",
  continente: "america-do-norte", // Américas (Central)
  codigo_mapa: "cr",
  bandeira: "🇨🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-cr.png",
  capital: "San José",
  coordenadas: { x: 24, y: 56 },
  imagem_capa: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "Pequeno em território, mas gigante em natureza! A Costa Rica conecta as Américas com florestas tropicais, vulcões ativos, duas costas marítimas (Pacífico e Caribe) e mais de 25% do seu território protegido como parque nacional.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol",
    fuso_horario: "15h00 no horário local — 3 horas a menos que Brasília",
    temperatura: "26 °C, clima tropical úmido e brisa refrescante",
    fala_piloto_original: "¡Bienvenidos a Costa Rica! Preparen su equipaje. ¡Pura Vida!",
    fala_piloto_traducao: "Bem-vindos à Costa Rica! Preparem suas bagagens para pousar na terra do Pura Vida!",
    texto: "Olhe pela janela! A Costa Rica é um verdadeiro oceano verde visto de cima. Entre montanhas e vulcões, rios serpenteiam por florestas densas que encontram o mar.",
    galeria: [
      {
        id: "chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=800&q=80",
        legenda: "Paisagem aérea da Costa Rica",
        credito: "Unsplash"
      },
      {
        id: "chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
        legenda: "Natureza exuberante",
        credito: "Unsplash"
      }
    ]
  },
  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Ecolodge na Floresta Tropical de Arenal",
    imagem_url: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Sons da floresta: tucanos, sapos e o farfalhar das folhas tropicais"
    },
    descricao: "“¡Pura Vida, exploradores! Na Costa Rica, 'Pura Vida' não é só uma saudação: é uma forma de viver em harmonia, respeito e proteção absoluta à natureza.”",
    galeria: [
      {
        id: "base-1",
        imagem_url: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=800&q=80",
        legenda: "Ecolodge imerso na natureza",
        credito: "Unsplash"
      }
    ]
  },
  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Vulcões, Pontes Suspensas e Biodiversidade",
      clima_do_dia: "25 °C, tropical com pancadas rápidas de chuva de floresta",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Jipe Safári 4x4 & Canopy (Tirolesa de Observação)",
        icone: "🚙",
        descricao: "Veículos adaptados para estradas de terra e trilhas de ecoturismo, além de sistemas de tirolesa que conectam plataformas no topo das árvores.",
        imagem_url: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Motor de jipe atravessando pequeno riacho na floresta" }
      },
      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "Pontes Suspensas de Mistico Arenal",
        imagem_url: "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "canopio", x: 50, y: 35, titulo: "Copa das Árvores (Dosel)", texto: "Pontes suspensas a mais de 45 metros de altura permitem estudar a vida selvagem que habita o topo das árvores sem impactar o solo." },
          { id: "vulcao", x: 75, y: 20, titulo: "Vulcão Arenal ao Fundo", texto: "Um dos vulcões mais imponentes e famosos da América Central, com formato cônico perfeito e fontes termais ao redor." }
        ]
      },
      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "bicho-preguica-e-tucano",
        contexto: "Olhe atento para as copas das embaúbas e árvores tropicais!",
        texto_guia: "A Costa Rica é um santuário para o Bicho-Preguiça-de-Três-Dedos e para o exuberante Tucano-de-Bico-Arco-Íris. O país não possui exército e reinveste seus recursos na preservação ambiental."
      },
      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "gallo-pinto",
        contexto: "Hora de provar a energia nutritiva tradicional da América Central!",
        texto_guia: "Experimente o Gallo Pinto, prato nacional composto por arroz e feijão preto temperados com pimentão, coentro e molho Lizano, servido com ovos e banana-da-terra frita."
      },
      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "Qual é a expressão nacional da Costa Rica que representa a alegria, o bem-estar e a proteção à natureza?",
        opcoes: ["Hola Amigos!", "Pura Vida!", "Caramba!"],
        correta: 1,
        explicacao: "'Pura Vida!' é a expressão mais famosa do país, usada para dizer 'olá', 'tudo bem', 'obrigado' e celebrar o estilo de vida sustentável."
      },
      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "O ecoturismo com tirolesas e pontes suspensas na Costa Rica é muito similar ao praticado em destinos brasileiros como Bonito (MS) e Brotas (SP)." },
        observacao: { texto: "Enquanto a Costa Rica abriga vulcões e florestas tropicais densas, o Brasil possui o Parque Nacional da Tijuca (RJ) e a Reserva Caxiuanã (PA) com plataformas de pesquisa científica no topo das árvores." }
      }
    }
  ]
};
