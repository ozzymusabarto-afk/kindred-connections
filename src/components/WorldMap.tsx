import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Compass, Plane, MapPin } from 'lucide-react';
import type { Pais } from '@/data/types';
import { WORLD_COUNTRIES, WORLD_VIEWBOX } from '@/data/worldMap';

// Lista de Países Cadastrados no App
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

// Mapeamento de Cores por Continente / ID de País para visual infantil
const getCountryColor = (id: string) => {
  // Cores dos Continentes baseadas no ID (prefixo/região)
  // Como o WORLD_COUNTRIES tem IDs ISO, podemos agrupar
  const N_AMERICA = ['ca', 'us', 'mx', 'gl', 'cu', 'pr'];
  const S_AMERICA = ['br', 'ar', 'pe', 'cl', 'co', 've', 'ec', 'bo', 'py', 'uy', 'gy', 'sr'];
  const EUROPE = ['pt', 'es', 'fr', 'gb', 'it', 'de', 'gr', 'pl', 'ro', 'ua', 'no', 'se', 'fi', 'ie', 'is', 'at', 'ch', 'be', 'nl', 'dk', 'cz', 'sk', 'hu', 'hr', 'ba', 'me', 'rs', 'mk', 'al', 'bg', 'md', 'ee', 'lv', 'lt', 'by'];
  const AFRICA = ['eg', 'za', 'ma', 'ng', 'ke', 'et', 'dz', 'ly', 'sd', 'cd', 'ao', 'mz', 'na', 'bw', 'zw', 'zm', 'tz', 'ug', 'rw', 'bi', 'so', 'dj', 'er', 'td', 'ne', 'ml', 'mr', 'sn', 'gm', 'gw', 'gn', 'sl', 'lr', 'ci', 'gh', 'tg', 'bj', 'bf', 'cm', 'cf', 'gq', 'ga', 'cg', 'ls', 'sz', 'mw', 'mg'];
  const ASIA = ['jp', 'cn', 'in', 'ru', 'kr', 'kp', 'tw', 'mn', 'kz', 'uz', 'tm', 'tj', 'kg', 'af', 'pk', 'ir', 'iq', 'sy', 'jo', 'il', 'lb', 'sa', 'ye', 'om', 'ae', 'qa', 'kw', 'tr', 'ge', 'az', 'am', 'np', 'bt', 'bd', 'lk', 'mm', 'th', 'la', 'kh', 'vn', 'my', 'sg', 'id', 'ph', 'bn', 'tl'];
  const OCEANIA = ['au', 'nz', 'pg', 'fj', 'sb', 'vu', 'nc', 'pf'];
  const ANTARCTICA = ['aq'];

  if (S_AMERICA.includes(id)) return '#4ade80'; // Verde vibrante
  if (N_AMERICA.includes(id)) return '#fbbf24'; // Amarelo/Laranja pastel
  if (EUROPE.includes(id)) return '#a78bfa'; // Roxo/Lilás
  if (AFRICA.includes(id)) return '#fcd34d'; // Amarelo/Ocre quente
  if (ASIA.includes(id)) return '#fb923c'; // Laranja/Rosa
  if (OCEANIA.includes(id)) return '#22d3ee'; // Azul-turquesa
  if (ANTARCTICA.includes(id)) return '#f0f9ff'; // Branco/Gelo suave
  
  return '#e2e8f0'; // Cor padrão para países não categorizados
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
    <div className="w-full max-w-6xl mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção Fixa 16:9 */}
      <div className="relative w-full aspect-[16/9] bg-sky-200 rounded-3xl border-4 border-sky-300 shadow-xl overflow-hidden">
        
        {/* Camada Vetorial do Mapa Mundi (Background Colorido) */}
        <svg
          viewBox={WORLD_VIEWBOX}
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: '#bae6fd' }} // bg-sky-200 aproximado
        >
          {/* Desenha todos os países do atlas */}
          {WORLD_COUNTRIES.map((pais) => (
            <path
              key={pais.id}
              d={pais.d}
              fill={getCountryColor(pais.id)}
              stroke="#ffffff"
              strokeWidth="0.5"
              className="transition-opacity duration-300"
              style={{ opacity: 0.9 }}
            />
          ))}
        </svg>

        {/* Camada de Pins Interativos */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {COUNTRIES.map((country) => {
            const isVisited = carimbados.includes(country.id);
            return (
              <div
                key={country.id}
                className="absolute cursor-pointer transition-transform hover:scale-125 z-20 pointer-events-auto"
                style={{ top: country.top, left: country.left }}
                onMouseEnter={() => setHoveredCountryPin(country)}
                onMouseLeave={() => setHoveredCountryPin(null)}
                onClick={() => handleCountryClick(country)}
              >
                <div className="relative flex flex-col items-center">
                  {/* Pin Animado */}
                  <div className={`p-2 rounded-full shadow-lg transition-colors ${
                    isVisited ? 'bg-yellow-400 text-white' : 'bg-white text-sky-600'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  
                  {/* Estrela de Visitado */}
                  {isVisited && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1 shadow-sm border border-white">
                      <span className="text-[10px]">⭐</span>
                    </div>
                  )}
                </div>

                {/* Tooltip Hover */}
                {hoveredCountryPin?.id === country.id && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border-2 border-sky-200 min-w-[160px] z-50 animate-in fade-in zoom-in duration-200">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-bold text-sky-900 whitespace-nowrap">{country.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full text-white uppercase font-bold ${
                        country.type === 'Imersivo' ? 'bg-sky-500' : 'bg-amber-500'
                      }`}>
                        {country.type === 'Imersivo' ? 'Expedição Imersiva' : 'Diário de Bordo'}
                      </span>
                    </div>
                    {/* Seta do Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 -mt-1.5 border-r-2 border-b-2 border-sky-200" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Animação do Avião Rosa */}
        {isFlying && selectedCountry && (
          <div className="absolute inset-0 pointer-events-none z-40">
            <svg className="w-full h-full" viewBox="0 0 1600 900">
              <path
                id="flightPath"
                d={`M 528 585 Q 640 270 ${parseFloat(selectedCountry.left) * 16} ${parseFloat(selectedCountry.top) * 9}`}
                fill="none"
                stroke="#F472B6"
                strokeWidth="4"
                strokeDasharray="10,10"
                className="animate-dash"
              />
              <g className="animate-plane">
                <foreignObject width="40" height="40" x="-20" y="-20">
                  <div className="text-pink-500 transform -rotate-45">
                    <Plane className="w-10 h-10 fill-current" />
                  </div>
                </foreignObject>
              </g>
            </svg>
          </div>
        )}

        {/* Rosa dos Ventos Ilustrada */}
        <div className="absolute bottom-6 right-6 w-24 h-24 opacity-80 pointer-events-none z-30">
          <div className="relative w-full h-full flex items-center justify-center">
            <Compass className="w-full h-full text-sky-800 animate-spin-slow" />
            <div className="absolute font-bold text-sky-900 text-xs">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2">N</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2">S</span>
              <span className="absolute top-1/2 -left-2 -translate-y-1/2">O</span>
              <span className="absolute top-1/2 -right-2 -translate-y-1/2">L</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        .animate-dash {
          animation: dash 2s linear infinite;
        }
        .animate-plane {
          animation: plane-flight 1.5s ease-in-out forwards;
          offset-path: path('M 33% 65% Q 40% 30% ${selectedCountry?.left} ${selectedCountry?.top}');
        }
        @keyframes plane-flight {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .font-rounded {
          font-family: 'Quicksand', 'Nunito', sans-serif;
        }
      `}</style>
    </div>
  );
};
