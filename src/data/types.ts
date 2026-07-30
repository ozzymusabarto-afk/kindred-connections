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
  imagem_url?: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
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

/** Foto secundária da galeria do ponto de observação (sem lupas). */
export interface FotoGaleria {
  id: string;
  imagem_url: string;
  /** Legenda curta exibida abaixo da miniatura. */
  legenda: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

export interface PontoObservacao {
  titulo: string;
  imagem_url: string;
  hotspots: Hotspot[];
  /** Miniaturas com outros ângulos do local. */
  galeria?: FotoGaleria[];
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

export interface ReferenciaDoDia {
  id: string;
  contexto: string;
  /** Fala mais longa do guia local nesta parada. */
  texto_guia?: string;
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
  /** Fala do comandante no idioma local. */
  fala_piloto_original?: string;
  /** Tradução da fala do comandante. */
  fala_piloto_traducao?: string;
  idioma?: string;
  fuso_horario?: string;
  temperatura?: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

/** Texto de deslocamento exibido na abertura de um dia. */
export interface AberturaDoDia {
  imagem_url: string;
  texto: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

export interface BaseHospedagem {
  nome: string;
  imagem_url: string;
  descricao: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

export interface DiaRoteiro {
  dia: number;
  titulo: string;
  descricao: string;
  imagem_url: string;
  guia_local?: string;
  guia_nome?: string;
  clima_do_dia?: string;
  abertura?: AberturaDoDia;
  transporte?: Transporte;
  observacao?: PontoObservacao;
  fauna_do_dia?: ReferenciaDoDia;
  sabor_do_dia?: ReferenciaDoDia;
  perguntas?: PerguntaSocratica[];
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

export interface ItemNatureza {
  id: string;
  nome: string;
  nome_cientifico?: string;
  foto_url: string;
  som_url: string | null;
  curiosidade: string;
  habitat: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
}

export interface ItemGastronomia {
  id: string;
  nome: string;
  foto_url: string;
  adjetivo: string;
  historia: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
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
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
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
