import type { Comparativo } from "./types";

/** Referência do país de origem das crianças, usada nas comparações. */
export const brasil: {
  nome: string;
  bandeira: string;
  comparativo: Comparativo;
} = {
  nome: "Brasil",
  bandeira: "🇧🇷",
  comparativo: {
    clima_predominante:
      "Tropical na maior parte do território, com estação de chuva e estação seca em vez de quatro estações marcadas",
    bioma_principal:
      "Floresta Amazônica, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa",
    elemento_marcante:
      "A água e o verde — rios enormes, florestas contínuas e um litoral de milhares de quilômetros",
    agricultura_construcoes:
      "Lavouras de soja, café, cana e frutas tropicais; casas de alvenaria com telhados inclinados para a chuva forte e janelas grandes para o calor",
    roupas_modo_de_vida:
      "Roupas leves quase todo o ano, chinelos e guarda-chuva na época das chuvas; a vida acontece muito ao ar livre",
    fauna_alimentacao:
      "Micos, tucanos, araras, capivaras e botos; comida à base de arroz, feijão, mandioca, frutas tropicais e peixe de rio",
  },
};

export default brasil;
