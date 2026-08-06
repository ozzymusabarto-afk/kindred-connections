import React from "react";
import type { ContinenteId } from "@/data/types";

interface MiniWorldMapProps {
  highlightedContinent: ContinenteId;
}

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ highlightedContinent }) => {
  const images: Record<ContinenteId, string> = {
    "america-do-norte": "https://images.unsplash.com/photo-1581404476143-fb31d742929f?auto=format&fit=crop&q=80&w=800",
    "america-do-sul": "https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=800",
    "europa": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
    "africa": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800",
    "asia": "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800",
    "oceania": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
    "america-central": "https://images.unsplash.com/photo-1512403734033-040213aa0721?auto=format&fit=crop&q=80&w=800"
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
