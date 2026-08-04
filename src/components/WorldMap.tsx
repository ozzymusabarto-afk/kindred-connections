import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Pais } from "@/data/types";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [rotation, setRotation] = useState<[number, number]>([-45, -15]);
  const [worldData, setWorldData] = useState<any>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  // Load world data
  useEffect(() => {
    fetch("/world-110m.json")
      .then((res) => res.json())
      .then((data) => setWorldData(data));
  }, []);

  const width = 800;
  const height = 600;

  // D3 Setup
  const projection = useMemo(() => {
    return d3.geoOrthographic()
      .scale(250)
      .translate([width / 2, height / 2])
      .rotate(rotation);
  }, [rotation]);

  const path = d3.geoPath(projection);

  // Map Countries to GeoJSON and inject our app data
  const countries = useMemo(() => {
    if (!worldData) return [];
    const features = (topojson.feature(worldData, worldData.objects.countries) as any).features;
    
    return features.map((f: any) => {
      // Find matching country in our database (by name or ID if possible)
      // Note: world-atlas uses numeric IDs, we might need a mapping or use ISO if available
      return f;
    });
  }, [worldData]);

  // Handle Drag
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const drag = d3.drag<SVGSVGElement, unknown>()
      .on("drag", (event) => {
        const r = projection.rotate();
        const k = 75 / projection.scale();
        setRotation([
          r[0] + event.dx * k,
          r[1] - event.dy * k
        ]);
      });

    svg.call(drag);
  }, [projection]);

  if (!worldData) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-sky-100/30 rounded-3xl">
        <div className="text-brass animate-pulse font-display">Carregando o globo mágico...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#d9ecf8] to-[#7fd0f5] shadow-2xl border-4 border-brass/20">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full cursor-grab active:cursor-grabbing"
      >
        <defs>
          <radialGradient id="ocean-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#b9e4f5" />
            <stop offset="100%" stopColor="#7fd0f5" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ocean Sphere */}
        <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="url(#ocean-gradient)" />

        {/* Graticule (Grid Lines) */}
        <path
          d={path(d3.geoGraticule()()) as string}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.15"
          strokeWidth="0.5"
        />

        {/* Countries */}
        <g>
          {countries.map((feature: any) => {
            const id = feature.id;
            const isHovered = hoveredId === id;
            
            return (
              <path
                key={id}
                d={path(feature) as string}
                fill={isHovered ? "#d4e6d1" : "#fdf8ec"}
                stroke="#33422f"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                className="transition-colors duration-200"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              />
            );
          })}
        </g>

        {/* Atmosphere/Border */}
        <circle
          cx={width / 2}
          cy={height / 2}
          r={projection.scale()}
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          pointerEvents="none"
        />
      </svg>
      
      {/* Instructions Overlay */}
      <div className="absolute bottom-6 left-6 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brass/20 shadow-sm flex items-center gap-2">
          <span className="text-xl">🖱️</span>
          <p className="text-xs text-brass font-medium">Gire o globo para explorar!</p>
        </div>
      </div>
    </div>
  );
}
