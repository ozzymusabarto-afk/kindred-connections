export type ContinenteId =
  | "america-do-norte"
  | "america-central"
  | "america-do-sul"
  | "europa"
  | "asia"
  | "africa"
  | "oceania";

/** Som ambiente real de uma etapa da expedição. */
export interface SomAmbiente {
  url: string;
  /** Descrição curta do que se ouve. */
  legenda: string;
  /** Crédito de autoria e licença do áudio. */
  credito?: string;
}

export interface Transporte {
  nome: string;
  icone: string;
  descricao: string;
  imagem_url?: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
  /** Miniaturas com outros ângulos do transporte. */
  galeria?: FotoGaleria[];
  /** Som real ouvido a bordo. */
  som?: SomAmbiente;
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

/** Nota curta que ancora o novo no que a criança já conhece do Brasil. */
export interface NotaBrasil {
  /** Título curto, ex.: "Você sabia?". */
  titulo?: string;
  texto: string;
}

/** Mini-desafio de observação ao final do dia (sem pontuação competitiva). */
export interface DesafioDoDia {
  pergunta: string;
  opcoes: string[];
  /** Índice da opção correta em `opcoes`. */
  correta: number;
  /** Explicação exibida após a resposta, certa ou errada. */
  explicacao: string;
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
  /** Miniaturas com outras fotos reais da chegada. */
  galeria?: FotoGaleria[];
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
  /** Miniaturas com outras fotos reais da base. */
  galeria?: FotoGaleria[];
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
  /** Notas "Você sabia?" comparando com o Brasil, por etapa da jornada. */
  notas_brasil?: Partial<
    Record<"transporte" | "observacao" | "fauna" | "sabor", NotaBrasil>
  >;
  /** Mini-desafio de observação exibido no carimbo do dia. */
  desafio?: DesafioDoDia;
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
  /** Miniaturas com outras fotos reais do animal. */
  galeria?: FotoGaleria[];
}

export interface ItemGastronomia {
  id: string;
  nome: string;
  foto_url: string;
  adjetivo: string;
  historia: string;
  /** Crédito de autoria e licença da imagem. */
  credito?: string;
  /** O pedido mais comum no local visitado. */
  destaque?: string;
  /** Miniaturas com o lugar onde se come e outras opções. */
  galeria?: FotoGaleria[];
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
  /** URL da bandeira oficial (imagem HD). */
  bandeira_url?: string;
  /** Capital do país, em português. */
  capital?: string;
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
