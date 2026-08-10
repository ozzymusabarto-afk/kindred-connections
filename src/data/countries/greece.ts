import { Pais } from "../types";
export const greece: Pais = {
  id: "greece",
  nome: "Grécia",
  continente: "europa",
  codigo_mapa: "gr",
  bandeira: "🇬🇷",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png",
  capital: "Atenas",
  coordenadas: { x: 700, y: 430 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Santorini_Oia.jpg/1280px-Santorini_Oia.jpg",
  resumo_geografico: "O berço da filosofia, da democracia e dos Jogos Olímpicos. A Grécia é um mosaico de ilhas brancas e azuis sobre o Mediterrâneo, repletas de templos antigos e mitologias fascinantes.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Santorini_Oia.jpg/1280px-Santorini_Oia.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Atenas",
      credito: "Wikimedia Commons"
    },
    idioma: "Grego",
    fuso_horario: "+5 ou +6 horas em relação a Brasília",
    temperatura: "25 °C, ensolarado",
    fala_piloto_original: "Kalimera! Welcome to Athens. The temperature is 25 degrees.",
    fala_piloto_traducao: "Bom dia! Bem-vindos a Atenas. A temperatura é de 25 graus.",
    texto: "Estamos sobrevoando o Mar Egeu! Preparem-se para conhecer templos de deuses antigos e ilhas que parecem pinturas em azul e branco.",
    galeria: []
  },
  base: {
    nome: "Casa Tradicional em Plaka, Atenas",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Santorini_Oia.jpg/1280px-Santorini_Oia.jpg",
    descricao: "“Yassas! Sou Nikos, seu guia. Bem-vindos ao berço da civilização!”",
    galeria: []
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Acrópole",
      descricao: "Visita ao Partenon.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Santorini_Oia.jpg/1280px-Santorini_Oia.jpg",
      guia_nome: "Nikos",
      guia_local: "Nikos, guia de Atenas",
      clima_do_dia: "25 °C",
      transporte: {
        nome: "Caminhada Histórica",
        icone: "🚶",
        descricao: "O melhor jeito de sentir a história é pisando nas mesmas pedras que os antigos filósofos."
      },
      fauna_do_dia: {
        id: "coruja-atenas",
        contexto: "A coruja era o símbolo da deusa Atena, a deusa da sabedoria."
      },
      sabor_do_dia: {
        id: "iogurte-grego",
        contexto: "Iogurte cremoso com mel e nozes, uma delícia milenar."
      },
      observacao: {
        titulo: "Partenon",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Santorini_Oia.jpg/1280px-Santorini_Oia.jpg",
        hotspots: []
      },
      perguntas: [],
      notas_brasil: {}
    }
  ],
  fauna_flora: [
    {
      id: "coruja-atenas",
      nome: "Coruja",
      nome_cientifico: "Athene noctua",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Little_owl.jpg/1280px-Little_owl.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Owl_Sound.mp3",
      curiosidade: "Símbolo de sabedoria na Grécia Antiga.",
      habitat: "Ruínas e oliveiras.",
      credito: "Wikimedia Commons"
    }
  ],
  gastronomia: [
    {
      id: "iogurte-grego",
      nome: "Iogurte Grego",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Greek_Yogurt.jpg/1280px-Greek_Yogurt.jpg",
      adjetivo: "cremoso",
      historia: "Técnica milenar de filtragem que o torna único.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: { clima_predominante: "Mediterrâneo", bioma_principal: "Costa e montanhas", elemento_marcante: "Mitologia e democracia", agricultura_construcoes: "Azeitonas e colunas clássicas", roupas_modo_de_vida: "Vida simples e azul e branco", fauna_alimentacao: "Iogurte e azeitonas" }
};
