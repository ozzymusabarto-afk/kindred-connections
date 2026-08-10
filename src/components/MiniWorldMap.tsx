import React from "react";
import type { ContinenteId } from "@/data/types";

interface MiniWorldMapProps {
  highlightedContinent: ContinenteId;
}

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ highlightedContinent }) => {
  const images: Record<ContinenteId, string> = {
    "america-do-norte": "/mapas/continente-norte.png",
    "america-do-sul": "/mapas/continente-sul.png",
    "europa": "/mapas/continente-europa.png",
    "africa": "/mapas/continente-africa.png",
    "asia": "/mapas/continente-asia.png",
    "oceania": "/mapas/continente-oceania.png",
    "america-central": "/mapas/continente-central.png"
  };

  const imageSrc = images[highlightedContinent] || images["america-do-norte"];

  return (
    <div className="flex flex-col items-center mb-12 animate-fade-in group">
      <div className="w-full max-w-[600px] aspect-[16/9] bg-sky-50/30 rounded-[2rem] overflow-hidden border-4 border-white shadow-premium relative group-hover:scale-[1.02] transition-transform duration-500">
        <img 
          src={imageSrc} 
          alt={`Mapa de ${highlightedContinent.replace(/-/g, ' ')}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-white font-display text-xl drop-shadow-md">
            Você está explorando esta região do nosso planeta.
          </p>
        </div>
      </div>
    </div>
  );
};
