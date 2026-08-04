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
    "604": "pe"
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
      .clipAngle(90);
  }, [rotation]);

  const path = d3.geoPath(projection);

  const countriesFeatures = useMemo(() => {
    if (!worldData) return [];
    return (topojson.feature(worldData, worldData.objects.countries) as any).features;
  }, [worldData]);

  // Enhanced drag interaction
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const drag = d3.drag<SVGSVGElement, unknown>()
      .on("drag", (event) => {
        const r = projection.rotate();
        const k = 75 / projection.scale();
        setRotation([r[0] + event.dx * k, r[1] - event.dy * k]);
      });
    svg.call(drag);
  }, [projection]);

  const handleCountryClick = (feature: any) => {
    const numericId = feature.id.toString().padStart(3, '0');
    const alpha2 = ISO_NUMERIC_MAP[numericId];
    const pais = paises.find(p => p.codigo_mapa === alpha2);
    
    if (pais) {
      const centroid = d3.geoCentroid(feature);
      
      // Animate rotation to destination
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
    const numericId = feature.id.toString().padStart(3, '0');
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
    <div className="group relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#EAF4FB] to-[#7fd0f5] shadow-2xl border-4 border-brass/20 transition-all duration-500 hover:border-brass/40">
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full cursor-grab active:cursor-grabbing">
        <defs>
          <radialGradient id="globe-shading" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
          </radialGradient>
          <filter id="medal-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ocean Background */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="#EAF4FB" />
        
        {/* Graticule */}
        <path d={path(d3.geoGraticule()()) as string} fill="none" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.5" />

        {/* Countries */}
        <g>
          {countriesFeatures.map((f: any) => {
            const numericId = f.id.toString().padStart(3, '0');
            const alpha2 = ISO_NUMERIC_MAP[numericId];
            const countryData = paises.find(p => p.codigo_mapa === alpha2);
            const hasData = !!countryData;
            const immersive = isImmersive(f);
            
            return (
              <path
                key={f.id}
                d={path(f) as string}
                fill={hasData ? (immersive ? "#f5e6d3" : "#fdf8ec") : "#f5f5f5"}
                stroke={hasData ? "#8b4513" : "#ccc"}
                strokeWidth={hasData ? 0.8 : 0.4}
                className={`transition-colors duration-300 ${hasData ? 'hover:fill-brass/20 cursor-pointer' : ''}`}
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

        {/* Illustrations (Small Mountains/Clouds) */}
        <g pointerEvents="none" opacity="0.4">
          <text x={width * 0.2} y={height * 0.3} fontSize="20">☁️</text>
          <text x={width * 0.7} y={height * 0.2} fontSize="15">☁️</text>
          <text x={width * 0.15} y={height * 0.75} fontSize="24">⛵</text>
          <text x={width * 0.85} y={height * 0.65} fontSize="18">🐳</text>
        </g>

        {/* Country Markers (Pins/Medals) */}
        <g pointerEvents="none">
          {countriesFeatures.map((f: any) => {
            const numericId = f.id.toString().padStart(3, '0');
            const alpha2 = ISO_NUMERIC_MAP[numericId];
            const pais = paises.find(p => p.codigo_mapa === alpha2);
            if (!pais) return null;

            const centroid = d3.geoCentroid(f);
            const visible = path({ type: 'Point', coordinates: centroid });
            if (!visible) return null;

            const [x, y] = projection(centroid)!;
            const immersive = isImmersive(f);

            if (immersive) {
              return (
                <g key={`pin-${pais.id}`} transform={`translate(${x},${y})`}>
                  <circle r="12" fill="#FFD700" stroke="#B8860B" strokeWidth="2" filter="url(#medal-glow)" />
                  <text dy=".3em" textAnchor="middle" fontSize="12">{pais.bandeira}</text>
                  <circle r="14" fill="none" stroke="#FFD700" strokeOpacity="0.5" strokeWidth="1">
                    <animate attributeName="r" from="12" to="18" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            }

            return (
              <g key={`pin-${pais.id}`} transform={`translate(${x},${y})`}>
                <circle r="4" fill="#8b4513" stroke="#fff" strokeWidth="1" />
              </g>
            );
          })}
        </g>

        {/* Atmosphere/Shading */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="url(#globe-shading)" pointerEvents="none" />
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="none" stroke="#brass" strokeOpacity="0.1" strokeWidth="1" pointerEvents="none" />
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

      {/* Nav Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button onClick={() => setRotation([rotation[0] + 30, rotation[1]])} className="h-10 w-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white">🧭</button>
        <button onClick={() => setRotation([-45, -15])} className="h-10 w-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white">🏠</button>
      </div>
    </div>
  );
}
