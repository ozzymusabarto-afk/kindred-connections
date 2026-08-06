import { useState } from "react";
import { WORLD_COUNTRIES, WORLD_VIEWBOX } from "@/data/worldMap";
import { Illustration2D } from "./Illustrations2D";
import type { Pais } from "@/data/types";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

// Coordenadas calibradas para o mapa ilustrado infantil (0-100%)
// Baseado no viewBox 2000x1000
const PIN_LOCATIONS: Record<string, { x: number, y: number }> = {
  "br": { x: 670, y: 680 },
  "us": { x: 420, y: 320 },
  "ca": { x: 400, y: 220 },
  "mx": { x: 380, y: 430 },
  "pt": { x: 935, y: 310 },
  "it": { x: 1045, y: 290 },
  "gb": { x: 960, y: 215 },
  "jp": { x: 1730, y: 325 },
  "eg": { x: 1145, y: 415 },
  "ar": { x: 635, y: 780 },
  "cl": { x: 590, y: 760 },
  "pe": { x: 575, y: 620 },
  "fr": { x: 975, y: 275 },
  "cn": { x: 1550, y: 360 },
  "za": { x: 1120, y: 720 },
  "au": { x: 1730, y: 730 },
  "in": { x: 1430, y: 450 },
  "ru": { x: 1450, y: 180 },
  "de": { x: 1010, y: 245 },
  "es": { x: 935, y: 335 },
  "gr": { x: 1095, y: 340 },
};

const IMMERSIVE_COUNTRIES = ["br", "us", "ca", "pt", "it", "gb", "mx", "ar", "cl", "pe"];

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [animating, setAnimating] = useState<{ to: string } | null>(null);

  const handleCountryClick = (countryId: string) => {
    const pais = paises.find((p) => p.codigo_mapa === countryId);
    if (!pais) return;

    setAnimating({ to: countryId });
    
    // Simular tempo de voo
    setTimeout(() => {
      setAnimating(null);
      onSelecionar(pais);
    }, 1500);
  };

  const brazil = PIN_LOCATIONS["br"];
  const destination = animating ? PIN_LOCATIONS[animating.to] : null;

  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#bae6fd] shadow-2xl border-8 border-white aspect-video group/map">
      {/* Background: Mapa Ilustrado Infantil */}
      <img 
        src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop"
        alt="Mapa Mundi Ilustrado"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/map:scale-[1.02]"
        style={{ 
          filter: "sepia(0.2) brightness(1.1) contrast(1.1)",
        }}
      />
      
      {/* Camada de Overlay de Papel Antigo/Atlas */}
      <div className="absolute inset-0 opacity-20 pointer-events-none paper-grain" />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />

      {/* Camada Interativa SVG */}
      <svg
        viewBox={WORLD_VIEWBOX}
        className="relative z-10 h-full w-full select-none"
      >
        {/* Pins dos Países */}
        {Object.entries(PIN_LOCATIONS).map(([id, pos]) => {
          const paisData = paises.find((p) => p.codigo_mapa === id);
          if (!paisData) return null;

          const isVisited = carimbados.includes(id);
          const isHovered = hoveredCountry === id;
          const isImmersive = IMMERSIVE_COUNTRIES.includes(id);

          return (
            <g 
              key={id}
              className="cursor-pointer group/pin"
              onMouseEnter={() => setHoveredCountry(id)}
              onMouseLeave={() => setHoveredCountry(null)}
              onClick={() => handleCountryClick(id)}
            >
              {/* Brilho do Pin */}
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r={isHovered ? 25 : 15} 
                className={`transition-all duration-300 ${isVisited ? 'fill-sun/40' : 'fill-white/30'}`}
              >
                <animate 
                  attributeName="r" 
                  values={isHovered ? "25;30;25" : "15;18;15"} 
                  dur="2s" 
                  repeatCount="indefinite" 
                />
              </circle>

              {/* Pin Principal */}
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r={isHovered ? 12 : 8} 
                className={`transition-all duration-300 stroke-white stroke-2 shadow-lg ${
                  isImmersive ? 'fill-brass' : 'fill-primary'
                }`}
              />
              
              {/* Ícone de Estrela para visitados */}
              {isVisited && (
                <path 
                  d="M0,-5 L1.5,-1.5 L5.5,-1.5 L2.5,1 L3.5,5 L0,2.5 L-3.5,5 L-2.5,1 L-5.5,-1.5 L-1.5,-1.5 Z"
                  transform={`translate(${pos.x}, ${pos.y}) scale(${isHovered ? 1 : 0.7})`}
                  fill="white"
                />
              )}
            </g>
          );
        })}

        {/* Rosa dos Ventos (Fixa e Estilizada) */}
        <g transform="translate(1850, 150) scale(0.6)" className="opacity-80 drop-shadow-md">
           {/* Círculo externo */}
          <circle r="80" fill="none" stroke="#78350f" strokeWidth="2" strokeDasharray="4 4" />
          {/* Pontas principais */}
          <path d="M0,-100 L15,0 L0,100 L-15,0 Z" fill="#78350f" />
          <path d="M-100,0 L0,-15 L100,0 L0,15 Z" fill="#78350f" />
          {/* Pontas secundárias */}
          <path d="M-70,-70 L0,-10 L70,70 L10,-0 Z" fill="#b45309" opacity="0.6" />
          <path d="M70,-70 L10,0 L-70,70 L0,-10 Z" fill="#b45309" opacity="0.6" />
          {/* Centro */}
          <circle r="20" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
          <text y="-115" textAnchor="middle" className="fill-brass font-display text-4xl font-bold">N</text>
          <text y="135" textAnchor="middle" className="fill-brass font-display text-4xl font-bold">S</text>
          <text x="125" y="10" textAnchor="middle" className="fill-brass font-display text-4xl font-bold">L</text>
          <text x="-125" y="10" textAnchor="middle" className="fill-brass font-display text-4xl font-bold">O</text>
        </g>

        {/* Animação de Voo */}
        {animating && brazil && destination && (
          <g>
            <path
              d={`M ${brazil.x} ${brazil.y} Q ${(brazil.x + destination.x)/2} ${(brazil.y + destination.y)/2 - 150} ${destination.x} ${destination.y}`}
              fill="none"
              stroke="#ec4899"
              strokeWidth="5"
              strokeDasharray="15,15"
              className="animate-dash"
              style={{ filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))" }}
            />
            <g className="animate-flight" style={{ offsetPath: `path('M ${brazil.x} ${brazil.y} Q ${(brazil.x + destination.x)/2} ${(brazil.y + destination.y)/2 - 150} ${destination.x} ${destination.y}')` }}>
              <Illustration2D type="aviao" x={0} y={0} scale={2.5} />
            </g>
          </g>
        )}
      </svg>

      {/* Tooltip Card (Posicionado em relação ao mouse ou centralizado no pin) */}
      {hoveredCountry && (
        <div 
          className="absolute z-50 rounded-2xl bg-white/95 px-6 py-4 shadow-2xl border-4 border-brass/20 animate-in fade-in zoom-in duration-200"
          style={{ 
            left: `${(PIN_LOCATIONS[hoveredCountry].x / 2000) * 100}%`,
            top: `${(PIN_LOCATIONS[hoveredCountry].y / 1000) * 100 - 8}%`,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{paises.find(p => p.codigo_mapa === hoveredCountry)?.bandeira}</span>
              <span className="font-display text-2xl font-bold text-brass drop-shadow-sm">
                {WORLD_COUNTRIES.find(c => c.id === hoveredCountry)?.nome}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-4 py-1 text-xs font-bold text-white uppercase shadow-sm ${
                IMMERSIVE_COUNTRIES.includes(hoveredCountry) ? 'bg-brass' : 'bg-primary'
              }`}>
                {IMMERSIVE_COUNTRIES.includes(hoveredCountry) ? "🌍 Expedição Imersiva" : "📑 Diário de Bordo"}
              </span>
            </div>
          </div>
          {/* Seta do Tooltip */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r-4 border-b-4 border-brass/20" />
        </div>
      )}

      {/* Elementos Decorativos de Canto (Estilo Atlas Antigo) */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-40">
        <Illustration2D type="caravela" x={0} y={0} scale={1.5} />
      </div>
      <div className="absolute bottom-6 right-6 z-20 pointer-events-none opacity-40">
        <Illustration2D type="baleia" x={0} y={0} scale={2} />
      </div>
      
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -120; }
        }
        .animate-dash {
          animation: dash 2s linear infinite;
        }
        @keyframes flight {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .animate-flight {
          animation: flight 1.5s cubic-bezier(0.45, 0, 0.55, 1) forwards;
          offset-rotate: auto;
        }
        .paper-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          filter: contrast(120%) brightness(100%);
        }
      `}</style>
    </div>
  );
}
