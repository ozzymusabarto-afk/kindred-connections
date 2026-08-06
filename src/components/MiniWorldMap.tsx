import React from "react";
import type { ContinenteId } from "@/data/types";

interface MiniWorldMapProps {
  highlightedContinent: ContinenteId;
}

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ highlightedContinent }) => {
  // Coordenadas simplificadas para um mapa-múndi decorativo
  // viewBox="0 0 800 400"
  
  const paths: Record<ContinenteId, string> = {
    "america-do-norte": "M60,40 C100,20 180,30 240,60 L240,160 C200,180 140,190 60,140 Z",
    "america-do-sul": "M160,180 C200,180 240,180 240,180 L280,340 C240,380 200,380 180,380 C140,300 140,240 160,180",
    "europa": "M340,50 C380,40 420,40 450,60 L450,130 C400,140 360,140 340,130 Z",
    "africa": "M330,140 C400,120 450,130 460,150 L500,280 C460,340 400,360 350,340 C310,300 310,200 330,140",
    "asia": "M450,50 C550,30 700,40 760,80 L780,240 C700,270 600,280 500,260 L450,150 Z",
    "oceania": "M620,280 C680,270 740,270 780,280 L780,370 C720,390 660,390 620,370 Z",
    "america-central": "M160,160 L200,180 L180,200 Z"
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
