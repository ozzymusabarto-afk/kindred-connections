import type { Pais } from "../types";

export const egito: Pais = {
  id: "egito",
  nome: "Egito",
  continente: "africa",
  codigo_mapa: "eg",
  bandeira: "🇪🇬",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1000px-Flag_of_Egypt.svg.png",
  capital: "Cairo",
  coordenadas: { x: 575, y: 440 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg",
  resumo_geografico: "Uma dádiva do Rio Nilo no meio do maior deserto do mundo, o Saara. O Egito é o berço de uma das civilizações mais antigas da Terra, onde pirâmides monumentais guardam segredos de faraós e o Rio Nilo traz vida a uma faixa verde de terra que corta as areias escaldantes.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/View_of_Nile_river_and_Cairo_city_at_sunset.jpg/1920px-View_of_Nile_river_and_Cairo_city_at_sunset.jpg",
    texto: "Uau, explorador! Olhe pela janela: o Rio Nilo parece uma serpente azul brilhante cercada por uma linha verde de palmeiras, dividindo o deserto ao meio. Estamos chegando ao Cairo, uma cidade vibrante e barulhenta onde a história tem milhares de anos. O calor é seco e o sol brilha forte quase todo o ano. Vamos desembarcar e sentir o perfume das especiarias no ar!",
    fala_piloto_original: "Ahlan wa sahlan! Welcome to Cairo. The temperature outside is 34 degrees Celsius. We are landing at Cairo International Airport. Please remain seated until the aircraft comes to a complete stop.",
    fala_piloto_traducao: "Bem-vindos! Aqui é o capitão. Estamos chegando ao Cairo. A temperatura externa é de 34 graus Celsius. Estamos pousando no Aeroporto Internacional do Cairo. Por favor, permaneçam sentados até a parada total.",
    idioma: "Árabe",
    fuso_horario: "+5 horas em relação a Brasília",
    temperatura: "34 °C, calor seco"
  },
  base: {
    nome: "Eco-Lodge na Margem do Nilo",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nile_view_from_Aswan.jpg/1920px-Nile_view_from_Aswan.jpg",
    descricao: "“Salam! Eu sou Omar e serei seu guia pelas areias do tempo. Nossa base é uma casa tradicional nubiana, feita de tijolos de barro que mantêm o interior fresco mesmo no calor do deserto. Repare nos padrões coloridos das paredes! Ouça o som da água do Nilo batendo na margem... sem esse rio, não existiria vida aqui. Amanhã, vamos visitar as gigantes de pedra!”"
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: As Gigantes de Gizé",
      descricao: "As pirâmides de Gizé são as únicas das 'Sete Maravilhas do Mundo Antigo' que ainda estão de pé. Elas foram construídas com blocos de pedra gigantes que pesam toneladas! Como as pessoas conseguiram movê-los sem máquinas modernas? Observe a Esfinge, com corpo de leão e cabeça de homem, protegendo o caminho.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg",
      guia_nome: "Omar",
      transporte: {
        nome: "Dromedário (Camelo)",
        icone: "🐪",
        descricao: "O dromedário é o 'navio do deserto'. Ele tem patas largas que não afundam na areia e pode passar dias sem beber água."
      },
      fauna_do_dia: {
        id: "escaravelho",
        contexto: "Nas areias, o escaravelho rola bolas de terra. Para os antigos egípcios, ele era um símbolo sagrado do sol e do renascimento."
      },
      sabor_do_dia: {
        id: "falafel",
        contexto: "Bolinhos fritos de grão-de-bico temperados com muitas ervas, servidos dentro de um pão pita quentinho."
      },
      observacao: {
        titulo: "As Pirâmides e a Esfinge",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg",
        hotspots: [
          {
            id: "piramide",
            x: 60,
            y: 40,
            titulo: "Grande Pirâmide",
            texto: "Foi construída para o Faraó Quéops. Ela era originalmente coberta por calcário branco que brilhava sob o sol como uma joia."
          },
          {
            id: "esfinge",
            x: 40,
            y: 75,
            titulo: "A Esfinge",
            texto: "Talhada diretamente em uma única rocha gigante. Ela representa a força (leão) e a inteligência (homem)."
          }
        ]
      },
      perguntas: [
        {
          id: "e1",
          tipo: "observacao",
          etapa: "transporte",
          texto: "O dromedário balança muito ao caminhar. Por que você acha que ele é melhor que um cavalo para atravessar o deserto de areia fofa?"
        },
        {
          id: "e2",
          tipo: "comparacao",
          etapa: "observacao",
          texto: "As pirâmides duraram milênios. De que materiais são feitas as casas na sua rua? Elas durariam tanto tempo?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "escaravelho",
      nome: "Escaravelho Sagrado",
      nome_cientifico: "Scarabaeus sacer",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Scarabaeus_sacer.jpg/1920px-Scarabaeus_sacer.jpg",
      som_url: null,
      curiosidade: "Ele usa o sol e as estrelas para se orientar enquanto rola suas bolas de detritos. No antigo Egito, era um amuleto de boa sorte muito comum.",
      habitat: "Dunas de areia e bordas do deserto."
    }
  ],
  gastronomia: [
    {
      id: "falafel",
      nome: "Ta'ameya (Falafel Egípcio)",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Falafel_at_Beit_El_Falatier.jpg/1920px-Falafel_at_Beit_El_Falatier.jpg",
      adjetivo: "crocante",
      historia: "No Egito, o falafel é feito com favas verdes em vez de grão-de-bico, o que o torna mais leve e verde por dentro. É a comida de rua mais amada do país."
    }
  ],
  comparativo: {
    clima_predominante: "Desértico árido, extremamente quente durante o dia",
    bioma_principal: "Deserto (Saara) e vale fluvial fértil",
    elemento_marcante: "O Rio Nilo como única fonte de água e vida",
    agricultura_construcoes: "Dependência total das cheias do Nilo para o plantio. Casas de tijolos de barro e ventilação natural.",
    roupas_modo_de_vida: "Túnicas largas e claras (Galabeya) para refletir o sol e proteger a pele da areia e do calor.",
    fauna_alimentacao: "Animais adaptados à seca extrema e dieta rica em grãos, pães e vegetais irrigados pelo Nilo."
  }
};
