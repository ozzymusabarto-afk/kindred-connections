import type { Pais } from "../types";

export const canada: Pais = {
  id: "canada",
  nome: "Canadá",
  continente: "america-do-norte",
  codigo_mapa: "ca",
  bandeira: "🇨🇦",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-ca.png",
  capital: "Ottawa",
  coordenadas: { x: 22, y: 25 },
  imagem_capa: "/__l5e/assets-v1/b3acabd4-e1ab-4379-94bf-1f4cb0e96b42/grand-canyon-view-with-colorado-river.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "O segundo maior país do mundo em área territorial, famoso por suas florestas infinitas, lagos de água cristalina em tom turquesa e montanhas cobertas de neve.",
  
  chegada: {
    imagem_url: "/__l5e/assets-v1/9f0d4526-6b9c-4e8e-b124-91e0901e4b3c/usa-chegada-janela.jpg",
    som: {
      url: "/__l5e/assets-v1/9afe377d-cb48-4411-9a63-1faf031180a1/usa-som-pouso.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
      credito: "Wikimedia Commons"
    },
    idioma: "Inglês e Francês",
    fuso_horario: "14h00 no horário local — 1 hora a menos que Brasília",
    temperatura: "8 °C, ar puro e fresco das montanhas",
    fala_piloto_original: "Welcome to Canada! Bienvenue au Canada! Prepare for landing at the Great Lakes...",
    fala_piloto_traducao: "Bem-vindos ao Canadá! Preparem-se para o pouso em meio aos grandes lagos...",
    texto: "Olhe pela janela! A imensidão verde das florestas parece não ter fim, pontilhada por lagos azul-turquesa incríveis.",
    galeria: [
      {
        id: "ca-chegada-1",
        imagem_url: "/__l5e/assets-v1/c8e30a00-b270-4580-8a27-90dcc62ebfca/usa-chegada-avion-manhattan.jpg",
        legenda: "Vista aérea dos lagos canadenses",
        credito: "Wikimedia Commons"
      },
      {
        id: "ca-chegada-2",
        imagem_url: "/__l5e/assets-v1/5f43d081-0c48-4e1a-ba4c-5b0daa8de515/usa-chegada-manhattan-alto.jpg",
        legenda: "Montanhas Rochosas na aproximação",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Château em Quebec / Hotel de Montanha",
    imagem_url: "/__l5e/assets-v1/abb8ecf9-d56c-4e95-aaae-9f4eb00bd801/rep-base-eua.jpg",
    som: {
      url: "/__l5e/assets-v1/e7de99c4-bb1d-4626-b02c-e4716b4cafd6/usa-som-saguao.mp3",
      legenda: "Sons acolhedores da recepção",
      credito: "Wikimedia Commons"
    },
    descricao: "“Welcome! Bienvenue! No Canadá, a cortesia e a gentileza são valores de ouro. Preparem-se para o pouso nos grandes lagos e vamos explorar este reino da natureza!”",
    galeria: [
      {
        id: "ca-base-1",
        imagem_url: "/__l5e/assets-v1/daca442e-dddd-4e17-8f8c-1433c46d76ed/usa-hotel-fachada.jpg",
        legenda: "O interior aconchegante do hotel",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Parque Nacional de Banff e os Lagos Turquesa",
      descricao: "Explorando a natureza selvagem das Rochosas canadenses.",
      imagem_url: "/__l5e/assets-v1/132b5e70-2b4f-493b-85b2-79c49849a11a/new-york-yellow-cab-ford-crown-victoria-1020716.jpg",
      clima_do_dia: "8 °C, ensolarado com vento frio das montanhas",
      
      transporte: {
        nome: "Trem das Rochosas (Rocky Mountaineer)",
        icone: "🚂",
        descricao: "Um trem panorâmico com teto de vidro projetado para admirar os picos nevados e os vales sem perder nenhum detalhe. No Brasil temos poucas linhas de trem de passageiros, como a linha que vai de Vitória a Minas ou o trem da Serra do Mar no Paraná.",
        imagem_url: "/__l5e/assets-v1/132b5e70-2b4f-493b-85b2-79c49849a11a/new-york-yellow-cab-ford-crown-victoria-1020716.jpg",
        som: { 
          url: "/__l5e/assets-v1/1250e12d-35e1-46e5-824e-e08141ac918a/usa-som-taxi.mp3", 
          legenda: "Trilhos e apito suave ecoando pelas montanhas",
          credito: "Wikimedia Commons"
        }
      },

      observacao: {
        titulo: "Lago Louise (Lake Louise)",
        imagem_url: "/__l5e/assets-v1/4c7d8f83-36ef-4636-b10e-c774de123856/the-lake-in-central-park-in-autumn-10.jpg",
        hotspots: [
          { id: "agua-turquesa", x: 45, y: 65, titulo: "Água Azul-Turquesa", texto: "O brilho azul vem da 'farinha de rocha' trazida pelo derretimento das geleiras no topo das montanhas. Enquanto o Canadá tem lagos formados por geleiras frias, o Brasil possui incríveis encontros de rios quentes, como o Rio Negro e Solimões no Amazonas." },
          { id: "pinheiros", x: 75, y: 40, titulo: "Floresta de Pinheiros", texto: "Essas árvores resistentes permanecem verdes mesmo sob o rigoroso inverno canadense." }
        ]
      },

      fauna_do_dia: {
        id: "castor-e-urso",
        contexto: "Olhe com atenção na margem do lago e nas florestas de coníferas!",
        texto_guia: "O castor é o grande engenheiro da natureza canadense, construindo represas incríveis com troncos. Nas montanhas mais altas, o majestoso urso-pardo reina com postura nobre."
      },

      sabor_do_dia: {
        id: "poutine-e-maple",
        contexto: "Depois de pegar o ar frio do lago, nada melhor que uma refeição tradicional!",
        texto_guia: "Prove o Poutine (batatas crocantes com queijo e molho aquecido) e a sobremesa de Maple Syrup (xarope natural extraído da seiva da árvore de Ácer)."
      },

      desafio: {
        pergunta: "Qual folha famosa está desenhada exatamente no centro da bandeira do Canadá?",
        opcoes: ["Folha de Parreira", "Folha de Ácer (Maple)", "Folha de Eucalipto"],
        correta: 1,
        explicacao: "A folha de Ácer é o grande símbolo canadense, representando a natureza abundante e a árvore de onde é extraído o famoso xarope doce."
      },

      notas_brasil: {
        transporte: { texto: "No Brasil temos poucas linhas de trem de passageiros, como a linha que vai de Vitória a Minas ou o trem da Serra do Mar no Paraná." },
        observacao: { texto: "Enquanto o Canadá tem lagos formados por geleiras frias, o Brasil possui incríveis encontros de rios quentes, como o Rio Negro e Solimões no Amazonas." }
      }
    }
  ],

  fauna_flora: [
    {
      id: "castor",
      nome: "Castor-do-Canadá",
      foto_url: "/__l5e/assets-v1/afbe2ab2-731d-4b30-86a6-fa42e75c4856/rep-galeria-centralpark-aerea.jpg",
      som_url: null,
      curiosidade: "Eles constroem represas que podem durar décadas!",
      habitat: "Lagos e rios",
      som: { 
        url: "/__l5e/assets-v1/367197cb-668f-42c3-8a04-52a880357101/usa-som-parque-v2.mp3", 
        legenda: "Barulho de madeira sendo roída",
        credito: "Wikimedia Commons"
      }
    }
  ],
  gastronomia: [
    {
      id: "poutine",
      nome: "Poutine",
      foto_url: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80",
      adjetivo: "Crocante e Quente",
      historia: "Originário de Quebec, é o prato de conforto número um dos canadenses."
    }
  ],
  comparativo: {
    clima_predominante: "Frio Temperado / Ártico",
    bioma_principal: "Floresta Boreal (Taiga)",
    elemento_marcante: "Neve e Lagos Turquesa",
    agricultura_construcoes: "Madeira e Trigo",
    roupas_modo_de_vida: "Casacos térmicos e esportes de inverno",
    fauna_alimentacao: "Ursos, Castores e Maple Syrup"
  }
};