export type ContinenteId =
  | "america-do-norte"
  | "america-central"
  | "america-do-sul"
  | "europa"
  | "asia"
  | "africa"
  | "oceania";

export interface Transporte {
  nome: string;
  icone: string;
  descricao: string;
}

export interface Hotspot {
  id: string;
  /** Posição horizontal em % sobre a imagem. */
  x: number;
  /** Posição vertical em % sobre a imagem. */
  y: number;
  titulo: string;
  texto: string;
}

export interface PontoObservacao {
  titulo: string;
  imagem_url: string;
  hotspots: Hotspot[];
}

export interface ReferenciaDoDia {
  id: string;
  contexto: string;
}

export interface PerguntaSocratica {
  id: string;
  tipo: "observacao" | "comparacao";
  /** Passo da jornada ao qual a pergunta pertence. */
  etapa?: "transporte" | "observacao" | "fauna" | "sabor";
  texto: string;
}

export interface Chegada {
  imagem_url: string;
  texto: string;
}

export interface BaseHospedagem {
  nome: string;
  imagem_url: string;
  descricao: string;
}

export interface DiaRoteiro {
  dia: number;
  titulo: string;
  descricao: string;
  imagem_url: string;
  guia_local?: string;
  guia_nome?: string;
  clima_do_dia?: string;
  transporte?: Transporte;
  observacao?: PontoObservacao;
  fauna_do_dia?: ReferenciaDoDia;
  sabor_do_dia?: ReferenciaDoDia;
  perguntas?: PerguntaSocratica[];
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
  /** Código do país no SVG do mapa (ex.: "ca", "mx", "us"). */
  codigo_mapa: string;
  bandeira: string;
  coordenadas: { x: number; y: number };
  imagem_capa: string;
  resumo_geografico: string;
  chegada?: Chegada;
  base?: BaseHospedagem;
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
