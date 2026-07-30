import raw from "./countriesData.json";
import { estadosUnidos } from "./countries/usa";
import { canada } from "./countries/canada";
import type { CountriesData, Continente, Pais } from "./types";

const data = raw as CountriesData;

/** Países vindos do arquivo por país (um módulo dedicado para cada). */
const paisesDedicados: Pais[] = [estadosUnidos, canada];
const idsDedicados = new Set(paisesDedicados.map((p) => p.id));

export const continentes: Continente[] = data.continentes;
export const paises: Pais[] = [
  ...data.paises.filter((p) => !idsDedicados.has(p.id)),
  ...paisesDedicados,
];


export function getPais(id: string): Pais | undefined {
  return paises.find((p) => p.id === id);
}

export function getPaisesPorContinente(continenteId: string): Pais[] {
  return paises.filter((p) => p.continente === continenteId);
}

export function getContinente(id: string): Continente | undefined {
  return continentes.find((c) => c.id === id);
}
