import type { Pais } from "../types";

export const marrocos: Pais = {
  id: "marrocos",
  nome: "Marrocos",
  continente: "africa",
  codigo_mapa: "ma",
  bandeira: "🇲🇦",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1000px-Flag_of_Morocco.svg.png",
  capital: "Rabat",
  coordenadas: { x: 46, y: 43 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yacine_Petit-moulin_Marrakech_Place_Jemaa_el-Fna_Night.jpg/1200px-Yacine_Petit-moulin_Marrakech_Place_Jemaa_el-Fna_Night.jpg",
  resumo_geografico: "Marrocos é o portão de entrada para a África, um país de montanhas nevadas (o Atlas), desertos de dunas douradas e cidades imperiais com labirintos de mercados. É um lugar onde o aroma do chá de hortelã e das especiarias preenche o ar e a arquitetura é uma joia de mosaicos coloridos.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Marrakesh_Menara_Airport_Terminal_1.jpg/1200px-Marrakesh_Menara_Airport_Terminal_1.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso na Cidade Vermelha, Marraquexe",
      credito: "Wikimedia Commons"
    },
    texto: "Salam! Estamos pousando em Marraquexe. Olhe pela janela: a cidade é toda de tons avermelhados, por isso é chamada de 'Cidade Vermelha'. Ao longe, as montanhas do Atlas ainda têm neve no topo, mesmo estando perto do deserto! Prepare-se para um labirinto de cores e sons.",
    fala_piloto_original: "Salam Alaykum! Welcome to Marrakesh Menara Airport. The temperature is 28 degrees. Marhaba to Morocco!",
    fala_piloto_traducao: "Que a paz esteja com vocês! Bem-vindos ao Aeroporto Menara de Marraquexe. A temperatura é de 28 graus. Boas-vindas ao Marrocos!",
    idioma: "Árabe e Berbere",
    fuso_horario: "+4 horas em relação a Brasília",
    temperatura: "28 °C, ar seco",
    galeria: [
      {
        id: "ma-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Marrakesh_Aerial_View.jpg/1200px-Marrakesh_Aerial_View.jpg",
        legenda: "A Cidade Vermelha e as Montanhas do Atlas ao fundo",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Riad Tradicional na Medina",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Riad_Enija%2C_Marrakech.jpg/1200px-Riad_Enija%2C_Marrakech.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Riad_Garden_Ambience.mp3",
      legenda: "O som da fonte em um pátio marroquino",
      credito: "Wikimedia Commons"
    },
    descricao: "“Marhaba! Sou Youssef, seu guia por estas terras. Nossa base é um Riad — uma casa tradicional com um jardim escondido no centro. Do lado de fora, as ruas são barulhentas, mas aqui dentro reina a paz e o som das fontes. Sente-se, tome um pouco de chá de hortelã e prepare seus sentidos!”",
    galeria: [
      {
        id: "ma-base-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Riad_Enija%2C_Marrakech.jpg/1200px-Riad_Enija%2C_Marrakech.jpg",
        legenda: "Pátio interno de um Riad em Marraquexe",
        credito: "Wikimedia Commons"
      }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Os Labirintos do Souk",
      descricao: "Os mercados marroquinos, chamados de Souks, são labirintos onde você pode encontrar de tudo: tapetes tecidos à mão, temperos de todas as cores, sapatos de couro e luminárias mágicas. É um teste para seus olhos e para o seu nariz!",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Souks_of_Marrakech_1.jpg/1200px-Souks_of_Marrakech_1.jpg",
      guia_nome: "Youssef",
      transporte: {
        nome: "Caminhada e Burrinho de Carga",
        icone: "🚶",
        descricao: "Nas ruas estreitas da Medina, carros não entram. Tudo é levado a pé ou em pequenos burrinhos que conhecem o caminho de cor."
      },
      fauna_do_dia: {
        id: "dromedario-marroquino",
        contexto: "Nas bordas do deserto, os dromedários são os reis. Eles têm apenas uma corcova e são muito fortes.",
        galeria: [
          {
            id: "ma-fauna-1",
            imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07_Camel_Profile%2C_Near_Silverton%2C_NSW%2C_07.07.2007.jpg/1200px-07_Camel_Profile%2C_Near_Silverton%2C_NSW%2C_07.07.2007.jpg",
            legenda: "Dromedário no deserto",
            credito: "Wikimedia Commons"
          }
        ]
      },
      sabor_do_dia: {
        id: "tagine",
        contexto: "Um ensopado cozido lentamente em um pote de barro com tampa em formato de cone. O vapor volta para a comida e a deixa muito suculenta!"
      },
      observacao: {
        titulo: "As Especiarias Coloridas",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Souks_of_Marrakech_1.jpg/1200px-Souks_of_Marrakech_1.jpg",
        hotspots: [
          {
            id: "piramides-po",
            x: 60,
            y: 40,
            titulo: "Pó de Cor",
            texto: "Os temperos são arrumados em cones perfeitos. O amarelo é açafrão, o vermelho é páprica e o laranja é cominho."
          }
        ]
      },
      perguntas: [
        {
          id: "m1",
          tipo: "observacao",
          etapa: "sabor",
          texto: "O pote do Tagine tem uma tampa em ponta. Como esse formato ajuda a cozinhar a comida num lugar onde a água é preciosa?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "feneco",
      nome: "Raposa-do-Deserto (Feneco)",
      nome_cientifico: "Vulpes zerda",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Fennec_Fox_Vulpes_zerda.jpg/1200px-Fennec_Fox_Vulpes_zerda.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Fennec_Fox_Bark.mp3",
      curiosidade: "É a menor raposa do mundo. Suas orelhas gigantes servem para escutar insetos embaixo da areia e também para resfriar o corpo no calor do Saara.",
      habitat: "Dunas de areia do Deserto do Saara."
    }
  ],
  gastronomia: [
    {
      id: "tagine",
      nome: "Tagine",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tajine_marocain.jpg/1200px-Tajine_marocain.jpg",
      adjetivo: "aromático",
      historia: "O nome vem do pote de barro. É uma técnica antiga dos povos bérberes para cozinhar carnes e vegetais com pouquíssima água."
    }
  ],
  comparativo: {
    clima_predominante: "Mediterrâneo na costa e desértico no interior",
    bioma_principal: "Desertos, oásis e montanhas áridas",
    elemento_marcante: "O contraste entre o ocre da terra e o azul/colorido dos azulejos",
    agricultura_construcoes: "Casas de adobe (terra) que isolam o calor e oásis que sustentam plantações de tâmaras.",
    roupas_modo_de_vida: "Uso de Djellabas (túnicas com capuz) e o hábito de negociar preços em todos os mercados.",
    fauna_alimentacao: "Dieta baseada em cuscuz, tâmaras e azeitonas, com animais como o dromedário e a raposa feneco."
  }
};
