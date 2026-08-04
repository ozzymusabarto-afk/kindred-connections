import type { Pais } from "../types";

export const tailandia: Pais = {
  id: "tailandia",
  nome: "Tailândia",
  continente: "asia",
  codigo_mapa: "th",
  bandeira: "🇹🇭",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1000px-Flag_of_Thailand.svg.png",
  capital: "Bangkok",
  coordenadas: { x: 820, y: 530 },
  imagem_capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/The_Grand_Palace_Bangkok.jpg/1200px-The_Grand_Palace_Bangkok.jpg",
  resumo_geografico: "Conhecida como a 'Terra dos Sorrisos', a Tailândia é um país tropical do sudeste asiático famoso por seus templos budistas dourados, praias de águas cristalinas e uma culinária de rua vibrante. É um lugar onde a espiritualidade profunda se mistura com a energia das metrópoles modernas.",
  chegada: {
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Wat_Arun_Bangkok_Sunset.jpg/1200px-Wat_Arun_Bangkok_Sunset.jpg",
    som: {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3",
      legenda: "Pouso tropical em Bangkok",
      credito: "Wikimedia Commons"
    },
    texto: "Sawatdee! Estamos chegando a Bangkok. Olhe pela janela: o rio Chao Phraya corta a cidade e os telhados dos templos brilham como se fossem feitos de ouro. O calor é tropical, parecido com o do litoral brasileiro. Prepare-se para cores, aromas e muitos sorrisos!",
    fala_piloto_original: "Sawatdee khrap! Welcome to Bangkok Suvarnabhumi Airport. The temperature is 32 degrees Celsius with high humidity.",
    fala_piloto_traducao: "Olá! Bem-vindos ao Aeroporto Suvarnabhumi de Bangkok. A temperatura é de 32 graus com alta umidade.",
    idioma: "Tailandês",
    fuso_horario: "+10 horas em relação a Brasília",
    temperatura: "32 °C, úmido",
    galeria: [
      {
        id: "th-chegada-1",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bangkok_Aerial_View.jpg/1200px-Bangkok_Aerial_View.jpg",
        legenda: "Os canais e templos de Bangkok vistos de cima",
        credito: "Wikimedia Commons"
      }
    ]
  },
  base: {
    nome: "Casa Flutuante no Rio Chao Phraya",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chao_Phraya_River_Bangkok.jpg/1200px-Chao_Phraya_River_Bangkok.jpg",
    descricao: "“Sawatdee! Sou Malee e vou te mostrar os encantos do meu país. Nossa base é uma casa de madeira sobre estacas na beira do rio. Na Tailândia, a água é vida! Você ouvirá o som dos barcos passando o dia todo. Antes de entrar, lembre-se: nunca aponte os pés para as pessoas ou imagens sagradas!”"
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Mercado Flutuante",
      descricao: "Na Tailândia, os mercados podem ser na água! As pessoas vendem frutas, flores e até sopa quente direto de seus barquinhos de madeira. É um labirinto colorido de canais e sabores.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Damnoen_Saduak_Floating_Market_2.jpg/1200px-Damnoen_Saduak_Floating_Market_2.jpg",
      guia_nome: "Malee",
      transporte: {
        nome: "Barco de Cauda Longa",
        icone: "🚤",
        descricao: "Barcos coloridos com motores barulhentos que voam pelos canais estreitos. Eles têm flores na ponta para dar sorte!"
      },
      fauna_do_dia: {
        id: "elefante-asiatico",
        contexto: "O elefante é o animal sagrado da Tailândia. Eles são menores que os africanos e têm orelhas menores também."
      },
      sabor_do_dia: {
        id: "pad-thai",
        contexto: "Macarrão de arroz frito com amendoim, broto de feijão e limão. É doce, salgado e azedinho ao mesmo tempo!"
      },
      observacao: {
        titulo: "Comércio na Água",
        imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Damnoen_Saduak_Floating_Market_2.jpg/1200px-Damnoen_Saduak_Floating_Market_2.jpg",
        hotspots: [
          {
            id: "chapeu-palha",
            x: 45,
            y: 50,
            titulo: "Chapéus de Palma",
            texto: "As vendedoras usam chapéus largos para se proteger do sol forte enquanto remam seus barcos cheios de mercadoria."
          }
        ]
      },
      perguntas: [
        {
          id: "t1",
          tipo: "comparacao",
          etapa: "transporte",
          texto: "No mercado flutuante, a rua é o rio. Como seria fazer compras se você tivesse que ir de barco em vez de carro?"
        }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "elefante-asiatico",
      nome: "Elefante Asiático",
      nome_cientifico: "Elephas maximus",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Elephas_maximus_%28Bandipur%29.jpg/1200px-Elephas_maximus_%28Bandipur%29.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Asian_Elephant_Sound.mp3",
      curiosidade: "Diferente do elefante africano, apenas alguns machos asiáticos têm presas de marfim. Eles são excelentes nadadores!",
      habitat: "Florestas tropicais e matagais do sudeste asiático."
    }
  ],
  gastronomia: [
    {
      id: "pad-thai",
      nome: "Pad Thai",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pad_Thai_with_prawns.jpg/1200px-Pad_Thai_with_prawns.jpg",
      adjetivo: "vibrante",
      historia: "Foi promovido como prato nacional nos anos 1930 para unir o país e incentivar o consumo de arroz."
    }
  ],
  comparativo: {
    clima_predominante: "Tropical de monções, quente e úmido",
    bioma_principal: "Florestas tropicais e costas coralíneas",
    elemento_marcante: "A forte presença do budismo em cada detalhe da vida",
    agricultura_construcoes: "Grande produção de arroz e templos com telhados sobrepostos e pontiagudos.",
    roupas_modo_de_vida: "Roupas leves de seda e algodão, e o hábito de tirar os sapatos em quase todos os lugares internos.",
    fauna_alimentacao: "Dieta baseada em ervas frescas, leite de coco e pimenta, com o elefante como símbolo máximo da fauna."
  }
};
