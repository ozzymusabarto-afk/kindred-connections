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
const DURACAO_VOO = 1500;

/** Ponto de partida de toda expedição: o Brasil, casa dos exploradores. */
const ORIGEM_BRASIL = WORLD_COUNTRIES.find((c) => c.id === "br")?.capital ?? null;

/** Capitais cujo nome em português difere do nome original do mapa. */
const CAPITAIS_PT: Record<string, string> = {
  "Mexico City": "Cidade do México",
  "Washington, D.C.": "Washington",
  "Washington D.C.": "Washington",
  Brasilia: "Brasília",
  Bogota: "Bogotá",
  Asuncion: "Assunção",
  Panama: "Cidade do Panamá",
  "Panama City": "Cidade do Panamá",
  "San Jose": "São José",
  "San Salvador": "San Salvador",
  Havana: "Havana",
  Lisbon: "Lisboa",
  Rome: "Roma",
  Athens: "Atenas",
  Bern: "Berna",
  Vienna: "Viena",
  Brussels: "Bruxelas",
  Copenhagen: "Copenhague",
  Moscow: "Moscou",
  Warsaw: "Varsóvia",
  Prague: "Praga",
  Bucharest: "Bucareste",
  Stockholm: "Estocolmo",
  Helsinki: "Helsinque",
  Dublin: "Dublin",
  London: "Londres",
  Paris: "Paris",
  Berlin: "Berlim",
  Madrid: "Madri",
  Cairo: "Cairo",
  Algiers: "Argel",
  Tunis: "Túnis",
  Rabat: "Rabate",
  Nairobi: "Nairóbi",
  "Addis Ababa": "Adis Abeba",
  Khartoum: "Cartum",
  Beijing: "Pequim",
  Tokyo: "Tóquio",
  Seoul: "Seul",
  "New Delhi": "Nova Délhi",
  Bangkok: "Bangcoc",
  Jakarta: "Jacarta",
  Damascus: "Damasco",
  Baghdad: "Bagdá",
  Tehran: "Teerã",
  Riyadh: "Riade",
  Ankara: "Ancara",
  Canberra: "Camberra",
  Wellington: "Wellington",
};

/** Nuvenzinhas decorativas — o único toque ilustrado do projeto, só no mapa. */
const NUVENS = [
  { x: 0.16, y: 0.2, e: 1 },
  { x: 0.52, y: 0.14, e: 0.8 },
  { x: 0.78, y: 0.3, e: 1.1 },
  { x: 0.34, y: 0.82, e: 0.9 },
  { x: 0.68, y: 0.76, e: 0.75 },
];

function prefereMenosMovimento() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

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

/** Curva de voo entre dois pontos do mapa. */
function rotaDeVoo(
  de: { x: number; y: number },
  para: { x: number; y: number },
): string {
  const meioX = (de.x + para.x) / 2;
  const meioY = (de.y + para.y) / 2 - 70;
  return `M${de.x} ${de.y} Q${meioX} ${meioY} ${para.x} ${para.y}`;
}

/** Aviãozinho lúdico, colorido e vibrante — visto de cima. */
function Aviaozinho() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="26" ry="7.5" fill="#e63946" stroke="#ffffff" strokeWidth="2.4" />
      <path
        d="M-4,-2 L2,-24 L10,-24 L8,-2 Z"
        fill="#ffb703"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M-4,2 L2,24 L10,24 L8,2 Z"
        fill="#ffb703"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M-20,-1.5 L-26,-11 L-21,-11 L-16,-1.5 Z"
        fill="#f77f00"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M-20,1.5 L-26,11 L-21,11 L-16,1.5 Z"
        fill="#f77f00"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="0" r="4.2" fill="#8ecae6" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="4" cy="0" r="2.4" fill="#8ecae6" />
      <circle cx="-4" cy="0" r="2.4" fill="#8ecae6" />
    </g>
  );
}

function Nuvem({ x, y, escala }: { x: number; y: number; escala: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${escala})`} opacity="0.55" pointerEvents="none">
      <circle cx="0" cy="0" r="16" fill="#ffffff" />
      <circle cx="16" cy="4" r="12" fill="#ffffff" />
      <circle cx="-16" cy="5" r="11" fill="#ffffff" />
      <rect x="-18" y="2" width="36" height="12" rx="6" fill="#ffffff" />
    </g>
  );
}

export function WorldMap({ paises, carimbados, onSelecionar }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [vista, setVista] = useState<Vista>(VISTA_MUNDO);
  const [pousado, setPousado] = useState(ORIGEM_BRASIL ?? { x: W * 0.32, y: H * 0.62 });
  const [voo, setVoo] = useState<{ d: string; destino: { x: number; y: number }; progresso: number } | null>(null);
  const [hoveredPais, setHoveredPais] = useState<Pais | null>(null);
  const [emFoco, setEmFoco] = useState<string | null>(null);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const arrasto = useRef<{ x: number; y: number; vista: Vista } | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; pais: Pais } | null>(null);

  useEffect(() => () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); }, []);

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

  /** Países que já têm pino clicável não repetem o rótulo do mapa. */
  const comPino = useMemo(
    () => new Set(paises.map((p) => p.codigo_mapa)),
    [paises],
  );

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
    if (voo) return;
    const partida = pousado;
    
    if (prefereMenosMovimento()) {
      setPousado(destino);
      onSelecionar(pais);
      return;
    }

    const d = rotaDeVoo(partida, destino);
    startTimeRef.current = null;

    const animar = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const progress = Math.min((time - startTimeRef.current) / DURACAO_VOO, 1);
      
      setVoo({ d, destino, progresso: progress });

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animar);
      } else {
        setPousado(destino);
        setVoo(null);
        onSelecionar(pais);
      }
    };

    requestRef.current = requestAnimationFrame(animar);
  }

  const visitados = paises.filter((p) => carimbados.includes(p.id)).length;

  return (
    <div className="group/map relative w-full overflow-hidden rounded-3xl border-4 border-brass/20 bg-card shadow-2xl transition-all duration-500 hover:border-brass/40">
      {/* Controles de Zoom Estilizados (Lupa) */}
      <div className="absolute right-6 top-6 z-20 flex flex-col gap-3">
        <button
          onClick={() => zoomEm(1.5)}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass/30 bg-card/90 text-brass shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-brass hover:bg-card active:scale-95"
          title="Aumentar zoom"
        >
          <span className="text-2xl font-bold">+</span>
        </button>
        <button
          onClick={() => zoomEm(1 / 1.5)}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass/30 bg-card/90 text-brass shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-brass hover:bg-card active:scale-95"
          title="Diminuir zoom"
        >
          <span className="text-2xl font-bold">−</span>
        </button>
        <button
          onClick={() => setVista(VISTA_MUNDO)}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass/30 bg-card/90 text-brass shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-brass hover:bg-card active:scale-95"
          title="Ver o mundo todo"
        >
          <span className="text-xl">🌍</span>
        </button>
      </div>

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
          setTooltip(null);
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
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="shadow-pin">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
          <linearGradient id="oceano" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9ecf8" />
            <stop offset="50%" stopColor="#b9e4f5" />
            <stop offset="100%" stopColor="#7fd0f5" />
          </linearGradient>
          {pinos.map(({ pais }) => (
            <clipPath key={`clip-${pais.id}`} id={`clip-${pais.id}`}>
              <circle cx="0" cy="0" r="15" />
            </clipPath>
          ))}
        </defs>

        <rect x="0" y="0" width={W} height={H} fill="url(#oceano)" />

        {/* Linhas Geográficas */}
        <g stroke="#ffffff" strokeOpacity="0.15" strokeWidth={px(1)} fill="none" pointerEvents="none">
          {/* Equador */}
          <line x1="0" y1={H * 0.5} x2={W} y2={H * 0.5} strokeOpacity="0.3" strokeWidth={px(1.5)} />
          {/* Trópico de Câncer */}
          <line x1="0" y1={H * 0.37} x2={W} y2={H * 0.37} strokeDasharray={`${px(5)} ${px(5)}`} />
          {/* Trópico de Capricórnio */}
          <line x1="0" y1={H * 0.63} x2={W} y2={H * 0.63} strokeDasharray={`${px(5)} ${px(5)}`} />
        </g>

        {/* Rosa dos Ventos */}
        <g transform={`translate(${W * 0.92} ${H * 0.82}) scale(${px(0.8)})`} pointerEvents="none">
          <circle r="40" fill="var(--card)" opacity="0.2" />
          <path d="M0 -45 L8 0 L0 45 L-8 0 Z" fill="var(--brass)" />
          <path d="M-45 0 L0 -8 L45 0 L0 8 Z" fill="var(--brass)" />
          <text y="-50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--foreground)" opacity="0.7">N</text>
          <text y="60" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--foreground)" opacity="0.7">S</text>
          <text x="50" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--foreground)" opacity="0.7">L</text>
          <text x="-55" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--foreground)" opacity="0.7">O</text>
        </g>

        {/* Legenda dos Mares */}
        <g pointerEvents="none" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} opacity="0.4">
          <text x={W * 0.15} y={H * 0.4} fontSize={px(18)} fill="#ffffff">Oceano Pacífico</text>
          <text x={W * 0.42} y={H * 0.55} fontSize={px(18)} fill="#ffffff">Oceano Atlântico</text>
          <text x={W * 0.72} y={H * 0.65} fontSize={px(18)} fill="#ffffff">Oceano Índico</text>
        </g>

        {NUVENS.map((n, i) => (
          <Nuvem key={`nuvem-${i}`} x={W * n.x} y={H * n.y} escala={px(n.e)} />
        ))}

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
          if (comPino.has(c.id)) return null;
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
                fontSize={px(10)}
                fill="#33422f"
                fillOpacity="0.9"
                stroke="#ffffff"
                strokeWidth={px(2.4)}
                paintOrder="stroke"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
              >
                {c.nome}
              </text>
              {capital && escala >= 2 && (
                <text
                  x={c.centro.x}
                  y={c.centro.y + px(9)}
                  textAnchor="middle"
                  fontSize={px(7.5)}
                  fill="#55654f"
                  stroke="#ffffff"
                  strokeWidth={px(2)}
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

        {/* Rotas: só a do país em foco, do voo em curso e as já carimbadas. */}
        {ORIGEM_BRASIL &&
          pinos.map(({ pais, ponto }) => {
            const carimbado = carimbados.includes(pais.id);
            const ativo = emFoco === pais.id;
            if (!carimbado && !ativo) return null;
            return (
              <path
                key={`rota-${pais.id}`}
                d={rotaDeVoo(ORIGEM_BRASIL, ponto)}
                fill="none"
                stroke="#b9822f"
                strokeOpacity={ativo ? 0.8 : 0.45}
                strokeWidth={px(1.5)}
                strokeDasharray={`${px(6)} ${px(5)}`}
                strokeLinecap="round"
                pointerEvents="none"
              />
            );
          })}

        {voo && (
          <g>
            <path
              id="rota-voo"
              d={voo.d}
              fill="none"
              stroke="#e63946"
              strokeOpacity="0.5"
              strokeWidth={px(2)}
              strokeDasharray={`${px(7)} ${px(6)}`}
              strokeLinecap="round"
              pointerEvents="none"
            />
            <g>
              <animateMotion
                dur={`${DURACAO_VOO}ms`}
                repeatCount="1"
                rotate="auto"
                begin="0s"
              >
                <mpath href="#rota-voo" />
              </animateMotion>
              <Aviaozinho />
            </g>
          </g>
        )}

        {/* Marcador da casa dos exploradores. */}
        {ORIGEM_BRASIL && (
          <g pointerEvents="none">
            <circle
              cx={ORIGEM_BRASIL.x}
              cy={ORIGEM_BRASIL.y}
              r={px(4)}
              fill="#1f7a3d"
              stroke="#ffffff"
              strokeWidth={px(1.6)}
            />
            <text
              x={ORIGEM_BRASIL.x}
              y={ORIGEM_BRASIL.y - px(8)}
              textAnchor="middle"
              fontSize={px(9)}
              fill="#1f2b1c"
              stroke="#ffffff"
              strokeWidth={px(2.4)}
              paintOrder="stroke"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
            >
              🏠 Nossa casa
            </text>
          </g>
        )}

        {/* Pinos compactos dos países visitáveis. */}
        {pinos.map(({ pais, ponto }) => {
          const carimbado = carimbados.includes(pais.id);
          const ativo = emFoco === pais.id;
          const mostraNome = ativo || escala >= 2.4;
          return (
            <g
              key={pais.id}
              transform={`translate(${ponto.x} ${ponto.y}) scale(${px(1)})`}
              className="group cursor-pointer"
              onClick={() => viajar(pais, ponto)}
              onPointerEnter={() => setEmFoco(pais.id)}
              onPointerLeave={() => setEmFoco((a) => (a === pais.id ? null : a))}
              onFocus={() => setEmFoco(pais.id)}
              onBlur={() => setEmFoco((a) => (a === pais.id ? null : a))}
              role="button"
              tabIndex={0}
              aria-label={`Explorar ${pais.nome}${carimbado ? " (já explorado)" : ""}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") viajar(pais, ponto);
              }}
            >
              <circle r="30" fill="transparent" />
              <g className="origin-center transition-transform duration-300 group-hover:scale-125">
                <circle r="17" fill="var(--card)" stroke="var(--brass)" strokeWidth="3" />
                {pais.bandeira_url ? (
                  <image
                    href={pais.bandeira_url}
                    x="-15"
                    y="-15"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#clip-${pais.id})`}
                  />
                ) : (
                  <text y="6" textAnchor="middle" fontSize="18">
                    {pais.bandeira}
                  </text>
                )}
                {carimbado && (
                  <g transform="translate(11 -13) scale(0.22)" className="star-drop">
                    <polygon
                      points={ESTRELA}
                      fill="var(--map-star)"
                      stroke="#ffffff"
                      strokeWidth="8"
                      strokeLinejoin="round"
                    />
                  </g>
                )}
              </g>

              {mostraNome && (
                <g pointerEvents="none">
                  <text
                    y="34"
                    textAnchor="middle"
                    fontSize="15"
                    fill="var(--foreground)"
                    stroke="var(--card)"
                    strokeWidth="3"
                    paintOrder="stroke"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pais.nome}
                  </text>
                  {pais.capital && (
                    <text
                      y="48"
                      textAnchor="middle"
                      fontSize="11"
                      fill="var(--muted-foreground)"
                      stroke="var(--card)"
                      strokeWidth="3.5"
                      paintOrder="stroke"
                      style={{ fontFamily: "var(--font-sans)", fontStyle: "italic" }}
                    >
                      ★ {pais.capital}
                    </text>
                  )}
                </g>
              )}
            </g>
          );
        })}

        {/* Aviãozinho: pousado no último destino ou em pleno voo. */}
        {voo ? (
          <g key={voo.d} pointerEvents="none">
            <animateMotion
              dur={`${DURACAO_VOO}ms`}
              fill="freeze"
              rotate="auto"
              path={voo.d}
              calcMode="spline"
              keyPoints="0;1"
              keyTimes="0;1"
              keySplines="0.4 0 0.3 1"
            />
            <g transform={`scale(${px(0.85)})`}>
              <Aviaozinho />
            </g>
          </g>
        ) : (
          <g
            transform={`translate(${pousado.x} ${pousado.y}) rotate(-20) scale(${px(0.85)})`}
            pointerEvents="none"
          >
            <Aviaozinho />
          </g>
        )}
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
        {paises.length === 1 ? "país explorado" : "países explorados"} · toque numa
        bandeirinha e o aviãozinho decola do Brasil
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
