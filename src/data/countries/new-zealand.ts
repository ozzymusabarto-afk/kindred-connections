import type { Pais } from "../types";

export const novaZelandia: Pais = {
  id: "nova-zelandia",
  nome: "Nova Zelândia",
  continente: "oceania",
  codigo_mapa: "nz",
  bandeira: "🇳🇿",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1000px-Flag_of_New_Zealand.svg.png",
  capital: "Wellington",
  coordenadas: { x: 960, y: 840 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Milford_Sound%2C_New_Zealand.jpg/1200px-Milford_Sound%2C_New_Zealand.jpg",
  resumo_geografico: "Um país de duas ilhas principais no sul do Pacífico, a Nova Zelândia é o cenário de filmes de fantasia na vida real. De vulcões ativos e gêiseres a fiordes profundos esculpidos por geleiras, o país é o lar do povo Maori e do pássaro Kiwi, um lugar onde a natureza é intocada e poderosa.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Auckland_Skyline_from_Bayswater.jpg/1200px-Auckland_Skyline_from_Bayswater.jpg",
    texto: "Kia Ora! Estamos chegando a Auckland. Olhe pela janela os vulcões adormecidos que pontilham a cidade — são pequenas colinas verdes cercadas pelo azul do mar. A Nova Zelândia é muito verde e cheia de colinas. Aqui o fuso horário é de 15 a 16 horas à frente do Brasil! Vamos pousar no fim do mundo!",
    fala_piloto_original: "Kia Ora! Welcome to Auckland Airport. The temperature is 18 degrees with a fresh breeze. Enjoy Middle-earth!",
    fala_piloto_traducao: "Olá! Bem-vindos ao Aeroporto de Auckland. A temperatura é de 18 graus com uma brisa fresca. Aproveitem a Terra-Média!",
    idioma: "Inglês e Maori",
    fuso_horario: "+15 a +16 horas em relação a Brasília",
    temperatura: "18 °C, vento fresco"
  },
  base: {
    nome: "Eco-Cabin nas Colinas de Hobbiton",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hobbiton_New_Zealand.jpg/1200px-Hobbiton_New_Zealand.jpg",
    descricao: "“Kia Ora! Sou Aroha e serei sua guia. Nossa base é uma cabana sustentável no meio das colinas verdes. A Nova Zelândia é um país que protege muito sua terra e sua água. Sinta o cheiro da grama úmida! Amanhã, vamos ver a fumaça saindo do chão e pássaros que não voam!”"
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Terra que Ferve",
      descricao: "Em Rotorua, a terra está viva! Gêiseres de água quente explodem do chão e lama borbulha como se estivesse no fogo. Tudo cheira a enxofre. É aqui que conhecemos a cultura Maori e sua conexão profunda com a energia da terra.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pohutu_Geyser_Rotorua.jpg/1200px-Pohutu_Geyser_Rotorua.jpg",
      guia_nome: "Aroha",
      transporte: {
        nome: "Barco e Caminhada em Passarelas",
        icone: "🚶",
        descricao: "Caminhamos sobre passarelas de madeira para não queimar os pés no chão quente e ver os gêiseres de perto."
      },
      fauna_do_dia: {
        id: "kiwi-passaro",
        contexto: "O Kiwi é um pássaro único: ele não voa, tem pelos em vez de penas e só sai de noite. Ele é o símbolo nacional!"
      },
      sabor_do_dia: {
        id: "hangi",
        contexto: "Comida cozida embaixo da terra! Usamos o calor das pedras vulcânicas para assar carnes e vegetais por horas."
      },
      observacao: {
        titulo: "Gêiser Pohutu",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pohutu_Geyser_Rotorua.jpg/1200px-Pohutu_Geyser_Rotorua.jpg",
        hotspots: [
          {
            id: "vapor",
            x: 50,
            y: 30,
            titulo: "Água Fervente",
            texto: "A água subterrânea esquenta tanto com o calor do magma que explode para fora com uma pressão enorme."
          }
        ]
      },
      perguntas: [
        {
          id: "nz1",
          tipo: "observacao",
          etapa: "observacao",
          texto: "O chão aqui está sempre saindo fumaça. Como você acha que as pessoas usavam esse calor antes de inventarem o fogão?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "kiwi-passaro",
      nome: "Kiwi",
      nome_cientifico: "Apteryx",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/North_Island_Brown_Kiwi.jpg/1200px-North_Island_Brown_Kiwi.jpg",
      som_url: null,
      curiosidade: "Ele tem narinas na ponta do bico para cheirar comida embaixo da terra. Seus ovos são enormes, quase do tamanho do seu próprio corpo!",
      habitat: "Florestas nativas e arbustos da Nova Zelândia."
    }
  ],
  gastronomia: [
    {
      id: "hangi",
      nome: "Hangi",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Maori_Hangi_Cooking.jpg/1200px-Maori_Hangi_Cooking.jpg",
      adjetivo: "defumado",
      historia: "É o método tradicional Maori de cozinhar. Fazem um buraco no chão, colocam pedras quentes e a comida, cobrem tudo e deixam o calor da terra fazer o trabalho."
    }
  ],
  comparativo: {
    clima_predominante: "Temperado oceânico, com muita chuva e vento",
    bioma_principal: "Florestas temperadas e paisagens vulcânicas/glaciais",
    elemento_marcante: "A natureza geológica ativa e a cultura Maori",
    agricultura_construcoes: "Muitas fazendas de ovelhas (são 5 para cada pessoa!) e casas de madeira resistentes a abalos.",
    roupas_modo_de_vida: "Estilo aventureiro e descalço, com grande respeito pela preservação marinha.",
    fauna_alimentacao: "Dieta rica em frutos do mar e carne de cordeiro, com pássaros nativos que não voam."
  }
};
