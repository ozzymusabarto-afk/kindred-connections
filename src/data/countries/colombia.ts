import type { Pais } from "../types";

export const colombia: Pais = {
  id: "colombia",
  nome: "Colômbia",
  continente: "america-do-sul",
  codigo_mapa: "co",
  bandeira: "🇨🇴",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-co.png",
  capital: "Bogotá",
  coordenadas: { x: 22, y: 62 },
  imagem_capa: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "O único país da América do Sul banhado por dois oceanos (Pacífico e Atlântico/Caribe)! A Colômbia une praias caribenhas, a Cordilheira dos Andes com o Eixo Cafeeiro, cidades históricas e a vasta Floresta Amazônica ao sul.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol",
    fuso_horario: "10h00 no horário local — 2 horas a menos que Brasília",
    temperatura: "27 °C, clima quente e ensolarado no litoral caribenho",
    fala_piloto_original: "¡Bienvenidos a Colombia! Preparen su equipaje para descubrir la tierra del café...",
    fala_piloto_traducao: "Bem-vindos à Colômbia! Preparem suas bagagens para descobrir a terra do café e das cores...",
    texto: "Olhe pela janela! Do alto, vemos o contraste impressionante das montanhas verdes dos Andes que se aproximam do mar azul do Caribe e das muralhas históricas de Cartagena.",
    galeria: [
      { id: "c1", imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=800&q=80", legenda: "Cartagena das Índias" },
      { id: "c2", imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80", legenda: "Vista aérea da costa" }
    ]
  },
  base: {
    nome: "Casarão Colonial em Cartagena / Hacienda Cafeeira no Eixo Cafeeiro",
    imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Ritmo suave de cumbia e brisa quente do Caribe no pátio interno"
    },
    descricao: "“¡Bienvenidos, exploradores! A Colômbia é uma terra de alegria, diversidade de paisagens e braços abertos para quem gosta de aprender e explorar.”",
    galeria: [
      { id: "b1", imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=800&q=80", legenda: "Pátio colonial" }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Cidade Amuralhada de Cartagena e o Eixo Cafeeiro",
      descricao: "Explorando as muralhas de Cartagena e a cultura do café nas montanhas.",
      imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "28 °C, ensolarado e clima tropical",
      transporte: {
        nome: "Chiva Poblana (Ônibus Tradicional Colorido)",
        icone: "🚌",
        descricao: "Ônibus de madeira artesanal pintados com cores vibrantes, sem janelas para o ar circular, usados tradicionalmente para transportar agricultores e passageiros nas montanhas e vilas.",
        imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Buzina alegre e motor da Chiva subindo as estradas de montanha" }
      },
      observacao: {
        titulo: "Muralhas Históricas de Cartagena das Índias",
        imagem_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "muralha", x: 40, y: 60, titulo: "Muralha de Pedra do Século XVI", texto: "Fortificação de pedra erguida ao redor do centro histórico para proteger a cidade e o porto contra invasões no período colonial." },
          { id: "sacadas", x: 65, y: 40, titulo: "Casarões com Sacadas Floridas", texto: "A arquitetura colonial preserva sacadas de madeira repletas de buganvílias coloridas que dão vida às ruas." }
        ]
      },
      fauna_do_dia: {
        id: "orquidea-e-palmeira-de-cera",
        contexto: "Observe o Vale do Cocora e as montanhas da Cordilheira!",
        texto_guia: "A Colômbia abriga a Palmeira-de-Cera do Quindío, a árvore nacional que pode atingir 60 metros de altura, e é um dos países com a maior variedade de Orquídeas e Beija-flores do planeta."
      },
      sabor_do_dia: {
        id: "arepas-e-cafe-suave",
        contexto: "Hora de saborear os alimentos da tradição agrícola colombiana!",
        texto_guia: "Prove as famosas Arepas (discos de massa de milho grelhados e recheados com queijo) e aprenda sobre o cultivo do Café colombiano, reconhecido mundialmente por sua suavidade e aroma."
      },
      desafio: {
        pergunta: "A Colômbia é o único país da América do Sul que possui litoral voltado para quais dois oceanos/mares?",
        opcoes: ["Oceano Índico e Oceano Ártico", "Oceano Pacífico e Mar do Caribe (Atlântico)", "Oceano Antártico e Mar Vermelho"],
        correta: 1,
        explicacao: "A posição geográfica da Colômbia é privilegiada por ter acesso direto tanto ao Oceano Pacífico quanto ao Mar do Caribe."
      },
      notas_brasil: {
        transporte: { texto: "A Chiva colombiana é um patrimônio cultural de transporte muito parecido com os antigos ônibus 'jardineira' que circulavam no interior do Brasil." },
        observacao: { texto: "Assim como a Colômbia e o Brasil compartilham a paixão e a liderança mundial na produção de café, os dois países também compartilham a fronteira e a riqueza da Floresta Amazônica." }
      }
    }
  ],
  fauna_flora: [
    {
      id: "orquidea-e-palmeira-de-cera",
      nome: "Orquídea e Palmeira de Cera",
      foto_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "A Palmeira de Cera é a mais alta do mundo e vive nas montanhas!",
      habitat: "Vale do Cocora e Cordilheira dos Andes"
    }
  ],
  gastronomia: [
    {
      id: "arepas-e-cafe-suave",
      nome: "Arepas e Café Colombiano",
      foto_url: "https://images.unsplash.com/photo-1534051033608-726243b71569?auto=format&fit=crop&w=800&q=80",
      adjetivo: "aromático e saboroso",
      historia: "O café e o milho são os tesouros da terra colombiana, unindo tradição e sabor."
    }
  ],
  comparativo: {
    clima_predominante: "Tropical e Temperado de Montanha",
    bioma_principal: "Andino, Amazônico e Caribenho",
    elemento_marcante: "Café, Cumbia e Muralhas de Cartagena",
    agricultura_construcoes: "Fazendas de Café e Arquitetura Colonial",
    roupas_modo_de_vida: "Alegria tropical e ponchos andinos (Ruana)",
    fauna_alimentacao: "Beija-flores, Orquídeas e Arepas"
  }
};
