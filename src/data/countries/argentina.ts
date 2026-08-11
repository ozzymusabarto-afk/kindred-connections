import type { Pais } from "../types";

export const argentina: Pais = {
  id: "argentina",
  nome: "Argentina",
  continente: "america-do-sul",
  codigo_mapa: "ar",
  bandeira: "🇦🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-ar.png",
  capital: "Buenos Aires",
  coordenadas: { x: 30, y: 82 },
  imagem_capa: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "O segundo maior país da América Sul! A Argentina se estende desde a selva tropical no norte até os desertos congelados da Patagônia e da Terra do Fogo no extremo sul, abraçada pela monumental Cordilheira dos Andes.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Espanhol",
    fuso_horario: "12h00 no horário local — mesmo fuso horário de Brasília",
    temperatura: "18 °C, clima ameno com brisa fresca vinda do Rio da Prata",
    fala_piloto_original: "¡Bienvenidos a Argentina! Preparen su equipaje para el aterrizaje...",
    fala_piloto_traducao: "Bem-vindos à Argentina! Preparem suas bagagens para o pouso...",
    texto: "Olhe pela janela! À direita, vemos o imenso estuário do Rio da Prata e o contorno de Buenos Aires, com suas arquiteturas clássicas e avenidas largas.",
    galeria: [
      {
        id: "ar-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80",
        legenda: "Buenos Aires do alto"
      },
      {
        id: "ar-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
        legenda: "O Rio da Prata"
      }
    ]
  },

  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Estância Tradicional nos Pampas / Hotel em San Telmo",
    imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Acordeão e violão ao fundo tocando melodia tradicional"
    },
    descricao: "“¡Bienvenidos, exploradores! A Argentina é uma terra de horizontes infinitos, de respeito à história e de grandes encontros de família.”",
    galeria: [
      {
        id: "ar-base-1",
        imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80",
        legenda: "Base em San Telmo"
      }
    ]
  },

  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Geleiras da Patagônia e as Forças da Natureza",
      descricao: "Embarcaremos em uma expedição ao sul para descobrir as monumentais massas de gelo que moldam a paisagem da Patagônia.",
      imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "12 °C, vento frio e seco nas montanhas do sul",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Catamarã dos Glaciares (Barco de Navegação Glacial)",
        icone: "⛴️",
        descricao: "Barcos reforçados de dois andares que navegam com segurança entre os blocos de gelo do Lago Argentino para aproximar os exploradores das paredes de gelo.",
        imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Barco cortando as águas geladas com o som do vento patagônico" }
      },
      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "Glacial Perito Moreno em El Calafate",
        imagem_url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "parede-gelo", x: 50, y: 40, titulo: "Paredão de Gelo de 60 Metros", texto: "Uma massa monumental de gelo que se estende por 30 km. É uma das poucas geleiras do mundo que continua em equilíbrio." },
          { id: "desprendimento", x: 70, y: 60, titulo: "Desprendimento de Blocos", texto: "O estrondo de um bloco de gelo caindo na água parece um trovão distante, mostrando a força constante da natureza." }
        ]
      },
      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "condor-andino-e-guanaco",
        contexto: "Olhe para as cristas das montanhas e para as planícies secas!",
        texto_guia: "O majestoso Cóndor-Andino plana nas correntes de ar com suas asas de mais de 3 metros de envergadura, enquanto bandos de Guanacos (parentes das lhamas) correm pelas estepes."
      },
      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "empanadas-e-mate",
        contexto: "Hora de saborear as tradições aquecedoras do sul!",
        texto_guia: "Prove as tradicionais Empanadas assadas no forno de barro e conheça o costume de beber o Mate (chimarrão tradicional), servido em cuia de cabaça com bomba de metal."
      },
      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "Qual grande cadeia de montanhas atravessa todo o oeste da Argentina, formando a fronteira natural com o Chile?",
        opcoes: ["Montanhas Rochosas", "Cordilheira dos Andes", "Alpes Sulinos"],
        correta: 1,
        explicacao: "A Cordilheira dos Andes é a maior cadeia de montanhas em extensão do mundo e molda todo o clima e relevo do oeste sul-americano."
      },
      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "Assim como os catamarãs navegam no Lago Argentino para ver geleiras, no Brasil temos catamarãs navegando pelos Cânions do Rio São Francisco (SE/AL)." },
        observacao: { texto: "Brasil e Argentina compartilham uma das maiores maravilhas do mundo: as Cataratas do Iguaçu, onde o Rio Iguaçu divide e une os dois países em um espetáculo natural." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "condor-andino",
      nome: "Condor Andino",
      nome_cientifico: "Vultur gryphus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Andean_Condor_P1130490.jpg/1280px-Andean_Condor_P1130490.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Andean_Condor_Sound.mp3",
      curiosidade: "É a maior ave voadora do mundo e um símbolo dos Andes.",
      habitat: "Cordilheira dos Andes",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "empanada",
      nome: "Empanada",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Empanada_argentina_2.jpg/1280px-Empanada_argentina_2.jpg",
      adjetivo: "tradicional",
      historia: "Um clássico argentino que varia de recheio conforme a região do país.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Temperado, com frio intenso ao sul e calor seco ao norte",
    bioma_principal: "Pampas, Cordilheira dos Andes e Estepa Patagônica",
    elemento_marcante: "A cultura do churrasco (asado) e a paixão pelo futebol",
    agricultura_construcoes: "Criação de gado, cultivo de trigo e uvas; forte influência arquitetônica europeia",
    roupas_modo_de_vida: "Ponchos de lã no norte e sul; vida social intensa em cafés e praças",
    fauna_alimentacao: "Carne bovina, massas e o indispensável doce de leite"
  }
};

