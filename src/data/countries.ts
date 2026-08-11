import raw from "./countriesData.json";
import { estadosUnidos } from "./countries/usa";
import { canada } from "./countries/canada";
import { portugal } from "./countries/portugal";
import { mexico } from "./countries/mexico";
import { italia } from "./countries/italia";
import { spain } from "./countries/spain";
import { brasil } from "./countries/brazil";
import { argentina } from "./countries/argentina";
import { chile } from "./countries/chile";
import { japao } from "./countries/japao";
import { egito } from "./countries/egito";
import { australia } from "./countries/australia";
import { china } from "./countries/china";
import { marrocos } from "./countries/marrocos";
import { africa_do_sul } from "./countries/africa_do_sul";
import { costaRica } from "./countries/costa-rica";
import { france } from "./countries/france";
import { india } from "./countries/india";
import { reino_unido } from "./countries/reino_unido";
import { peru } from "./countries/peru";
import { colombia } from "./countries/colombia";
import { grecia } from "./countries/grecia";
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
  reino_unido,
  grecia,
  egito,
  marrocos,
  africa_do_sul,
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
