import type { Pais } from "../types";

export const china: Pais = {
  id: "china",
  nome: "China",
  continente: "asia",
  codigo_mapa: "cn",
  bandeira: "🇨🇳",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-cn.png",
  capital: "Pequim (Beijing)",
  coordenadas: { x: 78, y: 40 },
  imagem_capa: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "Um gigante territorial e cultural! A China une paisagens espetaculares — das montanhas de karst de Guilin aos desertos da Rota da Seda —, uma civilização milenar marcada pela Grande Muralha e metrópoles futuristas repletas de tecnologia.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Mandarim (e diversos dialetos regionais)",
    fuso_horario: "11h00 no horário local — 11 horas a mais que Brasília",
    temperatura: "22 °C, dia límpido com clima agradável de outono",
    fala_piloto_original: "Huān·yíng lái dào Zhōngguó! Nǐ hǎo! Qǐng zhǔnbèi hǎo nín de xínglǐ...",
    fala_piloto_traducao: "Bem-vindos à China! Nǐ hǎo! Por favor, preparem suas bagagens para pousar em Pequim...",
    texto: "Olhe pela janela! Do alto, avistamos a imensa serpente de pedra da Grande Muralha cruzando as cristas das montanhas e o impressionante contraste entre a histórica Cidade Proibida e os arranha-céus modernos.",
    galeria: [
      {
        id: "cn-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
        legenda: "Grande Muralha serpenteando as montanhas"
      },
      {
        id: "cn-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80",
        legenda: "Metrópoles tecnológicas futuristas"
      }
    ]
  },

  base: {
    nome: "Hospedagem em Pequim perto da Cidade Proibida / Cidade dos Pandas em Chengdu",
    imagem_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Melodia harmoniosa de Guzheng (harpa chinesa) e flauta de bambu (Dizi)"
    },
    descricao: "“Nǐ hǎo, exploradores! Na China, aprendemos como tradições milenares, a filosofia da harmonia e a inovação tecnológica se unem para construir soluções surpreendentes para o futuro.”",
    galeria: [
      {
        id: "cn-base-1",
        imagem_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
        legenda: "Pátios e telhados tradicionais"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Grande Muralha, o Trem Maglev e os Pandas da Floresta de Bambu",
      descricao: "Uma imersão na história viva da China, desde as defesas milenares até os trens que flutuam no ar e a preservação do animal mais amado do mundo.",
      imagem_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "22 °C, ensolarado e agradável",
      
      transporte: {
        nome: "Trem Maglev (Levitação Magnética) e Trens de Alta Velocidade",
        icone: "🚆",
        descricao: "O Maglev flutua sobre os trilhos por força de ímãs poderosos, eliminando o atrito das rodas e alcançando velocidades superiores a 430 km/h com extrema suavidade e silêncio.",
        imagem_url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Zumbido magnético suave do trem de levitação acelerando" }
      },

      observacao: {
        titulo: "A Grande Muralha da China (Wànlǐ Chángchéng)",
        imagem_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "torres-vigia", x: 45, y: 35, titulo: "Torres de Vigia e Sinalização", texto: "Estruturas de pedra e tijolo estrategicamente posicionadas ao longo de mais de 21 mil quilômetros, usadas historicamente para enviar sinais de fumaça e fogo." },
          { id: "muralha-montanha", x: 60, y: 50, titulo: "Construção nas Arestas das Montanhas", texto: "Erguida ao longo de séculos para proteção e controle comercial, adaptando-se perfeitamente ao relevo íngreme dos vales e picos." }
        ]
      },

      fauna_do_dia: {
        id: "urso-panda-e-floresta-bambu",
        contexto: "Observe os centros de preservação em Chengdu e as montanhas de Sichuan!",
        texto_guia: "O amado Urso Panda-Gigante passa a maior parte do dia alimentando-se de brotos de bambu nas florestas montanhosas, sendo um símbolo global de proteção e conservação da biodiversidade."
      },

      sabor_do_dia: {
        id: "pato-pequim-dim-sum",
        contexto: "Hora de conhecer uma das tradições culinárias mais variadas do mundo!",
        texto_guia: "Saboreie o crocante *Pato de Pequim* servido em finos crepes com molho especial, e delicie-se com os *Dim Sum* (pequenos bolinhos cozidos no vapor em cestas de bambu com recheios variados)."
      },

      desafio: {
        pergunta: "Qual é a tecnologia inovadora utilizada pelo trem Maglev para alcançar altíssimas velocidades sem encostar nos trilhos?",
        opcoes: ["Levitação Magnética", "Propulsão a Vapor", "Roda de Engrenagem"],
        correta: 0,
        explicacao: "O Maglev utiliza a Levitação Magnética (ímãs) para flutuar sobre a linha guia, reduzindo o atrito a zero e atingindo incríveis velocidades."
      },

      notas_brasil: {
        observacao: { texto: "Práticas e filosofias orientais tradicionais oriundas da China, como o Tai Chi Chuan, a acupuntura e a medicina tradicional, são amplamente reconhecidas e integradas ao sistema de saúde no Brasil." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "panda-gigante",
      nome: "Panda Gigante",
      nome_cientifico: "Ailuropoda melanoleuca",
      foto_url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "Eles comem até 38kg de bambu por dia e são símbolos nacionais da China.",
      habitat: "Florestas de bambu em Sichuan."
    }
  ],

  gastronomia: [
    {
      id: "dim-sum",
      nome: "Dim Sum",
      foto_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
      adjetivo: "delicado",
      historia: "Significa 'tocar o coração' e representa a arte de petiscar chás e pequenos bolinhos cozidos."
    }
  ],

  comparativo: {
    clima_predominante: "Variado (Monçónico e Continental)",
    bioma_principal: "Montanhas, Vales e Desertos",
    elemento_marcante: "Grande Muralha e Tecnologia",
    agricultura_construcoes: "Arrozais e Hutongs",
    roupas_modo_de_vida: "Tradição e Inovação",
    fauna_alimentacao: "Pandas e Mandarim"
  }
};
