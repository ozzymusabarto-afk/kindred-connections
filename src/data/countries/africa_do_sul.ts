import type { Pais } from "../types";

export const africa_do_sul: Pais = {
  id: "africa_do_sul",
  nome: "África do Sul",
  continente: "africa",
  codigo_mapa: "za",
  bandeira: "🇿🇦",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-za.png",
  capital: "Pretória (Executiva), Cidade do Cabo (Legislativa), Bloemfontein (Judiciária)",
  coordenadas: { x: 55, y: 72 },
  imagem_capa: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "Onde o Oceano Atlântico encontra o Oceano Índico! A África do Sul une savanas repletas de vida selvagem no Kruger Park a montanhas espetaculares, praias com pinguins na Cidade do Cabo e uma riqueza cultural sem igual.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "12 idiomas oficiais (incluindo Inglês, Zulu, Xhosa e Afrikaans)",
    fuso_horario: "15h00 no horário local — 5 horas a mais que Brasília",
    temperatura: "22 °C, clima ensolarado e brisa oceânica refrescante",
    fala_piloto_original: "Welkom bij Zuid-Afrika! Sanibonani! Prepare your luggage to land in Cape Town...",
    fala_piloto_traducao: "Bem-vindos à África do Sul! Sanibonani! Preparem suas bagagens para pousar na Cidade do Cabo...",
    texto: "Olhe pela janela! Do alto, avistamos a imponente Table Mountain (Montanha da Mesa) com seu topo plano dominando a península e o encontro reluzente dos oceanos.",
    galeria: [
      {
        id: "za-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
        legenda: "Table Mountain vista de cima"
      },
      {
        id: "za-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
        legenda: "Belezas da Cidade do Cabo"
      }
    ]
  },

  base: {
    nome: "Lodges na Savana do Kruger / Hospedagem na Cidade do Cabo",
    imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Canto coral tradicional em harmonias vocais com tambores sul-africanos"
    },
    descricao: "“Sawubona, exploradores! Na África do Sul, celebramos a força da natureza, a preservação dos mamíferos gigantes e a harmonia das muitas culturas da Nação Arco-Íris.”",
    galeria: [
      {
        id: "za-base-1",
        imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
        legenda: "Hospedagem imersiva na natureza"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Table Mountain, os Pinguins de Boulders e a Fauna das Savanas",
      descricao: "Começamos nossa jornada explorando os contrastes da África do Sul, desde as montanhas icônicas até a vida selvagem única das savanas e praias.",
      imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "23 °C, dia ensolarado e céus azuis",
      
      transporte: {
        nome: "Bonde Aéreo Panorâmico Giratório e Veículos 4x4 de Safári",
        icone: "🛷",
        descricao: "Para subir até o topo da Table Mountain usa-se um bonde aéreo cujo piso gira 360° durante a subida, enquanto no interior do país usam-se veículos abertos 4x4 para observação segura da fauna.",
        imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Ronco suave do motor elétrico do bonde aéreo subindo a montanha" }
      },

      observacao: {
        titulo: "Table Mountain (Montanha da Mesa) e Cabo da Boa Esperança",
        imagem_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "planalto-mesa", x: 50, y: 30, titulo: "Planalto Arenítico de 3km", texto: "Uma das formações rochosas mais antigas da Terra (com mais de 200 milhões de anos), cujo topo plano lembra uma mesa perfeita vista do mar." },
          { id: "toalha-de-mesa", x: 65, y: 25, titulo: "Fenômeno da 'Toalha de Mesa'", texto: "Formação de nuvens brancas e densas que cobrem o topo da montanha quando o vento sul sopra forte, criando um efeito visual incrível." }
        ]
      },

      fauna_do_dia: {
        id: "os-big-five-e-pinguim-africano",
        contexto: "Observe os parques de preservação e a famosa Boulders Beach!",
        texto_guia: "A África do Sul abriga os 'Big Five' (Leão, Elefante, Rinoceronte, Leopardo e Búfalo), além da única colônia do Pinguim-Africano que vive livremente nas praias de areia quente."
      },

      sabor_do_dia: {
        id: "braai-churrasco-e-bobotie",
        contexto: "Hora de experimentar a tradição de reunir os amigos e a família ao redor do fogo!",
        texto_guia: "Conheça o *Braai* (o famoso churrasco sul-africano assado na lenha) e saboreie o *Bobotie* (prato assado de carne moída bem temperada com especiarias, ervas e cobertura de ovos)."
      },

      desafio: {
        pergunta: "Como são chamados os cinco grandes mamíferos selvagens mais famosos e protegidos nos parques nacionais da África do Sul?",
        opcoes: ["Os Big Five", "Os Cinco Felinos", "Os Gigantes Marinhos"],
        correta: 0,
        explicacao: "Os 'Big Five' é o grupo formado pelo leão, elefante, rinoceronte, leopardo e búfalo-africano, símbolos da preservação da fauna do país."
      },

      notas_brasil: {
        transporte: { texto: "O Brasil e a África do Sul são banhados pelo mesmo Oceano Atlântico e compartilham laços de cooperação no grupo do BRICS e projetos de conservação oceânica!" },
        observacao: { texto: "Em 1488, o navegador Bartolomeu Dias dobrou o Cabo da Boa Esperança na África do Sul, abraindo o caminho marítimo que anos depois traria as naus até o litoral do Brasil." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "leao-africano",
      nome: "Leão Africano",
      nome_cientifico: "Panthera leo",
      foto_url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "Os leões são os únicos felinos que vivem em grandes grupos sociais e são símbolos de força na África do Sul.",
      habitat: "Savanas e planícies abertas."
    }
  ],

  gastronomia: [
    {
      id: "bobotie",
      nome: "Bobotie",
      foto_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      adjetivo: "temperado",
      historia: "Um prato reconfortante que reflete a mistura de influências malaias e europeias na culinária sul-africana."
    }
  ],

  comparativo: {
    clima_predominante: "Mediterrâneo e Temperado",
    bioma_principal: "Savana e Fynbos",
    elemento_marcante: "Table Mountain e Safari",
    agricultura_construcoes: "Vinhedos e Cape Dutch",
    roupas_modo_de_vida: "Casual e Outdoors",
    fauna_alimentacao: "Big Five e Braai"
  }
};
