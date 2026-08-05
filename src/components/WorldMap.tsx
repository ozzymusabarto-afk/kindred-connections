import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { WORLD_COUNTRIES } from "@/data/worldMap";
import type { Pais } from "@/data/types";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

// ISO numeric to alpha-2 mapping (subset for critical countries)
const ISO_NUMERIC_MAP: Record<string, string> = {
  "076": "br", "124": "ca", "840": "us", "484": "mx", "620": "pt", "380": "it", "826": "gb", 
  "032": "ar", "152": "cl", "392": "jp", "818": "eg", "036": "au", "156": "cn", "764": "th", 
  "504": "ma", "710": "za", "554": "nz", "242": "fj", "188": "cr", "591": "pa", "320": "gt",
  "604": "pe", "250": "fr", "276": "de", "724": "es", "752": "se", "528": "nl", "056": "be",
  "756": "ch", "040": "at", "300": "gr", "616": "pl", "643": "ru", "792": "tr", "356": "in",
  "410": "kr", "702": "sg", "458": "my", "360": "id", "608": "ph", "372": "ie",
  "578": "no", "208": "dk", "246": "fi"
};

const LAND_COLORS = [
  "#4ade80", // Verde Brasil (especial)
  "#fbbf24", // Âmbar (especial)
  "#fcd34d", // Amarelo sol
  "#93c5fd", // Azul céu suave
  "#a7f3d0", // Esmeralda suave
  "#ddd6fe", // Violeta suave
  "#fed7aa", // Laranja suave
  "#fecaca", // Vermelho suave
  "#d1d5db", // Cinza suave
];

const getCountryColor = (alpha2: string | undefined, index: number, hasData: boolean) => {
  if (alpha2 === "br") return "#16a34a"; // Brasil Verde Vibrante (Foco Principal)
  
  if (hasData) {
    // Cores vibrantes e saturadas para países com conteúdo
    const vibrantColors = [
      "#4ade80", // Verde vibrante
      "#facc15", // Amarelo sol
      "#fb923c", // Laranja vibrante
      "#3b82f6", // Azul vibrante
      "#a855f7", // Roxo vibrante
      "#ec4899", // Rosa vibrante
      "#ef4444", // Vermelho vibrante
      "#06b6d4"  // Ciano vibrante
    ];
    return vibrantColors[index % vibrantColors.length];
  }
  
  // Cores de "mapa antigo" mas ainda com tom pastel colorido para os demais
  const oldMapColors = [
    "#fef3c7", // Âmbar clarinho
    "#ecfdf5", // Esmeralda clarinho
    "#eff6ff", // Azul clarinho
    "#fff1f2", // Rosa clarinho
    "#f5f3ff"  // Roxo clarinho
  ];
  return oldMapColors[index % oldMapColors.length];
};

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [rotation, setRotation] = useState<[number, number]>([-45, -15]);
  const [worldData, setWorldData] = useState<any>(null);
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);
  const [animating, setAnimating] = useState(false);
  const [flightPath, setFlightPath] = useState<string | null>(null);

  useEffect(() => {
    fetch("/world-110m.json")
      .then((res) => res.json())
      .then((data) => setWorldData(data));
  }, []);

  const width = 800;
  const height = 600;

  const projection = useMemo(() => {
    return d3.geoOrthographic()
      .scale(260)
      .translate([width / 2, height / 2])
      .rotate(rotation)
      .clipAngle(90)
      .precision(0.1);
  }, [rotation]);

  const path = d3.geoPath(projection);

  const countriesFeatures = useMemo(() => {
    if (!worldData) return [];
    return (topojson.feature(worldData, worldData.objects.countries) as any).features;
  }, [worldData]);

  // Interação de arrastar aprimorada
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const drag = d3.drag<SVGSVGElement, unknown>()
      .subject(() => {
        const r = projection.rotate();
        return { x: r[0], y: -r[1] };
      })
      .on("drag", (event) => {
        // Sensibilidade ajustada para rotação natural
        setRotation([event.x, -event.y]);
      });
    svg.call(drag);
  }, [projection]);

  const handleCountryClick = (feature: any) => {
    const numericId = feature.id?.toString().padStart(3, '0');
    if (!numericId) return;
    const alpha2 = ISO_NUMERIC_MAP[numericId];
    const pais = paises.find(p => p.codigo_mapa === alpha2);
    
    if (pais) {
      const centroid = d3.geoCentroid(feature);
      const brazilPath = WORLD_COUNTRIES.find(c => c.id === 'br');
      const brazilCentroid = brazilPath ? brazilPath.centro : { x: 0, y: 0 }; // We'd need to convert this to lat/long or stick to SVG space
      
      // Since this is a 3D globe, flight paths should ideally be great circles.
      // For now, let's keep it simple: rotate to destination.
      
      setAnimating(true);
      d3.transition()
        .duration(1200)
        .tween("rotate", () => {
          const r = d3.interpolate(projection.rotate(), [-centroid[0], -centroid[1]]);
          return (t) => {
            const nextRotation = r(t);
            setRotation([nextRotation[0], nextRotation[1]]);
          };
        })
        .on("end", () => {
          setAnimating(false);
          onSelecionar(pais);
        });
    }
  };

  const isImmersive = (feature: any) => {
    const numericId = feature.id?.toString().padStart(3, '0');
    if (!numericId) return false;
    const alpha2 = ISO_NUMERIC_MAP[numericId];
    // This logic needs to be more robust based on actual "immersive" flag if available
    return ["br", "us", "ca", "pt", "it", "gb", "mx", "ar", "cl", "pe"].includes(alpha2);
  };

  if (!worldData) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-[#EAF4FB] rounded-3xl border-4 border-brass/20">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-brass/10 border-t-brass" />
            <div className="absolute inset-0 flex items-center justify-center text-xl">🧭</div>
          </div>
          <div className="text-brass font-display text-lg animate-pulse">Iniciando o Globo de Aventuras...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative w-full overflow-hidden rounded-[2.5rem] bg-[#050B14] shadow-[0_30px_60px_rgba(0,0,0,0.7)] border-4 border-brass/30 transition-all duration-500 hover:border-brass/50">
      {/* Espaço Sideral com Estrelas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `star-pulse ${Math.random() * 4 + 2}s infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full cursor-grab active:cursor-grabbing transition-transform duration-500 relative z-10">
        <defs>
          <radialGradient id="globe-shading" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="atmosphere" cx="50%" cy="50%" r="50%">
            <stop offset="90%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
          </radialGradient>
          <filter id="medal-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="country-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#FFD700" floodOpacity="0.8" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="paper-texture" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>
          <filter id="sphere-glow">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#3B82F6" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="sphere-shadow">
            <feDropShadow dx="0" dy="25" stdDeviation="35" floodOpacity="0.8"/>
          </filter>
          <clipPath id="globe-clip">
            <circle cx={width / 2} cy={height / 2} r={projection.scale()} />
          </clipPath>
        </defs>

        {/* Sombra da Esfera */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="black" filter="url(#sphere-shadow)" opacity="0.4" />
        
        {/* Oceano Profundo e Vibrante */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="#0e7490" stroke="#083344" strokeWidth="2" />
        
        {/* Rosa dos Ventos - Estilo Aventura Realista e Detalhada */}
        <g transform={`translate(${width - 120}, ${120})`} opacity="0.9">
          {/* Círculo decorativo externo */}
          <circle r="75" fill="none" stroke="#d96b27" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
          <circle r="65" fill="none" stroke="#d96b27" strokeWidth="2" />
          
          {/* Pontos Cardeais (N, S, L, O) */}
          <g className="font-display font-bold">
            <text y="-85" textAnchor="middle" fill="#d96b27" fontSize="26">N</text>
            <text y="95" textAnchor="middle" fill="#d96b27" fontSize="22">S</text>
            <text x="85" dy=".35em" textAnchor="middle" fill="#d96b27" fontSize="22">L</text>
            <text x="-85" dy=".35em" textAnchor="middle" fill="#d96b27" fontSize="22">O</text>
          </g>

          {/* Agulha Principal (Norte-Sul) */}
          <path d="M 0 -75 L 12 0 L 0 75 L -12 0 Z" fill="#d96b27" stroke="#92400e" strokeWidth="1" />
          <path d="M 0 -75 L 12 0 L 0 0 Z" fill="#facc15" />
          
          {/* Agulha Principal (Leste-Oeste) */}
          <path d="M -75 0 L 0 -12 L 75 0 L 0 12 Z" fill="#d96b27" stroke="#92400e" strokeWidth="1" />
          <path d="M 75 0 L 0 -12 L 0 0 Z" fill="#facc15" />

          {/* Agulhas Secundárias (Diagonais) */}
          <g transform="rotate(45)">
            <path d="M 0 -50 L 8 0 L 0 50 L -8 0 Z" fill="#92400e" opacity="0.6" />
            <path d="M -50 0 L 0 -8 L 50 0 L 0 8 Z" fill="#92400e" opacity="0.6" />
          </g>
          
          {/* Centro da Rosa */}
          <circle r="12" fill="#d96b27" stroke="#facc15" strokeWidth="2" />
          <circle r="4" fill="#facc15" />
        </g>
        
        {/* Graticule (Equator and Tropics) */}
        <path d={path(d3.geoGraticule()()) as string} fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="0.8" />
        <path d={path({type: "LineString", coordinates: [[-180, 0], [0, 0], [180, 0]]}) as string} fill="none" stroke="#facc15" strokeOpacity="0.5" strokeWidth="2" />

        {/* Global Clipped Area for Illustrations */}
        <g clipPath="url(#globe-clip)">
          {/* Countries */}
          <g>
            {countriesFeatures.map((f: any, i: number) => {
              const numericId = f.id?.toString().padStart(3, '0');
              if (!numericId) return null;
              const alpha2 = ISO_NUMERIC_MAP[numericId];
              const countryData = alpha2 ? paises.find(p => p.codigo_mapa === alpha2) : null;
              const hasData = !!countryData;
              const immersive = isImmersive(f);
              const isVisited = alpha2 && carimbados.includes(alpha2);
              
              const fill = getCountryColor(alpha2, i, hasData);
              
              return (
                <path
                  key={f.id}
                  d={path(f) as string}
                  fill={fill}
                  stroke={hasData ? "#1e2b1c" : "#94a3b8"}
                  strokeWidth={hasData ? 1 : 0.5}
                  filter={isVisited ? "url(#country-glow)" : ""}
                  className={`transition-all duration-300 ${hasData ? 'hover:brightness-110 cursor-pointer' : ''}`}
                  onClick={() => hasData && handleCountryClick(f)}
                  onMouseEnter={() => {
                    if (hasData && countryData) {
                      setHoveredCountry({ 
                        feature: f, 
                        name: countryData.nome,
                        type: immersive ? "Expedição Imersiva" : "Diário de Bordo"
                      });
                    }
                  }}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
              );
            })}
          </g>

          {/* Ocean Labels */}
          <g pointerEvents="none">
            {[
              { coords: [-140, 0], label: "PACÍFICO", size: 14 },
              { coords: [-30, 10], label: "ATLÂNTICO", size: 14 },
              { coords: [70, -20], label: "ÍNDICO", size: 14 }
            ].map((item, i) => {
              const visible = path({ type: 'Point', coordinates: item.coords as [number, number] });
              if (!visible) return null;
              const [x, y] = projection(item.coords as [number, number])!;
              
              return (
                <text 
                  key={`label-${i}`} 
                  x={x} y={y} 
                  fontSize={item.size} 
                  fill="white" 
                  fillOpacity="0.4"
                  textAnchor="middle" 
                  className="font-bold tracking-[0.3em] pointer-events-none uppercase"
                >
                  {item.label}
                </text>
              );
            })}
          </g>

          {/* Clouds Layer (Clipped inside) */}
          <g pointerEvents="none" opacity="0.6">
            {[
              { coords: [-60, 40], scale: 1.2, type: 'cloud' },
              { coords: [100, -30], scale: 0.8, type: 'cloud' },
              { coords: [10, 60], scale: 1, type: 'cloud' },
              { coords: [-100, -20], scale: 1.1, type: 'cloud' },
              { coords: [-40, -40], scale: 0.8, type: 'whale' },
              { coords: [40, 30], scale: 0.6, type: 'ship' }
            ].map((item, i) => {
              const visible = path({ type: 'Point', coordinates: item.coords as [number, number] });
              if (!visible) return null;
              const [x, y] = projection(item.coords as [number, number])!;
              
              if (item.type === 'whale') {
                return (
                  <g key={`whale-${i}`} transform={`translate(${x},${y}) scale(${item.scale})`}>
                    <text fontSize="30">🐋</text>
                  </g>
                );
              }
              
              if (item.type === 'ship') {
                return (
                  <g key={`ship-${i}`} transform={`translate(${x},${y}) scale(${item.scale})`}>
                    <text fontSize="40">🚢</text>
                  </g>
                );
              }

              return (
                <g key={`cloud-${i}`} transform={`translate(${x},${y}) scale(${item.scale})`}>
                  <ellipse cx="0" cy="0" rx="25" ry="12" fill="white" filter="blur(5px)" opacity="0.8" />
                </g>
              );
            })}
          </g>
        </g>

        {/* Atmosfera e Volume (Fora do clip) */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="url(#atmosphere)" pointerEvents="none" />
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="url(#globe-shading)" pointerEvents="none" />
        
        {/* Brilho da lente para dar efeito esférico de vidro */}
        <ellipse cx={width / 2 - 80} cy={height / 2 - 80} rx="60" ry="30" fill="white" fillOpacity="0.2" transform={`rotate(-45, ${width / 2 - 80}, ${height / 2 - 80})`} pointerEvents="none" filter="blur(15px)" />
        
        {/* Borda Dourada do Globo */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="none" stroke="#fbbf24" strokeOpacity="0.4" strokeWidth="4" pointerEvents="none" />

        {/* Country Markers (Pins/Medals) */}
        <g pointerEvents="none">
          {countriesFeatures.map((f: any) => {
            const numericId = f.id?.toString().padStart(3, '0');
            if (!numericId) return null;
            const alpha2 = ISO_NUMERIC_MAP[numericId];
            const pais = paises.find(p => p.codigo_mapa === alpha2);
            if (!pais) return null;

            const centroid = d3.geoCentroid(f);
            const visible = path({ type: 'Point', coordinates: centroid });
            if (!visible) return null;

            const [x, y] = projection(centroid)!;
            const immersive = isImmersive(f);
            const isVisited = carimbados.includes(alpha2);

            if (immersive) {
              return (
                <g key={`pin-${pais.id}`} transform={`translate(${x},${y})`}>
                  <circle r={isVisited ? "14" : "12"} fill={isVisited ? "#FBBF24" : "#FFD700"} stroke="#B8860B" strokeWidth="2" filter="url(#medal-glow)" />
                  <text dy=".3em" textAnchor="middle" fontSize={isVisited ? "14" : "12"}>{pais.bandeira}</text>
                  <circle r="14" fill="none" stroke="#FFD700" strokeOpacity="0.5" strokeWidth="1">
                    <animate attributeName="r" from="12" to={isVisited ? "22" : "18"} dur="2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            }

            return (
              <g key={`pin-${pais.id}`} transform={`translate(${x},${y})`}>
                <circle r={isVisited ? "6" : "4"} fill={isVisited ? "#FCD34D" : "#8b4513"} stroke="#fff" strokeWidth="1" />
              </g>
            );
          })}
        </g>
      </svg>


      {/* Dynamic Tooltip */}
      {hoveredCountry && (
        <div className="absolute pointer-events-none bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-brass/20 shadow-2xl flex items-center gap-3 animate-in fade-in zoom-in duration-200" 
             style={{ left: '50%', top: '30px', transform: 'translateX(-50%)' }}>
          <div className="text-2xl">
            {paises.find(p => p.nome === hoveredCountry.name)?.bandeira || "📍"}
          </div>
          <div>
            <p className="font-display text-base text-brass font-bold leading-none">
              {hoveredCountry.name}
            </p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 font-semibold">
              {hoveredCountry.type}
            </p>
          </div>
        </div>
      )}

      {/* Controles de Navegação */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-1 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
          <div />
          <button 
            onClick={() => {
              const next: [number, number] = [rotation[0], rotation[1] + 20];
              setRotation(next);
            }}
            className="h-12 w-12 flex items-center justify-center hover:bg-white/30 rounded-full bg-white/10 text-2xl transition-all active:scale-95"
            title="Girar para Cima"
          >
            🔼
          </button>
          <div />
          
          <button 
            onClick={() => {
              const next: [number, number] = [rotation[0] - 20, rotation[1]];
              setRotation(next);
            }}
            className="h-12 w-12 flex items-center justify-center hover:bg-white/30 rounded-full bg-white/10 text-2xl transition-all active:scale-95"
            title="Girar para Esquerda"
          >
            ◀️
          </button>
          <button 
            onClick={() => setRotation([-45, -15])}
            className="h-12 w-12 flex items-center justify-center hover:bg-brass/40 rounded-full bg-brass/20 text-2xl transition-all active:scale-95 shadow-inner shadow-black/20"
            title="Centralizar"
          >
            🏠
          </button>
          <button 
            onClick={() => {
              const next: [number, number] = [rotation[0] + 20, rotation[1]];
              setRotation(next);
            }}
            className="h-12 w-12 flex items-center justify-center hover:bg-white/30 rounded-full bg-white/10 text-2xl transition-all active:scale-95"
            title="Girar para Direita"
          >
            ▶️
          </button>

          <div />
          <button 
            onClick={() => {
              const next: [number, number] = [rotation[0], rotation[1] - 20];
              setRotation(next);
            }}
            className="h-12 w-12 flex items-center justify-center hover:bg-white/30 rounded-full bg-white/10 text-2xl transition-all active:scale-95"
            title="Girar para Baixo"
          >
            🔽
          </button>
          <div />
        </div>
      </div>
    </div>
  );
}
