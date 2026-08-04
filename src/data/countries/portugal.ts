import { Pais } from "../types";

export const portugal: Pais = {
  id: "portugal",
  nome: "Portugal",
  continente: "europa",
  codigo_mapa: "pt",
  bandeira: "🇵🇹",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
  capital: "Lisboa",
  coordenadas: { x: 615, y: 385 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Pra%C3%A7a_do_Com%C3%A9rcio_Lisbon_July_2011.jpg/1280px-Pra%C3%A7a_do_Com%C3%A9rcio_Lisbon_July_2011.jpg",
  resumo_geografico: "A porta de entrada da Europa e um pedaço fundamental da história do Brasil. Portugal é um país de navegadores, com castelos medievais, bondes amarelos que sobem colinas íngremes e um litoral banhado pelo Atlântico de onde partiram as caravelas que chegaram ao solo brasileiro há séculos.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lisboa_-_Set%C3%BAbal_%2848529598207%29.jpg/1280px-Lisboa_-_Set%C3%BAbal_%2848529598207%29.jpg",
    texto: "Pela janela do avião, vemos a foz do Rio Tejo e a Ponte 25 de Abril, que parece muito com a de San Francisco! Estamos chegando à terra dos nossos antepassados."
  },
  base: {
    nome: "Hotel Solar do Castelo",
    descricao: "Ficaremos em um hotel charmoso no bairro de Alfama. Daqui ouvimos o som do Fado e o tilintar dos bondes passando pelas ruas estreitas de pedra.",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Alfama_Lisbon.jpg/1280px-Alfama_Lisbon.jpg"
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Torre de Belém e o Rio Tejo",
      descricao: "Hoje visitaremos o local de onde partiram as grandes navegações. Imagine caravelas de madeira saindo deste rio para cruzar o oceano desconhecido!",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Torre_Bel%C3%A9m_November_2016-1.jpg/1280px-Torre_Bel%C3%A9m_November_2016-1.jpg",
      guia_local: "João, historiador de Lisboa",
      clima_do_dia: "22 °C, sol e brisa do mar",
      transporte: {
        nome: "Elétrico (Bonde Amarelo)",
        icone: "🚋",
        descricao: "O famoso bonde 28 nos leva pelas ladeiras da cidade. É um transporte antigo, de madeira, que parece um brinquedo gigante!"
      },
      fauna_do_dia: {
        id: "gaivota",
        contexto: "As gaivotas sobrevoam o Rio Tejo acompanhando os barcos, sempre de olho em algum peixe."
      },
      sabor_do_dia: {
        id: "pastel-belem",
        contexto: "Não se pode visitar Belém sem provar o pastel de nata original, quentinho e com canela."
      },
      perguntas: [
        {
          id: "p1",
          tipo: "observacao",
          texto: "A Torre de Belém parece um castelo dentro da água. Por que você acha que ela foi construída bem na beira do rio?",
          etapa: "observacao"
        },
        {
          id: "p2",
          tipo: "comparacao",
          texto: "O 'Elétrico' é um bonde que anda sobre trilhos na rua. Existe algo assim na sua cidade?",
          etapa: "transporte"
        }
      ],
      observacao: {
        titulo: "Explorando a Torre de Belém",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Torre_Bel%C3%A9m_November_2016-1.jpg/1280px-Torre_Bel%C3%A9m_November_2016-1.jpg",
        hotspots: [
          {
            id: "pedra",
            x: 50,
            y: 50,
            titulo: "Pedra Esculpida",
            texto: "Repare nos detalhes da pedra: há cordas e símbolos de navegação esculpidos, mostrando a importância do mar para Portugal."
          }
        ]
      }
    }
  ],
  fauna_flora: [
    {
      id: "gaivota",
      nome: "Gaivota-argentea",
      nome_cientifico: "Larus argentatus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/European_Herring_Gull_Larus_argentatus.jpg/1280px-European_Herring_Gull_Larus_argentatus.jpg",
      som_url: null,
      curiosidade: "São aves muito inteligentes que vivem no litoral. Elas aprenderam a seguir os barcos de pesca para conseguir comida fácil.",
      habitat: "Zonas costeiras e estuários."
    },
    {
      id: "lince-iberico",
      nome: "Lince-ibérico",
      nome_cientifico: "Lynx pardinus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lince_ib%C3%A9rico_2.jpg/1280px-Lince_ib%C3%A9rico_2.jpg",
      som_url: null,
      curiosidade: "É um dos felinos mais raros do mundo. Portugal tem feito um grande esforço para proteger este animal das florestas de sobreiro.",
      habitat: "Matagal mediterrânico."
    }
  ],
  gastronomia: [
    {
      id: "pastel-belem",
      nome: "Pastel de Belém",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pasteis_de_belem.jpg/1280px-Pasteis_de_belem.jpg",
      adjetivo: "crocante",
      historia: "A receita secreta nasceu num mosteiro há mais de 200 anos. Só algumas pessoas no mundo sabem exatamente como fazer o creme e a massa folhada perfeita."
    },
    {
      id: "bacalhau",
      nome: "Bacalhau à Brás",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bacalhau_a_bras.jpg/1280px-Bacalhau_a_bras.jpg",
      adjetivo: "saboroso",
      historia: "Portugal é o maior consumidor de bacalhau do mundo. Dizem que existem 1001 maneiras de prepará-lo!"
    }
  ],
  comparativo: {
    clima_predominante: "Mediterrânico, com muito sol e invernos suaves",
    bioma_principal: "Sobreirais e matagal mediterrânico",
    elemento_marcante: "O azulejo azul e branco que decora as fachadas",
    agricultura_construcoes: "Grande produção de cortiça (das árvores sobreiros) e azeite. As casas costumam ser brancas com detalhes coloridos nas janelas.",
    roupas_modo_de_vida: "Vida tranquila, com muita gente caminhando pelas praças e cafés. No verão, as praias do Algarve ficam cheias.",
    fauna_alimentacao: "Peixes frescos, mariscos e azeite de oliva são a base da mesa portuguesa."
  }
};
