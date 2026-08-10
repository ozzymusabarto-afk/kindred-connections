import type { Pais } from "../types";

export const fiji: Pais = {
  id: "fiji",
  nome: "Fiji",
  continente: "oceania",
  codigo_mapa: "fj",
  bandeira: "🇫🇯",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1000px-Flag_of_Fiji.svg.png",
  capital: "Suva",
  coordenadas: { x: 1000, y: 700 },
  imagem_capa: "https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&q=80&w=1280",
  resumo_geografico: "Fiji é um paraíso tropical formado por mais de 300 ilhas no coração do Pacífico Sul. Famoso por suas águas azul-turquesa, recifes de coral vibrantes e a hospitalidade calorosa de seu povo. É um lugar onde o ritmo é lento e a natureza marinha é a verdadeira protagonista.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Mamanuca_Islands_Fiji.jpg/1200px-Mamanuca_Islands_Fiji.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no paraíso das ilhas Fiji",
      credito: "Wikimedia Commons"
    },
    texto: "Bula! Estamos chegando às ilhas Fiji. Olhe pela janela: o mar muda de azul escuro para turquesa clarinho conforme chegamos perto dos corais. Cada ilha parece uma joia verde flutuando na imensidão do oceano. Aqui o sol brilha forte e o mar é quente o ano todo. Vamos mergulhar nessa aventura!",
    fala_piloto_original: "Bula vinaka! Welcome to Nadi International Airport. The temperature is 30 degrees. Prepare to relax in paradise!",
    fala_piloto_traducao: "Olá! Bem-vindos ao Aeroporto Internacional de Nadi. A temperatura é de 30 graus. Preparem-se para relaxar no paraíso!",
    idioma: "Fijiano e Inglês",
    fuso_horario: "+15 horas em relação a Brasília",
    temperatura: "30 °C, tropical",
    galeria: [
      {
        id: "fj-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fiji_Islands_Aerial_View.jpg/1200px-Fiji_Islands_Aerial_View.jpg",
        legenda: "As ilhas e recifes de coral de Fiji vistos do céu",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Bure Tradicional na Areia",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fiji_Resort_Bure.jpg/1200px-Fiji_Resort_Bure.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fiji_Ocean_Ambience.mp3",
      legenda: "O som suave das ondas nas ilhas Fiji",
      credito: "Wikimedia Commons"
    },
    descricao: "“Bula! Sou Sione e vou te mostrar o espírito das nossas ilhas. Nossa base é um Bure — uma cabana de madeira e palha construída bem na frente do mar. Você vai dormir ouvindo o som das ondas. Em Fiji, não temos pressa. Respire fundo e sinta o perfume das flores de hibisco!”",
    galeria: [
      {
        id: "fj-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fiji_Resort_Bure.jpg/1200px-Fiji_Resort_Bure.jpg",
        legenda: "Um Bure tradicional na beira da praia",
        credito: "Wikimedia Commons"
      }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Jardim de Coral",
      descricao: "Embaixo da água existe um mundo tão colorido quanto uma floresta. São os recifes de coral, onde milhares de peixes coloridos vivem e se alimentam. É um berçário para a vida marinha e ajuda a proteger nossas ilhas das ondas fortes.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fiji_Coral_Reef.jpg/1200px-Fiji_Coral_Reef.jpg",
      guia_nome: "Sione",
      transporte: {
        nome: "Barco com Fundo de Vidro",
        icone: "🛶",
        descricao: "Um barco especial que tem janelas no chão para podermos ver os corais e os peixes sem precisar molhar os pés!"
      },
      fauna_do_dia: {
        id: "peixe-palhaco",
        contexto: "Nas anêmonas dos corais, o peixe-palhaço se esconde. Ele é imune às ferroadas da anêmona e os dois se ajudam para sobreviver.",
        galeria: [
          {
            id: "fj-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/1200px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
            legenda: "Peixe-palhaço na anêmona",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "kokoda",
        contexto: "Peixe fresco marinado no limão e servido dentro de um coco com leite de coco fresquinho."
      },
      observacao: {
        titulo: "Recife de Coral",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fiji_Coral_Reef.jpg/1200px-Fiji_Coral_Reef.jpg",
        hotspots: [
          {
            id: "coral-vivo",
            x: 55,
            y: 50,
            titulo: "Corais Vivos",
            texto: "Os corais não são pedras, são animais minúsculos que constroem essas estruturas gigantes de calcário."
          }
        ]
      },
      perguntas: [
        {
          id: "fj1",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Os corais precisam de água limpa e luz do sol para crescer. Por que você acha que eles não conseguem viver em águas muito fundas ou escuras?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "peixe-palhaco",
      nome: "Peixe-Palhaço",
      nome_cientifico: "Amphiprioninae",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_clownfish.jpg/1200px-Amphiprion_ocellaris_clownfish.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Clownfish_Bubbles.mp3",
      curiosidade: "Eles vivem em uma relação de parceria com as anêmonas: o peixe limpa a anêmona e ela o protege de outros predadores com seus tentáculos venenosos.",
      habitat: "Recifes de coral em águas quentes do Pacífico e Índico."
    }
  ],
  gastronomia: [
    {
      id: "kokoda",
      nome: "Kokoda",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Fijian_Kokoda.jpg/1200px-Fijian_Kokoda.jpg",
      adjetivo: "refrescante",
      historia: "É o ceviche das ilhas Fiji. O uso do leite de coco é o que dá o toque especial fijiano, tornando o prato cremoso e suave."
    }
  ],
  comparativo: {
    clima_predominante: "Tropical marítimo, quente e úmido",
    bioma_principal: "Recifes de coral e florestas tropicais de ilha",
    elemento_marcante: "A conexão total com o oceano e a hospitalidade do povo",
    agricultura_construcoes: "Produção de coco e cana-de-açúcar. Casas (Bures) feitas de materiais naturais para ventilação.",
    roupas_modo_de_vida: "Uso de 'Sulu' (saia tradicional) por homens e mulheres e o ritual da Kava.",
    fauna_alimentacao: "Dieta baseada em tubérculos (como mandioca), coco e muitos peixes."
  }
};
