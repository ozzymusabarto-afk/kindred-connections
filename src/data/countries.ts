import raw from "./countriesData.json";
import { estadosUnidos } from "./countries/usa";
import { canada } from "./countries/canada";
import { portugal } from "./countries/portugal";
import { mexico } from "./countries/mexico";
import { italia } from "./countries/italy";
import { spain } from "./countries/spain";
import { brasil } from "./countries/brazil";
import { argentina } from "./countries/argentina";
import { chile } from "./countries/chile";
import { japao } from "./countries/japan";
import { egito } from "./countries/egypt";
import { australia } from "./countries/australia";
import { china } from "./countries/china";
import { marrocos } from "./countries/morocco";
import { africaDoSul } from "./countries/south-africa";
import { costaRica } from "./countries/costa-rica";
import { france } from "./countries/france";
import { india } from "./countries/india";
import { unitedKingdom } from "./countries/united-kingdom";
import { peru } from "./countries/peru";
import { colombia } from "./countries/colombia";
import { greece } from "./countries/greece";
import type { CountriesData, Continente, Pais } from "./types";

const data = raw as CountriesData;

/** Países da expedição original (21 destinos). */
const paisesDedicados: Pais[] = [
  estadosUnidos, 
  canada, 
  mexico, 
  costaRica,
  brasil,
  argentina,
  chile,
  peru,
  colombia,
  portugal, 
  spain,
  france,
  italia, 
  unitedKingdom,
  greece,
  egito,
  marrocos,
  africaDoSul,
  japao,
  china,
  india,
  australia
];
const idsDedicados = new Set(paisesDedicados.map((p) => p.id));

export const continentes: Continente[] = data.continentes;
export const paises: Pais[] = paisesDedicados;


export function getPais(id: string): Pais | undefined {
  return paises.find((p) => p.id === id);
}

export function getPaisesPorContinente(continenteId: string): Pais[] {
  return paises.filter((p) => p.continente === continenteId);
}

export function getContinente(id: string): Continente | undefined {
  return continentes.find((c) => c.id === id);
}
