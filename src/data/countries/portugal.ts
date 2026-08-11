import type { Pais } from "../types";

export const portugal: Pais = {
  id: "portugal",
  nome: "Portugal",
  continente: "europa",
  codigo_mapa: "pt",
  bandeira: "🇵🇹",
  bandeira_url: "/__l5e/assets-v1/604585e3-9784-4ac3-869f-5969dbadaba6/bandeira-pt.png",
  capital: "Lisboa",
  coordenadas: { x: 46, y: 38 },
  imagem_capa: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
  credito: "Unsplash",
  resumo_geografico: "A porta ocidental da Europa! Banhado pelo Oceano Atlântico, Portugal combina cidades históricas em colinas, castelos medievais, falésias impressionantes no Algarve e uma rica tradição marítima.",
  
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Gravação real de pouso: ronco dos motores e anúncio do piloto",
    },
    idioma: "Português",
    fuso_horario: "15h00 no horário local — 4 horas a mais que Brasília",
    temperatura: "22 °C, ensolarado com brisa suave do Rio Tejo",
    fala_piloto_original: "Bem-vindos a Portugal! Preparem as vossas bagagens para aterrar em Lisboa...",
    fala_piloto_traducao: "Bem-vindos a Portugal! Preparem suas bagagens para pousar em Lisboa...",
    texto: "Olhe pela janela! Do alto, vemos o Rio Tejo se encontrando com o Oceano Atlântico, a grande Ponte 25 de Abril e os telhados de terracota das sete colinas de Lisboa.",
    galeria: [
      { id: "p1", imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80", legenda: "Vista de Lisboa" },
      { id: "p2", imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", legenda: "Rio Tejo" }
    ]
  },
  base: {
    nome: "Pousada Histórica no Bairro de Alfama / Sintra",
    imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
    som: {
      url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      legenda: "Acordeão e guitarra portuguesa ao fundo ecoando pelas ruelas de pedra"
    },
    descricao: "“Bem-vindos a Portugal, exploradores! Aqui preservamos histórias de marinheiros, poetas, castelos e uma cultura que conecta continentes.”",
    galeria: [
      { id: "b1", imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80", legenda: "Ruelas de Alfama" }
    ]
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: O Rio Tejo, a Torre de Belém e os Castelos da História",
      descricao: "Visitando monumentos históricos e explorando as ladeiras de Lisboa.",
      imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
      clima_do_dia: "21 °C, céu limpo e brisa do mar",
      transporte: {
        nome: "Elétrico 28 (Bonde Histórico Amarelo)",
        icone: "🚃",
        descricao: "Bondes amarelos tradicionais de madeira que sobem e descem as ladeiras íngremes e estreitas dos bairros antigos de Lisboa desde o início do século XX.",
        imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
        som: { url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3", legenda: "Sino do elétrico ressoando nos trilhos ao subir a ladeira" }
      },
      observacao: {
        titulo: "Torre de Belém e Mosteiro dos Jerónimos",
        imagem_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
        hotspots: [
          { id: "torre-belem", x: 45, y: 55, titulo: "Torre de Belém", texto: "Fortificação monumental de pedra construída há mais de 500 anos na margem do Rio Tejo para guardar a entrada de Lisboa." },
          { id: "azulejos", x: 70, y: 40, titulo: "Azulejos Portugueses", texto: "Fachadas decoradas com azulejos desenhados à mão que protegem as casas contra a umidade do mar e contam histórias medievais." }
        ]
      },
      fauna_do_dia: {
        id: "lince-iberico-e-golfinho",
        contexto: "Observe a foz do Rio Tejo e as reservas florestais da Serra da Estrela!",
        texto_guia: "O Lince-Ibérico é o felino mais ameaçado da Europa e vive em áreas preservadas no interior, enquanto no estuário do Tejo e no litoral é comum avistar Golfinhos e Gaivotas marítimas."
      },
      sabor_do_dia: {
        id: "pastel-de-belem-e-bacalhau",
        contexto: "Hora de conhecer as iguarias tradicionais da pastelaria e dos mares!",
        texto_guia: "Saboreie os quentinhos Pastéis de Belém (doces com massa folhada crocante e creme de ovos polvilhado com canela) e os tradicionais pratos de Bacalhau."
      },
      desafio: {
        pergunta: "Qual oceano banha toda a costa oeste e sul de Portugal?",
        opcoes: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico"],
        correta: 1,
        explicacao: "Portugal fica no extremo sudoeste da Europa e é totalmente banhado pelo Oceano Atlântico, de onde partiam as caravelas das grandes navegações."
      },
      notas_brasil: {
        transporte: { texto: "O Elétrico 28 de Lisboa inspirou diretamente o famoso Bondinho de Santa Teresa no Rio de Janeiro e os bondes históricos de Santos e São Paulo." },
        observacao: { texto: "A arte dos azulejos e a arquitetura colonial de Portugal estão presentes em centros históricos brasileiros como São Luís (MA), Salvador (BA) e Paraty (RJ).\"" }
      }
    }
  ],
  fauna_flora: [
    {
      id: "lince-iberico-e-golfinho",
      nome: "Lince-Ibérico e Golfinho",
      foto_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      som_url: "https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3",
      curiosidade: "O Lince-Ibérico é único no mundo e um símbolo da preservação europeia.",
      habitat: "Serra da Estrela e estuários fluviais"
    }
  ],
  gastronomia: [
    {
      id: "pastel-de-belem-e-bacalhau",
      nome: "Pastel de Belém e Bacalhau",
      foto_url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
      adjetivo: "tradicional e crocante",
      historia: "A culinária portuguesa une os segredos dos conventos com a riqueza dos mares do Atlântico."
    }
  ],
  comparativo: {
    clima_predominante: "Temperado Mediterrânico",
    bioma_principal: "Floresta Mediterrânica e Costa Atlântica",
    elemento_marcante: "Azulejos, Fado e Torre de Belém",
    agricultura_construcoes: "Oliveiras, Videiras e Vilas de Pedra",
    roupas_modo_de_vida: "Tradição marítima e elegância clássica",
    fauna_alimentacao: "Lince-Ibérico e Pastel de Belém"
  }
};
