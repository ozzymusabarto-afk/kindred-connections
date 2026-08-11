import { Pais } from "../types";

export const scotland: Pais = {
  id: "scotland",
  nome: "Escócia",
  continente: "europa",
  codigo_mapa: "gb-sct",
  bandeira: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",
  capital: "Edimburgo",
  coordenadas: { x: 46, y: 24 },
  imagem_capa: "https://images.unsplash.com/photo-1549918830-11ec3d403bbc?w=800&q=80",
  resumo_geografico: "Uma terra de lendas, castelos de pedra e montanhas envoltas em névoa. A Escócia é famosa por suas 'Highlands', seus lagos profundos (Lochs) e uma cultura rica em tradições, do som das gaitas de fole aos padrões coloridos dos tartãs.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Edinburgh_Castle_from_Princes_Street_Gardens.jpg/1280px-Edinburgh_Castle_from_Princes_Street_Gardens.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso em Edimburgo, a capital escocesa",
      credito: "Wikimedia Commons"
    },
    texto: "Fàilte! Bem-vindos à Escócia! Olhe pela janela: o Castelo de Edimburgo domina a cidade do alto de um vulcão extinto. A paisagem é de um verde intenso e o céu costuma ter nuvens dramáticas. Prepare o seu cachecol, pois o vento das Highlands já está soprando!",
    idioma: "Inglês e Gaélico Escocês",
    fuso_horario: "+4 horas em relação a Brasília",
    temperatura: "12 °C, fresco e úmido",
    galeria: []
  },
  base: {
    nome: "Chalé de Pedra nas Highlands",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Scottish_Highlands_Cottage.jpg/1280px-Scottish_Highlands_Cottage.jpg",
    descricao: "“Failte! Eu sou o Angus. Nossa base é este chalé de pedra aconchegante, com lareira para aquecer as noites frescas. Daqui podemos ver ovelhas pastando e ouvir o som distante de uma gaita de fole.”"
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Castelo e o Mistério do Lago",
      descricao: "Visitaremos o Castelo de Edimburgo e depois seguiremos para o Loch Ness. Será que conseguiremos avistar a famosa Nessie nas águas profundas?",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Eilean_Donan_Castle_Scotland.jpg/1280px-Eilean_Donan_Castle_Scotland.jpg",
      guia_nome: "Angus",
      clima_do_dia: "10 °C, nublado com garoa",
      transporte: {
        nome: "Trem das Terras Altas",
        icone: "🚂",
        descricao: "Um trem a vapor que cruza viadutos altíssimos e vales verdes."
      },
      fauna_do_dia: {
        id: "vaca-das-highlands",
        contexto: "Vacas peludas e amigáveis que aguentam o frio intenso das montanhas."
      },
      sabor_do_dia: {
        id: "shortbread",
        contexto: "Biscoitos amanteigados que derretem na boca, perfeitos com um chá quente."
      },
      observacao: {
        titulo: "Castelo de Eilean Donan",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Eilean_Donan_Castle_Scotland.jpg/1280px-Eilean_Donan_Castle_Scotland.jpg",
        hotspots: []
      },
      perguntas: []
    }
  ],
  fauna_flora: [
    {
      id: "vaca-das-highlands",
      nome: "Vaca das Highlands",
      nome_cientifico: "Bos taurus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Highland_Cattle_Scotland.jpg/1280px-Highland_Cattle_Scotland.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cow_Sound.mp3",
      curiosidade: "Sua pelagem longa e dupla serve como uma capa de chuva natural e cobertor térmico contra o clima gelado da Escócia.",
      habitat: "Montanhas e vales da Escócia."
    }
  ],
  gastronomia: [
    {
      id: "shortbread",
      nome: "Shortbread",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Scottish_Shortbread.jpg/1280px-Scottish_Shortbread.jpg",
      adjetivo: "amanteigado",
      historia: "Um doce tradicional escocês que existe desde o século 12.",
      credito: "Wikimedia Commons"
    }
  ],
  comparativo: {
    clima_predominante: "Temperado oceânico, fresco e chuvoso",
    bioma_principal: "Montanhas, charnecas e lagos glaciais",
    elemento_marcante: "O Kilt e a gaita de fole",
    agricultura_construcoes: "Criação de ovelhas e gado. Castelos e casas de pedra sólida.",
    roupas_modo_de_vida: "Uso de lã e tecidos xadrez (Tartan). Vida ligada às lendas e clãs.",
    fauna_alimentacao: "Peixes de água fria, aveia e doces amanteigados."
  }
};