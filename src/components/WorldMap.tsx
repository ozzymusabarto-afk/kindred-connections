import { useEffect, useMemo, useRef, useState } from "react";
import { WORLD_COUNTRIES, WORLD_SIZE } from "@/data/worldMap";
import { corDoMapa } from "@/data/mapColors";
import type { Pais } from "@/data/types";

interface WorldMapProps {
  paises: Pais[];
  carimbados: string[];
  onSelecionar: (pais: Pais) => void;
}

interface Vista {
  x: number;
  y: number;
  w: number;
  h: number;
}

const { largura: W, altura: H } = WORLD_SIZE;
const PROPORCAO = H / W;
const VISTA_MUNDO: Vista = { x: 0, y: 0, w: W, h: H };
const ZOOM_MAX = 24;
const ESTRELA = "50,3 61,35 95,35 68,56 78,90 50,70 22,90 32,56 5,35 39,35";

/** Mantém a vista dentro do mundo e com zoom válido. */
function limitar(v: Vista): Vista {
  const w = Math.min(W, Math.max(W / ZOOM_MAX, v.w));
  const h = w * PROPORCAO;
  return {
    w,
    h,
    x: Math.min(W - w, Math.max(0, v.x)),
    y: Math.min(H - h, Math.max(0, v.y)),
  };
}

/** Enquadra um conjunto de pontos com folga. */
function enquadrar(pontos: { x: number; y: number }[]): Vista {
  if (pontos.length === 0) return VISTA_MUNDO;
  const xs = pontos.map((p) => p.x);
  const ys = pontos.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const folga = 220;
  const largura = Math.max(maxX - minX + folga * 2, 320);
  const altura = Math.max(maxY - minY + folga * 2, 320 * PROPORCAO);
  const w = Math.max(largura, altura / PROPORCAO);
  return limitar({
    w,
    h: w * PROPORCAO,
    x: (minX + maxX) / 2 - w / 2,
    y: (minY + maxY) / 2 - (w * PROPORCAO) / 2,
  });
}

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [vista, setVista] = useState<Vista>(VISTA_MUNDO);
  const [aviao, setAviao] = useState({ x: W * 0.32, y: H * 0.62 });
  const [angulo, setAngulo] = useState(-45);
  const [emVoo, setEmVoo] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const arrasto = useRef<{ x: number; y: number; vista: Vista } | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  /** Posição de cada país no mapa mundial, a partir do contorno real. */
  const pinos = useMemo(() => {
    return paises.map((pais) => {
      const forma = WORLD_COUNTRIES.find((c) => c.id === pais.codigo_mapa);
      return { pais, ponto: forma?.centro ?? { x: W / 2, y: H / 2 } };
    });
  }, [paises]);

  // Reenquadra ao trocar o continente selecionado.
  const chaveFoco = pinos.map((p) => p.pais.id).join(",");
  useEffect(() => {
    setVista(enquadrar(pinos.map((p) => p.ponto)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chaveFoco]);

  const escala = W / vista.w;
  const px = (base: number) => (base * vista.w) / W;

  function pontoNoMapa(clienteX: number, clienteY: number) {
    const caixa = svgRef.current?.getBoundingClientRect();
    if (!caixa) return { x: vista.x + vista.w / 2, y: vista.y + vista.h / 2 };
    return {
      x: vista.x + ((clienteX - caixa.left) / caixa.width) * vista.w,
      y: vista.y + ((clienteY - caixa.top) / caixa.height) * vista.h,
    };
  }

  function zoomEm(fator: number, foco?: { x: number; y: number }) {
    setVista((v) => {
      const alvo = foco ?? { x: v.x + v.w / 2, y: v.y + v.h / 2 };
      const w = v.w / fator;
      const h = w * PROPORCAO;
      return limitar({
        w,
        h,
        x: alvo.x - ((alvo.x - v.x) / v.w) * w,
        y: alvo.y - ((alvo.y - v.y) / v.h) * h,
      });
    });
  }

  function viajar(pais: Pais, destino: { x: number; y: number }) {
    if (emVoo) return;
    setAngulo((Math.atan2(destino.y - aviao.y, destino.x - aviao.x) * 180) / Math.PI);
    setAviao(destino);
    setEmVoo(true);
    timer.current = setTimeout(() => {
      setEmVoo(false);
      onSelecionar(pais);
    }, 1150);
  }

  const visitados = paises.filter((p) => carimbados.includes(p.id)).length;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border-2 border-border shadow-lg">
      <svg
        ref={svgRef}
        viewBox={`${vista.x} ${vista.y} ${vista.w} ${vista.h}`}
        className="aspect-[2/1] w-full cursor-grab touch-none active:cursor-grabbing"
        role="img"
        aria-label="Mapa mundi colorido com nomes de países e capitais"
        onWheel={(e) => {
          zoomEm(e.deltaY < 0 ? 1.22 : 1 / 1.22, pontoNoMapa(e.clientX, e.clientY));
        }}
        onPointerDown={(e) => {
          arrasto.current = { x: e.clientX, y: e.clientY, vista };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          const a = arrasto.current;
          if (!a) return;
          const caixa = svgRef.current?.getBoundingClientRect();
          if (!caixa) return;
          const dx = ((e.clientX - a.x) / caixa.width) * a.vista.w;
          const dy = ((e.clientY - a.y) / caixa.height) * a.vista.h;
          setVista(limitar({ ...a.vista, x: a.vista.x - dx, y: a.vista.y - dy }));
        }}
        onPointerUp={() => { arrasto.current = null; }}
        onPointerLeave={() => { arrasto.current = null; }}
      >
        <defs>
          <linearGradient id="oceano" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--map-ocean)" />
            <stop offset="100%" stopColor="var(--map-ocean-deep)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={W} height={H} fill="url(#oceano)" />

        {WORLD_COUNTRIES.map((c) => (
          <path
            key={c.id}
            d={c.d}
            fill={corDoMapa(c.id, c.cor)}
            stroke="#ffffff"
            strokeOpacity="0.85"
            strokeWidth={px(1.6)}
            strokeLinejoin="round"
          />
        ))}

        {/* Nomes de países com a capital logo abaixo. */}
        {WORLD_COUNTRIES.map((c) => {
          const mostraNome = escala >= c.rank * 0.55;
          if (!mostraNome) return null;
          const capital = c.capital
            ? (CAPITAIS_PT[c.capital.nome] ?? c.capital.nome)
            : null;
          return (
            <g key={`rot-${c.id}`} pointerEvents="none">
              <text
                x={c.centro.x}
                y={c.centro.y}
                textAnchor="middle"
                fontSize={px(11)}
                fill="#1f2b1c"
                stroke="#ffffff"
                strokeWidth={px(2.6)}
                paintOrder="stroke"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
              >
                {c.nome}
              </text>
              {capital && (
                <text
                  x={c.centro.x}
                  y={c.centro.y + px(10)}
                  textAnchor="middle"
                  fontSize={px(8)}
                  fill="#3c4a3e"
                  stroke="#ffffff"
                  strokeWidth={px(2.2)}
                  paintOrder="stroke"
                  style={{ fontFamily: "var(--font-sans)", fontStyle: "italic" }}
                >
                  ★ {capital}
                </text>
              )}
              {c.capital && escala >= 3.2 && (
                <circle
                  cx={c.capital.x}
                  cy={c.capital.y}
                  r={px(2.4)}
                  fill="#1f2b1c"
                  stroke="#ffffff"
                  strokeWidth={px(1)}
                />
              )}
            </g>
          );
        })}


        {pinos.map(({ pais, ponto }) => {
          const carimbado = carimbados.includes(pais.id);
          const t = px(1);
          return (
            <g
              key={pais.id}
              transform={`translate(${ponto.x} ${ponto.y}) scale(${t})`}
              className="group cursor-pointer"
              onClick={() => viajar(pais, ponto)}
              role="button"
              tabIndex={0}
              aria-label={`Explorar ${pais.nome}${carimbado ? " (já explorado)" : ""}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") viajar(pais, ponto);
              }}
            >
              <circle
                r="30"
                fill="#ffffff"
                fillOpacity="0.45"
                className="origin-center transition-transform duration-300 group-hover:scale-125"
              />
              <circle r="19" fill="var(--card)" stroke="#ffffff" strokeWidth="4" />
              <text textAnchor="middle" dominantBaseline="central" fontSize="24" y="1">
                {pais.bandeira}
              </text>

              {carimbado && (
                <g transform="translate(14 -30) scale(0.38)" className="star-drop">
                  <polygon
                    points={ESTRELA}
                    fill="var(--map-star)"
                    stroke="#ffffff"
                    strokeWidth="7"
                    strokeLinejoin="round"
                  />
                </g>
              )}

              <g transform="translate(0 -42)">
                <rect
                  x={-(pais.nome.length * 7.6) / 2 - 9}
                  y="-22"
                  width={pais.nome.length * 7.6 + 18}
                  height="28"
                  rx="14"
                  fill="var(--card)"
                  stroke="var(--brass)"
                  strokeWidth="2"
                />
                <text
                  y="-3"
                  textAnchor="middle"
                  fontSize="19"
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
          transform={`translate(${aviao.x} ${aviao.y}) rotate(${angulo}) scale(${px(1)})`}
          style={{ transition: "transform 1100ms cubic-bezier(0.45,0,0.2,1)" }}
          pointerEvents="none"
        >
          <path
            d="M-22,0 L14,-11 L14,-3 L26,0 L14,3 L14,11 Z"
            fill="var(--card)"
            stroke="var(--foreground)"
            strokeOpacity="0.45"
            strokeWidth="2"
          />
        </g>
      </svg>

      <div className="absolute right-3 top-3 flex flex-col gap-2">
        <BotaoZoom rotulo="Aproximar" onClick={() => zoomEm(1.5)}>
          +
        </BotaoZoom>
        <BotaoZoom rotulo="Afastar" onClick={() => zoomEm(1 / 1.5)}>
          −
        </BotaoZoom>
        <BotaoZoom
          rotulo="Ver o mundo inteiro"
          onClick={() => setVista(VISTA_MUNDO)}
        >
          🌎
        </BotaoZoom>
      </div>

      <p className="absolute bottom-3 left-3 rounded-full bg-card/95 px-3.5 py-1.5 text-xs tracking-wide text-foreground shadow-sm">
        {visitados} de {paises.length}{" "}
        {paises.length === 1 ? "país explorado" : "países explorados"} · arraste
        para mover e use + para ler as capitais
      </p>
    </div>
  );
}

function BotaoZoom({
  rotulo,
  onClick,
  children,
}: {
  rotulo: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={rotulo}
      title={rotulo}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brass bg-card text-lg text-foreground shadow-md transition-transform hover:scale-110"
    >
      {children}
    </button>
  );
}
