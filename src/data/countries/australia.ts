import type { Pais } from "../types";

export const australia: Pais = {
  id: "australia",
  nome: "Austrália",
  continente: "oceania",
  codigo_mapa: "au",
  bandeira: "🇦🇺",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-au.png",
  capital: "Camberra",
  coordenadas: { x: 88, y: 75 },
  imagem_capa: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "Um gigante insular no hemisfério sul! A Austrália une a espetacular Grande Barreira de Corais, o místico e avermelhado Outback no interior do continente, cidades litorâneas vibrantes e espécies de animais únicas no mundo.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Inglês",
    fuso_horario: "09h00 no horário local — 13 horas a mais que Brasília",
    temperatura: "24 °C, dia ensolarado com brisa marinha refrescante",
    fala_piloto_original: "Welcome to Australia! G'day mates! Please prepare your luggage to land in Sydney...",
    fala_piloto_traducao: "Bem-vindos à Austrália! G'day mates! Por favor, preparem suas bagagens para pousar em Sydney...",
    texto: "Olhe pela janela! Do alto, avistamos as conchas brancas da Ópera de Sydney, a imponente ponte Harbour Bridge e o azul cristalino das baías e praias oceânicas.",
    galeria: [
      {
        id: "au-chegada-1",
        imagem_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
        legenda: "Vista aérea da Ópera de Sydney"
      },
      {
        id: "au-chegada-2",
        imagem_url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
        legenda: "O azul cristalino das baías australianas"
      }
    ]
  },

  base: {
    nome: "Hospedagem à beira da Baía de Sydney / Eco-Lodge perto da Grande Barreira de Corais",
    imagem_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Eco grave ressonante do didgeridoo (instrumento tradicional indígena australiano) com sons da natureza"
    },
    descricao: "“G'day, exploradores! Na Austrália, descobrimos o equilíbrio perfeito entre a conservação da vida marinha, o respeito às culturas ancestrais dos Povos das Primeiras Nações e o amor pelos esportes e vida ao ar livre.”",
    galeria: [
      {
        id: "au-base-1",
        imagem_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
        legenda: "Um refúgio sustentável em harmonia com o mar"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: A Ópera de Sydney, a Grande Barreira de Corais e os Mamíferos Marsupiais",
      descricao: "Uma jornada inesquecível pelo litoral australiano, das ondas de Sydney aos corais coloridos.",
      imagem_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "24 °C, ensolarado e clima agradável",
      
      transporte: {
        nome: "Barcas de Sydney (Ferry) e Trem Cênico de Kuranda",
        icone: "⛴️",
        descricao: "As barcas verdes e amarelas cruzam a baía conectando os bairros e praias de Sydney, enquanto o trem cênico Kuranda Scenic Railway atravessa pontes viaduto e florestas tropicais milenares.",
        imagem_url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Som das ondas no casco da barca e apito suave na baía de Sydney" }
      },
      observacao: {
        titulo: "Ópera de Sydney (Sydney Opera House) e Grande Barreira de Corais",
        imagem_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { 
            id: "velas-opera", 
            x: 50, 
            y: 40, 
            titulo: "Arquitetura das Velas Cerâmicas", 
            texto: "Design revolucionário inspirado em conchas e velas de barco cobertas por mais de 1 milhão de azulejos autolimpantes de cerâmica." 
          },
          { 
            id: "barreira-corais", 
            x: 75, 
            y: 65, 
            titulo: "A Grande Barreira de Corais", 
            texto: "A maior estrutura viva do planeta, tão gigante que pode ser vista do espaço, abrigando milhares de espécies de peixes e tartarugas." 
          }
        ]
      },
      fauna_do_dia: {
        id: "canguru-coala-e-ornitorrinco",
        contexto: "Observe os parques nacionais e as florestas de eucalipto!",
        texto_guia: "A Austrália é famosa pelos seus animais marsupiais: o Canguru (que salta usando a cauda forte) e o fofo Coala (que vive no alto dos eucaliptos), além do fascinante Ornitorrinco (mamífero que põe ovos e tem bico de pato)."
      },
      sabor_do_dia: {
        id: "meat-pie-e-lamington",
        contexto: "Hora de experimentar os lanches e sobremesas tradicionais da Austrália!",
        texto_guia: "Saboreie a *Meat Pie* (tortinha individual recheada com carne moída bem temperada e molho escurinho) e, de sobremesa, o famoso *Lamington* (cubo de bolo fofinho banhado em chocolate e coberto com coco ralado)."
      },
      desafio: {
        pergunta: "Qual é o famoso animal marsupial australiano conhecido por se locomover aos pulos e carregar seus filhotes na bolsa (bolsa marsupial)?",
        opcoes: ["Urso Panda", "Canguru", "Pinguim"],
        correta: 1,
        explicacao: "O canguru é o maior marsupial do mundo e símbolo nacional da Austrália, utilizando suas patas traseiras fortes para saltar grandes distâncias."
      },
      notas_brasil: {
        transporte: { texto: "Tanto o Brasil quanto a Austrália possuem litorais gigantescos e uma enorme paixão pelo surfe e por esportes náuticos nas praias do Oceano Atlântico e do Oceano Pacífico!" }
      }
    }
  ],
  
  fauna_flora: [
    {
      id: "canguru",
      nome: "Canguru-Vermelho",
      foto_url: "https://images.unsplash.com/photo-1548032230-e199ce65d18d?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "Os cangurus podem saltar até 9 metros de distância em um único pulo!",
      habitat: "Planícies abertas e bosques australianos."
    }
  ],
  
  gastronomia: [
    {
      id: "meat-pie",
      nome: "Meat Pie Australiana",
      foto_url: "https://images.unsplash.com/photo-1628191139360-408306cd953a?auto=format&fit=crop&w=800&q=80",
      adjetivo: "clássico",
      historia: "A torta de carne é o lanche nacional da Austrália, muitas vezes servida com molho de tomate por cima."
    }
  ],
  
  comparativo: {
    clima_predominante: "Árido no interior e temperado/tropical na costa",
    bioma_principal: "Savanas, Desertos e Recifes de Coral",
    elemento_marcante: "A fauna única de marsupiais e a Grande Barreira",
    agricultura_construcoes: "Cidades litorâneas modernas e pecuária extensiva",
    roupas_modo_de_vida: "Estilo de vida ao ar livre, surfe e proteção solar",
    fauna_alimentacao: "Cangurus, coalas e dieta baseada em carnes e frutos do mar"
  }
};
