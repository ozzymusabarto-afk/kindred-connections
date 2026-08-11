import type { Pais } from "../types";

export const spain: Pais = {
  id: "spain",
  nome: "Espanha",
  continente: "europa",
  codigo_mapa: "es",
  bandeira: "🇪🇸",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-es.png",
  capital: "Madri",
  coordenadas: { x: 48, y: 38 },
  imagem_capa: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "A grande Península Ibérica! A Espanha conecta o Mar Mediterrâneo ao Oceano Atlântico, reunindo montanhas nevadas nos Pirineus, planícies douradas na Andaluzia, ilhas paradisíacas e uma das arquiteturas mais ricas do mundo.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol (Castelhano), Catalão, Galego e Basco",
    fuso_horario: "15h00 no horário local — 4 horas a mais que Brasília",
    temperatura: "24 °C, clima mediterrâneo ensolarado",
    fala_piloto_original: "¡Bienvenidos a España! Preparen su equipaje para aterrizar en la península...",
    fala_piloto_traducao: "Bem-vindos à Espanha! Preparem suas bagagens para pousar na península...",
    texto: "Olhe pela janela! Do alto, vemos o contraste entre as planícies de Castela, os picos das montanhas e as praias do Mediterrâneo que se estendem até o horizonte.",
    galeria: [
      { id: "e1", imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80", legenda: "Madri" },
      { id: "e2", imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", legenda: "Praça na Espanha" }
    ]
  },
  base: {
    nome: "Parador Histórico em Madri / Casa Tradicional em Barcelona",
    imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Toque ritmado de violão flamenco ecoando no pátio"
    },
    descricao: "“¡Bienvenidos, exploradores! A Espanha é uma festa de cores, inventividade artística e encontros de culturas de todo o Mar Mediterrâneo.”",
    galeria: [
      { id: "b1", imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80", legenda: "Pátio espanhol" }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Arte da Sagrada Família e os Trens de Alta Velocidade",
      descricao: "Explorando a arquitetura de Gaudí e a modernidade dos trens espanhóis.",
      imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "23 °C, dia luminoso e céu azul mediterrâneo",
      transporte: {
        nome: "Trem de Alta Velocidade AVE (Alta Velocidad Española)",
        icone: "🚆",
        descricao: "Trens elétricos ultramodernos que cortam o país a mais de 300 km/h, conectando Madri a Barcelona e Sevilha em poucas horas.",
        imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Zumbido suave do trem de alta velocidade deslizando nos trilhos" }
      },
      observacao: {
        titulo: "Basílica da Sagrada Família em Barcelona",
        imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "torres-gaudi", x: 50, y: 35, titulo: "Torres Inspiradas na Natureza", texto: "O arquiteto Antoni Gaudí desenhou as torres imitando formas de plantas, árvores e estruturas orgânicas da natureza." },
          { id: "vitrais", x: 65, y: 60, titulo: "Vitrais Coloridos", texto: "A luz do sol passa pelos vitrais em tons quentes e frios, transformando o interior da basílica em uma verdadeira floresta iluminada." }
        ]
      },
      fauna_do_dia: {
        id: "lince-e-aguia-imperial",
        contexto: "Observe os parques e montanhas da Península Ibérica!",
        texto_guia: "A Espanha preserva no Parque Doñana o raro Lince-Ibérico e a imponente Águia-Imperial-Ibérica, uma das aves de rapina mais raras e respeitadas da Europa."
      },
      sabor_do_dia: {
        id: "paella-valenciana-e-tapas",
        contexto: "Hora de celebrar à mesa com os pratos comunitários mediterrâneos!",
        texto_guia: "Saboreie a Paella Valenciana (prato preparado em uma grande frigideira rasa com arroz temperado com açafrão, vegetais e frutos do mar ou carnes) acompanhada de saborosas Tapas."
      },
      desafio: {
        pergunta: "Qual é a dança e o estilo musical tradicional espanhol marcado pelo violão clássico, palmas ritmadas e sapateado?",
        opcoes: ["Samba", "Flamenco", "Valsa"],
        correta: 1,
        explicacao: "O Flamenco é uma das manifestações artísticas e patrimônios culturais imateriais mais famosos da Espanha, nascido na região da Andaluzia."
      },
      notas_brasil: {
        transporte: { texto: "A malha de Trens de Alta Velocidade (AVE) da Espanha é uma referência global de mobilidade elétrica eficiente, servindo de modelo para futuros projetos ferroviários no Brasil." },
        observacao: { texto: "A arquitetura de Gaudí inspirou arquitetos no mundo todo a buscar na natureza brasileira as formas orgânicas para curvas de prédios e pontes." }
      }
    }
  ],
  fauna_flora: [
    {
      id: "lince-e-aguia-imperial",
      nome: "Lince e Águia Imperial",
      foto_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "O Lince-Ibérico é o felino mais ameaçado do mundo, mas está voltando graças à preservação.",
      habitat: "Parque Doñana e florestas mediterrâneas"
    }
  ],
  gastronomia: [
    {
      id: "paella-valenciana-e-tapas",
      nome: "Paella e Tapas",
      foto_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
      adjetivo: "festiva e saborosa",
      historia: "A paella nasceu no campo, onde os trabalhadores cozinhavam arroz com o que a terra oferecia."
    }
  ],
  comparativo: {
    clima_predominante: "Mediterrâneo Continental e Oceânico",
    bioma_principal: "Floresta Mediterrânea e Arbustos (Maquis)",
    elemento_marcante: "Flamenco, Gaudí e Paella",
    agricultura_construcoes: "Azeitonas (Azeite), Trigo e Arquitetura Mourisca/Gótica",
    roupas_modo_de_vida: "Vida vibrante nas praças e sesta tradicional",
    fauna_alimentacao: "Lince-Ibérico e Gastronomia Mediterrânea"
  }
};
