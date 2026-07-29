/**
 * Efeitos sonoros sutis gerados na hora (Web Audio API), sem arquivos externos.
 * O contexto de áudio só é criado no primeiro clique do usuário.
 */

const STORAGE_KEY = "diario-de-bordo:som";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function somLigado(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function definirSom(ligado: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, ligado ? "on" : "off");
  } catch {
    /* ignora */
  }
}

function tocarNota(freq: number, inicio: number, duracao: number, volume = 0.06) {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  const t = c.currentTime + inicio;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duracao);
  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + duracao + 0.05);
}

export type EfeitoSonoro = "passo" | "lupa" | "carimbo" | "dia";

export function tocar(efeito: EfeitoSonoro) {
  if (!somLigado()) return;
  switch (efeito) {
    case "passo":
      tocarNota(320, 0, 0.12, 0.05);
      break;
    case "lupa":
      tocarNota(660, 0, 0.1, 0.045);
      tocarNota(880, 0.06, 0.12, 0.035);
      break;
    case "carimbo":
      tocarNota(180, 0, 0.16, 0.07);
      break;
    case "dia":
      [523.25, 659.25, 783.99].forEach((f, i) =>
        tocarNota(f, i * 0.11, 0.5, 0.05),
      );
      break;
  }
}
