import type { Pais } from "../types";

export const canada: Pais = {
  id: "canada",
  nome: "Canadá",
  continente: "america-do-norte",
  codigo_mapa: "ca",
  bandeira: "🇨🇦",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-ca.png",
  capital: "Ottawa",
  coordenadas: { x: 22, y: 25 },
  imagem_capa: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "O segundo maior país do mundo em área territorial, famoso por suas florestas infinitas, lagos de água cristalina em tom turquesa e montanhas cobertas de neve.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1517935703635-27c737822457?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Inglês e Francês",
    fuso_horario: "14h00 no horário local — 1 hora a menos que Brasília",
    temperatura: "8 °C, ar puro e fresco das montanhas",
    fala_piloto_original: "Welcome to Canada! Bienvenue au Canada! Prepare for landing...",
    fala_piloto_traducao: "Bem-vindos ao Canadá! Preparem-se para o pouso em meio aos grandes lagos...",
    texto: "Olhe pela janela! A imensidão verde das florestas parece não ter fim, pontilhada por lagos azul-turquesa incríveis.",
    galeria: [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517935703635-27c737822457?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Château em Quebec / Hotel de Montanha",
    imagem_url: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Sons acolhedores da recepção"
    },
    descricao: "“Welcome! Bienvenue! No Canadá, a cortesia e a gentileza são valores de ouro. Vamos explorar este reino da natureza!”",
    galeria: [
      "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Parque Nacional de Banff e os Lagos Turquesa",
      clima_do_dia: "8 °C, ensolarado com vento frio das montanhas",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Trem das Rochosas (Rocky Mountaineer)",
        icone: "🚂",
        descricao: "Um trem panorâmico com teto de vidro projetado para admirar os picos nevados e os vales sem perder nenhum detalhe.",
        imagem_url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Trilhos e apito suave ecoando pelas montanhas" }
      },

      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "Lago Louise (Lake Louise)",
        imagem_url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "agua-turquesa", x: 45, y: 65, titulo: "Água Azul-Turquesa", texto: "O brilho azul vem da 'farinha de rocha' trazida pelo derretimento das geleiras no topo das montanhas." },
          { id: "pinheiros", x: 75, y: 40, titulo: "Floresta de Pinheiros", texto: "Essas árvores resistentes permanecem verdes mesmo sob o rigoroso inverno canadense." }
        ]
      },

      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "castor-e-urso",
        contexto: "Olhe com atenção na margem do lago e nas florestas de coníferas!",
        texto_guia: "O castor é o grande engenheiro da natureza canadense, construindo represas incríveis com troncos. Nas montanhas mais altas, o majestoso urso-pardo reina com postura nobre."
      },

      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "poutine-e-maple",
        contexto: "Depois de pegar o ar frio do lago, nada melhor que uma refeição tradicional!",
        texto_guia: "Prove o Poutine (batatas crocantes com queijo e molho aquecido) e a sobremesa de Maple Syrup (xarope natural extraído da seiva da árvore de Ácer)."
      },

      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "Qual folha famosa está desenhada exatamente no centro da bandeira do Canadá?",
        opcoes: ["Folha de Parreira", "Folha de Ácer (Maple)", "Folha de Eucalipto"],
        correta: 1,
        explicacao: "A folha de Ácer é o grande símbolo canadense, representando a natureza abundante e a árvore de onde é extraído o famoso xarope doce."
      },

      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "No Brasil temos poucas linhas de trem de passageiros, como a linha que vai de Vitória a Minas ou o trem da Serra do Mar no Paraná." },
        observacao: { texto: "Enquanto o Canadá tem lagos formados por geleiras frias, o Brasil possui incríveis encontros de rios quentes, como o Rio Negro e Solimões no Amazonas." }
      }
    }
  ]
};