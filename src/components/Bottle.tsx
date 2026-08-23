/** Bouteille Slim illustrée (SVG inline, zéro requête, net à toutes les densités). */
export function Bottle({
  liquid,
  deep,
  className = "",
}: {
  liquid: string;
  deep: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 380"
      role="img"
      aria-label="Bouteille en verre Slim"
      className={className}
    >
      {/* Corps de la bouteille */}
      <path
        d="M56 34 L56 74 C56 94 26 104 26 132 L26 340 C26 358 40 368 58 370 L82 370 C100 368 114 358 114 340 L114 132 C114 104 84 94 84 74 L84 34 Z"
        fill={liquid}
        stroke="#14382b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Col + bague */}
      <path d="M56 34 L56 20 C56 16 59 14 63 14 L77 14 C81 14 84 16 84 20 L84 34 Z" fill={deep} stroke="#14382b" strokeWidth="3" strokeLinejoin="round" />
      <path d="M52 38 L88 38" stroke="#14382b" strokeWidth="3" strokeLinecap="round" />
      {/* Reflet */}
      <path d="M42 150 C42 138 46 128 50 122 L50 330 C44 328 42 320 42 312 Z" fill="#ffffff" opacity="0.35" />
      {/* Étiquette */}
      <g>
        <rect x="27.5" y="196" width="85" height="88" fill="#fcf8ef" stroke="#14382b" strokeWidth="3" />
        <text x="70" y="238" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="30" letterSpacing="4" fill="#14382b">SLIM</text>
        <text x="70" y="264" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="500" fontSize="11" letterSpacing="2.5" fill="#14382b" opacity="0.65">GAZOUZ · DZ</text>
      </g>
      {/* Bulles dans le liquide */}
      <circle cx="88" cy="120" r="5" fill="#ffffff" opacity="0.55" />
      <circle cx="96" cy="160" r="3.4" fill="#ffffff" opacity="0.5" />
      <circle cx="80" cy="90" r="2.6" fill="#ffffff" opacity="0.45" />
      {/* Base */}
      <path d="M34 352 L106 352" stroke="#14382b" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
