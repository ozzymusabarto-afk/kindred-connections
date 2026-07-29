import { useCallback, useEffect, useState } from "react";

export interface CarimboPassaporte {
  paisId: string;
  nota: string;
  data: string;
}

const STORAGE_KEY = "diario-de-bordo:passaporte";

function ler(): CarimboPassaporte[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CarimboPassaporte[]) : [];
  } catch {
    return [];
  }
}

export function usePassport() {
  const [carimbos, setCarimbos] = useState<CarimboPassaporte[]>([]);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    setCarimbos(ler());
    setPronto(true);
  }, []);

  const salvarNota = useCallback((paisId: string, nota: string) => {
    setCarimbos((atual) => {
      const outros = atual.filter((c) => c.paisId !== paisId);
      const proximo = [
        ...outros,
        { paisId, nota, data: new Date().toISOString() },
      ];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(proximo));
      } catch {
        /* armazenamento indisponível */
      }
      return proximo;
    });
  }, []);

  const getCarimbo = useCallback(
    (paisId: string) => carimbos.find((c) => c.paisId === paisId),
    [carimbos],
  );

  return { carimbos, getCarimbo, salvarNota, pronto };
}
