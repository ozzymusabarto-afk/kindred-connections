import type { Pais } from "../types";

/**
 * Roteiro completo do Canadá — 5 dias de expedição, no mesmo padrão dos EUA.
 * Dia 1: Ottawa (a capital, o canal e o castor)
 * Dia 2: Niágara (a força da água e o alce)
 * Dia 3: Quebec (a cidade francesa e a beluga do São Lourenço)
 * Dia 4: Montanhas Rochosas (Lago Moraine e o lobo)
 * Dia 5: Toronto (a vida cotidiana de um bairro e o guaxinim)
 *
 * Todas as fotos e sons são reais, com crédito de autoria e licença.
 */
export const canada: Pais = {
  id: "canada",
  nome: "Canadá",
  continente: "america-do-norte",
  codigo_mapa: "ca",
  bandeira: "🇨🇦",
  bandeira_url:
    "/__l5e/assets-v1/b161b340-948a-4ca5-9284-d5ed693dabc1/bandeira-ca.png",
  capital: "Ottawa",
  coordenadas: { x: 18, y: 22 },
  imagem_capa:
    "/__l5e/assets-v1/25771909-b984-4cc7-8286-1e8a74061b4f/ca-d4-obs.jpg",
  credito: "Adam Bishop / CC BY-SA 4.0",
  resumo_geografico:
    "O segundo maior país do mundo em território — e, mesmo assim, com menos gente do que o estado de São Paulo. Aqui a paisagem é feita de água e floresta: são mais de dois milhões de lagos, rios largos como mares e uma faixa de montanhas nevadas atravessando o oeste. O inverno é longo e branco, o verão é curto e verde, e a vida das pessoas se organiza em torno dessa troca de estações. Duas línguas oficiais convivem nas placas e nas conversas: o inglês e o francês.",

  chegada: {
    imagem_url:
      "/__l5e/assets-v1/5356283d-36ec-4204-8a1c-cd1dc00cfb51/ca-chegada-janela.jpg",
    credito: "Shanta Rohse / CC BY 2.0 — Ottawa vista do alto",
    idioma: "Inglês e francês (os dois são oficiais)",
    fuso_horario: "14h00 no horário local — 2 horas a menos que Brasília",
    temperatura: "4 °C, ar seco e frio de fim de outono",
    fala_piloto_original:
      "Good afternoon, ladies and gentlemen — bonjour à tous! This is your captain speaking. We have begun our descent into Ottawa Macdonald-Cartier International Airport. The outside temperature is 4 degrees Celsius. Local time is 2:00 PM. Welcome to Canada — bienvenue au Canada!",
    fala_piloto_traducao:
      "Boa tarde, senhoras e senhores — e bom dia a todos, em francês! Aqui quem fala é o capitão. Iniciamos nossa descida para o Aeroporto Internacional Macdonald-Cartier, em Ottawa. A temperatura lá fora é de 4 °C. O horário local marca 14h00, duas horas a menos que Brasília. Sejam bem-vindos ao Canadá — bienvenue au Canada!",
    texto:
      "Encoste o rosto na janela, explorador. Está vendo? Debaixo da asa não há uma mancha cinza de cidade como estamos acostumados: há água. Um rio largo corta a paisagem, e dele sai um canal que atravessa o centro da capital como uma fita azul. Ao redor, o verde escuro das florestas de coníferas se mistura ao vermelho e ao ouro das últimas folhas de bordo. E repare numa coisa curiosa: quase todas as casas têm telhado bem inclinado, quase pontudo. Guarde essa imagem — vamos descobrir o motivo. Você acabou de ouvir o comandante falar duas vezes, em inglês e em francês: aqui as duas línguas são oficiais, e você vai ver isso em cada placa do aeroporto. Peça o casaco de dentro da mala: lá fora faz 4 °C.",
    som: {
      url: "/__l5e/assets-v1/7fc53ae4-176c-4ee5-b39c-170d8ead0909/ca-som-lobo.ogg",
      legenda:
        "Antes mesmo de descer, o som que mais representa estas florestas: o uivo real de uma alcateia de lobos, gravado em campo",
      credito: "Wikimedia Commons · domínio público",
    },
    galeria: [
      {
        id: "ca-chegada-g0",
        imagem_url:
          "/__l5e/assets-v1/7637543a-22c7-48ae-8313-5b8f322d863b/ca-chegada-aeroporto.jpg",
        legenda: "O Aeroporto Macdonald-Cartier, onde nosso avião encostou",
        credito: "Dennis Sparks / CC BY-SA 2.0",
      },
      {
        id: "ca-chegada-g1",
        imagem_url:
          "/__l5e/assets-v1/d81676ce-e23c-4ac5-9ca2-2c98583b118a/ca-chegada-g1.jpg",
        legenda:
          "Dentro do terminal: todas as placas aparecem duas vezes, em inglês e em francês",
        credito: "P199 / CC BY-SA 3.0",
      },
      {
        id: "ca-chegada-g2",
        imagem_url:
          "/__l5e/assets-v1/6511e160-ff40-4382-86f4-28a1a43a1b5d/ca-chegada-g2.jpg",
        legenda:
          "Um inukshuk no saguão: torre de pedras empilhadas que os povos Inuit usam há séculos para dizer “alguém passou por aqui”",
        credito: "Skeezix1000 / CC BY-SA 3.0",
      },
      {
        id: "ca-chegada-g3",
        imagem_url:
          "/__l5e/assets-v1/31c69775-064f-41ff-a9a7-ce5543b2474b/ca-chegada-g3.jpg",
        legenda:
          "A folha de bordo vermelha — a mesma que está desenhada no meio da bandeira",
        credito: "Vincent Pham / CC BY-SA 4.0",
      },
    ],
  },

  base: {
    nome: "Château Laurier — nosso castelo à beira do canal, em Ottawa",
    imagem_url:
      "/__l5e/assets-v1/d0916179-bb44-43e8-a7f7-e06b0ca874df/ca-base-fachada.jpg",
    credito: "Salwa Farwaneh Dameh / CC0",
    descricao:
      "“Bonjour! Welcome! Eu me chamo Élodie e vou ser sua guia por todo o Canadá. Falo as duas línguas do país e vou te ensinar as duas pelo caminho. Olhe onde vamos dormir: parece um castelo de conto de fadas, com torres pontudas e telhado de cobre esverdeado pelo tempo — mas é um hotel, construído há mais de cem anos bem ao lado das eclusas do Canal Rideau. Repare no telhado: pontudo de novo! No Brasil, quando chove, a água escorre e pronto. Aqui cai neve, e a neve fica — pesa, empilha, endurece. Um telhado inclinado faz a neve escorregar sozinha antes que o peso vire um problema. Guarde isso, porque você vai reconhecer esse formato em todas as casas que a gente cruzar. Deixe a mala no quarto, calce a bota: nosso primeiro transporte já está na estação.”",
    som: {
      url: "/__l5e/assets-v1/7fc53ae4-176c-4ee5-b39c-170d8ead0909/ca-som-lobo.ogg",
      legenda:
        "Da janela do quarto, ao anoitecer, o som que atravessa as florestas do país inteiro: o uivo real de uma alcateia",
      credito: "Wikimedia Commons · domínio público",
    },
    galeria: [
      {
        id: "ca-base-g1",
        imagem_url:
          "/__l5e/assets-v1/a9ce401d-f87a-49c0-9df7-fecfa51687f0/ca-base-lobby.jpg",
        legenda: "O saguão de pé-direito altíssimo, onde fazemos o check-in",
        credito: "Canmenwalker / CC BY 4.0",
      },
      {
        id: "ca-base-g2",
        imagem_url:
          "/__l5e/assets-v1/2a27ee23-49e1-4dca-88d4-e57234a6ac0c/ca-base-quarto.jpg",
        legenda: "Nosso quarto: janela grande e aquecedor sempre ligado",
        credito: "tsaiproject / CC BY 2.0",
      },
      {
        id: "ca-base-g3",
        imagem_url:
          "/__l5e/assets-v1/00165b6e-727d-4861-b1a0-084c223429bf/ca-base-canal.jpg",
        legenda:
          "O hotel visto do Canal Rideau — as escadas de água que os barcos sobem degrau por degrau",
        credito: "Ahunt / CC0",
      },
    ],
  },

  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Ottawa — a capital, o canal que vira pista de gelo",
      descricao:
        "A cidade onde o país decide as coisas: torres góticas, um canal que no inverno vira a maior pista de patinação do mundo e um mercado de fazendeiros no meio de tudo.",
      imagem_url:
        "/__l5e/assets-v1/16b4ffa8-f15b-4aee-9a76-060dc9f4285a/ca-d1-obs.jpg",
      credito: "Ross Dunn / CC BY-SA 2.0",
      guia_nome: "Élodie",
      guia_local: "Élodie, guia de expedição em Ottawa",
      clima_do_dia: "4 °C, céu claro e vento cortante vindo do rio",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/aaa563c8-77fc-4679-a6ce-5233853b153f/ca-d1-abertura.jpg",
        credito: "Mhsheikholeslami / CC BY-SA 4.0",
        texto:
          "Saímos do hotel e a primeira coisa que aparece são estas oito comportas em escada descendo até o Rio Ottawa. É o começo do Canal Rideau. Os barcos entram numa caixa d'água, a comporta fecha, o nível sobe — e o barco sobe junto, como num elevador feito de água. Foi assim que se transportava carga por aqui muito antes dos caminhões.",
      },
      transporte: {
        nome: "O-Train, o trem leve de Ottawa",
        icone: "🚈",
        descricao:
          "Nosso primeiro transporte canadense é um trem prateado e silencioso que desliza pelo meio da cidade. Repare nas portas: elas ficam fechadas até alguém apertar o botão. Parece detalhe bobo, mas é engenharia contra o frio — se todas as portas abrissem em todas as paradas, o ar gelado entraria no vagão inteiro e o aquecimento não daria conta. Dentro, o chão tem ranhuras fundas para escorrer a neve derretida das botas. No inverno, quando o trem não vence a nevasca, entram em cena os ônibus articulados da OC Transpo, que rodam por corredores exclusivos.",
        imagem_url:
          "/__l5e/assets-v1/5360513d-0793-481e-aaa2-7ff1aa1a51c6/ca-d1-transporte.jpg",
        credito: "Jeangagnon / CC BY-SA 4.0",
        galeria: [
          {
            id: "ca-d1-t-g1",
            imagem_url:
              "/__l5e/assets-v1/6cf180c5-1ff1-469c-8d8e-a1b2124c5abd/ca-d1-transporte-g1.jpg",
            legenda: "O trem parando na estação Cyrville",
            credito: "Ahunt / CC0",
          },
          {
            id: "ca-d1-t-g2",
            imagem_url:
              "/__l5e/assets-v1/8afbdcf9-95be-4767-a91b-d61caae368a4/ca-d1-transporte-g2.jpg",
            legenda:
              "O ônibus articulado da OC Transpo, que assume quando a neve aperta",
            credito: "Mariordo / CC BY-SA 3.0",
          },
        ],
      },
      observacao: {
        titulo: "Parliament Hill — a colina onde o Canadá decide",
        imagem_url:
          "/__l5e/assets-v1/16b4ffa8-f15b-4aee-9a76-060dc9f4285a/ca-d1-obs.jpg",
        credito: "Ross Dunn / CC BY-SA 2.0",
        hotspots: [
          {
            id: "peace-tower",
            x: 50,
            y: 24,
            titulo: "A Torre da Paz",
            texto:
              "Tem 92 metros e 53 sinos lá dentro, tocados por uma pessoa de verdade num teclado de madeira. Foi erguida em memória dos canadenses mortos na Primeira Guerra.",
          },
          {
            id: "telhado-verde",
            x: 30,
            y: 40,
            titulo: "O telhado verde",
            texto:
              "Não é tinta: é cobre. Novo, ele é alaranjado como uma moeda; com anos de chuva e neve, oxida e ganha essa cor verde-água que não sai mais — e ainda protege o metal por baixo.",
          },
          {
            id: "janelas-pontudas",
            x: 70,
            y: 55,
            titulo: "As janelas em ponta",
            texto:
              "Estilo gótico, copiado das catedrais europeias. Mas há um motivo prático no meio do enfeite: paredes grossas de pedra e janelas estreitas seguram o calor lá dentro durante um inverno de seis meses.",
          },
          {
            id: "gramado",
            x: 50,
            y: 82,
            titulo: "O gramado da frente",
            texto:
              "No verão acontece aqui a Troca da Guarda, com casacos vermelhos e chapéus de pele preta. No inverno, esse mesmo gramado fica sob meio metro de neve.",
          },
        ],
        galeria: [
          {
            id: "ca-d1-o-g1",
            imagem_url:
              "/__l5e/assets-v1/0572971a-b4e7-498d-b1fc-73eba0d3459e/ca-d1-obs-g1.jpg",
            legenda:
              "O Canal Rideau congelado: 7,8 km de gelo viram a maior pista de patinação do mundo, e muita gente vai patinando para o trabalho",
            credito: "Ahunt / CC0",
          },
          {
            id: "ca-d1-o-g2",
            imagem_url:
              "/__l5e/assets-v1/13fa82c2-c640-4fb6-8b76-b60c4954adfd/ca-d1-obs-g2.jpg",
            legenda:
              "O ByWard Market, onde os fazendeiros vendem o que colheram",
            credito: "Jcart1534 / CC BY-SA 3.0",
          },
          {
            id: "ca-d1-o-g3",
            imagem_url:
              "/__l5e/assets-v1/c2382c23-4c04-4b80-a49d-4d1261c434f8/ca-d1-obs-g3.jpg",
            legenda: "A Troca da Guarda no gramado do Parlamento",
            credito: "Paste Berlusconi / CC BY 2.0",
          },
        ],
      },
      perguntas: [
        {
          id: "ca-d1-transporte",
          tipo: "observacao",
          etapa: "transporte",
          texto:
            "As portas do trem só abrem se alguém apertar o botão, e o piso tem ranhuras para escoar neve derretida. Que outra adaptação você inventaria para um transporte que roda a -20 °C?",
        },
        {
          id: "ca-d1-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "Olhe de novo os telhados da foto: todos inclinados, alguns quase pontudos. Por que uma casa canadense precisa desse formato, e uma casa no interior do Brasil não?",
        },
        {
          id: "ca-d1-fauna",
          tipo: "comparacao",
          etapa: "fauna",
          texto:
            "O castor derruba árvores e represa o rio para criar um lago onde ele se sente seguro. Ele muda a paisagem inteira ao redor. Que outros animais você conhece que constroem e transformam o lugar onde vivem?",
        },
        {
          id: "ca-d1-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "A poutine é batata frita quente coberta de queijo e molho fervendo — comida pensada para aquecer o corpo por dentro num dia gelado. Qual comida brasileira você comeria num dia muito frio, e por quê?",
        },
      ],
      fauna_do_dia: {
        id: "castor",
        contexto:
          "No fim da tarde, à beira do canal, um V se abre na água parada. Alguém está nadando ali.",
        texto_guia:
          "Aquele focinho é de um castor — o animal que virou símbolo do Canadá antes mesmo do país existir como país. Não faça barulho: se ele se assustar, bate a cauda chata na água com um estalo alto que se escuta a centenas de metros. É o alarme dele. Repare nos dentes alaranjados: têm ferro no esmalte, e é por isso que ele derruba uma árvore de trinta centímetros de tronco numa noite de trabalho.",
      },
      sabor_do_dia: {
        id: "poutine",
        contexto:
          "As mãos estão geladas dentro da luva. Élodie aponta um balcão de esquina no ByWard Market.",
        texto_guia:
          "Isto aqui é poutine, e não se come com pressa. Batata frita quentinha no fundo, por cima os cheese curds — pedaços de queijo fresco que rangem entre os dentes, sério, você vai ouvir — e então despejam o molho marrom fervendo, que derrete o queijo só até o ponto de esticar. Nasceu no interior de Quebec, nos anos 1950, e hoje se come do Atlântico ao Pacífico. Pegue o garfo e prove enquanto está fumegando.",
      },
      notas_brasil: {
        transporte: {
          texto:
            "Nossos ônibus têm janela para abrir e pegar vento. No Canadá é o contrário: tudo é vedado, e o desafio da engenharia é impedir que o ar gelado entre.",
        },
        observacao: {
          texto:
            "Ottawa é capital planejada para governar, como Brasília — mas tem cerca de mil vezes mais neve por ano e um canal que vira pista de patinação no inverno.",
        },
        fauna: {
          texto:
            "O castor faz nos rios do Canadá o que a capivara faz nas margens brasileiras: é o grande roedor do lugar. Só que a capivara aproveita o rio como ele é, e o castor represa e reconstrói o rio do jeito que quer.",
        },
        sabor: {
          texto:
            "A poutine é a comida de balcão do frio; no Brasil, o lugar dela é ocupado pelo caldinho de feijão ou pelo pastel quente na feira.",
        },
      },
      desafio: {
        pergunta:
          "Você reparou nos telhados inclinados desde a janela do avião. Qual é o principal motivo desse formato no Canadá?",
        opcoes: [
          "Para a neve escorregar sozinha e não empilhar peso sobre a casa",
          "Para a casa parecer um castelo europeu",
          "Para caber mais gente dentro do sótão",
        ],
        correta: 0,
        explicacao:
          "Neve acumulada é pesadíssima: meio metro sobre um telhado plano pode passar de várias toneladas. O telhado inclinado faz a neve deslizar antes de virar problema. Nas casas brasileiras a inclinação existe só para escoar a chuva, que vai embora sozinha — por isso pode ser bem mais suave.",
      },
    },

    {
      dia: 2,
      titulo: "Dia 2: Niágara — a água que não para nunca",
      descricao:
        "Seguimos para o sul, até a curva de rocha onde um rio inteiro despenca de uma vez só e levanta uma nuvem de água que se vê de longe.",
      imagem_url:
        "/__l5e/assets-v1/97fe3cbd-199f-4c04-88fc-1ce72fcf4224/ca-d2-obs.jpg",
      credito: "Wikimedia Commons / CC BY-SA 3.0",
      guia_nome: "Élodie",
      guia_local: "Élodie, guia de expedição em Niágara",
      clima_do_dia: "2 °C, e um vapor gelado que molha o rosto o tempo todo",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/d50cf825-970e-4b02-8e15-30bf7944a085/ca-d2-abertura.jpg",
        credito: "Michel Rathwell / CC BY 2.0",
        texto:
          "A estrada de hoje acompanha a água por horas. À esquerda, o Rio São Lourenço tão largo que dá para confundir com o mar; à direita, parques com bancos virados para a margem. Repare como quase toda a vida canadense acontece perto de um rio ou de um lago — e não é coincidência: o país tem cerca de um quinto de toda a água doce do planeta.",
      },
      transporte: {
        nome: "Maid of the Mist — o barquinho que entra na névoa",
        icone: "⛴️",
        descricao:
          "Antes de embarcar, todo mundo recebe uma capa de chuva. Não é exagero: o barco vai até quase debaixo da queda, onde a água que bate na pedra volta em forma de neblina e encharca tudo. Você vai sentir o casco vibrar, porque a queda faz o rio inteiro tremer. Segure firme no corrimão e olhe para cima — daqui de baixo a parede de água parece não ter fim.",
        imagem_url:
          "/__l5e/assets-v1/fcc8a04e-003b-4bef-9698-46fe622814d6/ca-d2-transporte.jpg",
        credito: "Ken Lund / CC BY-SA 2.0",
        galeria: [
          {
            id: "ca-d2-t-g1",
            imagem_url:
              "/__l5e/assets-v1/f95e7678-3a9d-41b3-93d0-779250e087fb/ca-d2-transporte-g1.jpg",
            legenda: "As capas de chuva entregues a todos antes de embarcar",
            credito: "shankar s. / CC BY 2.0",
          },
          {
            id: "ca-d2-t-g2",
            imagem_url:
              "/__l5e/assets-v1/1a87dc46-c231-4dee-a8f7-b3d60297bcb7/ca-d2-transporte-g2.jpg",
            legenda:
              "O arco-íris que se forma na névoa quando o sol bate na hora certa",
            credito: "Ken Lund / CC BY-SA 2.0",
          },
        ],
      },
      observacao: {
        titulo: "Horseshoe Falls — a queda em ferradura",
        imagem_url:
          "/__l5e/assets-v1/97fe3cbd-199f-4c04-88fc-1ce72fcf4224/ca-d2-obs.jpg",
        credito: "Wikimedia Commons / CC BY-SA 3.0",
        hotspots: [
          {
            id: "curva",
            x: 46,
            y: 55,
            titulo: "A curva em forma de ferradura",
            texto:
              "A queda não é reta: é um arco de 670 metros. A rocha do meio é mais mole e foi comida mais depressa pela água, cavando essa curva ao longo de milhares de anos.",
          },
          {
            id: "nevoa",
            x: 40,
            y: 78,
            titulo: "A nuvem branca",
            texto:
              "Não é fumaça: é água virando gotinhas ao bater no fundo com força. Sobe tão alto que os povos originários chamavam este lugar de “trovão das águas”.",
          },
          {
            id: "borda",
            x: 62,
            y: 40,
            titulo: "A borda de pedra",
            texto:
              "A queda recua alguns centímetros por ano — a água vai desmanchando a pedra. Ela já esteve 11 km rio abaixo de onde está hoje.",
          },
        ],
        galeria: [
          {
            id: "ca-d2-o-g1",
            imagem_url:
              "/__l5e/assets-v1/584eed9c-3267-4b43-8f9d-e89e5847b029/ca-d2-obs-g1.jpg",
            legenda:
              "No inverno, a névoa congela nas árvores e nos corrimãos e cobre tudo de gelo",
            credito: "Daymonday / CC0",
          },
          {
            id: "ca-d2-o-g2",
            imagem_url:
              "/__l5e/assets-v1/dca246de-7f78-433c-b549-10aafdef4daa/ca-d2-obs-g2.jpg",
            legenda: "À noite, refletores coloridos pintam a parede de água",
            credito: "Diego Silvestre / CC BY 2.0",
          },
          {
            id: "ca-d2-o-g3",
            imagem_url:
              "/__l5e/assets-v1/252c8d11-e35a-432f-ac0a-2c9f68e1afb9/ca-d2-obs-g3.jpg",
            legenda:
              "Túneis escavados na rocha levam até atrás da queda: dá para ver a água por dentro",
            credito: "Ken Lund / CC BY-SA 2.0",
          },
        ],
      },
      perguntas: [
        {
          id: "ca-d2-transporte",
          tipo: "observacao",
          etapa: "transporte",
          texto:
            "Antes de entrar no barco, todos recebem uma capa. Por que perto de uma cachoeira desse tamanho a gente se molha mesmo sem chover?",
        },
        {
          id: "ca-d2-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "A borda da queda recua alguns centímetros por ano porque a água desmancha a pedra. Se isso continuar por milhares de anos, o que você acha que vai acontecer com esta cachoeira?",
        },
        {
          id: "ca-d2-fauna",
          tipo: "comparacao",
          etapa: "fauna",
          texto:
            "O alce tem pernas altíssimas e finas. Como isso ajuda um animal enorme a atravessar um metro de neve — e também um pântano fundo?",
        },
        {
          id: "ca-d2-sabor",
          tipo: "observacao",
          etapa: "sabor",
          texto:
            "A tire d'érable é xarope de bordo fervido despejado sobre a neve limpa, que endurece na hora e vira pirulito. Por que a neve funciona melhor aqui do que uma pedra de gelo?",
        },
      ],
      fauna_do_dia: {
        id: "alce",
        contexto:
          "Na volta, a estrada corta um brejo. Élodie freia devagar e aponta em silêncio.",
        texto_guia:
          "Aquilo ali é um alce — o maior cervo do mundo, quase dois metros de altura só até o ombro. O macho carrega uma galhada que pode chegar a 1,8 metro de ponta a ponta e pesar 20 quilos, e ele derruba tudo isso todo ano no inverno para crescer de novo na primavera. Repare nas pernas: são compridas como pernas de pau. É com elas que ele atravessa a neve funda sem afundar e caminha dentro do brejo para arrancar plantas do fundo com o focinho.",
      },
      sabor_do_dia: {
        id: "tire-derable",
        contexto:
          "Uma cabana de madeira soltando fumaça no meio das árvores: é uma cabane à sucre, a casa do açúcar.",
        texto_guia:
          "No fim do inverno as pessoas furam o tronco do bordo e penduram um baldinho: a seiva pinga devagar, transparente e quase sem gosto. São precisos quarenta litros dessa seiva fervida para virar um único litro de xarope. E aí vem a melhor parte: despejam o xarope fervendo sobre uma calha de neve limpa, ele endurece em segundos, você enrola num palito e come. Chama-se tire d'érable. Cuidado que gruda nos dentes!",
      },
      notas_brasil: {
        transporte: {
          texto:
            "Do lado brasileiro de Foz do Iguaçu existe um passeio parecidíssimo: barcos que entram na névoa das cataratas e devolvem todo mundo encharcado e rindo.",
        },
        observacao: {
          texto:
            "As Cataratas do Iguaçu têm cerca de 275 quedas espalhadas; Niágara concentra quase toda a água numa curva só. Uma impressiona pela largura, a outra pela força concentrada num ponto.",
        },
        fauna: {
          texto:
            "O alce é para as florestas do norte o que a anta é para a Mata Atlântica: o herbívoro grandalhão que abre trilhas e espalha sementes por onde passa.",
        },
        sabor: {
          texto:
            "O xarope de bordo sai da seiva de uma árvore, assim como a nossa rapadura e o melado saem do caldo da cana. Nos dois casos, é preciso ferver muito líquido para sobrar pouco doce.",
        },
      },
      desafio: {
        pergunta:
          "Por que a Cataratas do Niágara está lentamente “andando” rio acima, alguns centímetros por ano?",
        opcoes: [
          "Porque o rio está mudando de lugar",
          "Porque a água desgasta a rocha da borda e a queda recua para trás",
          "Porque a terra está subindo",
        ],
        correta: 1,
        explicacao:
          "A água cai com tanta força que vai comendo a pedra mais mole debaixo da borda. Sem apoio, a rocha de cima desaba, e a queda passa a ficar um pouquinho mais atrás. Em milhares de anos ela já recuou cerca de 11 quilômetros.",
      },
    },

    {
      dia: 3,
      titulo: "Dia 3: Quebec — a cidade que fala francês",
      descricao:
        "De trem até uma cidade murada de ruas estreitas e pedra antiga, onde o cardápio, a placa e o bom-dia são todos em francês.",
      imagem_url:
        "/__l5e/assets-v1/9f33a203-09e8-43a0-ae80-918f1b4e356c/ca-d3-obs.jpg",
      credito: "Wilfredor / CC0",
      guia_nome: "Élodie",
      guia_local: "Élodie, guia de expedição na Cidade de Quebec",
      clima_do_dia: "-1 °C, primeiros flocos de neve do ano",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/ca9daa5e-8941-4c49-a82e-878e9d447e9d/ca-d3-abertura.jpg",
        credito: "Milan Suvajac / CC BY-SA 4.0",
        texto:
          "Hoje o transporte é longo e confortável: um trem da VIA Rail acompanhando o Rio São Lourenço rumo ao nordeste. Cole o rosto no vidro. A cada quilômetro as placas mudam: “Exit” vira “Sortie”, “Welcome” vira “Bienvenue”. Você está cruzando uma fronteira que não está desenhada no mapa — a fronteira de uma língua.",
      },
      transporte: {
        nome: "Trem da VIA Rail e o funicular do Velho Quebec",
        icone: "🚆",
        descricao:
          "Dentro do vagão, poltrona reclinável, mesinha e uma janela do tamanho da parede — porque num país tão comprido a viagem de trem é feita para ser olhada. Descemos na Gare du Palais, uma estação com telhado de castelo e vitrais. E aí vem o segundo transporte do dia: o Velho Quebec é dividido em cidade alta e cidade baixa, e para subir o paredão existe um funicular, um vagãozinho envidraçado que sobe na diagonal preso a um cabo de aço.",
        imagem_url:
          "/__l5e/assets-v1/320d2e0f-9b1d-41fe-af44-a4b557fa6ba0/ca-d3-transporte.jpg",
        credito: "abdallahh / CC BY 2.0",
        galeria: [
          {
            id: "ca-d3-t-g1",
            imagem_url:
              "/__l5e/assets-v1/5082be26-89f3-413c-b187-92b700642a66/ca-d3-transporte-g1.jpg",
            legenda: "A Gare du Palais, estação de trem com cara de castelo",
            credito: "Tony Webster / CC BY 2.0",
          },
          {
            id: "ca-d3-t-g2",
            imagem_url:
              "/__l5e/assets-v1/c112e142-ddcb-4d19-bd96-7bd644261e5b/ca-d3-transporte-g2.jpg",
            legenda: "O funicular subindo o paredão entre a cidade baixa e a alta",
            credito: "Jeangagnon / CC BY-SA 3.0",
          },
        ],
      },
      observacao: {
        titulo: "Château Frontenac e o Velho Quebec",
        imagem_url:
          "/__l5e/assets-v1/9f33a203-09e8-43a0-ae80-918f1b4e356c/ca-d3-obs.jpg",
        credito: "Wilfredor / CC0",
        hotspots: [
          {
            id: "torres",
            x: 52,
            y: 30,
            titulo: "As torres pontudas",
            texto:
              "De novo o telhado íngreme — e agora você já sabe por quê. Aqui a inclinação é ainda mais forte: Quebec recebe cerca de três metros de neve por ano.",
          },
          {
            id: "muralha",
            x: 20,
            y: 70,
            titulo: "A cidade murada",
            texto:
              "Quebec é a única cidade da América do Norte que ainda tem muralhas inteiras em volta do centro histórico, construídas quando franceses e ingleses disputavam este rio.",
          },
          {
            id: "rio",
            x: 80,
            y: 76,
            titulo: "O Rio São Lourenço",
            texto:
              "A cidade nasceu exatamente aqui porque neste ponto o rio se estreita — quem controlava esta curva controlava a entrada de navios para o interior do continente.",
          },
        ],
        galeria: [
          {
            id: "ca-d3-o-g1",
            imagem_url:
              "/__l5e/assets-v1/bab706d7-6074-4fb1-83df-dbf014044bef/ca-d3-obs-g1.jpg",
            legenda:
              "O Quartier Petit-Champlain: rua de pedra, lojinhas e luzes penduradas",
            credito: "Wilfredor / CC0",
          },
          {
            id: "ca-d3-o-g2",
            imagem_url:
              "/__l5e/assets-v1/6d1def23-22f1-4016-b166-88eec373f174/ca-d3-obs-g2.jpg",
            legenda: "Uma galeria da Place Royale, no coração da cidade baixa",
            credito: "Daniel Hu / CC BY 3.0",
          },
          {
            id: "ca-d3-o-g3",
            imagem_url:
              "/__l5e/assets-v1/a67717c0-b9ce-4d03-a138-b57801d74af1/ca-d3-obs-g3.jpg",
            legenda:
              "A Queda Montmorency, 83 metros — trinta metros mais alta que Niágara",
            credito: "Wilfredor / CC BY-SA 4.0",
          },
        ],
      },
      perguntas: [
        {
          id: "ca-d3-transporte",
          tipo: "observacao",
          etapa: "transporte",
          texto:
            "Em vez de uma rua em ziguezague, Quebec construiu um funicular para vencer o paredão. Em que situações um vagão puxado por cabo é melhor do que uma estrada?",
        },
        {
          id: "ca-d3-obs",
          tipo: "comparacao",
          etapa: "observacao",
          texto:
            "Numa cidade se fala inglês, na outra francês — e o país é o mesmo. O que você acha que acontece quando duas línguas dividem um mesmo país: é mais difícil ou mais rico? Por quê?",
        },
        {
          id: "ca-d3-fauna",
          tipo: "observacao",
          etapa: "fauna",
          texto:
            "A beluga é branca e vive num mar com gelo flutuando por cima. Como essa cor pode ajudá-la a sobreviver?",
        },
        {
          id: "ca-d3-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "O salmão sobe o rio contra a correnteza para desovar onde ele mesmo nasceu. Por que valeria a pena um peixe fazer um esforço tão grande?",
        },
      ],
      fauna_do_dia: {
        id: "beluga",
        contexto:
          "No fim da tarde, na foz do Rio Saguenay, algo branco arqueia na superfície escura.",
        texto_guia:
          "É uma beluga — a baleia branca do São Lourenço. Ela não tem barbatana nas costas, e isso não é falta: é adaptação, porque uma barbatana alta se machucaria contra o gelo do teto do mar. Chamam a beluga de “canário do mar”: ela assobia, range, estala e faz um repertório de sons tão variado que os marinheiros antigos juravam ouvir passarinho debaixo d'água. Feche os olhos e escute a gravação.",
      },
      sabor_do_dia: {
        id: "salmao-grelhado",
        contexto:
          "Um pequeno restaurante de janelas embaçadas no Petit-Champlain, cheiro de manteiga e limão.",
        texto_guia:
          "Salmão grelhado com a pele para baixo até ficar crocante, uma pitada de sal, endro fresco e limão. O salmão é o peixe que vive no mar mas nasce no rio: quando chega a hora, ele sobe a correnteza saltando corredeiras até o riacho exato onde nasceu. Nas cozinhas daqui, a receita mudou pouco em séculos — os povos originários já o defumavam sobre a madeira de cedro.",
      },
      notas_brasil: {
        transporte: {
          texto:
            "O funicular de Quebec funciona igualzinho ao Plano Inclinado do Elevador Lacerda, em Salvador: um vagão sobe enquanto o cabo trabalha, vencendo um paredão que nenhuma rua venceria.",
        },
        observacao: {
          texto:
            "No Brasil, um só idioma oficial atravessa o país inteiro; mais de 270 línguas indígenas ainda são faladas, mas o português une todo mundo. No Canadá, inglês e francês dividem oficialmente esse papel.",
        },
        fauna: {
          texto:
            "A beluga vive num mar gelado; nas águas quentes de Fernando de Noronha, quem faz esse papel de golfinho conversador é o golfinho-rotador, que também se comunica por assobios.",
        },
        sabor: {
          texto:
            "O salmão sobe o rio para desovar como a piracema dos nossos rios: dourados e pintados também nadam contra a correnteza na época da reprodução.",
        },
      },
      desafio: {
        pergunta:
          "Por que a beluga, diferente da maioria das baleias, não tem barbatana dorsal nas costas?",
        opcoes: [
          "Porque ela nada muito devagar",
          "Porque ela vive sob o gelo e uma barbatana alta se machucaria",
          "Porque ela ainda é filhote",
        ],
        correta: 1,
        explicacao:
          "No mar do Ártico existe uma camada de gelo por cima da água. Uma barbatana dorsal bateria nesse teto o tempo todo. No lugar dela, a beluga tem uma crista baixa e resistente, ótima para empurrar o gelo fino de baixo para cima e abrir um respiradouro.",
      },
    },

    {
      dia: 4,
      titulo: "Dia 4: Montanhas Rochosas — o lago da cor impossível",
      descricao:
        "Atravessamos o país até o oeste, onde as montanhas nevadas se refletem num lago azul-turquesa que parece pintado.",
      imagem_url:
        "/__l5e/assets-v1/25771909-b984-4cc7-8286-1e8a74061b4f/ca-d4-obs.jpg",
      credito: "Adam Bishop / CC BY-SA 4.0",
      guia_nome: "Élodie",
      guia_local: "Élodie, guia de expedição nas Montanhas Rochosas",
      clima_do_dia: "-3 °C, ar rarefeito e sol forte na neve",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/53680cf1-f3b3-415d-811a-c91e41822316/ca-d4-abertura.jpg",
        credito: "Ethan Sahagun / CC BY 4.0",
        texto:
          "A estrada de hoje se chama Icefields Parkway e é considerada uma das mais bonitas do mundo. De um lado e do outro, paredões de rocha com geleiras penduradas no alto. Aquele gelo azulado não derrete no verão: ele é mais antigo que qualquer cidade do continente. E é dele que vem a água de tudo que a gente vai ver hoje.",
      },
      transporte: {
        nome: "Gôndola de Banff — subindo a montanha pendurado num cabo",
        icone: "🚡",
        descricao:
          "Entramos numa cabine de vidro para quatro pessoas que sobe 700 metros pela encosta da Sulphur Mountain, presa num cabo de aço. A cada torre que a gôndola passa, sacode um pouquinho. Olhe para baixo: a floresta vai ficando pequena, e você começa a ver a linha onde as árvores simplesmente param de crescer — daquela altura para cima faz frio demais e o vento é forte demais para qualquer árvore.",
        imagem_url:
          "/__l5e/assets-v1/974fa396-6714-4624-b427-efd490b4ff70/ca-d4-transporte.jpg",
        credito: "Wilson Hui / CC BY 2.0",
        galeria: [
          {
            id: "ca-d4-t-g1",
            imagem_url:
              "/__l5e/assets-v1/4d33e9a5-d121-4101-96ad-be1a2bdb4406/ca-d4-transporte-g1.jpg",
            legenda: "As cabines cruzando no meio do caminho",
            credito: "Milan Suvajac / CC BY-SA 4.0",
          },
          {
            id: "ca-d4-t-g2",
            imagem_url:
              "/__l5e/assets-v1/7f1a1fec-c7d4-43c4-a48f-b21edf093217/ca-d4-transporte-g2.jpg",
            legenda: "Lá do alto: o Lago Louise encaixado entre as montanhas",
            credito: "InSapphoWeTrust / CC BY-SA 2.0",
          },
        ],
      },
      observacao: {
        titulo: "Lago Moraine e o Vale dos Dez Picos",
        imagem_url:
          "/__l5e/assets-v1/25771909-b984-4cc7-8286-1e8a74061b4f/ca-d4-obs.jpg",
        credito: "Adam Bishop / CC BY-SA 4.0",
        hotspots: [
          {
            id: "agua-turquesa",
            x: 45,
            y: 70,
            titulo: "O azul-turquesa",
            texto:
              "Não é tinta nem truque de foto. A geleira, ao deslizar, mói a rocha até virar um pó finíssimo chamado farinha glacial. Esse pó fica boiando na água e devolve para os nossos olhos justamente o azul e o verde.",
          },
          {
            id: "picos",
            x: 60,
            y: 25,
            titulo: "Os Dez Picos",
            texto:
              "Dez montanhas em fila fechando o vale. A neve fica no topo o ano inteiro, e é o derretimento lento dela que alimenta o lago.",
          },
          {
            id: "coniferas",
            x: 18,
            y: 55,
            titulo: "As árvores em forma de pinheiro",
            texto:
              "Formato de cone e folhas em agulha: a neve escorrega em vez de acumular nos galhos, e a agulha perde pouquíssima água. É o mesmo truque do telhado, agora inventado pela própria árvore.",
          },
        ],
        galeria: [
          {
            id: "ca-d4-o-g1",
            imagem_url:
              "/__l5e/assets-v1/69a33a3f-a7d8-47c6-ae55-a44dd2c2cd00/ca-d4-obs-g1.jpg",
            legenda: "As canoas vermelhas paradas na margem do Moraine",
            credito: "Florian Fuchs / CC BY 3.0",
          },
          {
            id: "ca-d4-o-g2",
            imagem_url:
              "/__l5e/assets-v1/393f4242-64dd-4273-a7ce-ff680a970b06/ca-d4-obs-g2.jpg",
            legenda: "Os picos cobertos de neve refletidos na água parada",
            credito: "Ezra Jeffrey / CC0",
          },
          {
            id: "ca-d4-o-g3",
            imagem_url:
              "/__l5e/assets-v1/6d8167a2-d811-4cfa-a440-b28e08b08195/ca-d4-obs-g3.jpg",
            legenda:
              "O Lago Bow, ali perto: mesma água de geleira, mesma cor impossível",
            credito: "Florian Fuchs / CC BY 3.0",
          },
        ],
      },
      perguntas: [
        {
          id: "ca-d4-transporte",
          tipo: "observacao",
          etapa: "transporte",
          texto:
            "Subindo na gôndola dá para ver a linha onde as árvores param de crescer. O que existe lá em cima que uma árvore não aguenta?",
        },
        {
          id: "ca-d4-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "A cor do lago vem de um pó de rocha moído pela geleira, boiando na água. Se a geleira derretesse por completo, o que você acha que aconteceria com essa cor?",
        },
        {
          id: "ca-d4-fauna",
          tipo: "comparacao",
          etapa: "fauna",
          texto:
            "Os lobos caçam em alcateia, cada um com uma função, e uivam para se localizar a quilômetros de distância. Por que caçar em grupo compensa mais do que caçar sozinho num lugar tão frio e tão grande?",
        },
        {
          id: "ca-d4-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "A butter tart nasceu como uma receita para aproveitar o que havia na despensa no fim do inverno. Que doce brasileiro você conhece que também nasceu de aproveitar sobras?",
        },
      ],
      fauna_do_dia: {
        id: "lobo-cinzento",
        contexto:
          "Já escureceu quando um som longo atravessa o vale e faz todo mundo parar de falar.",
        texto_guia:
          "Esse é o uivo do lobo-cinzento. Não é ameaça: é telefone. Uma alcateia se espalha por um território que pode passar de mil quilômetros quadrados, e o uivo é como eles dizem “estou aqui, e este pedaço é nosso”. Um uivo viaja mais de dez quilômetros numa noite fria e parada. Cada lobo tem um tom diferente, e eles evitam uivar na mesma nota de propósito — assim o grupo soa maior do que é.",
      },
      sabor_do_dia: {
        id: "butter-tart",
        contexto:
          "De volta ao chalé, com as mãos ainda geladas, uma bandeja sai do forno.",
        texto_guia:
          "Butter tart: uma tortinha do tamanho da palma da mão, casquinha crocante e um recheio de manteiga, açúcar mascavo e ovo que fica meio mole no meio, quase escorrendo. É uma das receitas mais antigas do país, inventada por mulheres colonas com o pouco que sobrava na despensa no fim do inverno. Até hoje existe uma discussão séria por aqui: com passas ou sem passas?",
      },
      notas_brasil: {
        transporte: {
          texto:
            "A gôndola de Banff é prima do bondinho do Pão de Açúcar: mesma ideia de cabine pendurada em cabo de aço para vencer uma subida impossível.",
        },
        observacao: {
          texto:
            "Nossos lagos e rios costumam ser esverdeados por causa das algas e da matéria orgânica. O azul do Moraine é mineral: é pó de pedra em suspensão, não vida.",
        },
        fauna: {
          texto:
            "O lobo-cinzento caça em alcateia; no Cerrado, o lobo-guará faz quase o oposto — anda sozinho, come frutas como a lobeira e é bem mais tímido.",
        },
        sabor: {
          texto:
            "A butter tart nasceu de sobras da despensa, assim como a nossa cocada e o bolo de fubá nasceram de aproveitar coco, milho e o que tinha em casa.",
        },
      },
      desafio: {
        pergunta:
          "Por que a água do Lago Moraine tem aquele azul-turquesa tão forte?",
        opcoes: [
          "Porque o céu se reflete na água",
          "Porque há um pó de rocha moído pela geleira flutuando na água",
          "Porque o fundo do lago é azul",
        ],
        correta: 1,
        explicacao:
          "A geleira desliza sobre a montanha e mói a rocha até virar um pó fino, a farinha glacial. Esse pó não afunda: fica boiando e reflete de volta a luz azul e verde. Por isso o lago é intenso mesmo em dia nublado — não depende do céu.",
      },
    },

    {
      dia: 5,
      titulo: "Dia 5: Toronto — um dia comum na vida das pessoas",
      descricao:
        "Nada de cartão-postal hoje. Vamos até um bairro de casas geminadas para ver como as famílias canadenses realmente vivem, se vestem e fazem compras.",
      imagem_url:
        "/__l5e/assets-v1/756f3478-9224-4ff0-abe8-95ee23709b2f/ca-d5-obs.jpg",
      credito: "Jay Woodworth / CC BY 2.0",
      guia_nome: "Élodie",
      guia_local: "Élodie, guia de expedição em Toronto",
      clima_do_dia: "0 °C, céu cinzento e cheiro de neve no ar",
      abertura: {
        imagem_url:
          "/__l5e/assets-v1/e3e9b0ee-09d0-4de0-8636-a5fdbcee4095/ca-d5-abertura.jpg",
        credito: "George Socka / CC BY 2.0",
        texto:
          "Última manhã. Chegamos a Toronto pela margem do Lago Ontário, com a Torre CN riscando o céu. Mas hoje não vamos subir em nada alto nem visitar monumento nenhum. Hoje o combinado é outro: vamos andar por um bairro onde mora gente de verdade, no horário em que as crianças vão para a escola. Preste atenção nos detalhes pequenos — é neles que a vida de um país aparece.",
      },
      transporte: {
        nome: "O bonde da TTC — o streetcar de Toronto",
        icone: "🚋",
        descricao:
          "Toronto tem a maior rede de bondes da América do Norte, e eles são vermelhos, compridos e correm no meio da rua, dividindo o asfalto com os carros. Quando o bonde para, os carros atrás são obrigados por lei a parar também, para as pessoas atravessarem em segurança. Dentro, cachorros vão junto, bicicletas ficam num gancho e todo mundo tira a touca ao sentar. No inverno, o bonde vence a neve que trava um ônibus comum, porque o trilho fica sempre limpo pela roda de aço.",
        imagem_url:
          "/__l5e/assets-v1/6f2180cb-60b1-4d27-a94c-418f6260e232/ca-d5-transporte.jpg",
        credito: "Bernard Spragg. NZ / CC0",
        galeria: [
          {
            id: "ca-d5-t-g1",
            imagem_url:
              "/__l5e/assets-v1/b86310f6-ff0d-46ce-8272-331be2d3a790/ca-d5-transporte-g1.jpg",
            legenda: "A plataforma do metrô na estação Kipling",
            credito: "Bobolink / Robert Taylor / CC BY 2.0",
          },
          {
            id: "ca-d5-t-g2",
            imagem_url:
              "/__l5e/assets-v1/fc71fde0-634e-469b-8b84-e738a9713e39/ca-d5-transporte-g2.jpg",
            legenda: "O mesmo bonde num dia de nevasca, seguindo normalmente",
            credito: "Can Pac Swire / CC BY-SA 2.0",
          },
        ],
      },
      observacao: {
        titulo: "Cabbagetown — a rua onde as famílias moram",
        imagem_url:
          "/__l5e/assets-v1/756f3478-9224-4ff0-abe8-95ee23709b2f/ca-d5-obs.jpg",
        credito: "Jay Woodworth / CC BY 2.0",
        hotspots: [
          {
            id: "casas-coladas",
            x: 35,
            y: 45,
            titulo: "Casas coladas umas nas outras",
            texto:
              "São chamadas de row houses. Paredes compartilhadas significam menos parede exposta ao frio — e conta de aquecimento bem menor no inverno.",
          },
          {
            id: "varanda",
            x: 62,
            y: 60,
            titulo: "A varandinha da frente",
            texto:
              "O porch é o ponto de encontro do verão: as pessoas sentam ali no fim da tarde e conversam com quem passa. No inverno, vira o lugar onde ficam as botas cheias de neve, que ninguém leva para dentro de casa.",
          },
          {
            id: "sem-muro",
            x: 15,
            y: 78,
            titulo: "Nenhum muro alto",
            texto:
              "Repare: não há muro, nem grade, nem portão. O jardim da frente é aberto para a calçada, e é comum vizinhos limparem a neve da calçada uns dos outros.",
          },
          {
            id: "arvores-nuas",
            x: 82,
            y: 30,
            titulo: "As árvores sem folha",
            texto:
              "Estão nuas de propósito. Sem folhas, o vento gelado passa entre os galhos sem quebrá-los, e a árvore economiza energia até a primavera.",
          },
        ],
        galeria: [
          {
            id: "ca-d5-o-g1",
            imagem_url:
              "/__l5e/assets-v1/29cdfde1-b2d4-4d7e-8ca2-cdfd10237533/ca-d5-obs-g1.jpg",
            legenda:
              "Cada casa da fileira pintada de uma cor diferente — é assim que cada família marca a sua",
            credito: "Alexia / CC BY 2.0",
          },
          {
            id: "ca-d5-o-g2",
            imagem_url:
              "/__l5e/assets-v1/6d60fd94-1c32-4ad5-a657-f7f775e3baae/ca-d5-obs-g2.jpg",
            legenda:
              "O Kensington Market: em três quarteirões se ouve português, mandarim, espanhol e árabe",
            credito: "Arild Vågen / CC BY-SA 4.0",
          },
          {
            id: "ca-d5-o-g3",
            imagem_url:
              "/__l5e/assets-v1/6ae25622-9f65-4c5a-a3a3-d38cebf3aee3/ca-d5-obs-g3.jpg",
            legenda:
              "O St. Lawrence Market, onde as famílias fazem a compra da semana",
            credito: "stu_spivack / CC BY-SA 2.0",
          },
        ],
      },
      perguntas: [
        {
          id: "ca-d5-transporte",
          tipo: "comparacao",
          etapa: "transporte",
          texto:
            "Quando o bonde para, todos os carros atrás são obrigados a parar também para as pessoas atravessarem. O que essa regra revela sobre o que aquela cidade considera mais importante na rua?",
        },
        {
          id: "ca-d5-obs",
          tipo: "observacao",
          etapa: "observacao",
          texto:
            "Nenhuma casa da rua tem muro, grade ou portão, e o jardim da frente é aberto para a calçada. Compare com a rua onde você mora: o que é parecido e o que é diferente? Por que você acha que é assim?",
        },
        {
          id: "ca-d5-fauna",
          tipo: "observacao",
          etapa: "fauna",
          texto:
            "O guaxinim aprendeu a abrir lixeiras com as próprias mãos, e a cidade teve que inventar uma lixeira com trava especial. Quem está se adaptando mais rápido nessa história: o bicho ou as pessoas?",
        },
        {
          id: "ca-d5-sabor",
          tipo: "comparacao",
          etapa: "sabor",
          texto:
            "Chegamos ao fim da expedição. De tudo que você viu no Canadá — o canal virando gelo, a cachoeira, o lago azul, a rua sem muros —, o que você mais quer contar para alguém quando fechar o diário?",
        },
      ],
      fauna_do_dia: {
        id: "guaxinim",
        contexto:
          "Ao anoitecer, um barulho de tampa metálica atrás de uma casa. Duas mãozinhas pretas aparecem na borda da lixeira.",
        texto_guia:
          "O guaxinim é o bicho selvagem mais urbano do Canadá — Toronto é chamada de capital mundial do guaxinim, com carinho e um pouco de exasperação. As patas dianteiras dele têm uma sensibilidade parecida com a da nossa mão, e ele consegue girar maçaneta, abrir fecho e desmontar tampa. A cidade chegou a lançar uma lixeira com trava giratória “à prova de guaxinim”; em poucos meses, muitos já tinham descoberto como abrir.",
      },
      sabor_do_dia: {
        id: "peameal-bacon",
        contexto:
          "Última refeição da viagem, num balcão do St. Lawrence Market cheio de gente com casaco.",
        texto_guia:
          "Peameal bacon sandwich: lombo de porco curado, passado numa farinha grossa de milho, grelhado na chapa e servido em pão macio com mostarda. É o sanduíche símbolo de Toronto e nasceu neste mercado, feito para operários que precisavam de uma refeição forte e rápida. Coma olhando ao redor: nas mesas ao lado há gente de todos os cantos do mundo — metade dos moradores de Toronto nasceu em outro país.",
      },
      notas_brasil: {
        transporte: {
          texto:
            "O bonde de Santa Teresa, no Rio, é primo distante deste: mesma ideia de trilho no meio da rua. A diferença é que o de Toronto carrega 250 mil pessoas por dia.",
        },
        observacao: {
          texto:
            "Nas cidades brasileiras é comum casa com muro, grade e portão eletrônico. Em Cabbagetown o jardim é aberto e a calçada é compartilhada — o mesmo desejo de segurança e comunidade resolvido de dois jeitos bem diferentes.",
        },
        fauna: {
          texto:
            "O guaxinim é o vizinho selvagem de Toronto, papel que no Brasil cabe ao gambá-de-orelha-branca e ao mão-pelada, nosso parente próximo do guaxinim.",
        },
        sabor: {
          texto:
            "O peameal é o sanduíche de mercado feito para operário com pressa — exatamente como o sanduíche de mortadela do Mercado Municipal de São Paulo.",
        },
      },
      desafio: {
        pergunta:
          "As casas de Cabbagetown são coladas umas nas outras, com paredes compartilhadas. Qual é a grande vantagem disso num país tão frio?",
        opcoes: [
          "Fica mais fácil conversar com o vizinho pela parede",
          "Menos parede exposta ao frio significa menos calor perdido e conta de aquecimento menor",
          "Assim cabem mais carros na garagem",
        ],
        correta: 1,
        explicacao:
          "Cada parede virada para a rua perde calor para o ar gelado o inverno inteiro. Casas geminadas dividem paredes, então há bem menos superfície exposta — a casa esquenta mais rápido e gasta menos energia. É a mesma lógica dos pinguins que se juntam em bando para se aquecer.",
      },
    },
  ],

  fauna_flora: [
    {
      id: "castor",
      nome: "Castor-canadense",
      nome_cientifico: "Castor canadensis",
      foto_url:
        "/__l5e/assets-v1/80dd4bd6-b059-4d16-8ed5-75efd426bd02/ca-fauna-castor.jpg",
      credito: "Ryan Hodnett / CC BY-SA 4.0",
      som_url: null,
      curiosidade:
        "Os dentes dele nunca param de crescer e são alaranjados porque têm ferro no esmalte — mais duros do que os nossos. Ele derruba uma árvore inteira numa noite e usa os troncos para represar o rio, criando um lago onde a entrada da casa fica escondida debaixo d'água. Nenhum outro animal, além do ser humano, muda tanto a paisagem em volta.",
      habitat:
        "Rios, lagos e brejos de florestas por quase todo o Canadá — inclusive dentro de cidades grandes.",
      galeria: [
        {
          id: "castor-toca",
          imagem_url:
            "/__l5e/assets-v1/f541e595-58f1-4e28-b057-a8e4210d20a2/ca-fauna-castor-g1.jpg",
          legenda: "A toca de galhos, com a porta debaixo da água",
          credito: "Ryan Hodnett / CC BY-SA 4.0",
        },
        {
          id: "castor-cidade",
          imagem_url:
            "/__l5e/assets-v1/6b36838d-d3af-4387-b202-330b3c11c616/ca-fauna-castor-g2.jpg",
          legenda: "Um castor nadando dentro de Toronto, na Humber Bay",
          credito: "Michael / CC BY 2.0",
        },
      ],
    },
    {
      id: "alce",
      nome: "Alce",
      nome_cientifico: "Alces alces",
      foto_url:
        "/__l5e/assets-v1/e46bf135-f2a5-41ee-80d4-dd5bbb87a2d3/ca-fauna-alce.jpg",
      credito: "Ken Lund / CC BY-SA 2.0",
      som_url: null,
      curiosidade:
        "É o maior cervo do planeta: pode passar de 700 quilos. A galhada do macho chega a 1,8 metro de ponta a ponta e cai inteirinha todo inverno, para crescer de novo na primavera. Apesar do tamanho, ele nada muito bem e consegue mergulhar vários metros para arrancar plantas do fundo dos lagos.",
      habitat:
        "Florestas boreais, brejos e margens de lago no norte do Canadá e do Alasca.",
      galeria: [
        {
          id: "alce-rio",
          imagem_url:
            "/__l5e/assets-v1/84d2b35f-f06c-496a-9b0b-3c4f907bb6f1/ca-fauna-alce-g1.jpg",
          legenda: "Atravessando o rio a nado",
          credito: "Western Arctic National Parklands / CC BY 2.0",
        },
        {
          id: "alce-filhote",
          imagem_url:
            "/__l5e/assets-v1/5fa3d4d7-2082-45b1-9f9b-111ef2fbe4b3/ca-fauna-alce-g2.jpg",
          legenda: "Um filhote, que já nasce de pernas compridas",
          credito: "USDA Forest Service / domínio público",
        },
      ],
    },
    {
      id: "beluga",
      nome: "Beluga",
      nome_cientifico: "Delphinapterus leucas",
      foto_url:
        "/__l5e/assets-v1/5e9c57de-998c-4a07-aae1-916693a16227/ca-fauna-beluga.jpg",
      credito: "Luca Galuzzi / CC BY-SA 2.5",
      som_url: null,
      som: {
        url: "/__l5e/assets-v1/ac14a101-db59-4bb9-ace5-37cca10ea734/ca-som-beluga.ogg",
        legenda:
          "As vocalizações reais de belugas debaixo d'água: assobios, rangidos e estalos — por isso a chamam de “canário do mar”",
        credito:
          "Hubbs-SeaWorld Research Institute / NOAA · domínio público",
      },
      curiosidade:
        "É a única baleia que consegue virar o pescoço e olhar para os lados, porque as vértebras do pescoço dela não são grudadas. Não tem barbatana dorsal — no lugar dela há uma crista dura, boa para empurrar o gelo fino de baixo e abrir um buraco para respirar.",
      habitat:
        "Águas geladas do Ártico e o estuário do Rio São Lourenço, em Quebec.",
      galeria: [
        {
          id: "beluga-perto",
          imagem_url:
            "/__l5e/assets-v1/3d505956-908f-496c-b22c-a32b1607c98a/ca-fauna-beluga-g1.jpg",
          legenda: "De perto: a testa arredondada, que ela usa como sonar",
          credito: "EgorovaSvetlana / CC BY-SA 4.0",
        },
      ],
    },
    {
      id: "lobo-cinzento",
      nome: "Lobo-cinzento",
      nome_cientifico: "Canis lupus",
      foto_url:
        "/__l5e/assets-v1/c718f32a-9890-48da-96a4-8bbc064b77c6/ca-fauna-lobo.jpg",
      credito: "Blair Dudeck / CC BY 4.0",
      som_url: null,
      som: {
        url: "/__l5e/assets-v1/7fc53ae4-176c-4ee5-b39c-170d8ead0909/ca-som-lobo.ogg",
        legenda:
          "O uivo real de uma alcateia gravado em campo: cada lobo escolhe uma nota diferente, e o grupo soa maior do que é",
        credito: "Wikimedia Commons · domínio público",
      },
      curiosidade:
        "Um uivo atravessa mais de dez quilômetros numa noite fria e parada. A alcateia é uma família: os pais, os filhotes do ano e os irmãos mais velhos, que ajudam a cuidar dos pequenos. Eles percorrem até 70 quilômetros num único dia atrás de comida.",
      habitat:
        "Florestas boreais, tundra e as Montanhas Rochosas — territórios enormes e pouco habitados.",
      galeria: [
        {
          id: "lobo-alcateia",
          imagem_url:
            "/__l5e/assets-v1/414ef194-1b6e-4538-ad1c-6d4fb7512e53/ca-fauna-lobo-g1.jpg",
          legenda: "A alcateia inteira na neve, andando em fila",
          credito: "Superior National Forest / CC BY 2.0",
        },
      ],
    },
    {
      id: "guaxinim",
      nome: "Guaxinim",
      nome_cientifico: "Procyon lotor",
      foto_url:
        "/__l5e/assets-v1/859bda52-9db4-4e58-8f7d-e0d3656e9cf8/ca-fauna-guaxinim.jpg",
      credito: "Ryan Hodnett / CC BY-SA 4.0",
      som_url: null,
      curiosidade:
        "As patinhas dianteiras dele são quase mãos: têm tantas terminações nervosas que ele reconhece um objeto só pelo tato, no escuro. Toronto criou uma lixeira com trava giratória para detê-lo — e muitos guaxinins aprenderam a abrir mesmo assim. A máscara escura em volta dos olhos reduz o brilho e ajuda a enxergar à noite.",
      habitat:
        "Florestas, parques, quintais e telhados de qualquer cidade do leste canadense.",
      galeria: [
        {
          id: "guaxinim-perto",
          imagem_url:
            "/__l5e/assets-v1/3d4012eb-3c24-486b-81bd-24ada4535242/ca-fauna-guaxinim-g1.jpg",
          legenda: "De perto: a máscara escura e as mãozinhas curiosas",
          credito: "Ryan Hodnett / CC BY-SA 4.0",
        },
      ],
    },
  ],

  gastronomia: [
    {
      id: "poutine",
      nome: "Poutine",
      foto_url:
        "/__l5e/assets-v1/605461a7-231c-42a0-a43c-2e15ba819715/ca-food-poutine.jpg",
      credito: "Antonydstevens / CC0",
      adjetivo: "quentinha",
      historia:
        "Batata frita, cheese curds (pedacinhos de queijo fresco que rangem entre os dentes) e molho marrom fervendo por cima. Nasceu no interior de Quebec, nos anos 1950, num restaurante de estrada, e por muito tempo foi comida simples de trabalhador. Hoje é o prato mais canadense que existe, servido do Atlântico ao Pacífico — e sempre no ponto de derreter o queijo só até esticar.",
      destaque:
        "No balcão do ByWard Market, o pedido nº 1 é a poutine clássica servida em bandeja de papel, para comer em pé aquecendo as mãos.",
      galeria: [
        {
          id: "poutine-mesa",
          imagem_url:
            "/__l5e/assets-v1/e3aefb1a-5c98-4330-83c0-41b2ebc8d7af/ca-food-poutine-g1.jpg",
          legenda: "Uma versão de café da manhã, com ovo por cima",
          credito: "Safyrr / CC BY-SA 4.0",
        },
        {
          id: "poutine-curds",
          imagem_url:
            "/__l5e/assets-v1/025b108c-d82d-4d66-848d-0edf0704cf48/ca-food-poutine-g2.jpg",
          legenda: "Os cheese curds antes de irem para o prato",
          credito: "littlerayovsun / CC BY-SA 3.0",
        },
      ],
    },
    {
      id: "tire-derable",
      nome: "Tire d'érable (xarope de bordo na neve)",
      foto_url:
        "/__l5e/assets-v1/e24747b2-77c2-4340-862e-78b6dcb1f151/ca-food-tire.jpg",
      credito: "Chris Lund / domínio público",
      adjetivo: "doce",
      historia:
        "No fim do inverno a seiva do bordo começa a correr dentro do tronco. Fura-se a casca, pendura-se um balde e o líquido pinga devagar, transparente e quase sem gosto. Fervem-se quarenta litros de seiva para sobrar um litro de xarope. O xarope fervendo é então despejado sobre uma calha de neve limpa: endurece em segundos e vira um pirulito enrolado num palito. Os povos originários já colhiam essa seiva muito antes da chegada dos europeus.",
      destaque:
        "Na cabane à sucre, todo mundo faz fila com o palito na mão esperando o xarope quente cair na neve.",
      galeria: [
        {
          id: "tire-cabana",
          imagem_url:
            "/__l5e/assets-v1/d55d045d-fa26-4f51-be45-0a0d7609779f/ca-food-tire-g1.jpg",
          legenda: "A cabane à sucre no meio do bosque de bordos",
          credito: "Chris Light / CC BY-SA 4.0",
        },
        {
          id: "tire-fervura",
          imagem_url:
            "/__l5e/assets-v1/adf6d957-6067-4ff0-97fe-ed0ecbf01074/ca-food-tire-g2.jpg",
          legenda: "A seiva fervendo até virar xarope",
          credito: "Chris Light / CC BY-SA 4.0",
        },
      ],
    },
    {
      id: "salmao-grelhado",
      nome: "Salmão grelhado",
      foto_url:
        "/__l5e/assets-v1/38e022e1-6f87-46a0-9b8c-57b6f1841baf/ca-food-salmao.jpg",
      credito: "DanaTentis / CC0",
      adjetivo: "delicado",
      historia:
        "Peixe grelhado com a pele para baixo até ficar crocante, com sal, endro e limão. O salmão nasce no rio, desce para o mar, cresce lá e volta anos depois saltando corredeiras até o mesmo riacho onde nasceu. Nas duas costas do Canadá ele é alimento central há milhares de anos: os povos originários do Pacífico o defumavam sobre madeira de cedro, técnica que os restaurantes de hoje ainda copiam.",
      destaque:
        "Nos restaurantes do Petit-Champlain, o pedido mais comum é o filé com endro e limão, servido com legumes da estação.",
      galeria: [
        {
          id: "salmao-prato",
          imagem_url:
            "/__l5e/assets-v1/933dc5a0-c7cd-431e-b72c-495e6e155c61/ca-food-salmao-g1.jpg",
          legenda: "Outra versão, com molho agridoce e vegetais",
          credito: "HaJunkiyada / CC BY-SA 4.0",
        },
      ],
    },
    {
      id: "butter-tart",
      nome: "Butter tart",
      foto_url:
        "/__l5e/assets-v1/9ae3cf4c-e829-4248-885c-da07bff37a01/ca-food-butter-tart.jpg",
      credito: "Didriks / CC BY 2.0",
      adjetivo: "aconchegante",
      historia:
        "Tortinha do tamanho da palma da mão, com casquinha crocante e recheio mole de manteiga, açúcar mascavo e ovo. É uma das receitas mais antigas do Canadá, criada por mulheres colonas no Ontário com o pouco que restava na despensa no fim do inverno. Existe até hoje uma discussão nacional bem-humorada sobre a receita certa: com passas, com nozes, ou pura?",
      destaque:
        "Nas padarias de vilarejo do Ontário, a versão com noz-pecã é a que acaba primeiro.",
      galeria: [
        {
          id: "butter-tart-pecan",
          imagem_url:
            "/__l5e/assets-v1/c24421cc-d400-46f4-9d03-999ecf8d1533/ca-food-butter-tart-g1.jpg",
          legenda: "A versão com noz-pecã por cima",
          credito: "Hisakazu Watanabe / CC BY-SA 2.0",
        },
      ],
    },
    {
      id: "peameal-bacon",
      nome: "Sanduíche de peameal bacon",
      foto_url:
        "/__l5e/assets-v1/f5049f9d-82ba-4ceb-b3e8-af7d86176480/ca-food-peameal.jpg",
      credito: "Leventio / CC BY-SA 4.0",
      adjetivo: "substancioso",
      historia:
        "Lombo de porco curado em salmoura, envolvido numa camada grossa de farinha de milho, fatiado e grelhado na chapa. Vai num pão macio com mostarda, e mais nada. Nasceu no St. Lawrence Market, em Toronto, feito para os trabalhadores do mercado que precisavam de uma refeição forte e rápida antes do turno. Virou o sanduíche símbolo da cidade.",
      destaque:
        "No St. Lawrence Market, a fila do balcão do peameal dobra a esquina nas manhãs de sábado.",
    },
  ],

  comparativo: {
    clima_predominante:
      "Frio na maior parte do ano: invernos longos com neve e verões curtos e verdes",
    bioma_principal:
      "Floresta boreal de coníferas, milhões de lagos e as Montanhas Rochosas no oeste",
    elemento_marcante:
      "A água — congelada, despencando ou parada e turquesa; e o espaço vazio entre uma cidade e outra",
    agricultura_construcoes:
      "Telhados muito inclinados para a neve escorregar, casas geminadas que dividem paredes para perder menos calor, trigo e canola nas planícies e bosques de bordo explorados pela seiva no fim do inverno.",
    roupas_modo_de_vida:
      "Casaco pesado, gorro, luva e bota o ano quase inteiro; botas ficam na varanda, e a vida se organiza em torno da neve — que vira pista de patinação, esporte e transporte, em vez de virar problema.",
    fauna_alimentacao:
      "Castores represando rios, alces nos brejos, belugas no São Lourenço, lobos nas montanhas e guaxinins nas cidades. A comida é quente e forte: poutine, salmão, tortinhas de manteiga e o doce de seiva de bordo.",
  },
};

export default canada;
