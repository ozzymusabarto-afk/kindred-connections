import { useEffect, useRef, useState } from "react";
import { AMERICAS_PATHS, AMERICAS_VIEWBOX } from "@/data/americasMap";
import { corDoPais } from "@/data/mapColors";
import type { Pais } from "@/data/types";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

const AVIAO_BASE = { x: 300, y: 900 };

const ESTRELA = "50,3 61,35 95,35 68,56 78,90 50,70 22,90 32,56 5,35 39,35";

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const [aviao, setAviao] = useState(AVIAO_BASE);
  const [angulo, setAngulo] = useState(-45);
  const [emVoo, setEmVoo] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function viajar(pais: Pais) {
    if (emVoo) return;
    const destino = pais.coordenadas;
    const dx = destino.x - aviao.x;
    const dy = destino.y - aviao.y;
    setAngulo((Math.atan2(dy, dx) * 180) / Math.PI);
    setAviao(destino);
    setEmVoo(true);
    timer.current = setTimeout(() => {
      setEmVoo(false);
      onSelecionar(pais);
    }, 1150);
  }

  const disponiveis = new Set(paises.map((p) => p.codigo_mapa));
  const visitados = paises.filter((p) => carimbados.includes(p.id)).length;

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border">
      <svg
        viewBox={AMERICAS_VIEWBOX}
        className="h-[62vh] max-h-[720px] min-h-[380px] w-full"
        role="img"
        aria-label="Mapa colorido das Américas com os países disponíveis"
      >
        <defs>
          <linearGradient id="oceano" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--map-ocean)" />
            <stop offset="100%" stopColor="var(--map-ocean-deep)" />
          </linearGradient>
          <pattern id="grade" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M60 0H0V60"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1400" height="1300" fill="url(#oceano)" />
        <rect x="0" y="0" width="1400" height="1300" fill="url(#grade)" />

        {Object.entries(AMERICAS_PATHS).map(([id, d]) => (
          <path
            key={id}
            d={d}
            fill={corDoPais(id)}
            fillOpacity={disponiveis.has(id) ? 1 : 0.45}
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        ))}

        {paises.map((pais) => {
          const carimbado = carimbados.includes(pais.id);
          return (
            <g
              key={pais.id}
              transform={`translate(${pais.coordenadas.x} ${pais.coordenadas.y})`}
              className="group cursor-pointer"
              onClick={() => viajar(pais)}
              role="button"
              tabIndex={0}
              aria-label={`Explorar ${pais.nome}${carimbado ? " (já explorado)" : ""}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") viajar(pais);
              }}
            >
              <circle
                r="34"
                fill="#ffffff"
                fillOpacity="0.35"
                className="origin-center transition-transform duration-300 group-hover:scale-125"
              />
              <circle r="21" fill="var(--background)" stroke="#ffffff" strokeWidth="4" />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="26"
                y="1"
              >
                {pais.bandeira}
              </text>

              {carimbado && (
                <g transform="translate(16 -34) scale(0.42)" className="star-drop">
                  <polygon
                    points={ESTRELA}
                    fill="var(--map-star)"
                    stroke="#ffffff"
                    strokeWidth="7"
                    strokeLinejoin="round"
                  />
                </g>
              )}

              <g transform="translate(0 -46)">
                <rect
                  x={-(pais.nome.length * 8.4) / 2 - 10}
                  y="-24"
                  width={pais.nome.length * 8.4 + 20}
                  height="32"
                  rx="16"
                  fill="var(--background)"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text
                  y="-4"
                  textAnchor="middle"
                  fontSize="22"
                  fill="var(--foreground)"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pais.nome}
                </text>
              </g>
            </g>
          );
        })}

        <g
          transform={`translate(${aviao.x} ${aviao.y}) rotate(${angulo})`}
          style={{ transition: "transform 1100ms cubic-bezier(0.45,0,0.2,1)" }}
        >
          <path
            d="M-22,0 L14,-11 L14,-3 L26,0 L14,3 L14,11 Z"
            fill="var(--background)"
            stroke="var(--foreground)"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
        </g>
      </svg>

      <p className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3.5 py-1.5 text-xs tracking-wide text-foreground shadow-sm">
        {visitados} de {paises.length}{" "}
        {paises.length === 1 ? "país explorado" : "países explorados"}
      </p>
    </div>
  );
}
