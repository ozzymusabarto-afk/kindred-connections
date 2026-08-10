import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Compass } from 'lucide-react';
import { paises } from '@/data/countries';

// Mapa-múndi vetorial limpo e educativo.
const MAP_URL = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";
const COUNTRY_COORDS: Record<string, { x: number, y: number, label: string }> = {
  "brasil": { x: 31, y: 65, label: "Brasil" },
  "estados-unidos": { x: 18, y: 35, label: "EUA" },
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
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    fetch(MAP_URL)
      .then(res => res.text())
      .then(text => {
        // Basic cleanup for integration
        setSvgContent(text);
      })
      .catch(err => console.error("Failed to load map SVG", err));
  }, []);

  const handleCountryClick = (id: string) => {
    if (animating) return;
    setSelectedCountry(id);
    setAnimating(true);
    
    // O som de decolagem será tocado na Home ao iniciar, 
    // mas aqui mantemos o gatilho se for a intenção de decolagem imediata.
    // Conforme o pedido: "é disparado o som da decolagem" ao iniciar a jornada.
    // Vou remover o audio direto daqui e centralizar no sfx.
    import('@/lib/sfx').then(m => m.tocar('decolagem'));

    setTimeout(() => {
      navigate({ to: "/pais/$id", params: { id }, search: { tela: undefined, dia: undefined } });
    }, 2000);
  };

  const brasilPos = COUNTRY_COORDS["brasil"];
  const targetPos = selectedCountry ? COUNTRY_COORDS[selectedCountry] : null;

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 flex flex-col items-center">
      <div 
        ref={containerRef}
        className="relative w-full aspect-video bg-[#E0F2FE] rounded-[2rem] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group"
      >
        {/* Renderizamos o mapa usando SVG injetado para controle total de cores */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4 world-svg-container"
          dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
        />


        {/* Linha do Equador (Decorativa) */}
        <div className="absolute top-[55%] left-0 w-full h-[1px] dash-equator z-0 pointer-events-none" />

        {/* Camada de Interação (SVG) */}
        <svg 
          viewBox="0 0 100 56.25" 
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {Object.entries(COUNTRY_COORDS).map(([id, pos]) => (
            <g 
              key={id} 
              role="button"
              tabIndex={0}
              aria-label={`Viajar para ${pos.label}`}
              className="pointer-events-auto cursor-pointer group/country focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                handleCountryClick(id);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCountryClick(id);
                }
              }}
            >
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r="1.5" 
                fill="white" 
                fillOpacity="0"
                className="group-hover/country:fill-yellow-400/30 group-hover/country:stroke-yellow-400 group-hover/country:stroke-[0.2] group-focus/country:fill-yellow-400/40 group-focus/country:stroke-yellow-400 group-focus/country:stroke-[0.3] transition-all"
                style={{ filter: 'url(#glow)' }}
              />
              
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

          {animating && targetPos && (
            <>
              <path
                d={`M ${brasilPos.x} ${brasilPos.y} Q ${(brasilPos.x + targetPos.x) / 2} ${Math.min(brasilPos.y, targetPos.y) - 10} ${targetPos.x} ${targetPos.y}`}
                fill="none"
                stroke="#FACC15"
                strokeWidth="0.4"
                strokeDasharray="1, 1"
                className="animate-dash-draw"
                style={{ filter: 'drop-shadow(0 0 2px #FACC15)' }}
              />

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

        <div className="absolute bottom-6 right-8 pointer-events-none opacity-80 scale-75 sm:scale-100 z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border border-white/20 rounded-full animate-spin-slow" />
            <Compass className="w-12 h-12 text-white/90 drop-shadow-lg" strokeWidth={1.5} />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/90 font-serif text-sm font-bold">N</span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-serif text-sm font-bold">S</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sky-700/80 font-rounded text-lg sm:text-xl italic flex items-center justify-center gap-2">
          <span>🌍</span> Nosso lindo planeta está cheio de lugares incríveis esperando para serem explorados.
        </p>
      </div>

      <style>{`
        .world-svg-container svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
        }
        
        /* Pintura direta dos caminhos do SVG */
        .world-svg-container path {
          fill: #E0F2FE; /* Cor de base neutra para países sem ID específico */
          stroke: #ffffff;
          stroke-width: 0.5px;
          transition: all 0.3s ease;
        }

        /* 
           Intercalação de Cores (Paleta Infantil de 5 cores)
           Aplicada via seletores de atributo para abranger o máximo de países do SVG da Wikimedia
        */
        
        /* Grupo Amarelo (#FFD166) */
        .world-svg-container path[id^="a"], .world-svg-container path[id^="f"], .world-svg-container path[id^="k"], .world-svg-container path[id^="p"] { fill: #FFD166; }
        
        /* Grupo Laranja (#F4A261) */
        .world-svg-container path[id^="b"], .world-svg-container path[id^="g"], .world-svg-container path[id^="l"], .world-svg-container path[id^="q"] { fill: #F4A261; }
        
        /* Grupo Coral/Rosa (#E76F51) */
        .world-svg-container path[id^="c"], .world-svg-container path[id^="h"], .world-svg-container path[id^="m"], .world-svg-container path[id^="r"] { fill: #E76F51; }
        
        /* Grupo Verde-Turquesa (#2A9D8F) */
        .world-svg-container path[id^="d"], .world-svg-container path[id^="i"], .world-svg-container path[id^="n"], .world-svg-container path[id^="s"] { fill: #2A9D8F; }
        
        /* Grupo Azul-Céu (#4EA8DE) */
        .world-svg-container path[id^="e"], .world-svg-container path[id^="j"], .world-svg-container path[id^="o"], .world-svg-container path[id^="t"], .world-svg-container path[id^="z"] { fill: #4EA8DE; }

        /* Destaque Visual nos Países Cadastrados (Glow e Cores Vibrantes) */
        .world-svg-container path[id*="brazil"] { fill: #4EA8DE !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="usa"] { fill: #4EA8DE !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="canada"] { fill: #FFD166 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="mexico"] { fill: #FFD166 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="portugal"] { fill: #2A9D8F !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="italy"] { fill: #E76F51 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="united kingdom"] { fill: #F4A261 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="argentina"] { fill: #2A9D8F !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="chile"] { fill: #E76F51 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="egypt"] { fill: #2A9D8F !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="morocco"] { fill: #4EA8DE !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="south africa"] { fill: #4EA8DE !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="japan"] { fill: #E76F51 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="china"] { fill: #FFD166 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="thailand"] { fill: #E76F51 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="australia"] { fill: #F4A261 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="new zealand"] { fill: #E76F51 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="fiji"] { fill: #2A9D8F !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="costa rica"] { fill: #FFD166 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="panama"] { fill: #E76F51 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }
        .world-svg-container path[id*="guatemala"] { fill: #FFD166 !important; stroke-width: 1px !important; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) !important; }

        .world-svg-container path[id*="antarctica"] { fill: #E0E1DD !important; }

        .world-svg-container path:hover {
          fill: #FFD166 !important;
          filter: brightness(1.2) drop-shadow(0 0 5px rgba(255,255,255,0.5)) !important;
        }

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
      `}</style>
    </div>
  );
};
