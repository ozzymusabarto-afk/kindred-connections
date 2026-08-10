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
  "france": { x: 48, y: 32 },
  "spain": { x: 46, y: 37 },
  "india": { x: 74, y: 48 },
  "united-kingdom": { x: 47, y: 28 },
  "peru": { x: 25, y: 63 },
  "colombia": { x: 26, y: 56 },
  "greece": { x: 53, y: 38 },
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
        .mini-world-svg path[id*="brazil"],
        .mini-world-svg path[id*="usa"],
        .mini-world-svg path[id*="united states"],
        .mini-world-svg path[id*="canada"],
        .mini-world-svg path[id*="mexico"],
        .mini-world-svg path[id*="portugal"],
        .mini-world-svg path[id*="italy"],
        .mini-world-svg path[id*="united kingdom"],
        .mini-world-svg path[id*="argentina"],
        .mini-world-svg path[id*="chile"],
        .mini-world-svg path[id*="egypt"],
        .mini-world-svg path[id*="morocco"],
        .mini-world-svg path[id*="south africa"],
        .mini-world-svg path[id*="japan"],
        .mini-world-svg path[id*="china"],
        .mini-world-svg path[id*="thailand"],
        .mini-world-svg path[id*="australia"],
        .mini-world-svg path[id*="new zealand"],
        .mini-world-svg path[id*="fiji"],
        .mini-world-svg path[id*="costa rica"],
        .mini-world-svg path[id*="panama"],
         .mini-world-svg path[id*="guatemala"],
         .mini-world-svg path[id*="france"],
         .mini-world-svg path[id*="spain"],
         .mini-world-svg path[id*="india"],
         .mini-world-svg path[id*="peru"],
         .mini-world-svg path[id*="colombia"],
         .mini-world-svg path[id*="greece"] {
          fill: #cbd5e1; /* Cor padrão para todos os países da expedição no mini mapa */
        }

        .mini-world-svg path[id*="${pais.id === 'brasil' ? 'brazil' : 
                                  pais.id === 'estados-unidos' ? 'usa' : 
                                  pais.id === 'italia' ? 'italy' : 
                                  pais.id === 'japao' ? 'japan' : 
                                  pais.id === 'egito' ? 'egypt' : 
                                   pais.id === 'escocia' ? 'united kingdom' :
                                   pais.id === 'france' ? 'france' :
                                   pais.id === 'spain' ? 'spain' :
                                   pais.id === 'india' ? 'india' :
                                   pais.id === 'united-kingdom' ? 'united kingdom' :
                                   pais.id === 'peru' ? 'peru' :
                                   pais.id === 'colombia' ? 'colombia' :
                                   pais.id === 'greece' ? 'greece' :
                                  pais.id.replace(/-/g, ' ')}"] {
          fill: #FFB703 !important;
          stroke-width: 0.6px !important;
        }
      `}</style>
    </div>
  );
};
