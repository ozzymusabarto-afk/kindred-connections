import React from "react";
import type { ContinenteId } from "@/data/types";

interface MiniWorldMapProps {
  highlightedContinent: ContinenteId;
}

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ highlightedContinent }) => {
  // Coordenadas simplificadas para um mapa-múndi decorativo
  // viewBox="0 0 800 400"
  
  const paths: Record<ContinenteId, string> = {
    "america-do-norte": "M60,60 L240,60 L240,180 L160,200 L60,140 Z",
    "america-do-sul": "M160,200 L240,180 L280,340 L180,380 Z",
    "europa": "M340,60 L450,60 L450,130 L340,130 Z",
    "africa": "M340,130 L450,130 L500,280 L420,350 L320,250 Z",
    "asia": "M450,60 L750,60 L780,250 L550,280 L450,130 Z",
    "oceania": "M620,280 L780,280 L780,380 L620,380 Z",
    "america-central": "M160,180 L200,180 L200,210 L160,210 Z" // Simbólico
  };

  return (
    <div className="flex flex-col items-center mb-12 animate-fade-in group">
      <div className="w-full max-w-[500px] aspect-[2/1] bg-sky-50/30 rounded-[2.5rem] p-6 border-2 border-sky-100/50 shadow-inner relative overflow-hidden backdrop-blur-sm">
        {/* Oceano Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full drop-shadow-xl"
        >
          {Object.entries(paths).map(([id, path]) => (
            <path
              key={id}
              d={path}
              className={`transition-all duration-1000 ease-in-out ${
                highlightedContinent === id 
                  ? "fill-sky-400 stroke-sky-500 stroke-[3] opacity-100 scale-[1.02]" 
                  : "fill-gray-200 stroke-gray-300 stroke-1 opacity-40"
              }`}
              style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
            />
          ))}
        </svg>
      </div>
      <p className="mt-6 text-sky-600/80 font-rounded text-lg font-bold italic tracking-wide animate-pulse-slow">
        "Você está explorando esta região do nosso planeta."
      </p>
    </div>
  );
};
