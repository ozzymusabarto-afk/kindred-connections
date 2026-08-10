import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Compass } from 'lucide-react';
import { paises } from '@/data/countries';

// Mapa-múndi vetorial limpo e educativo.
const MAP_URL = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";
const COUNTRY_COORDS: Record<string, { x: number, y: number, label: string }> = {
  "brasil": { x: 31, y: 65, label: "Brasil" },
  "usa": { x: 18, y: 35, label: "EUA" },
  "canada": { x: 18, y: 22, label: "Canadá" },
  "mexico": { x: 17, y: 46, label: "México" },
  "portugal": { x: 45, y: 35, label: "Portugal" },
  "italia": { x: 50, y: 35, label: "Itália" },
  "escocia": { x: 47, y: 25, label: "Escócia" },
  "argentina": { x: 29, y: 80, label: "Argentina" },
  "chile": { x: 27, y: 78, label: "Chile" },
  "egito": { x: 55, y: 45, label: "Egito" },
  "marrocos": { x: 46, y: 43, label: "Marrocos" },
  "africa-do-sul": { x: 55, y: 80, label: "África do Sul" },
  "japao": { x: 88, y: 38, label: "Japão" },
  "china": { x: 80, y: 40, label: "China" },
  "tailandia": { x: 82, y: 55, label: "Tailândia" },
  "australia": { x: 88, y: 78, label: "Austrália" },
  "nova-zelandia": { x: 95, y: 88, label: "Nova Zelândia" },
  "fiji": { x: 97, y: 70, label: "Fiji" },
  "costa-rica": { x: 22, y: 55, label: "Costa Rica" },
  "panama": { x: 24, y: 57, label: "Panamá" },
  "guatemala": { x: 19, y: 53, label: "Guatemala" },
};

export const WorldMap = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCountryClick = (id: string) => {
    if (animating) return;
    setSelectedCountry(id);
    setAnimating(true);
    
    // SFX for flight
    try {
      const audio = new Audio('/sfx/plane-takeoff.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch(e) {}

    setTimeout(() => {
      navigate({ to: "/pais/$id", params: { id }, search: { tela: undefined, dia: undefined } });
    }, 2000);
  };

  const brasilPos = COUNTRY_COORDS["brasil"];
  const targetPos = selectedCountry ? COUNTRY_COORDS[selectedCountry] : null;

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção 16:9 Fixa */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-video bg-[#E0F2FE] rounded-[2rem] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group"
      >
        {/* Renderizamos o mapa usando SVG inline para controle total de cores */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-full drop-shadow-2xl world-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* América do Norte: #FFB703 */}
            <path d="M100,50 L300,50 L350,150 L250,250 L100,200 Z" className="continent na" fill="#FFB703" stroke="#ffffff" strokeWidth="1" />
            {/* América do Sul: #2A9D8F */}
            <path d="M250,250 L350,250 L320,450 L220,350 Z" className="continent sa" fill="#2A9D8F" stroke="#ffffff" strokeWidth="1" />
            {/* Europa: #E76F51 */}
            <path d="M450,50 L550,50 L580,150 L480,180 Z" className="continent eu" fill="#E76F51" stroke="#ffffff" strokeWidth="1" />
            {/* África: #F4A261 */}
            <path d="M480,180 L580,150 L650,300 L550,450 L450,350 Z" className="continent af" fill="#F4A261" stroke="#ffffff" strokeWidth="1" />
            {/* Ásia: #E07A5F */}
            <path d="M550,50 L900,50 L950,250 L750,350 L580,150 Z" className="continent as" fill="#E07A5F" stroke="#ffffff" strokeWidth="1" />
            {/* Oceania: #4EA8DE */}
            <path d="M800,350 L950,350 L900,450 L750,450 Z" className="continent oc" fill="#4EA8DE" stroke="#ffffff" strokeWidth="1" />
            {/* Antártida: #E0E1DD */}
            <path d="M100,480 L900,480 L850,500 L150,500 Z" className="continent an" fill="#E0E1DD" stroke="#ffffff" strokeWidth="1" />
            
            {/* Camada de suporte visual com a imagem real */}
            <image 
              href={MAP_URL} 
              width="1000" 
              height="500"
              className="opacity-20 pointer-events-none"
              style={{ mixBlendMode: 'multiply' }}
            />
          </svg>
        </div>

        {/* Linha do Equador (Decorativa) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] dash-equator z-0 pointer-events-none" />

        {/* Camada de Interação (SVG) */}
        <svg 
          viewBox="0 0 100 56.25" 
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
        >
          {/* Definições para animação de traço */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Países Clicáveis */}
          {Object.entries(COUNTRY_COORDS).map(([id, pos]) => (
            <g 
              key={id} 
              role="button"
              tabIndex={0}
              aria-label={`Viajar para ${pos.label}`}
              className="pointer-events-auto cursor-pointer group/country focus:outline-none"
              onClick={() => handleCountryClick(id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCountryClick(id);
                }
              }}
            >
              {/* Área de clique invisível/glow */}
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r="1.5" 
                fill="white" 
                fillOpacity="0"
                className="group-hover/country:fill-yellow-400/30 group-hover/country:stroke-yellow-400 group-hover/country:stroke-[0.2] group-focus/country:fill-yellow-400/40 group-focus/country:stroke-yellow-400 group-focus/country:stroke-[0.3] transition-all"
                style={{ filter: 'url(#glow)' }}
              />
              
              {/* Etiqueta Flutuante (Tooltip) no Hover */}
              <g className="opacity-0 group-hover/country:opacity-100 group-focus/country:opacity-100 transition-opacity pointer-events-none">
                <rect 
                  x={pos.x - 4} 
                  y={pos.y - 6} 
                  width="8" 
                  height="3" 
                  rx="1" 
                  fill="rgba(0,0,0,0.7)" 
                />
                <text 
                  x={pos.x} 
                  y={pos.y - 4} 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="1.8" 
                  fontWeight="bold"
                  className="font-rounded"
                >
                  {pos.label}
                </text>
              </g>
            </g>
          ))}

          {/* Rota de Voo Animada */}
          {animating && targetPos && (
            <>
              {/* Linha Tracejada Amarela Vibrante */}
              <path
                d={`M ${brasilPos.x} ${brasilPos.y} Q ${(brasilPos.x + targetPos.x) / 2} ${Math.min(brasilPos.y, targetPos.y) - 10} ${targetPos.x} ${targetPos.y}`}
                fill="none"
                stroke="#FACC15"
                strokeWidth="0.4"
                strokeDasharray="1, 1"
                className="animate-dash-draw"
                style={{ filter: 'drop-shadow(0 0 2px #FACC15)' }}
              />

              {/* Aviãozinho Rosa Deslizando */}
              <g className="animate-plane-follow">
                <path
                  d={`M ${brasilPos.x} ${brasilPos.y} Q ${(brasilPos.x + targetPos.x) / 2} ${Math.min(brasilPos.y, targetPos.y) - 10} ${targetPos.x} ${targetPos.y}`}
                  fill="none"
                  id="flightPath"
                />
                <text fontSize="3" className="drop-shadow-md">
                  <textPath href="#flightPath" startOffset="0%">
                    <tspan dy="1.5">✈️</tspan>
                    <animate 
                      attributeName="startOffset" 
                      from="0%" 
                      to="100%" 
                      dur="1.8s" 
                      fill="freeze"
                    />
                  </textPath>
                </text>
              </g>
            </>
          )}
        </svg>

        {/* Rosa dos Ventos Clássica (Decorativa) */}
        <div className="absolute bottom-6 right-8 pointer-events-none opacity-80 scale-75 sm:scale-100">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border border-white/20 rounded-full animate-spin-slow" />
            <Compass className="w-12 h-12 text-white/90 drop-shadow-lg" strokeWidth={1.5} />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/90 font-serif text-sm font-bold">N</span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-serif text-sm font-bold">S</span>
          </div>
        </div>
      </div>

      {/* Legenda do Mapa */}
      <div className="mt-6 text-center">
        <p className="text-sky-700/80 font-rounded text-lg sm:text-xl italic flex items-center justify-center gap-2">
          <span>🌍</span> Nosso lindo planeta está cheio de lugares incríveis esperando para serem explorados.
        </p>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-dash-draw {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: dash 2s ease-out forwards;
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .dash-equator {
          background-image: linear-gradient(to right, rgba(248, 113, 113, 0.4) 50%, transparent 50%);
          background-size: 20px 1px;
          background-repeat: repeat-x;
        }
        
        .continent {
          transition: fill 0.2s ease;
          cursor: pointer;
        }
        
        .continent:hover {
          fill: #FFD166 !important;
        }
      `}</style>
    </div>
  );
};
