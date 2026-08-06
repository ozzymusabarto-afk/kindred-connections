import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Compass, Plane, MapPin } from 'lucide-react';
import type { Pais } from '@/data/types';

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

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

export const WorldMap = ({ paises, carimbados, onSelecionar }: WorldMapProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [isFlying, setIsFlying] = useState(false);

  const handleCountryClick = (country: any) => {
    const pais = paises.find(p => p.id === country.id);
    if (!pais) return;

    setSelectedCountry(country);
    setIsFlying(true);
    
    // Simula a animação de voo e navega após 1.5s
    setTimeout(() => {
      setIsFlying(false);
      onSelecionar(pais);
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção Fixa 16:9 */}
      <div className="relative w-full aspect-[16/9] bg-sky-100 rounded-3xl border-4 border-sky-300 shadow-xl overflow-hidden">
        
        {/* Imagem de Fundo 2D Ilustrada */}
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80" 
          alt="Mapa Mundi Ilustrado"
          className="w-full h-full object-cover opacity-90"
        />

        {/* Pins dos Países */}
        {COUNTRIES.map((country) => {
          const isVisited = carimbados.includes(country.id);
          return (
            <div
              key={country.id}
              className="absolute cursor-pointer transition-transform hover:scale-125 z-20"
              style={{ top: country.top, left: country.left }}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
              onClick={() => handleCountryClick(country)}
            >
              <div className="relative flex flex-col items-center">
                {/* Pin Animado */}
                <div className={`p-2 rounded-full shadow-lg transition-colors ${
                  isVisited ? 'bg-sun text-white' : 'bg-white text-sky-600'
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
              {hoveredCountry?.id === country.id && (
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

        {/* Animação do Avião Rosa */}
        {isFlying && selectedCountry && (
          <div className="absolute inset-0 pointer-events-none z-40">
            <svg className="w-full h-full">
              <path
                id="flightPath"
                d={`M 330 650 Q 400 300 ${parseInt(selectedCountry.left) * 16} ${parseInt(selectedCountry.top) * 9}`}
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
        <div className="absolute bottom-6 right-6 w-24 h-24 opacity-80 pointer-events-none">
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
