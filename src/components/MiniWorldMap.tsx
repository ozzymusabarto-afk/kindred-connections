import React from "react";
import type { ContinenteId } from "@/data/types";
import { ContinentMap } from "./ContinentMaps";

interface MiniWorldMapProps {
  highlightedContinent: ContinenteId;
}

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ highlightedContinent }) => {
  const continentColors: Record<ContinenteId, string> = {
    "america-do-sul": "#4ade80", // verde
    "america-do-norte": "#facc15", // amarelo
    "europa": "#60a5fa", // azul
    "africa": "#fbbf24", // ocre/laranja
    "asia": "#f87171", // vermelho
    "oceania": "#c084fc", // roxo
    "america-central": "#fb923c", // laranja
  };

  const continentName = highlightedContinent.replace(/-/g, ' ');
  const color = continentColors[highlightedContinent] || "#94a3b8";

  return (
    <div className="flex flex-col items-center mb-12 animate-fade-in group">
      <div className="w-full max-w-[400px] aspect-square bg-sky-50/50 rounded-full overflow-hidden border-8 border-white shadow-premium relative group-hover:scale-[1.05] transition-all duration-500 flex items-center justify-center p-8">
        <div className="w-full h-full flex items-center justify-center relative">
          <ContinentMap id={highlightedContinent} color={color} />
          
          {/* Indicador piscante no país (Simulado no centro do continente para este mini mapa) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-75" />
            <div className="w-2 h-2 bg-white rounded-full shadow-lg" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 to-transparent pointer-events-none" />
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sky-900 font-display text-2xl font-bold capitalize drop-shadow-sm">
          {continentName}
        </p>
        <p className="text-sky-600 font-rounded text-lg mt-1">
          Você está explorando esta região do nosso planeta.
        </p>
      </div>
    </div>
  );
};
