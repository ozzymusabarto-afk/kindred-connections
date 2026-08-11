import type { Pais, FotoGaleria } from "../types";

export const mexico: Pais = {
  id: "mexico",
  nome: "México",
  continente: "america-do-norte",
  codigo_mapa: "mx",
  bandeira: "🇲🇽",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-mx.png",
  capital: "Cidade do México",
  coordenadas: { x: 20, y: 48 },
  imagem_capa: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "Uma terra de história milenar, famosa por suas pirâmides monumentais, florestas tropicais, desertos marcantes e uma cultura viva cheia de cores, arte e tradições.",

  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol",
    fuso_horario: "17h00 no horário local — 2 horas a menos que Brasília",
    temperatura: "22 °C, clima ameno nas montanhas do vale",
    fala_piloto_original: "¡Bienvenidos a México! Preparen su equipaje para el aterrizaje...",
    fala_piloto_traducao: "Bem-vindos ao México! Preparem suas bagagens para o pouso no grande vale...",
    texto: "Olhe pela janela! A Cidade do México se estende por um vale gigantesco, que no passado abrigava um grande lago e uma das maiores civilizações do mundo antigo.",
    galeria: [
      {
        id: "mx-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80",
        legenda: "Vista de Teotihuacán",
      },
      {
        id: "mx-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
        legenda: "Centro Histórico",
      }
    ]
  },

  base: {
    nome: "Hacienda Colonial no Centro Histórico",
    imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Eco das fontes de água no pátio interno da hacienda"
    },
    descricao: "“¡Bienvenidos, exploradores! O México é um país que honra a memória de seus antepassados e a beleza de sua história.”",
    galeria: [
      {
        id: "mx-base-1",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
        legenda: "Pátio da Hacienda",
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Teotihuacán e a Arquitetura Milenar",
      descricao: "Explorando as antigas pirâmides e a cultura do vale.",
      imagem_url: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "22 °C, ensolarado e clima seco",
      
      transporte: {
        nome: "Trajinera em Xochimilco (Barco Tradicional)",
        icone: "🛶",
        descricao: "Barcos de madeira coloridos decorados com flores que navegam pelos antigos canais construídos pelos povos nativos.",
        imagem_url: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Remos deslizando suavemente pelas águas dos canais" }
      },

      observacao: {
        titulo: "Pirâmide do Sol em Teotihuacán",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "degraus", x: 50, y: 50, titulo: "Escadaria Monumental", texto: "Construída há quase 2 mil anos, alinhada com grande precisão matemática e astronômica." },
          { id: "pedra", x: 30, y: 70, titulo: "Blocos de Rocha Vulcânica", texto: "Os construtores usaram rochas vulcânicas locais para erguer estruturas duradouras." }
        ]
      },

      fauna_do_dia: {
        id: "borboleta-monarca",
        contexto: "Observe a vegetação ao redor e a floresta de pinheiros!",
        texto_guia: "Milhões de borboletas-monarcas viajam milhares de quilômetros do Canadá até o México todos os anos em uma das migrações mais espetaculares e organizadas da natureza."
      },

      sabor_do_dia: {
        id: "guacamole-e-tacos",
        contexto: "Hora de conhecer os ingredientes originais que o México deu ao mundo!",
        texto_guia: "Aproveite a Guacamole (pasta feita com abacate fresco, tomate e coentro) acompanhada de tortilhas de milho. Sabia que o milho e o cacau (chocolate) nasceram aqui?"
      },

      desafio: {
        pergunta: "Qual símbolo importante aparece bem no centro da bandeira mexicana?",
        opcoes: ["Uma borboleta sobre uma flor", "Uma águia em cima de um cacto segurando uma serpente", "Um sol sorridente"],
        correta: 1,
        explicacao: "A águia sobre o cacto com a serpente representa a lenda da fundação da antiga capital dos Astecas, Tenochtitlán."
      },

      notas_brasil: {
        transporte: { texto: "Assim como as trajineras navegam pelos canais de Xochimilco, no Brasil temos as rabetas e voadeiras navegando pelos igarapés da Amazônia." },
        observacao: { texto: "Enquanto o México preserva construções milenares de pedra como as pirâmides, o Brasil guarda sítios arqueológicos com pinturas rupestres antiquíssimas na Serra da Capivara (Piauí)." }
      }
    }
  ],

  fauna_flora: [],
  gastronomia: [],
  comparativo: {
    clima_predominante: "Variado (deserto, montanha e tropical)",
    bioma_principal: "Selvas e Desertos",
    elemento_marcante: "História Asteca e Maia",
    agricultura_construcoes: "Milho e Pirâmides",
    roupas_modo_de_vida: "Cores vibrantes e tradições rurais",
    fauna_alimentacao: "Tacos, Guacamole e Borboletas Monarcas"
  }
};