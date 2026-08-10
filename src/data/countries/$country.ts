import type { Pais } from "../types";

export const $(echo $country | sed 's/-//g') = {
  id: "$country",
  nome: "$(echo $country | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++)sub(/./,toupper(substr($i,1,1)),$i)}1')",
  continente: "europa", // Ajustado abaixo por país
  codigo_mapa: "$(case $country in france) echo fr;; spain) echo es;; india) echo in;; united-kingdom) echo gb;; peru) echo pe;; colombia) echo co;; greece) echo gr;; esac)",
  bandeira: "$(case $country in france) echo 🇫🇷;; spain) echo 🇪🇸;; india) echo 🇮🇳;; united-kingdom) echo 🇬🇧;; peru) echo 🇵🇪;; colombia) echo 🇨🇴;; greece) echo 🇬🇷;; esac)",
  bandeira_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/$(case $country in france) echo c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png;; spain) echo 9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png;; india) echo 4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png;; united-kingdom) echo a/a5/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png;; peru) echo c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png;; colombia) echo 2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png;; greece) echo 5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png;; esac)",
  capital: "$(case $country in france) echo Paris;; spain) echo Madri;; india) echo Nova Deli;; united-kingdom) echo Londres;; peru) echo Lima;; colombia) echo Bogotá;; greece) echo Atenas;; esac)",
  coordenadas: { x: 0, y: 0 },
  imagem_capa: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  resumo_geografico: "Um país incrível cheio de história e cultura.",
  chegada: {
    imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    idioma: "$(case $country in france) echo Francês;; spain) echo Espanhol;; india) echo Hindi;; united-kingdom) echo Inglês;; peru) echo Espanhol;; colombia) echo Espanhol;; greece) echo Grego;; esac)",
    fuso_horario: "+4 horas",
    temperatura: "22°C",
    fala_piloto_original: "Bem-vindos!",
    texto: "Estamos chegando!",
    som: { url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Airplane_Landing_Sound.mp3", legenda: "Som do avião" }
  },
  base: {
    nome: "Pousada Central",
    imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    descricao: "Nossa base exploradora."
  },
  roteiro_viagem: [
    {
      dia: 1,
      titulo: "Dia 1: Exploração Inicial",
      descricao: "Começamos nossa jornada.",
      imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      guia_local: "Guia Local",
      clima_do_dia: "Ensolarado",
      transporte: { nome: "Caminhada", icone: "🚶", descricao: "A pé." },
      observacao: { titulo: "Centro", imagem_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", hotspots: [] },
      fauna_do_dia: { id: "animal-local", contexto: "Vimos um animal!" },
      sabor_do_dia: { id: "prato-local", contexto: "Comemos algo delicioso!" },
      perguntas: [{ id: "q1", tipo: "observacao", etapa: "observacao", texto: "O que você achou?" }]
    }
  ],
  fauna_flora: [{ id: "animal-local", nome: "Animal Local", curiosidade: "Muito interessante.", habitat: "Florestas", foto_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", som: { url: "", legenda: "" } }],
  gastronomia: [{ id: "prato-local", nome: "Prato Local", historia: "Uma delícia antiga.", adjetivo: "Sabroso", foto_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" }],
  comparativo: { clima_predominante: "Temperado", bioma_principal: "Floresta", elemento_marcante: "Cultura", agricultura_construcoes: "Variada", roupas_modo_de_vida: "Casual", fauna_alimentacao: "Rica" }
} as Pais;
