import React from "react";
import type { ContinenteId } from "@/data/types";

interface MiniWorldMapProps {
  highlightedContinent: ContinenteId;
}

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ highlightedContinent }) => {
  // Coordenadas simplificadas para um mapa-múndi decorativo
  // viewBox="0 0 800 400"
  
  const continentPaths: Record<ContinenteId, string> = {
    "america-norte": "M100,50 L250,50 L280,180 L200,220 L150,200 Z", // Simplificado
    "america-sul": "M200,220 L280,180 L320,280 L250,380 L180,300 Z",
    "europa": "M350,50 L480,50 L500,120 L420,150 L380,120 Z",
    "africa": "M380,120 L420,150 L500,150 L520,300 L450,350 L350,250 Z",
    "asia": "M480,50 L750,50 L780,250 L600,280 L500,150 Z",
    "oceania": "M650,280 L780,280 L780,380 L650,380 Z",
    "antartida": "M100,380 L700,380 L700,400 L100,400 Z"
  };

  // Caminhos reais (aproximados) para um visual melhor
  const paths: Record<ContinenteId, string> = {
    "america-norte": "M60,60 L240,60 L240,180 L160,200 L60,140 Z",
    "america-sul": "M160,200 L240,180 L280,340 L180,380 Z",
    "europa": "M340,60 L450,60 L450,130 L340,130 Z",
    "africa": "M340,130 L450,130 L500,280 L420,350 L320,250 Z",
    "asia": "M450,60 L750,60 L780,250 L550,280 L450,130 Z",
    "oceania": "M620,280 L780,280 L780,380 L620,380 Z",
    "antartida": "M50,380 L750,380 L750,400 L50,400 Z"
  };

  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in">
      <div className="w-full max-w-[400px] aspect-[2/1] bg-sky-50/50 rounded-2xl p-4 border border-sky-100/50 shadow-inner">
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full drop-shadow-sm"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}
        >
          {Object.entries(paths).map(([id, path]) => (
            <path
              key={id}
              d={path}
              className={`transition-colors duration-700 ease-in-out ${
                highlightedContinent === id 
                  ? "fill-sky-400 stroke-sky-500 stroke-2" 
                  : "fill-gray-200 stroke-gray-300 stroke-1"
              }`}
            />
          ))}
        </svg>
      </div>
      <p className="mt-4 text-sky-600 font-rounded font-medium italic animate-pulse-slow">
        "Você está explorando esta região do nosso planeta."
      </p>
    </div>
  );
};
