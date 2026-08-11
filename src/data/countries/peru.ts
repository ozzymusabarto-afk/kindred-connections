import type { Pais } from "../types";

export const peru: Pais = {
  id: "peru",
  nome: "Peru",
  continente: "america-do-sul",
  codigo_mapa: "pe",
  bandeira: "🇵🇪",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-pe.png",
  capital: "Lima",
  coordenadas: { x: 22, y: 72 },
  imagem_capa: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "A terra dos Incas e do Vale Sagrado! O Peru une picos nevados nos Andes, o deserto costeiro do Pacífico e a nascente do maior rio do mundo na Floresta Amazônica.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol e Quechua",
    fuso_horario: "10h00 no horário local — 2 horas a menos que Brasília",
    temperatura: "19 °C, ar fresco de altitude e céu aberto no vale",
    fala_piloto_original: "¡Bienvenidos a Perú! Preparen su equipaje para descubrir el Valle Sagrado...",
    fala_piloto_traducao: "Bem-vindos ao Peru! Preparem suas bagagens para descobrir o Vale Sagrado...",
    texto: "Olhe pela janela! Do alto, vemos os rios que nascem nos picos congelados e serpenteiam pelos vales profundos até formarem a grande bacia amazônica.",
    galeria: [
      { id: "p1", imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80", legenda: "Vista de Cusco" },
      { id: "p2", imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80", legenda: "Montanhas dos Andes" }
    ]
  },
  base: {
    nome: "Pousada de Pedra em Cusco / Vale Sagrado",
    imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Melodia suave de flauta de pã (zampoña) ecoando pelas montanhas"
    },
    descricao: "“¡Allianllachu, exploradores! No Peru, aprendemos como as civilizações antigas construíram cidades incríveis em perfeita harmonia com as montanhas.”",
    galeria: [
      { id: "b1", imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80", legenda: "Interior da pousada" }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Cusco, Machu Picchu e a Engenharia Inca",
      descricao: "A cidade perdida dos Incas e sua engenharia extraordinária.",
      imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "17 °C, ensolarado com brisa fria de montanha",
      transporte: {
        nome: "Trem dos Andes (Vistadome Panorama)",
        icone: "🚆",
        descricao: "Trens com janelas e teto de vidro panorâmico que acompanham as curvas do Rio Urubamba, conectando Cusco e a cidade histórica de Machu Picchu.",
        imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Trilhos de trem ressoando entre o desfiladeiro do rio" }
      },
      observacao: {
        titulo: "Santuário Histórico de Machu Picchu",
        imagem_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "terraços", x: 45, y: 55, titulo: "Terraços Agrícolas (Andenes)", texto: "Degraus de pedra construídos nas encostas para evitar a erosão, drenar a água das chuvas e cultivar alimentos em diferentes altitudes." },
          { id: "pedras-encaixadas", x: 65, y: 35, titulo: "Encaixe de Pedras Perfeito", texto: "Os incas lapidavam blocos gigantescos de granito que se encaixam perfeitamente sem uso de cimento ou argamassa." }
        ]
      },
      fauna_do_dia: {
        id: "lhama-e-alpaca",
        contexto: "Observe as encostas de grama alta ao redor das ruínas!",
        texto_guia: "A Lhama e a Alpaca são animais nativos dos Andes domesticados há milênios. Elas ajudavam no transporte de cargas e forneciam uma das lãs mais macias e aquecedoras do planeta."
      },
      sabor_do_dia: {
        id: "quinoa-e-milho-gigante",
        contexto: "Hora de conhecer os superalimentos que os Andes deram ao mundo!",
        texto_guia: "Saboreie pratos à base de Quinoa nutritiva e o Milho Gigante do Vale Sagrado. Sabia que no Peru existem mais de 3.000 variedades diferentes de batata?"
      },
      desafio: {
        pergunta: "Qual povo histórico construiu a famosa cidade sagrada de Machu Picchu no topo das montanhas do Peru?",
        opcoes: ["Os Astecas", "Os Incas", "Os Maias"],
        correta: 1,
        explicacao: "Os Incas ergueram Machu Picchu no século XV com um conhecimento arquitetônico e astronômico extraordinário."
      },
      notas_brasil: {
        transporte: { texto: "O Trem dos Andes que rasga os desfiladeiros peruanos é muito semelhante à rota da Serra do Mar Paranaense no Brasil (Curitiba–Morretes)." },
        observacao: { texto: "O Rio Amazonas, que é o grande orgulho da biodiversidade brasileira, nasce do derretimento das neves nas montanhas dos Andes no Peru!" }
      }
    }
  ],
  fauna_flora: [
    {
      id: "lhama-e-alpaca",
      nome: "Lhama e Alpaca",
      foto_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "São parentes dos camelos, mas sem corcova, e vivem felizes no frio das montanhas.",
      habitat: "Cordilheira dos Andes"
    }
  ],
  gastronomia: [
    {
      id: "quinoa-e-milho-gigante",
      nome: "Quinoa e Milho Gigante",
      foto_url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
      adjetivo: "nutritivo",
      historia: "Base da alimentação andina há milhares de anos, ricos em proteínas e energia."
    }
  ],
  comparativo: {
    clima_predominante: "Frio de montanha e seco no vale",
    bioma_principal: "Andino (Puna e Vales Interandinos)",
    elemento_marcante: "Ruínas de Pedra e Machu Picchu",
    agricultura_construcoes: "Terraços (Andenes) e Pedras Encaixadas",
    roupas_modo_de_vida: "Ponchos de lã colorida e flautas de pã",
    fauna_alimentacao: "Lhamas e superalimentos (quinoa/milho)"
  }
};
