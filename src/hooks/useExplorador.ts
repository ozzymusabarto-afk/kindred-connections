import { useCallback, useEffect, useState } from "react";

/**
 * Ficha do explorador: nome escolhido pela criança, usado nas falas do
 * comandante, da guia local e nos carimbos do passaporte.
 */

const STORAGE_KEY = "diario-de-bordo:explorador";

function ler(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(STORAGE_KEY)?.trim() ?? "";
  } catch {
    return "";
  }
}

export function nomeExplorador(): string {
  return ler();
}

/** Trata o explorador pelo nome quando ele existe. */
export function vocativo(nome: string, alternativa = "explorador"): string {
  return nome ? nome : alternativa;
}

export function useExplorador() {
  const [nome, setNome] = useState("");
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    setNome(ler());
    setPronto(true);
  }, []);

  const salvar = useCallback((valor: string) => {
    const limpo = valor.trim().slice(0, 24);
    setNome(limpo);
    try {
      window.localStorage.setItem(STORAGE_KEY, limpo);
    } catch {
      /* armazenamento indisponível */
    }
  }, []);

  const limpar = useCallback(() => {
    setNome("");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* armazenamento indisponível */
    }
  }, []);

  return { nome, salvar, limpar, pronto };
}
