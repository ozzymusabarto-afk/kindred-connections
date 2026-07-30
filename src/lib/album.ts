import type { Pais } from "@/data/types";

export type CategoriaAlbum =
  | "chegada"
  | "base"
  | "transporte"
  | "lugar"
  | "fauna"
  | "sabor";

export interface FotoAlbum {
  id: string;
  imagem_url: string;
  legenda: string;
  credito?: string;
  categoria: CategoriaAlbum;
  /** Dia da expedição em que a foto é colecionada (0 = chegada e base). */
  dia: number;
}

export const ROTULO_CATEGORIA: Record<CategoriaAlbum, string> = {
  chegada: "A chegada",
  base: "Nossa base",
  transporte: "Como andamos por lá",
  lugar: "Os lugares que vimos",
  fauna: "Bichos que encontramos",
  sabor: "Sabores que provamos",
};

export const ORDEM_CATEGORIAS: CategoriaAlbum[] = [
  "chegada",
  "base",
  "transporte",
  "lugar",
  "fauna",
  "sabor",
];

function push(
  destino: FotoAlbum[],
  vistos: Set<string>,
  foto: Omit<FotoAlbum, "id"> & { id?: string },
) {
  if (!foto.imagem_url || vistos.has(foto.imagem_url)) return;
  vistos.add(foto.imagem_url);
  destino.push({
    ...foto,
    id: foto.id ?? `${foto.categoria}-${destino.length}`,
  } as FotoAlbum);
}

/**
 * Reúne todas as fotos reais usadas na expedição de um país, já organizadas
 * por categoria e marcadas com o dia em que são colecionadas.
 */
export function coletarFotos(pais: Pais): FotoAlbum[] {
  const fotos: FotoAlbum[] = [];
  const vistos = new Set<string>();

  if (pais.chegada) {
    push(fotos, vistos, {
      imagem_url: pais.chegada.imagem_url,
      legenda: "A primeira vista pela janela do avião",
      credito: pais.chegada.credito,
      categoria: "chegada",
      dia: 0,
    });
    for (const g of pais.chegada.galeria ?? [])
      push(fotos, vistos, { ...g, categoria: "chegada", dia: 0 });
  }

  if (pais.base) {
    push(fotos, vistos, {
      imagem_url: pais.base.imagem_url,
      legenda: pais.base.nome,
      credito: pais.base.credito,
      categoria: "base",
      dia: 0,
    });
    for (const g of pais.base.galeria ?? [])
      push(fotos, vistos, { ...g, categoria: "base", dia: 0 });
  }

  const diaDaFauna = new Map<string, number>();
  const diaDoSabor = new Map<string, number>();

  for (const d of pais.roteiro_viagem) {
    if (d.fauna_do_dia) diaDaFauna.set(d.fauna_do_dia.id, d.dia);
    if (d.sabor_do_dia) diaDoSabor.set(d.sabor_do_dia.id, d.dia);

    if (d.transporte?.imagem_url) {
      push(fotos, vistos, {
        imagem_url: d.transporte.imagem_url,
        legenda: d.transporte.nome,
        credito: d.transporte.credito,
        categoria: "transporte",
        dia: d.dia,
      });
    }
    for (const g of d.transporte?.galeria ?? [])
      push(fotos, vistos, { ...g, categoria: "transporte", dia: d.dia });

    if (d.observacao) {
      push(fotos, vistos, {
        imagem_url: d.observacao.imagem_url,
        legenda: d.observacao.titulo,
        credito: d.observacao.credito,
        categoria: "lugar",
        dia: d.dia,
      });
      for (const g of d.observacao.galeria ?? [])
        push(fotos, vistos, { ...g, categoria: "lugar", dia: d.dia });
    }
  }

  for (const item of pais.fauna_flora) {
    const dia = diaDaFauna.get(item.id) ?? 1;
    push(fotos, vistos, {
      imagem_url: item.foto_url,
      legenda: item.nome,
      credito: item.credito,
      categoria: "fauna",
      dia,
    });
    for (const g of item.galeria ?? [])
      push(fotos, vistos, { ...g, categoria: "fauna", dia });
  }

  for (const item of pais.gastronomia) {
    const dia = diaDoSabor.get(item.id) ?? 1;
    push(fotos, vistos, {
      imagem_url: item.foto_url,
      legenda: item.nome,
      credito: item.credito,
      categoria: "sabor",
      dia,
    });
    for (const g of item.galeria ?? [])
      push(fotos, vistos, { ...g, categoria: "sabor", dia });
  }

  return fotos;
}

/** Agrupa as fotos por categoria, mantendo a ordem do álbum. */
export function porCategoria(fotos: FotoAlbum[]) {
  return ORDEM_CATEGORIAS.map((categoria) => ({
    categoria,
    rotulo: ROTULO_CATEGORIA[categoria],
    fotos: fotos.filter((f) => f.categoria === categoria),
  })).filter((g) => g.fotos.length > 0);
}

/** Divide uma lista em blocos de tamanho fixo (uma página do álbum). */
export function emPaginas<T>(itens: T[], porPagina: number): T[][] {
  const paginas: T[][] = [];
  for (let i = 0; i < itens.length; i += porPagina) {
    paginas.push(itens.slice(i, i + porPagina));
  }
  return paginas;
}
