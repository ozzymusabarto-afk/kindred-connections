import raw from "./countriesData.json";
import { estadosUnidos } from "./countries/usa";
import { canada } from "./countries/canada";
import { portugal } from "./countries/portugal";
import { mexico } from "./countries/mexico";
import { italia } from "./countries/italy";
import { escocia } from "./countries/scotland";
import { brasil } from "./countries/brazil";
import { argentina } from "./countries/argentina";
import { chile } from "./countries/chile";
import { japao } from "./countries/japan";
import { egito } from "./countries/egypt";
import { australia } from "./countries/australia";
import { china } from "./countries/china";
import { tailandia } from "./countries/thailand";
import { marrocos } from "./countries/morocco";
import { africaDoSul } from "./countries/south-africa";
import { novaZelandia } from "./countries/new-zealand";
import { fiji } from "./countries/fiji";
import { costaRica } from "./countries/costa-rica";
import { panama } from "./countries/panama";
import { guatemala } from "./countries/guatemala";
import type { CountriesData, Continente, Pais } from "./types";

const data = raw as CountriesData;

/** Países vindos do arquivo por país (um módulo dedicado para cada). */
const paisesDedicados: Pais[] = [
  estadosUnidos, 
  canada, 
  portugal, 
  mexico, 
  italia, 
  escocia,
  brasil,
  argentina,
  chile,
  japao,
  egito,
  australia,
  china,
  tailandia,
  marrocos,
  africaDoSul,
  novaZelandia,
  fiji,
  costaRica,
  panama,
  guatemala
];
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
