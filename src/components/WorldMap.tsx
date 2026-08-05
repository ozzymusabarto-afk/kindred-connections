import { useState, useMemo } from "react";
import { WORLD_COUNTRIES, WORLD_VIEWBOX, WORLD_SIZE } from "@/data/worldMap";
import { Illustration2D } from "./Illustrations2D";
import type { Pais } from "@/data/types";
import { StarStamp } from "./StarStamp";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

const LAND_COLORS: Record<string, string> = {
  "south-america": "#4ade80", // Verde vibrante
  "north-america": "#fbbf24", // Âmbar sol
  "europe": "#93c5fd",       // Azul céu
  "africa": "#fb923c",       // Laranja vibrante
  "asia": "#a855f7",         // Roxo vibrante
  "oceania": "#f472b6",      // Rosa vibrante
  "antarctica": "#f1f5f9",   // Gelo
};

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [animating, setAnimating] = useState<{ to: string } | null>(null);

  const getCountryColor = (id: string, continenteId: string) => {
    if (id === "br") return "#16a34a"; // Brasil sempre verde bandeira
    const baseColor = LAND_COLORS[continenteId] || "#cbd5e1";
    return baseColor;
  };

  const handleCountryClick = (country: any) => {
    const pais = paises.find((p) => p.codigo_mapa === country.id);
    if (!pais) return;

    setAnimating({ to: country.id });
    
    // Simulate flight time
    setTimeout(() => {
      setAnimating(null);
      onSelecionar(pais);
    }, 1500);
  };

  const brazil = WORLD_COUNTRIES.find(c => c.id === 'br');
  const destination = animating ? WORLD_COUNTRIES.find(c => c.id === animating.to) : null;

  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#bae6fd] shadow-2xl border-4 border-white/50 aspect-[2/1]">
      <svg
        viewBox={WORLD_VIEWBOX}
        className="h-full w-full select-none"
        style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }}
      >
        <defs>
          <filter id="country-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#fbbf24" floodOpacity="0.8" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ocean Background is the div background */}

        {/* Countries */}
        {WORLD_COUNTRIES.map((c) => {
          const paisData = paises.find((p) => p.codigo_mapa === c.id);
          const hasData = !!paisData;
          const isVisited = carimbados.includes(c.id);
          const isHovered = hoveredCountry === c.id;

          return (
            <g key={c.id}>
              <path
                d={c.d}
                fill={getCountryColor(c.id, paisData?.continente || "")}
                stroke="white"
                strokeWidth={isHovered ? 3 : 1}
                className={`transition-all duration-300 ${
                  hasData ? "cursor-pointer hover:brightness-110" : "opacity-80"
                }`}
                filter={(isHovered || isVisited) ? "url(#country-glow)" : ""}
                onClick={() => hasData && handleCountryClick(c)}
                onMouseEnter={() => setHoveredCountry(c.id)}
                onMouseLeave={() => setHoveredCountry(null)}
              />
              
              {/* Country Name Labels for major countries or when hovered */}
              {(c.rank <= 2 || isHovered) && (
                <text
                  x={c.centro.x}
                  y={c.centro.y}
                  textAnchor="middle"
                  className="pointer-events-none fill-white font-display text-[14px] font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                >
                  {c.nome}
                </text>
              )}
            </g>
          );
        })}

        {/* Ocean Labels */}
        <g className="pointer-events-none fill-sky-700/40 font-display text-4xl font-bold tracking-[0.5em]">
          <text x="400" y="500">OCEANO PACÍFICO</text>
          <text x="850" y="450">OCEANO ATLÂNTICO</text>
          <text x="1350" y="600">OCEANO ÍNDICO</text>
        </g>

        {/* Illustrations (Fixed on Map) */}
        <Illustration2D type="cristo" x={650} y={700} scale={1.5} />
        <Illustration2D type="liberdade" x={450} y={320} scale={1.5} />
        <Illustration2D type="eiffel" x={1000} y={230} scale={1.2} />
        <Illustration2D type="piramides" x={1150} y={400} scale={1.8} />
        <Illustration2D type="panda" x={1600} y={350} scale={1.5} />
        <Illustration2D type="canguru" x={1750} y={750} scale={1.5} />
        <Illustration2D type="pinguim" x={1000} y={950} scale={2} />
        
        {/* Ocean Decor */}
        <Illustration2D type="caravela" x={800} y={600} scale={1.2} />
        <Illustration2D type="baleia" x={300} y={650} scale={2} />
        <Illustration2D type="caravela" x={1500} y={500} scale={1} />

        {/* Compass Rose */}
        <g transform="translate(1800, 150) scale(0.8)">
          <path d="M0,-80 L20,0 L0,80 L-20,0 Z" fill="#d97706" />
          <path d="M-80,0 L0,-20 L80,0 L0,20 Z" fill="#d97706" />
          <circle r="15" fill="#f59e0b" stroke="white" strokeWidth="2" />
          <text y="-95" textAnchor="middle" className="fill-amber-900 font-bold text-2xl">N</text>
        </g>

        {/* Flight Animation */}
        {animating && brazil && destination && (
          <g>
            <path
              d={`M ${brazil.centro.x} ${brazil.centro.y} Q ${(brazil.centro.x + destination.centro.x)/2} ${(brazil.centro.y + destination.centro.y)/2 - 100} ${destination.centro.x} ${destination.centro.y}`}
              fill="none"
              stroke="#ec4899"
              strokeWidth="4"
              strokeDasharray="10,10"
              className="animate-dash"
            />
            <g className="animate-flight" style={{ offsetPath: `path('M ${brazil.centro.x} ${brazil.centro.y} Q ${(brazil.centro.x + destination.centro.x)/2} ${(brazil.centro.y + destination.centro.y)/2 - 100} ${destination.centro.x} ${destination.centro.y}')` }}>
              <Illustration2D type="aviao" x={0} y={0} scale={2} />
            </g>
          </g>
        )}
      </svg>

      {/* Tooltip Label */}
      {hoveredCountry && (
        <div 
          className="absolute z-50 rounded-lg bg-white/95 px-4 py-2 shadow-xl border-2 border-brass/20"
          style={{ 
            left: '50%',
            bottom: '20px',
            transform: 'translateX(-50%)'
          }}
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-brass">
              {WORLD_COUNTRIES.find(c => c.id === hoveredCountry)?.nome}
            </span>
            {paises.find(p => p.codigo_mapa === hoveredCountry) && (
              <span className="rounded-full bg-brass/10 px-2 py-0.5 text-xs font-bold text-brass uppercase">
                {["br", "us", "ca", "pt", "it", "gb", "mx", "ar", "cl", "pe"].includes(hoveredCountry) ? "Expedição Imersiva" : "Diário de Bordo"}
              </span>
            )}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        .animate-dash {
          animation: dash 1.5s linear infinite;
        }
        @keyframes flight {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .animate-flight {
          animation: flight 1.5s ease-in-out forwards;
          offset-rotate: auto;
        }
      `}</style>
    </div>
  );
}
