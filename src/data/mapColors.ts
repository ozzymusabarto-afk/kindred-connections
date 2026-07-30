// Paleta vibrante do mapa mundi. Usa o índice de cor do Natural Earth
// (MAPCOLOR9), que garante que dois vizinhos nunca recebam o mesmo tom.
const PALETA = [
  "var(--map-1)",
  "var(--map-2)",
  "var(--map-3)",
  "var(--map-4)",
  "var(--map-5)",
  "var(--map-6)",
  "var(--map-7)",
  "var(--map-8)",
  "var(--map-9)",
];

/** Países com destaque próprio (origem das crianças e destinos com conteúdo). */
const DESTAQUES: Record<string, string> = {
  br: "var(--map-brasil)",
};

export function corDoMapa(codigo: string, indice: number): string {
  return DESTAQUES[codigo] ?? PALETA[(indice - 1 + PALETA.length) % PALETA.length];
}

/** Compatibilidade com o mapa antigo das Américas. */
export function corDoPais(codigo: string): string {
  return DESTAQUES[codigo] ?? PALETA[codigo.charCodeAt(0) % PALETA.length];
}
