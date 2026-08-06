import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Compass, Plane, MapPin } from 'lucide-react';
import type { Pais } from '@/data/types';
import { WORLD_COUNTRIES, WORLD_VIEWBOX } from '@/data/worldMap';

// Lista de Países Cadastrados no App - IDs que possuem conteúdo imersivo
const REGISTERED_COUNTRY_IDS = [
  'ca', 'us', 'mx', 'br', 'ar', 'cl', 
  'pt', 'it', 'gb', 'eg', 'ma', 'za', 
  'jp', 'cn', 'th', 'au', 'nz', 'fj', 
  'cr', 'pa', 'gt'
];

// Mapeamento de Cores Vibrantes e Agradáveis para crianças
const getCountryColor = (country: any) => {
  const continentColors: Record<number, string> = {
    1: '#a8d5ba', // Verde Suave (América do Sul / Brasil)
    2: '#fef08a', // Amarelo Pastel (América do Norte)
    3: '#fca5a5', // Vermelho Pastel (Europa)
    4: '#93c5fd', // Azul Pastel (Ásia)
    5: '#fdba74', // Laranja Pastel (África)
    6: '#cbd5e1', // Cinza Azulado (Oceania / Antártida)
    7: '#d8b4fe', // Roxo Pastel
    8: '#86efac', // Verde Água
    9: '#f8fafc'  // Gelo/Branco
  };
  return continentColors[country.cor] || '#f3f4f6';
};

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

export const WorldMap = ({ paises, carimbados, onSelecionar }: WorldMapProps) => {
  const [hoveredCountryPin, setHoveredCountryPin] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [isFlying, setIsFlying] = useState(false);

  const handleCountryClick = (country: any) => {
    const idMap: Record<string, string> = {
      'ca': 'canada', 'us': 'usa', 'mx': 'mexico', 'br': 'brazil', 
      'ar': 'argentina', 'cl': 'chile', 'pt': 'portugal', 'it': 'italy', 
      'gb': 'scotland', 'eg': 'egypt', 'ma': 'morocco', 'za': 'south-africa', 
      'jp': 'japan', 'cn': 'china', 'th': 'thailand', 'au': 'australia', 
      'nz': 'new-zealand', 'fj': 'fiji', 'cr': 'costa-rica', 'pa': 'panama', 
      'gt': 'guatemala'
    };
    
    const targetId = idMap[country.id] || country.id;
    const pais = paises.find(p => p.id === targetId);
    
    if (!pais) return;

    setSelectedCountry(country);
    setIsFlying(true);
    
    setTimeout(() => {
      setIsFlying(false);
      onSelecionar(pais);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção 16:9 Centralizado e Elegante */}
      <div className="relative w-full aspect-video bg-[#EDF7FF] rounded-[2rem] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Mapa SVG Principal */}
        <svg
          viewBox={WORLD_VIEWBOX}
          className="absolute inset-0 w-full h-full select-none"
        >
          {/* Países */}
          {WORLD_COUNTRIES.map((country) => {
            const isRegistered = REGISTERED_COUNTRY_IDS.includes(country.id);
            const isVisited = carimbados.includes(country.id);
            const isHovered = hoveredCountryPin?.id === country.id;
            
            return (
              <path
                key={country.id}
                d={country.d}
                fill={isHovered ? '#D8EEFF' : (isVisited ? '#F0F9FF' : '#F9FBFF')}
                stroke={isHovered ? '#38BDF8' : '#E2E8F0'}
                strokeWidth={isHovered ? '2' : '1'}
                className={`transition-all duration-300 ${isRegistered ? 'cursor-pointer' : ''}`}
                onMouseEnter={() => isRegistered && setHoveredCountryPin(country)}
                onMouseLeave={() => isRegistered && setHoveredCountryPin(null)}
                onClick={() => isRegistered && handleCountryClick(country)}
                style={{
                  filter: isHovered ? 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.4))' : 'none',
                  transform: isHovered ? 'scale(1.005)' : 'scale(1)',
                  transformOrigin: `${country.centro.x}px ${country.centro.y}px`
                }}
              />
            );
          })}
        </svg>

        {/* Overlay para Tooltips HTML */}
        <div className="absolute inset-0 pointer-events-none">
          {hoveredCountryPin && (
            <div 
              className="absolute bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border-2 border-sky-100 min-w-[180px] z-50 animate-in fade-in zoom-in duration-300 pointer-events-none"
              style={{ 
                top: `${(hoveredCountryPin.centro.y / 1000) * 100}%`, 
                left: `${(hoveredCountryPin.centro.x / 2000) * 100}%`,
                transform: 'translate(-50%, -120%)'
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl drop-shadow-sm">
                  {paises.find(p => p.id === hoveredCountryPin.id || (hoveredCountryPin.id === 'gb' && p.id === 'scotland'))?.bandeira || "📍"}
                </div>
                <div className="font-rounded text-lg font-bold text-sky-900">
                  {hoveredCountryPin.nome}
                </div>
                <div className="text-xs font-rounded font-bold text-sky-400 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full">
                  Explorar Destino
                </div>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -mt-2 border-r-2 border-b-2 border-sky-100" />
            </div>
          )}
        </div>

        {/* Animação de Voo para o País Selecionado */}
        {isFlying && selectedCountry && (
          <div className="absolute inset-0 pointer-events-none z-40 bg-sky-500/5 animate-in fade-in duration-500">
            <svg className="w-full h-full" viewBox="0 0 2000 1000">
              <path
                id="flightPath"
                d={`M 660 680 Q 1000 300 ${selectedCountry.centro.x} ${selectedCountry.centro.y}`}
                fill="none"
                stroke="#38BDF8"
                strokeWidth="4"
                strokeDasharray="15,15"
                className="animate-dash"
              />
              <g className="animate-plane">
                <foreignObject width="80" height="80" x="-40" y="-40">
                  <div className="text-sky-500 drop-shadow-2xl">
                    <Plane className="w-full h-full fill-current transform rotate-45 scale-125" />
                  </div>
                </foreignObject>
              </g>
            </svg>
          </div>
        )}
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -120; }
        }
        .animate-dash {
          animation: dash 3s linear infinite;
        }
        .animate-plane {
          animation: plane-flight 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          offset-path: path('M 660 680 Q 1000 300 ${(selectedCountry?.centro?.x)} ${(selectedCountry?.centro?.y)}');
        }
        @keyframes plane-flight {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .font-display {
          font-family: 'Quicksand', 'Nunito', sans-serif;
        }
      `}</style>
    </div>
  );
};
