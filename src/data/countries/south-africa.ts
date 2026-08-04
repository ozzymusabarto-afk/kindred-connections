import type { Pais } from "../types";

export const africaDoSul: Pais = {
  id: "africa-do-sul",
  nome: "África do Sul",
  continente: "africa",
  codigo_mapa: "za",
  bandeira: "🇿🇦",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1000px-Flag_of_South_Africa.svg.png",
  capital: "Pretória",
  coordenadas: { x: 550, y: 780 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Table_Mountain_Cape_Town.jpg/1200px-Table_Mountain_Cape_Town.jpg",
  resumo_geografico: "Conhecida como a 'Nação Arco-Íris' por sua diversidade de povos, a África do Sul fica na ponta extrema do continente. É uma terra de safáris incríveis com os 'Big Five', montanhas que parecem mesas e o encontro épico de dois oceanos: o Atlântico e o Índico.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cape_Town_Aerial_View.jpg/1200px-Cape_Town_Aerial_View.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso na Cidade do Cabo com vista para a Table Mountain",
      credito: "Wikimedia Commons"
    },
    texto: "Sawubona! Estamos chegando à Cidade do Cabo. Olhe pela janela a Table Mountain — ela é plana no topo como uma mesa de gigante! A África do Sul tem um clima muito parecido com o sul do Brasil, com estações bem definidas. O fuso horário está 5 horas à frente. Vamos pousar e buscar os animais selvagens!",
    fala_piloto_original: "Sawubona! Dumelang! Welcome to Cape Town. The temperature is 22 degrees. Prepare for an amazing safari experience!",
    fala_piloto_traducao: "Olá! Bem-vindos à Cidade do Cabo. A temperatura é de 22 graus. Preparem-se para uma experiência incrível de safári!",
    idioma: "Inglês, Zulu, Africâner (entre 11 oficiais)",
    fuso_horario: "+5 horas em relação a Brasília",
    temperatura: "22 °C, brisa oceânica",
    galeria: [
      {
        id: "za-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cape_Town_Coastline_Aerial.jpg/1200px-Cape_Town_Coastline_Aerial.jpg",
        legenda: "A costa da Cidade do Cabo vista do céu",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Safari Lodge no Kruger Park",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kruger_National_Park_Safari_Lodge.jpg/1200px-Kruger_National_Park_Safari_Lodge.jpg",
    descricao: "“Sawubona! Sou Thabo e vou te guiar pela savana. Nossa base é uma cabana segura no coração da natureza. À noite, você ouvirá o rugido dos leões e o riso das hienas lá fora. Fique atento: na África do Sul, a natureza manda e nós somos apenas visitantes!”"
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Savana e os Big Five",
      descricao: "Um safári é como um jogo de esconde-esconde gigante. Procuramos os 'Big Five': leão, leopardo, elefante, rinoceronte e búfalo. É preciso ter olhos de lince e muito silêncio para não assustar os animais no seu reino.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lion_family_Kruger.jpg/1200px-Lion_family_Kruger.jpg",
      guia_nome: "Thabo",
      transporte: {
        nome: "Jipe de Safári Aberto",
        icone: "🚜",
        descricao: "Jipes altos e sem janelas para que possamos ver e ouvir tudo o que acontece na savana ao nosso redor."
      },
      fauna_do_dia: {
        id: "leao-africano",
        contexto: "O leão é o rei. Ele passa cerca de 20 horas por dia descansando na sombra para poupar energia para a caça."
      },
      sabor_do_dia: {
        id: "braai",
        contexto: "O churrasco sul-africano. Não é só comida, é um momento de reunir amigos em volta do fogo para contar histórias."
      },
      observacao: {
        titulo: "Vida Selvagem",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lion_family_Kruger.jpg/1200px-Lion_family_Kruger.jpg",
        hotspots: [
          {
            id: "juba",
            x: 40,
            y: 45,
            titulo: "O Rei",
            texto: "A juba escura do leão macho serve para proteger o pescoço em lutas e para mostrar que ele é forte e saudável."
          }
        ]
      },
      perguntas: [
        {
          id: "af1",
          tipo: "observacao",
          etapa: "fauna",
          texto: "O leão dorme quase o dia todo. Por que você acha que um animal tão forte precisa descansar tanto tempo?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "leao-africano",
      nome: "Leão Africano",
      nome_cientifico: "Panthera leo",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
      som_url: null,
      curiosidade: "Diferente de outros felinos, os leões vivem em grupos sociais chamados alcateias. As leoas são as principais caçadoras do grupo.",
      habitat: "Savanas, planícies e matagais da África Subsaariana."
    }
  ],
  gastronomia: [
    {
      id: "braai",
      nome: "Braai",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/South_African_Braai.jpg/1200px-South_African_Braai.jpg",
      adjetivo: "social",
      historia: "A palavra 'braai' vem do africâner e significa churrasco. É a tradição que une todos os sul-africanos, independente de sua origem."
    }
  ],
  comparativo: {
    clima_predominante: "Mediterrâneo e temperado, com invernos frescos",
    bioma_principal: "Savana (Bushveld) e Fynbos (vegetação rasteira única)",
    elemento_marcante: "A convivência próxima entre a vida urbana moderna e a vida selvagem",
    agricultura_construcoes: "Grandes plantações de frutas e vinhos, e casas de estilo Cape Dutch (holandês).",
    roupas_modo_de_vida: "Roupas práticas de safári (caqui) e um grande amor por esportes como o rúgbi.",
    fauna_alimentacao: "Dieta baseada em carnes e milho (pap), com a fauna mais famosa do mundo (os Big Five)."
  }
};
