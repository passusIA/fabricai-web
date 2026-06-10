// Logo "C tejida" de FabricAI: cuatro cuadrantes (azul, azul claro, violeta,
// cian) que evocan el telar. Se usa en nav (34), hero (56) y footer (30).

export function Logo({
  size = 34,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 68 68"
      width={size}
      height={size}
      role="img"
      aria-label="FabricAI"
    >
      <g transform="rotate(0 34 34)">
        <path d="M34 34 L26 12 a16 16 0 0 1 16 0 Z" fill="#3B6CF6" />
        <path d="M34 34 L34 11 a16 16 0 0 1 8 1 Z" fill="#2A4FCB" />
      </g>
      <g transform="rotate(90 34 34)">
        <path d="M34 34 L26 12 a16 16 0 0 1 16 0 Z" fill="#5B8DEF" />
        <path d="M34 34 L34 11 a16 16 0 0 1 8 1 Z" fill="#3F6AD8" />
      </g>
      <g transform="rotate(180 34 34)">
        <path d="M34 34 L26 12 a16 16 0 0 1 16 0 Z" fill="#7C5CFF" />
        <path d="M34 34 L34 11 a16 16 0 0 1 8 1 Z" fill="#5E45D6" />
      </g>
      <g transform="rotate(270 34 34)">
        <path d="M34 34 L26 12 a16 16 0 0 1 16 0 Z" fill="#22D3EE" />
        <path d="M34 34 L34 11 a16 16 0 0 1 8 1 Z" fill="#1AA9C0" />
      </g>
      <circle cx="34" cy="34" r="4" fill="#0B1020" />
    </svg>
  );
}
