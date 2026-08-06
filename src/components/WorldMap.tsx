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
const getCountryColor = (pais: any) => {
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
  return continentColors[pais.cor] || '#f3f4f6';
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
    const pais = paises.find(p => p.id === country.id || (country.id === 'gb' && p.id === 'scotland') || (country.id === 'us' && p.id === 'usa') || (country.id === 'br' && p.id === 'brazil') || (country.id === 'ca' && p.id === 'canada') || (country.id === 'mx' && p.id === 'mexico') || (country.id === 'ar' && p.id === 'argentina') || (country.id === 'cl' && p.id === 'chile') || (country.id === 'pt' && p.id === 'portugal') || (country.id === 'it' && p.id === 'italy') || (country.id === 'eg' && p.id === 'egypt') || (country.id === 'ma' && p.id === 'morocco') || (country.id === 'za' && p.id === 'south-africa') || (country.id === 'jp' && p.id === 'japan') || (country.id === 'cn' && p.id === 'china') || (country.id === 'th' && p.id === 'thailand') || (country.id === 'au' && p.id === 'australia') || (country.id === 'nz' && p.id === 'new-zealand') || (country.id === 'fj' && p.id === 'fiji') || (country.id === 'cr' && p.id === 'costa-rica') || (country.id === 'pa' && p.id === 'panama') || (country.id === 'gt' && p.id === 'guatemala'));
    
    if (!pais) return;

    setSelectedCountry(country);
    setIsFlying(true);
    
    setTimeout(() => {
      setIsFlying(false);
      onSelecionar(pais);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção Tradicional - Aumentado para melhor visibilidade */}
      <div className="relative w-full aspect-[2/1] bg-[#e0f2fe] rounded-[2.5rem] border-[12px] border-white shadow-2xl overflow-hidden group">
        
        {/* Camada de Papel / Textura Suave */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

        {/* Mapa SVG Principal */}
        <svg
          viewBox={WORLD_VIEWBOX}
          className="absolute inset-0 w-full h-full select-none"
        >
          {/* Linha do Equador */}
          <line 
            x1="0" y1="500" x2="2000" y2="500" 
            stroke="#0ea5e9" strokeWidth="1" strokeDasharray="10,10" opacity="0.4"
          />
          <text x="20" y="495" className="fill-sky-600/50 text-[12px] font-bold">LINHA DO EQUADOR</text>

          {/* Oceanos */}
          <text x="350" y="600" className="fill-sky-800/30 text-[24px] font-display italic tracking-widest font-bold">OCEANO PACÍFICO</text>
          <text x="800" y="550" className="fill-sky-800/30 text-[24px] font-display italic tracking-widest font-bold">OCEANO ATLÂNTICO</text>
          <text x="1300" y="650" className="fill-sky-800/30 text-[24px] font-display italic tracking-widest font-bold">OCEANO ÍNDICO</text>

          {/* Países */}
          {WORLD_COUNTRIES.map((country) => (
            <path
              key={country.id}
              d={country.d}
                fill={country.id === 'br' ? '#4ade80' : getCountryColor(country)}
                stroke="#ffffff"
                strokeWidth="1.2"
              className="transition-all duration-300 hover:brightness-105"
            />
          ))}
        </svg>

        {/* Camada de Interação (Pins posicionados via coordenadas SVG para precisão 100%) */}
        <svg
          viewBox={WORLD_VIEWBOX}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {WORLD_COUNTRIES.filter(c => REGISTERED_COUNTRY_IDS.includes(c.id)).map((country) => {
            const isVisited = carimbados.includes(country.id);
            const isHovered = hoveredCountryPin?.id === country.id;
            
            return (
              <g
                key={country.id}
                className="cursor-pointer pointer-events-auto"
                onMouseEnter={() => setHoveredCountryPin(country)}
                onMouseLeave={() => setHoveredCountryPin(null)}
                onClick={() => handleCountryClick(country)}
              >
                {/* Pin Sombreado para Volume */}
                <circle
                  cx={country.centro.x}
                  cy={country.centro.y}
                  r={isHovered ? "12" : "8"}
                  fill={isVisited ? "#fbbf24" : "#ef4444"}
                  stroke="white"
                  strokeWidth="2"
                  className="transition-all duration-300 drop-shadow-md"
                />
                {isVisited && (
                  <text
                    x={country.centro.x}
                    y={country.centro.y - 12}
                    textAnchor="middle"
                    className="text-[12px] select-none"
                  >
                    ⭐
                  </text>
                )}
                
                {/* Tooltip via ForeignObject para manter no sistema de coordenadas SVG ou HTML Overlay */}
              </g>
            );
          })}
        </svg>

        {/* Overlay para Tooltips HTML (para melhor controle de animação e estilo) */}
        <div className="absolute inset-0 pointer-events-none">
          {hoveredCountryPin && (
            <div 
              className="absolute bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border-2 border-sky-100 min-w-[140px] z-50 animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none"
              style={{ 
                top: `${(hoveredCountryPin.centro.y / 1000) * 100}%`, 
                left: `${(hoveredCountryPin.centro.x / 2000) * 100}%`,
                transform: 'translate(-50%, -120%)'
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="text-2xl">
                  {paises.find(p => p.id === hoveredCountryPin.id || (hoveredCountryPin.id === 'gb' && p.id === 'scotland'))?.bandeira || "📍"}
                </div>
                <div className="font-display text-sm font-bold text-sky-900">{hoveredCountryPin.nome}</div>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 -mt-1.5 border-r-2 border-b-2 border-sky-100" />
            </div>
          )}
        </div>

        {/* Avião de Viagem */}
        {isFlying && selectedCountry && (
          <div className="absolute inset-0 pointer-events-none z-40">
            <svg className="w-full h-full" viewBox="0 0 2000 1000">
              <path
                id="flightPath"
                d={`M 660 680 Q 1000 300 ${selectedCountry.centro.x} ${selectedCountry.centro.y}`}
                fill="none"
                stroke="#ec4899"
                strokeWidth="6"
                strokeDasharray="20,20"
                className="animate-dash"
              />
              <g className="animate-plane">
                <foreignObject width="60" height="60" x="-30" y="-30">
                  <div className="text-pink-500 drop-shadow-lg">
                    <Plane className="w-full h-full fill-current transform rotate-45" />
                  </div>
                </foreignObject>
              </g>
            </svg>
          </div>
        )}

        {/* Rosa dos Ventos - Estilo Clássico Refinado, menor e no canto inferior esquerdo */}
        <div className="absolute bottom-6 left-6 w-20 h-20 opacity-90 pointer-events-none z-30 drop-shadow-lg">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Círculo decorativo clássico */}
            <div className="absolute inset-0 rounded-full border border-sky-900/20" />
            <Compass className="w-full h-full text-sky-900 animate-spin-slow" strokeWidth={1} />
            <div className="absolute font-display font-black text-sky-900 text-[10px]">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2">N</span>
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2">S</span>
              <span className="absolute top-1/2 -left-4 -translate-y-1/2">O</span>
              <span className="absolute top-1/2 -right-4 -translate-y-1/2">L</span>
            </div>
          </div>
        </div>
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
          offset-path: path('M 33% 68% Q 50% 30% ${(selectedCountry?.centro?.x / 2000) * 100}% ${(selectedCountry?.centro?.y / 1000) * 100}%');
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
