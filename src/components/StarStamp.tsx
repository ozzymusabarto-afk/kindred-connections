interface StarStampProps {
  bandeira: string;
  /** Tamanho em pixels (largura e altura). */
  tamanho?: number;
  /** Ativa a animação de "pousar" da estrela. */
  animar?: boolean;
  className?: string;
  titulo?: string;
}

const PONTOS_ESTRELA =
  "50,3 61,35 95,35 68,56 78,90 50,70 22,90 32,56 5,35 39,35";

/** Estrela dourada com a bandeira do país no centro: marca de "já explorei". */
export function StarStamp({
  bandeira,
  tamanho = 44,
  animar = false,
  className = "",
  titulo,
}: StarStampProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={tamanho}
      height={tamanho}
      className={`${animar ? "star-drop" : ""} ${className}`}
      role="img"
      aria-label={titulo ?? "País já explorado"}
    >
      <polygon
        points={PONTOS_ESTRELA}
        fill="var(--map-star)"
        stroke="var(--background)"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle
        cx="50"
        cy="48"
        r="21"
        fill="var(--background)"
        stroke="var(--map-star)"
        strokeWidth="3"
      />
      <text x="50" y="48" textAnchor="middle" dominantBaseline="central" fontSize="26">
        {bandeira}
      </text>
    </svg>
  );
}
