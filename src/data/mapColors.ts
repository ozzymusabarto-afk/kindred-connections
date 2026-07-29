// Cor de cada país no mapa, agrupada por região para o mapa ficar
// colorido como uma ilustração, sem duas vizinhas iguais.
const CORES_POR_PAIS: Record<string, string> = {
  // América do Norte
  ca: "var(--map-1)",
  us: "var(--map-2)",
  mx: "var(--map-3)",
  gl: "var(--map-6)",
  // América Central e Caribe
  gt: "var(--map-4)",
  bz: "var(--map-6)",
  sv: "var(--map-5)",
  hn: "var(--map-2)",
  ni: "var(--map-1)",
  cr: "var(--map-3)",
  pa: "var(--map-4)",
  cu: "var(--map-5)",
  do: "var(--map-1)",
  ht: "var(--map-3)",
  jm: "var(--map-2)",
  pr: "var(--map-4)",
  // América do Sul
  co: "var(--map-2)",
  ve: "var(--map-4)",
  ec: "var(--map-5)",
  pe: "var(--map-3)",
  bo: "var(--map-1)",
  br: "var(--map-6)",
  py: "var(--map-4)",
  uy: "var(--map-5)",
  ar: "var(--map-2)",
  cl: "var(--map-1)",
  gy: "var(--map-3)",
  sr: "var(--map-5)",
  gf: "var(--map-1)",
};

export function corDoPais(codigo: string): string {
  return CORES_POR_PAIS[codigo] ?? "var(--map-6)";
}
