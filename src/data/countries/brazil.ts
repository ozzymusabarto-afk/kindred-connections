import type { Pais } from "../types";

/**
 * Roteiro completo do Brasil — 3 dias de expedição imersiva.
 * Foco: Diversidade de biomas e o cotidiano brasileiro visto por olhos de explorador.
 * Dia 1: Rio de Janeiro (Mata Atlântica, Pão de Açúcar e o Bondinho)
 * Dia 2: Manaus / Amazônia (O encontro das águas, a floresta e o Boto-cor-de-rosa)
 * Dia 3: Ouro Preto / Minas Gerais (História, ladeiras e o cotidiano do interior)
 */
export const brasil: Pais = {
  id: "brasil",
  nome: "Brasil",
  continente: "america-do-sul",
  codigo_mapa: "br",
  bandeira: "🇧🇷",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-br.png",
  capital: "Brasília",
  coordenadas: { x: 31, y: 65 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_do_Rio_de_Janeiro.jpg/1280px-Cidade_do_Rio_de_Janeiro.jpg",
  credito: "Wikimedia Commons",
  resumo_geografico: "O maior país da América Latina, ocupando quase metade do continente. O Brasil é um gigante tropical, berço da maior floresta e do maior rio do mundo (o Amazonas). Suas paisagens vão das praias paradisíacas às serras frias do sul, passando por pantanais e cerrados. É um país de povo alegre, cores vibrantes e uma mistura cultural única que se reflete na música, na comida e na hospitalidade.",
  
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_do_Rio_de_Janeiro.jpg/1280px-Cidade_do_Rio_de_Janeiro.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso no Aeroporto Internacional do Rio de Janeiro",
      credito: "Wikimedia Commons"
    },
    idioma: "Português",
    fuso_horario: "Horário de Brasília",
    temperatura: "28 °C, sol tropical com brisa do mar",
    fala_piloto_original: "Bem-vindos ao Brasil! Estamos sobrevoando a Baía de Guanabara, no Rio de Janeiro. A temperatura é de 28 graus e o dia está maravilhoso. É um prazer recebê-los em nosso país. Aproveitem a jornada!",
    fala_piloto_traducao: "Bem-vindos ao Brasil! Estamos sobrevoando a Baía de Guanabara, no Rio de Janeiro. A temperatura é de 28 graus e o dia está maravilhoso. É um prazer recebê-los em nosso país. Aproveitem a jornada!",
    texto: "Olhe pela janela, explorador! Estamos chegando no país do futebol, do samba e de uma natureza que não tem fim. Veja como o verde das montanhas mergulha direto no azul do oceano. Esta é a 'Cidade Maravilhosa'. Aqui, a natureza e a cidade convivem lado a lado. Prepare-se para conhecer o coração da América do Sul!",
    galeria: [
      {
        id: "br-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Rio_de_Janeiro_Aerial_View_2.jpg/1280px-Rio_de_Janeiro_Aerial_View_2.jpg",
        legenda: "A Baía de Guanabara vista de cima",
        credito: "Wikimedia Commons"
      },
      {
        id: "br-chegada-2",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rio_Airport_Terminal.jpg/1280px-Rio_Airport_Terminal.jpg",
        legenda: "Terminal do Aeroporto do Galeão",
        credito: "Wikimedia Commons"
      }
    ]
  },

  base: {
    nome: "Pousada Aconchegante em Santa Teresa, Rio de Janeiro",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Santa_Teresa_Rio_de_Janeiro_2014.jpg/1280px-Santa_Teresa_Rio_de_Janeiro_2014.jpg",
    credito: "Wikimedia Commons",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Rio_De_Janeiro_Beach_Ambience.mp3",
      legenda: "O som da cidade: natureza e o burburinho urbano",
      credito: "Wikimedia Commons"
    },
    descricao: "“Sejam bem-vindos! Meu nome é Gabriel e vou acompanhar vocês pelo nosso imenso Brasil. Nossa base é em Santa Teresa, um bairro histórico no alto de uma colina, cheio de casarões antigos e ateliês de artistas. Daqui conseguimos ouvir o som do bonde e ver o Cristo Redentor lá no alto. O Brasil é um país de contrastes e alegria, e vocês vão sentir isso em cada parada!”",
    galeria: [
      {
        id: "br-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Santa_Teresa_Mansion.jpg/1280px-Santa_Teresa_Mansion.jpg",
        legenda: "Um casarão histórico em Santa Teresa",
        credito: "Wikimedia Commons"
      }
    ]
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Rio de Janeiro — Bondinho e Mata Atlântica",
      descricao: "Subiremos nos famosos morros de pedra que cercam a cidade para entender como a floresta e as casas se misturam nesta paisagem única.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/P%C3%A3o_de_A%C3%A7%C3%BAcar_e_Bondinho.jpg/1280px-P%C3%A3o_de_A%C3%A7%C3%BAcar_e_Bondinho.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Gabriel",
      guia_local: "Gabriel, biólogo carioca",
      clima_do_dia: "29 °C, sol forte e céu azul",
      transporte: {
        nome: "Bondinho do Pão de Açúcar",
        icone: "🚠",
        descricao: "Para chegar ao topo, usamos um teleférico de vidro que flutua sobre o abismo. Lá de cima, a vista é de 360 graus para toda a baía.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pao_de_Acucar_Aerial_Tramway.jpg/1280px-Pao_de_Acucar_Aerial_Tramway.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Pão de Açúcar",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/P%C3%A3o_de_A%C3%A7%C3%BAcar_e_Bondinho.jpg/1280px-P%C3%A3o_de_A%C3%A7%C3%BAcar_e_Bondinho.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "pedra",
            x: 50,
            y: 30,
            titulo: "Monólitos de Granito",
            texto: "Estes morros são feitos de uma rocha muito antiga e dura chamada granito, que resistiu à erosão por milhões de anos."
          },
          {
            id: "floresta",
            x: 30,
            y: 60,
            titulo: "Mata Atlântica",
            texto: "Mesmo no meio da cidade, a floresta tropical ainda é densa e abriga centenas de tipos de pássaros e macacos."
          }
        ]
      },
      fauna_do_dia: {
        id: "mico-estrela",
        contexto: "Pequenos e rápidos, eles adoram aparecer nas trilhas em busca de frutas.",
        galeria: [
          {
            id: "br-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Callithrix_penicillata_1.jpg/1280px-Callithrix_penicillata_1.jpg",
            legenda: "Mico-estrela na Mata Atlântica",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "feijoada",
        contexto: "O prato mais tradicional do Brasil, um cozido rico e cheio de história."
      },
      perguntas: [
        {
          id: "br-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "O Rio de Janeiro é uma das poucas grandes cidades do mundo que tem uma floresta nacional dentro dela. Como você acha que isso ajuda a refrescar a cidade no verão?"
        }
      ],
      desafio: {
        pergunta: "Qual o nome do transporte que leva os turistas ao topo do Pão de Açúcar?",
        opcoes: ["Funicular", "Bonde", "Bondinho (Teleférico)"],
        correta: 2,
        explicacao: "O Bondinho do Pão de Açúcar foi um dos primeiros teleféricos do mundo e é um símbolo do Rio!"
      }
    },
    {
      dia: 2,
      titulo: "Dia 2: Amazônia — O Encontro das Águas",
      descricao: "Voamos para o norte até Manaus para ver o milagre de dois rios gigantes que correm lado a lado sem se misturar.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Encontro_das_%C3%81guas.jpg/1280px-Encontro_das_%C3%81guas.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Gabriel",
      guia_local: "Gabriel, no Rio Negro",
      clima_do_dia: "32 °C, umidade alta e pancadas de chuva à tarde",
      transporte: {
        nome: "Voadeira (Barco a motor)",
        icone: "🚤",
        descricao: "Na Amazônia, o rio é a rua. As 'voadeiras' são barcos rápidos de alumínio que nos levam pelas comunidades ribeirinhas e igapós.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Barco_no_Rio_Amazonas.jpg/1280px-Barco_no_Rio_Amazonas.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Encontro das Águas",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Encontro_das_%C3%81guas.jpg/1280px-Encontro_das_%C3%81guas.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "rio-negro",
            x: 30,
            y: 50,
            titulo: "Rio Negro",
            texto: "Água escura como chá, ácida e mais quente. Quase não tem mosquitos porque eles não gostam da acidez!"
          },
          {
            id: "rio-solimoes",
            x: 70,
            y: 50,
            titulo: "Rio Solimões",
            texto: "Água barrenta, cheia de sedimentos das montanhas dos Andes. É mais fria e corre mais rápido que o Rio Negro."
          }
        ]
      },
      fauna_do_dia: {
        id: "boto-cor-de-rosa",
        contexto: "Dizem que ele vira um homem charmoso nas noites de festa, mas aqui ele é o golfinho da água doce."
      },
      sabor_do_dia: {
        id: "tacaca",
        contexto: "Um caldo quente de tucupi que faz a boca formigar por causa do jambu."
      },
      perguntas: [
        {
          id: "br-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Os rios Negro e Solimões correm juntos por quilômetros sem se misturar por causa da temperatura e velocidade diferentes. O que acontece quando você mistura água quente e fria no banho?"
        }
      ],
      desafio: {
        pergunta: "Por que as águas do Rio Negro e do Rio Solimões não se misturam logo de cara?",
        opcoes: ["Por causa dos peixes", "Por causa da temperatura e velocidade", "Porque uma é doce e a outra salgada"],
        correta: 1,
        explicacao: "A diferença de temperatura, densidade e velocidade faz com que elas corram lado a lado por quilômetros!"
      }
    },
    {
      dia: 3,
      titulo: "Dia 3: Ouro Preto — O Brasil das Montanhas e da História",
      descricao: "Terminamos nossa jornada em Minas Gerais, caminhando por ladeiras de pedra entre igrejas cobertas de ouro e a vida pacata do interior.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ouro_Preto_MG.jpg/1280px-Ouro_Preto_MG.jpg",
      credito: "Wikimedia Commons",
      guia_nome: "Dona Maria",
      guia_local: "Dona Maria, moradora de Ouro Preto",
      clima_do_dia: "20 °C, neblina matinal e sol de tarde nas montanhas",
      transporte: {
        nome: "Caminhada pelas Ladeiras",
        icone: "🚶",
        descricao: "Em Ouro Preto, o melhor transporte são os pés! As ladeiras são muito íngremes e cobertas de pedras irregulares chamadas 'pé de moleque'.",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rua_Direita_Ouro_Preto.jpg/1280px-Rua_Direita_Ouro_Preto.jpg",
        credito: "Wikimedia Commons"
      },
      observacao: {
        titulo: "Praça Tiradentes",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ouro_Preto_MG.jpg/1280px-Ouro_Preto_MG.jpg",
        credito: "Wikimedia Commons",
        hotspots: [
          {
            id: "arquitetura",
            x: 50,
            y: 40,
            titulo: "Estilo Barroco",
            texto: "As casas e igrejas têm muitas curvas e detalhes em pedra sabão, uma rocha macia típica da região que o artista Aleijadinho usava."
          },
          {
            id: "ouro",
            x: 20,
            y: 30,
            titulo: "Ciclo do Ouro",
            texto: "A cidade foi construída no século 18 por causa da descoberta de ouro nos rios. Algumas igrejas têm as paredes inteiras cobertas de lâminas de ouro!"
          }
        ]
      },
      fauna_do_dia: {
        id: "tucano-toco",
        contexto: "Com seu bico laranja gigante, ele vigia a cidade do alto das árvores."
      },
      sabor_do_dia: {
        id: "pao-de-queijo",
        contexto: "Não existe nada mais mineiro que um pão de queijo quentinho saindo do forno a lenha."
      },
      perguntas: [
        {
          id: "br-d3-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto: "Ouro Preto parece uma cidade parada no tempo. O que você vê nestas ruas que é muito diferente da sua rua hoje em dia?"
        }
      ],
      desafio: {
        pergunta: "Como se chama o calçamento de pedras irregulares típico de Ouro Preto?",
        opcoes: ["Asfalto", "Pé de moleque", "Lajota"],
        correta: 1,
        explicacao: "O nome vem da semelhança com o doce de amendoim e rapadura, pois as pedras eram colocadas por crianças (moleques) na época."
      }
    }
  ],

  fauna_flora: [
    {
      id: "boto-cor-de-rosa",
      nome: "Boto-cor-de-rosa",
      nome_cientifico: "Inia geoffrensis",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Inia_geoffrensis_2.jpg/1280px-Inia_geoffrensis_2.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Amazon_River_Dolphin_Sound.mp3",
      curiosidade: "É o maior golfinho de água doce do mundo. Eles nascem cinzas e vão ficando rosados à medida que envelhecem. Conseguem virar a cabeça em todas as direções para caçar entre as árvores alagadas.",
      habitat: "Bacias dos rios Amazonas e Orinoco.",
      credito: "Wikimedia Commons"
    },
    {
      id: "tucano-toco",
      nome: "Tucano-toco",
      nome_cientifico: "Ramphastos toco",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Toco_Toucan_P1130498.jpg/1280px-Toco_Toucan_P1130498.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Toucan_Sound.mp3",
      curiosidade: "Apesar do bico parecer pesado, ele é feito de um osso esponjoso muito leve. O bico serve para alcançar frutas longe no galho e também para ajudar a controlar a temperatura do corpo do pássaro.",
      habitat: "Cerrados e bordas de florestas por quase todo o Brasil.",
      credito: "Wikimedia Commons"
    }
  ],

  gastronomia: [
    {
      id: "pao-de-queijo",
      nome: "Pão de Queijo",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/P%C3%A3o_de_queijo.jpg/1280px-P%C3%A3o_de_queijo.jpg",
      adjetivo: "quentinho",
      historia: "Nasceu nas fazendas de Minas Gerais quando a farinha de trigo era difícil de encontrar e usava-se o polvilho (da mandioca) e sobras de queijo.",
      credito: "Wikimedia Commons"
    },
    {
      id: "feijoada",
      nome: "Feijoada Brasileira",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Brazilian_Feijoada.jpg/1280px-Brazilian_Feijoada.jpg",
      adjetivo: "completa",
      historia: "É o resultado da mistura de técnicas europeias com ingredientes locais e a criatividade dos povos africanos escravizados, tornando-se o símbolo da culinária nacional.",
      credito: "Wikimedia Commons"
    }
  ],

  comparativo: {
    clima_predominante: "Tropical (quente e úmido na maior parte do tempo)",
    bioma_principal: "Amazônia, Mata Atlântica, Cerrado, Caatinga, Pantanal e Pampa",
    elemento_marcante: "A alegria do povo e a imensa biodiversidade",
    agricultura_construcoes: "Café, soja, cana-de-açúcar e frutas tropicais. Cidades modernas convivem com centros históricos coloniais de pedra e cal.",
    roupas_modo_de_vida: "Roupas leves e frescas. Vida social ao ar livre, praias, festas populares e muita música.",
    fauna_alimentacao: "Arroz, feijão, carnes grelhadas, tapioca e uma infinidade de sucos de frutas naturais."
  }
};
