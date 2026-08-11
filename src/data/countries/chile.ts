import type { Pais } from "../types";

export const chile: Pais = {
  id: "chile",
  nome: "Chile",
  continente: "america-do-sul",
  codigo_mapa: "cl",
  bandeira: "🇨🇱",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-cl.png",
  capital: "Santiago",
  coordenadas: { x: 26, y: 82 },
  imagem_capa: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "O país mais longo e estreito do mundo! O Chile é uma longa faixa de terra espremida entre o Oceano Pacífico e as cristas nevadas da Cordilheira dos Andes, abrigando o deserto mais seco do mundo ao norte e geleiras milenares ao sul.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol",
    fuso_horario: "11h00 no horário local — 1 hora a menos que Brasília",
    temperatura: "16 °C, ar fresco das montanhas com céu muito limpo",
    fala_piloto_original: "¡Bienvenidos a Chile! Miren a la direita para contemplar los Andes...",
    fala_piloto_traducao: "Bem-vindos ao Chile! Olhem à direita para contemplar a Cordilheira dos Andes...",
    texto: "Olhe pela janela! O avião sobrevoa uma muralha contínua de picos nevados. A Cordilheira dos Andes parece abraçar toda a cidade de Santiago.",
    galeria: [
      {
        id: "cl-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
        legenda: "A Cordilheira dos Andes do alto"
      },
      {
        id: "cl-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80",
        legenda: "Vista de Santiago"
      }
    ]
  },

  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Refúgio de Montanha em San Pedro de Atacama",
    imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Vento suave do deserto ecoando entre construções de adobe"
    },
    descricao: "“¡Bienvenidos, exploradores! O Chile nos ensina sobre a força da terra e a clareza do céu, onde a ciência e a natureza se encontram.”",
    galeria: [
      {
        id: "cl-base-1",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
        legenda: "Base no Atacama"
      }
    ]
  },

  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Deserto do Atacama e os Segredos do Céu",
      descricao: "Exploraremos as paisagens lunares do deserto mais seco do mundo e descobriremos por que este é o melhor lugar para olhar as estrelas.",
      imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "20 °C durante o dia e sol forte; caindo para 5 °C à noite",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Teleférico de Montanha & Van Observatório",
        icone: "🚡",
        descricao: "Sistemas de cabines suspensas e vans equipadas para vencer as subidas íngremes e alcançar os picos e observatórios astronômicos nas alturas.",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Cabo de aço deslizando suavemente pelas roldanas da montanha" }
      },
      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "Vale da Lua no Deserto do Atacama",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: \"formacoes-sal\", x: 45, y: 60, titulo: \"Esculturas de Sal e Rocha\", texto: \"Formatas pelo vento e pela ausência quase total de chuva ao longo de milhares de anos.\" },
          { id: \"observatorio\", x: 75, y: 30, titulo: \"Céu Mais Limpo do Planeta\", texto: \"Devido à altitude e à falta de umidade, o Atacama abriga os telescópios científicos mais avançados do mundo.\" }
        ]
      },
      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "vicunha-e-flamengo-andino",
        contexto: "Observe as lagoas salgadas e a vegetação rasteira da altitude!",
        texto_guia: "A Vicunha (parente selvagem da alpacas e lhamas) possui uma das lãs mais finas e quentes do mundo. Nas lagoas rosadas, centenas de Flamingos-Andinos se alimentam de pequenos crustáceos."
      },
      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "pastel-de-choclo-e-empanadas",
        contexto: "Hora de saborear a culinária aconchegante dos vales chilenos!",
        texto_guia: "Prove o Pastel de Choclo, uma torta assada recheada com carne, frango, azeitonas e coberta por um creme bem cremoso de milho doce (choclo)."
      },
      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "Por que o Deserto do Atacama, no Chile, é um dos melhores lugares do mundo para observar as estrelas?",
        opcoes: ["Porque tem muitas luzes artificiais", "Porque o ar é extremamente seco, limpo e quase sem nuvens", "Porque é o lugar mais frio do mundo"],
        correta: 1,
        explicacao: "A combinação de alta altitude, ausência de poluição luminosa e ar seco sem nuvens torna o céu do Atacama perfeito para ver planetas e galáxias."
      },
      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "Assim como o Chile usa teleféricos para subir as montanhas dos Andes, o Brasil usa teleféricos famosos no Pão de Açúcar (RJ) e em Balneário Camboriú (SC)." },
        observacao: { texto: "Enquanto o Chile destaca o Deserto do Atacama, o Brasil possui os Lençóis Maranhenses, um 'deserto' único no mundo repleto de lagoas de água doce acumuladas pela chuva." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "vicunha",
      nome: "Vicunha",
      nome_cientifico: "Vicugna vicugna",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vicunha_Atacama.jpg/1280px-Vicunha_Atacama.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Guanaco_Sound.mp3",
      curiosidade: "Possui uma das lãs mais valiosas e finas do mundo.",
      habitat: "Altos Andes",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "pastel-de-choclo",
      nome: "Pastel de Choclo",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pastel_de_choclo.jpg/1280px-Pastel_de_choclo.jpg",
      adjetivo: "cremoso",
      historia: "Uma torta de milho tradicional chilena com recheio salgado e cobertura adocicada.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "De deserto ao norte, mediterrânico ao centro e polar ao sul",
    bioma_principal: "Deserto, Floresta temperada e Estepa patagônica",
    elemento_marcante: "A Cordilheira dos Andes presente em todo o território",
    agricultura_construcoes: "Uvas, maçãs e mineração; prédios preparados para terremotos",
    roupas_modo_de_vida: "Ponchos de lã e roupas térmicas; vida ligada à montanha e ao mar",
    fauna_alimentacao: "Frutos do mar, empanadas, milho e frutas de clima temperado"
  }
};

