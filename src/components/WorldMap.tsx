import { useEffect, useRef, useState } from "react";
import { AMERICAS_PATHS, AMERICAS_VIEWBOX } from "@/data/americasMap";
import type { Pais } from "@/data/types";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

const AVIAO_BASE = { x: 300, y: 900 };

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

  return (
    <div className="relative w-full overflow-hidden rounded-md border border-border bg-ocean paper-grain">
      <svg
        viewBox={AMERICAS_VIEWBOX}
        className="h-[62vh] max-h-[720px] min-h-[380px] w-full"
        role="img"
        aria-label="Mapa das Américas com os países disponíveis"
      >
        <defs>
          <pattern id="grade" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M60 0H0V60"
              fill="none"
              stroke="var(--foreground)"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1400" height="1300" fill="url(#grade)" />

        {Object.entries(AMERICAS_PATHS).map(([id, d]) => (
          <path
            key={id}
            d={d}
            fill="var(--land)"
            stroke="var(--foreground)"
            strokeOpacity="0.22"
            strokeWidth="1.2"
          />
        ))}

        {paises.map((pais) => {
          const carimbado = carimbados.includes(pais.id);
          return (
            <g
              key={pais.id}
              transform={`translate(${pais.coordenadas.x} ${pais.coordenadas.y})`}
              className="cursor-pointer"
              onClick={() => viajar(pais)}
              role="button"
              tabIndex={0}
              aria-label={`Explorar ${pais.nome}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") viajar(pais);
              }}
            >
              <circle r="34" fill="var(--brass)" fillOpacity="0.12" />
              <circle
                r="11"
                fill="var(--primary)"
                stroke="var(--background)"
                strokeWidth="3"
              />
              {carimbado && (
                <circle
                  r="22"
                  fill="none"
                  stroke="var(--brass)"
                  strokeWidth="2.5"
                  strokeDasharray="6 5"
                />
              )}
              <text
                y="-42"
                textAnchor="middle"
                fontSize="30"
                fill="var(--foreground)"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pais.nome}
              </text>
            </g>
          );
        })}

        <g
          transform={`translate(${aviao.x} ${aviao.y}) rotate(${angulo})`}
          style={{ transition: "transform 1100ms cubic-bezier(0.45,0,0.2,1)" }}
        >
          <path
            d="M-22,0 L14,-11 L14,-3 L26,0 L14,3 L14,11 Z"
            fill="var(--brass)"
            stroke="var(--foreground)"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}
