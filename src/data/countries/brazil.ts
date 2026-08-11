import type { Pais } from "../types";

export const brasil: Pais = {
  id: "brasil",
  nome: "Brasil",
  continente: "america-do-sul",
  codigo_mapa: "br",
  bandeira: "🇧🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-br.png",
  capital: "Brasília",
  coordenadas: { x: 30, y: 70 },
  imagem_capa: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "O gigante da América do Sul! O Brasil é o quinto maior país do mundo em área, abrigando a maior floresta tropical e o maior rio do planeta, com uma diversidade biológica e cultural incomparável.",
  
  // ==========================================
  // 1. CHEGADA (O Voo e as Boas-vindas)
  // ==========================================
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Português",
    fuso_horario: "12h00 no horário oficial de Brasília",
    temperatura: "28 °C, clima tropical ensolarado",
    fala_piloto_original: "Bem-vindos ao Brasil! Preparem suas bagagens para pousar na terra da biodiversidade...",
    fala_piloto_traducao: "Bem-vindos ao Brasil! Preparem suas bagagens para pousar na terra da biodiversidade...",
    texto: "Olhe pela janela! Do alto, vemos o verde imenso dos nossos biomas, as curvas dos grandes rios e o litoral exuberante que se estende por milhares de quilômetros.",
    galeria: [
      {
        id: "br-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
        legenda: "O verde imenso do Brasil do alto"
      },
      {
        id: "br-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80",
        legenda: "As curvas dos grandes rios"
      }
    ]
  },

  // ==========================================
  // 2. CHECK-IN (Base de Operações)
  // ==========================================
  base: {
    nome: "Pousada Aconchegante em Santa Teresa, Rio de Janeiro",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Santa_Teresa_Rio_de_Janeiro_2014.jpg/1280px-Santa_Teresa_Rio_de_Janeiro_2014.jpg",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Orquestra da floresta e sons da cidade histórica"
    },
    descricao: "“Bem-vindos ao nosso país! O Brasil é a nossa casa e a grande referência de biodiversidade e beleza natural para o mundo inteiro.”",
    galeria: [
      {
        id: "br-base-1",
        imagem_url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
        legenda: "Nossa base em Santa Teresa"
      }
    ]
  },

  // ==========================================
  // 3. ROTEIRO (As 5 Estações)
  // ==========================================
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Encontro das Águas e o Coração da Amazônia",
      descricao: "Embarcaremos em uma jornada fluvial para testemunhar um dos maiores espetáculos da natureza: o encontro de dois rios gigantes.",
      imagem_url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "29 °C, quente e úmido com pancada de chuva à tarde",
      
      // ESTAÇÃO 1: TRANSPORTE
      transporte: {
        nome: "Barco Gaiola / Rabeta Amazônica",
        icone: "🛥️",
        descricao: "Embarcações tradicionais de dois ou três andares que navegam pelos rios caudalosos, transportando passageiros e redes de descanso.",
        imagem_url: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Barulho cadenciado do motor de centro do barco no rio" }
      },
      // ESTAÇÃO 2: OBSERVAÇÃO
      observacao: {
        titulo: "O Fenômeno do Encontro das Águas",
        imagem_url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "rio-negro", x: 40, y: 50, titulo: "Rio Negro", texto: "Água escura devida à matéria orgânica das folhas, mais quente e mais lenta." },
          { id: "rio-solimoes", x: 65, y: 50, titulo: "Rio Solimões", texto: "Água barrenta rica em minerais das montanhas dos Andes, mais fria e mais rápida. As águas correm lado a lado por quilômetros sem se misturar!" }
        ]
      },
      // ESTAÇÃO 3: NATUREZA
      fauna_do_dia: {
        id: "boto-cor-de-rosa-e-arara",
        contexto: "Observe a superfície da água e as copas das castanheiras!",
        texto_guia: "O Boto-Cor-de-Rosa navega com agilidade entre as raízes dos igapós, enquanto Araras-Jubarte e Harpias voam alto na copa da floresta tropical."
      },
      // ESTAÇÃO 4: SABORES
      sabor_do_dia: {
        id: "acai-e-peixe-na-brasa",
        contexto: "Hora de saborear os frutos autênticos e nutritivos da terra!",
        texto_guia: "Prove o Açaí puro com farinha de mandioca, acompanhado de Peixe assado na folha de bananeira (como o Tambaqui ou Pirarucu), e sinta os sabores únicos do Brasil."
      },
      // ESTAÇÃO 5: CARIMBO
      desafio: {
        pergunta: "Qual é a frase oficial inscrita no centro da bandeira do Brasil?",
        opcoes: ["Pura Vida e União", "Ordem e Progresso", "Liberdade e Justiça"],
        correta: 1,
        explicacao: "'Ordem e Progresso' é o lema oficial da bandeira brasileira, inspirado no pensamento do filósofo Augusto Comte."
      },
      // CONEXÃO PEDAGÓGICA
      notas_brasil: {
        transporte: { texto: "O barco de rio no Brasil cumpre o mesmo papel crucial de integração que os trens cumprem na Europa e os aviões nos Estados Unidos." },
        observacao: { texto: "O Encontro das Águas no Amazonas é um laboratório natural de física e química de fluidos único no planeta Terra." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "boto-cor-de-rosa",
      nome: "Boto-cor-de-rosa",
      nome_cientifico: "Inia geoffrensis",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Inia_geoffrensis_2.jpg/1280px-Inia_geoffrensis_2.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Amazon_River_Dolphin_Sound.mp3",
      curiosidade: "É o maior golfinho de água doce do mundo. Eles nascem cinzas e vão ficando rosados à medida que envelhecem.",
      habitat: "Rios da Amazônia",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "acai",
      nome: "Açaí",
      foto_url: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
      adjetivo: "energético",
      historia: "Fruto de uma palmeira amazônica, o açaí é a base da alimentação de muitas comunidades ribeirinhas.",
      credito: "Unsplash"
    }
  ],

  comparativo: {
    clima_predominante: "Tropical na maior parte do território, com estação de chuva e estação seca",
    bioma_principal: "Floresta Amazônica, Cerrado, Mata Atlântica e Pantanal",
    elemento_marcante: "A água e o verde — rios enormes e florestas contínuas",
    agricultura_construcoes: "Lavouras de soja, café e cana; casas adaptadas ao calor tropical",
    roupas_modo_de_vida: "Roupas leves quase todo o ano; a vida acontece muito ao ar livre",
    fauna_alimentacao: "Micos, tucanos e araras; comida à base de arroz, feijão e mandioca"
  }
};

