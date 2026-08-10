import React, { useEffect, useState } from "react";
import type { Pais } from "@/data/types";

interface MiniWorldMapProps {
  pais: Pais;
}

const MAP_URL = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

// Coordenadas aproximadas para o ponto pulsante baseadas no WorldMap.tsx
const COUNTRY_COORDS: Record<string, { x: number, y: number }> = {
  "brasil": { x: 31, y: 65 },
  "estados-unidos": { x: 18, y: 35 },
  "canada": { x: 18, y: 22 },
  "mexico": { x: 17, y: 46 },
  "portugal": { x: 45, y: 35 },
  "italia": { x: 50, y: 35 },
  "escocia": { x: 47, y: 25 },
  "argentina": { x: 29, y: 80 },
  "chile": { x: 27, y: 78 },
  "egito": { x: 55, y: 45 },
  "marrocos": { x: 46, y: 43 },
  "africa-do-sul": { x: 55, y: 80 },
  "japao": { x: 88, y: 38 },
  "china": { x: 80, y: 40 },
  "tailandia": { x: 82, y: 55 },
  "australia": { x: 88, y: 78 },
  "nova-zelandia": { x: 95, y: 88 },
  "fiji": { x: 97, y: 70 },
  "costa-rica": { x: 22, y: 55 },
  "panama": { x: 24, y: 57 },
  "guatemala": { x: 19, y: 53 },
};

export const MiniWorldMap: React.FC<MiniWorldMapProps> = ({ pais }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const pos = COUNTRY_COORDS[pais.id];

  useEffect(() => {
    fetch(MAP_URL)
      .then(res => res.text())
      .then(text => setSvgContent(text))
      .catch(err => console.error("Falha ao carregar SVG do mini mapa", err));
  }, []);

  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in w-full max-w-[600px]">
      <div className="relative w-full aspect-video bg-sky-100 rounded-2xl overflow-hidden border-4 border-white shadow-premium group">
        {/* Mapa-múndi de fundo */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center p-2 mini-world-svg"
          dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
        />

        {/* Camada de destaque e ponto pulsante */}
        {pos && (
          <svg 
            viewBox="0 0 100 56.25" 
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <circle 
              cx={pos.x} 
              cy={pos.y} 
              r="2" 
              className="fill-white/80 animate-ping"
            />
            <circle 
              cx={pos.x} 
              cy={pos.y} 
              r="1" 
              className="fill-white shadow-lg"
            />
          </svg>
        )}

        {/* Overlay de suavização */}
        <div className="absolute inset-0 bg-sky-900/5 pointer-events-none" />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sky-900 font-display text-xl font-bold capitalize">
          {pais.nome}
        </p>
        <p className="text-sky-600 font-rounded text-sm mt-0.5">
          Você está explorando esta região do nosso planeta.
        </p>
      </div>

      <style>{`
        .mini-world-svg svg {
          width: 100%;
          height: 100%;
        }
        .mini-world-svg path {
          fill: #cbd5e1; /* Cinza claro suave */
          stroke: #ffffff;
          stroke-width: 0.3px;
        }
        /* Destaque do país escolhido */
        .mini-world-svg path[id*="${pais.id.replace(/-/g, ' ')}"],
        .mini-world-svg path[id*="${pais.codigo_mapa}"] {
          fill: #FFB703 !important;
          stroke-width: 0.6px !important;
        }
      `}</style>
    </div>
  );
};
