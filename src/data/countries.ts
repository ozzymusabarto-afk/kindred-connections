import raw from "./countriesData.json";
import type { CountriesData, Continente, Pais } from "./types";

const data = raw as CountriesData;

export const continentes: Continente[] = data.continentes;
export const paises: Pais[] = data.paises;

export function getPais(id: string): Pais | undefined {
  return paises.find((p) => p.id === id);
}

export function getPaisesPorContinente(continenteId: string): Pais[] {
  return paises.filter((p) => p.continente === continenteId);
}

export function getContinente(id: string): Continente | undefined {
  return continentes.find((c) => c.id === id);
}
