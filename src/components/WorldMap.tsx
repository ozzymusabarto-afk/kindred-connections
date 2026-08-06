import React from 'react';
import { Compass } from 'lucide-react';

export const WorldMap = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 flex flex-col items-center">
      {/* Container do Mapa com Proporção 16:9 - Estático e Decorativo */}
      <div className="relative w-full aspect-video bg-[#0B2447] rounded-[2rem] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Imagem de Fundo do Mapa Físico (NASA Blue Marble Style) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
            filter: 'contrast(1.1) brightness(0.9) saturate(1.1)'
          }}
        />
        
        {/* Camada de relevo e atmosfera suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-sky-500/5 pointer-events-none" />

        {/* Rosa dos Ventos Elegante e Pequena */}
        <div className="absolute bottom-6 right-8 pointer-events-none opacity-80 scale-75 sm:scale-100">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border border-white/20 rounded-full animate-spin-slow" />
            <div className="absolute w-20 h-20 border border-white/10 rounded-full" />
            <Compass className="w-12 h-12 text-white/90 drop-shadow-lg" strokeWidth={1.5} />
            
            {/* Pontos Cardinais */}
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/90 font-serif text-sm font-bold">N</span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-serif text-sm font-bold">S</span>
            <span className="absolute top-1/2 -left-6 -translate-y-1/2 text-white/90 font-serif text-sm font-bold">O</span>
            <span className="absolute top-1/2 -right-6 -translate-y-1/2 text-white/90 font-serif text-sm font-bold">L</span>
          </div>
        </div>
      </div>

      {/* Legenda do Mapa */}
      <div className="mt-6 text-center">
        <p className="text-sky-700/80 font-rounded text-lg sm:text-xl italic flex items-center justify-center gap-2">
          <span>🌍</span> Our beautiful planet is full of amazing places waiting to be explored.
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
      `}</style>
    </div>
  );
};
