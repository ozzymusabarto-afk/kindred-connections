export type ContinenteId =
  | "america-do-norte"
  | "america-central"
  | "america-do-sul"
  | "europa"
  | "asia"
  | "africa"
  | "oceania";

export interface DiaRoteiro {
  dia: number;
  titulo: string;
  descricao: string;
  imagem_url: string;
}

export interface ItemNatureza {
  id: string;
  nome: string;
  nome_cientifico?: string;
  foto_url: string;
  som_url: string | null;
  curiosidade: string;
  habitat: string;
}

export interface ItemGastronomia {
  id: string;
  nome: string;
  foto_url: string;
  adjetivo: string;
  historia: string;
}

export interface Comparativo {
  clima_predominante: string;
  bioma_principal: string;
  elemento_marcante: string;
  agricultura_construcoes: string;
  roupas_modo_de_vida: string;
  fauna_alimentacao: string;
}

export interface Pais {
  id: string;
  nome: string;
  continente: ContinenteId;
  bandeira: string;
  coordenadas: { x: number; y: number };
  imagem_capa: string;
  resumo_geografico: string;
  roteiro_viagem: DiaRoteiro[];
  fauna_flora: ItemNatureza[];
  gastronomia: ItemGastronomia[];
  comparativo: Comparativo;
}

export interface Continente {
  id: ContinenteId;
  nome: string;
  disponivel: boolean;
}

export interface CountriesData {
  continentes: Continente[];
  paises: Pais[];
}
