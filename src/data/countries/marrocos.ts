import { Pais } from "../types";
export const marrocos: Pais = {
  id: "marrocos",
  nome: "Marrocos",
  continente: "africa",
  codigo_mapa: "ma",
  bandeira: "🇲🇦",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1280px-Flag_of_Morocco.svg.png",
  capital: "Rabat",
  coordenadas: { x: 550, y: 400 },
  imagem_capa: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
  resumo_geografico: "Uma ponte entre a África e a Europa. Marrocos é um reino de desertos dourados, montanhas nevadas e cidades medievais chamadas Medinas, onde as ruas são labirintos de aromas, cores e tapetes feitos à mão.",
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Labirintos da Medina",
      descricao: "Em Fez, entraremos na maior Medina do mundo. As ruas são tão estreitas que não passam carros, apenas mulas carregando mercadorias. É uma viagem de mil anos no tempo.",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Fes_Medina_Streets.jpg/1280px-Fes_Medina_Streets.jpg",
      guia_nome: "Youssef",
      guia_local: "Youssef, guia local",
      clima_do_dia: "24 °C, seco e ensolarado",
      transporte: {
        nome: "Caminhada e Mula",
        icone: "🚶",
        descricao: "Nas ruelas estreitas da Medina, o único jeito de circular é a pé ou usando o auxílio das mulas para carregar os fardos pesados."
      },
      fauna_do_dia: {
        id: "camelo-dromedario",
        contexto: "Nas dunas do Saara, o dromedário é o rei absoluto do deserto."
      },
      sabor_do_dia: {
        id: "cuscuz-marroquino",
        contexto: "Sêmola de trigo com vegetais e carne, cozida lentamente ao vapor."
      },
      perguntas: [
        { id: "ma-d1-1", tipo: "observacao", etapa: "observacao", texto: "Por que as ruas da Medina são tão estreitas e cobertas? Como isso ajuda no calor do deserto?" }
      ]
    }
  ],
  fauna_flora: [
    {
      id: "camelo-dromedario",
      nome: "Dromedário",
      nome_cientifico: "Camelus dromedarius",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07_A_single_dromedary.jpg/1280px-07_A_single_dromedary.jpg",
      som_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Camel_Sound.mp3",
      curiosidade: "Diferente do camelo, o dromedário tem apenas uma corcova. Ele armazena gordura ali para ter energia em longas viagens sem comida ou água.",
      habitat: "Deserto do Saara."
    }
  ],
  gastronomia: [
    {
      id: "cuscuz-marroquino",
      nome: "Cuscuz",
      foto_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Couscous_Marocain.jpg/1280px-Couscous_Marocain.jpg",
      adjetivo: "aromático",
      historia: "É o prato nacional, servido tradicionalmente às sextas-feiras após a oração. Representa a hospitalidade e a união familiar."
    }
  ],
  comparativo: {
    clima_predominante: "Mediterrâneo ao norte e desértico ao sul",
    bioma_principal: "Deserto, montanhas (Atlas) e costa mediterrânea",
    elemento_marcante: "As Medinas labirínticas e o perfume de especiarias",
    agricultura_construcoes: "Azeitonas, tâmaras e argão. Casas de adobe e palácios de azulejos (Zellige).",
    roupas_modo_de_vida: "Vida em torno do chá de hortelã e o uso da Chilaba (túnica tradicional).",
    fauna_alimentacao: "Rica em especiarias, pães árabes e chá de hortelã."
  }
};
