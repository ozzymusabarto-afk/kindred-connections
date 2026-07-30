/**
 * Camada de som ambiente: toca um único áudio real por vez, com fade suave.
 * Respeita o interruptor de som do cabeçalho e só toca após interação.
 */

import { somLigado } from "./sfx";

let atual: HTMLAudioElement | null = null;
let urlAtual: string | null = null;
const ouvintes = new Set<(url: string | null) => void>();

function avisar() {
  ouvintes.forEach((fn) => fn(urlAtual));
}

export function assinarAmbiente(fn: (url: string | null) => void) {
  ouvintes.add(fn);
  fn(urlAtual);
  return () => ouvintes.delete(fn);
}

export function urlTocando() {
  return urlAtual;
}

function esmaecerEParar(audio: HTMLAudioElement) {
  const passo = audio.volume / 8;
  const t = setInterval(() => {
    if (audio.volume - passo <= 0.02) {
      clearInterval(t);
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0.85;
      return;
    }
    audio.volume = Math.max(0, audio.volume - passo);
  }, 40);
}

export function pararAmbiente() {
  if (atual) esmaecerEParar(atual);
  atual = null;
  urlAtual = null;
  avisar();
}

/** Toca (ou pausa, se já for o áudio atual) um som ambiente. */
export function tocarAmbiente(url: string, emLoop = true) {
  if (typeof window === "undefined") return;
  if (urlAtual === url) {
    pararAmbiente();
    return;
  }
  if (atual) esmaecerEParar(atual);
  if (!somLigado()) {
    urlAtual = null;
    avisar();
    return;
  }
  const audio = new Audio(url);
  audio.loop = emLoop;
  audio.preload = "auto";
  audio.volume = 0;
  audio.addEventListener("ended", () => {
    if (urlAtual === url) pararAmbiente();
  });
  void audio.play().then(
    () => {
      const alvo = 0.85;
      const t = setInterval(() => {
        if (audio.volume + 0.1 >= alvo) {
          audio.volume = alvo;
          clearInterval(t);
          return;
        }
        audio.volume = Math.min(alvo, audio.volume + 0.1);
      }, 50);
    },
    () => {
      /* navegador bloqueou o autoplay: ignora silenciosamente */
    },
  );
  atual = audio;
  urlAtual = url;
  avisar();
}
