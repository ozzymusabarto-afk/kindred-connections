import type { Pais } from "../types";

export const france: Pais = {
  id: "france",
  nome: "França",
  continente: "europa",
  codigo_mapa: "fr",
  bandeira: "🇫🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-fr.png",
  capital: "Paris",
  coordenadas: { x: 50, y: 35 },
  imagem_capa: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "O coração cultural da Europa Ocidental! A França une o charme urbano de Paris às praias da Riviera Francesa, aos campos de lavanda da Provença, aos vinhedos históricos e aos picos nevados dos Alpes.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Francês",
    fuso_horario: "15h00 no horário local — 4 horas a mais que Brasília",
    temperatura: "19 °C, clima temperado agradável ao longo do Rio Sena",
    fala_piloto_original: "Bienvenue en France! Préparez vos bagages pour atterrir à Paris...",
    fala_piloto_traducao: "Bem-vindos à França! Preparem suas bagagens para pousar em Paris...",
    texto: "Olhe pela janela! Do alto, vemos o Rio Sena cortando Paris em curvas suaves, as grandes avenidas planejadas e a silhueta inconfundível da Torre Eiffel.",
    galeria: [
      { id: "f1", imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", legenda: "Paris e a Torre Eiffel" },
      { id: "f2", imagem_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80", legenda: "Arco do Triunfo" }
    ]
  },
  base: {
    nome: "Hotel de Charme no Bairro de Montmartre / Castelo do Vale do Loire",
    imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Acordeão francês (accordéon) tocando valsa suave em uma praça de café"
    },
    descricao: "“Bienvenue, explorateurs! Na França, celebramos a arte, a ciência, a filosofia e a beleza de pensar e construir grandes monumentos.”",
    galeria: [
      { id: "b1", imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", legenda: "Interior charmoso" }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Torre Eiffel, o Rio Sena e a Arquitetura em Aço",
      descricao: "Explorando a Dama de Ferro e as margens do Rio Sena.",
      imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "20 °C, ensolarado com brisa leve",
      transporte: {
        nome: "TGV (Train à Grande Vitesse / Trem de Alta Velocidade)",
        icone: "🚄",
        descricao: "Pioneiro dos trens velozes na Europa, alcança velocidades superiores a 320 km/h conectando o centro de Paris a todas as regiões francesas.",
        imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Zumbido da alta velocidade ao passar pelos trilhos rurais" }
      },
      observacao: {
        titulo: "Torre Eiffel e o Champ de Mars",
        imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "estrutura-ferro", x: 50, y: 40, titulo: "Treliças de Ferro Forjado", texto: "Erguida em 1889 pelo engenheiro Gustave Eiffel com mais de 18 mil peças de ferro unidas por mais de 2,5 milhões de rebites." },
          { id: "topo-farol", x: 50, y: 15, titulo: "Farol de Navegação e Antenas", texto: "Com 330 metros de altura, além de marco turístico, a torre foi fundamental para o desenvolvimento das primeiras transmissões de rádio da história." }
        ]
      },
      fauna_do_dia: {
        id: "marmota-dos-alpes-e-urso",
        contexto: "Observe as montanhas dos Alpes e a floresta de Fontainebleau!",
        texto_guia: "A Marmota-dos-Alpes habita os prados de alta altitude emitindo assobios para alertar sua família, enquanto no Parque do Mercantour vivem Lobos e Cervos protegidos."
      },
      sabor_do_dia: {
        id: "croissant-e-queijos-artesanais",
        contexto: "Hora de experimentar a panificação e a gastronomia clássica!",
        texto_guia: "Prove um Croissant quentinho e crocante (feito com massa folhada delicada) e conheça os mais de 400 tipos de Queijos artesanais (como o Camembert e o Brie)."
      },
      desafio: {
        pergunta: "Em qual cidade francesa fica localizada a famosa Torre Eiffel e o Museu do Louvre?",
        opcoes: ["Nice", "Paris", "Lyon"],
        correta: 1,
        explicacao: "Paris é a capital da França e abriga alguns dos monumentos e museus mais visitados de todo o planeta."
      },
      notas_brasil: {
        transporte: { texto: "O engenheiro francês Gustave Eiffel desenhou não apenas a Torre Eiffel, mas também estruturas de ferro que vieram para o Brasil no século XIX, como pontes e mercados de ferro em Manaus (AM) e Belém (PA)." },
        observacao: { texto: "O inventor brasileiro Santos Dumont viveu em Paris e foi o primeiro homem a contornar a Torre Eiffel dirigindo um dirigível inventado por ele mesmo!" }
      }
    }
  ],
  fauna_flora: [
    {
      id: "marmota-dos-alpes-e-urso",
      nome: "Marmota e Urso",
      foto_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "A marmota assobia para avisar os amigos quando vê perigo!",
      habitat: "Alpes e florestas francesas"
    }
  ],
  gastronomia: [
    {
      id: "croissant-e-queijos-artesanais",
      nome: "Croissant e Queijos",
      foto_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      adjetivo: "clássico e amanteigado",
      historia: "O croissant é um ícone da padaria francesa, amado em todo o mundo por sua leveza."
    }
  ],
  comparativo: {
    clima_predominante: "Temperado Oceânico e Mediterrâneo",
    bioma_principal: "Florestas Temperadas e Alpes",
    elemento_marcante: "Torre Eiffel, Louvre e Arte",
    agricultura_construcoes: "Vinhedos, Queijos e Arquitetura Haussmanniana",
    roupas_modo_de_vida: "Elegância parisiense e vida nos cafés",
    fauna_alimentacao: "Marmotas e Alta Gastronomia"
  }
};
