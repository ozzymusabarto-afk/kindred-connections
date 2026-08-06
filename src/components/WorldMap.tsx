import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Compass, Plane, MapPin } from 'lucide-react';
import type { Pais } from '@/data/types';
import { WORLD_COUNTRIES, WORLD_VIEWBOX } from '@/data/worldMap';

// Lista de Países Cadastrados no App com coordenadas calibradas para o modelo tradicional (D3/SVG)
const COUNTRIES = [
  { id: 'canada', name: 'Canadá', type: 'Imersivo', flag: '🇨🇦', top: '22%', left: '20%' },
  { id: 'usa', name: 'EUA', type: 'Imersivo', flag: '🇺🇸', top: '32%', left: '22%' },
  { id: 'mexico', name: 'México', type: 'Imersivo', flag: '🇲🇽', top: '42%', left: '21%' },
  { id: 'brazil', name: 'Brasil', type: 'Imersivo', flag: '🇧🇷', top: '65%', left: '33%' },
  { id: 'argentina', name: 'Argentina', type: 'Imersivo', flag: '🇦🇷', top: '80%', left: '30%' },
  { id: 'peru', name: 'Peru', type: 'Imersivo', flag: '🇵🇪', top: '62%', left: '26%' },
  { id: 'portugal', name: 'Portugal', type: 'Imersivo', flag: '🇵🇹', top: '34%', left: '46%' },
  { id: 'japan', name: 'Japão', type: 'Imersivo', flag: '🇯🇵', top: '36%', left: '85%' },
  { id: 'egypt', name: 'Egito', type: 'Imersivo', flag: '🇪🇬', top: '42%', left: '56%' },
];

// Mapeamento de Cores Vibrantes e Agradáveis para crianças
const getCountryColor = (pais: any) => {
  const colors = [
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#FFD93D', // Yellow
    '#6BCB77', // Green
    '#4D96FF', // Blue
    '#FF9F43', // Orange
    '#A29BFE', // Purple
    '#FAB1A0'  // Peach
  ];
  // Usa o índice de cor do dado original ou o ID para manter consistência
  return colors[(pais.cor || pais.id.charCodeAt(0)) % colors.length];
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
    const pais = paises.find(p => p.id === country.id);
    if (!pais) return;

    setSelectedCountry(country);
    setIsFlying(true);
    
    setTimeout(() => {
      setIsFlying(false);
      onSelecionar(pais);
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção Tradicional (Mercator/Equiretangular 2:1 approx) */}
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
          {WORLD_COUNTRIES.map((pais) => (
            <path
              key={pais.id}
              d={pais.d}
              fill={getCountryColor(pais)}
              stroke="#ffffff"
              strokeWidth="0.8"
              className="transition-all duration-300 hover:brightness-105"
            />
          ))}
        </svg>

        {/* Camada de Interação (Pins Simplificados) */}
        <div className="absolute inset-0 pointer-events-none">
          {COUNTRIES.map((country) => {
            const isVisited = carimbados.includes(country.id);
            return (
              <div
                key={country.id}
                className="absolute cursor-pointer transition-all hover:scale-110 z-20 group/pin pointer-events-auto"
                style={{ top: country.top, left: country.left }}
                onMouseEnter={() => setHoveredCountryPin(country)}
                onMouseLeave={() => setHoveredCountryPin(null)}
                onClick={() => handleCountryClick(country)}
              >
                <div className="relative flex flex-col items-center">
                  {/* Pin Minimalista (Substitui o Pin grande anterior) */}
                  <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md transition-all ${
                    isVisited ? 'bg-yellow-400 scale-125' : 'bg-white/80'
                  }`} />
                  
                  {/* Estrela de Conquista Pequena */}
                  {isVisited && (
                    <div className="absolute -top-4 bg-white rounded-full p-0.5 shadow-sm border border-yellow-400">
                      <span className="text-[8px]">⭐</span>
                    </div>
                  )}
                </div>

                {/* Tooltip Estilizado */}
                {hoveredCountryPin?.id === country.id && (
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border-2 border-sky-100 min-w-[140px] z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-2xl">{country.flag}</div>
                      <div className="font-display text-sm font-bold text-sky-900">{country.name}</div>
                    </div>
                    {/* Seta do Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 -mt-1.5 border-r-2 border-b-2 border-sky-100" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Avião de Viagem */}
        {isFlying && selectedCountry && (
          <div className="absolute inset-0 pointer-events-none z-40">
            <svg className="w-full h-full" viewBox="0 0 2000 1000">
              <path
                id="flightPath"
                d={`M 660 680 Q 1000 300 ${parseFloat(selectedCountry.left) * 20} ${parseFloat(selectedCountry.top) * 10}`}
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

        {/* Rosa dos Ventos - Estilo Clássico e Compacto */}
        <div className="absolute bottom-6 left-6 w-20 h-20 opacity-80 pointer-events-none z-30 drop-shadow-lg">
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
          offset-path: path('M 33% 68% Q 50% 30% ${selectedCountry?.left} ${selectedCountry?.top}');
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
