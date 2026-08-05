import React from 'react';

export const Illustration2D = ({ type, x, y, scale = 1 }: { type: string, x: number, y: number, scale?: number }) => {
  const getIllustration = () => {
    switch (type) {
      case 'cristo': // South America
        return (
          <g transform="translate(-15, -25)">
            <rect x="13" y="10" width="4" height="20" fill="#cbd5e1" />
            <rect x="5" y="12" width="20" height="3" fill="#cbd5e1" />
            <circle cx="15" cy="8" r="3" fill="#cbd5e1" />
          </g>
        );
      case 'liberdade': // North America
        return (
          <g transform="translate(-10, -25)">
            <rect x="8" y="5" width="4" height="20" fill="#0d9488" />
            <path d="M5,25 L15,25 L13,30 L7,30 Z" fill="#57534e" />
            <rect x="12" y="2" width="2" height="8" fill="#facc15" />
          </g>
        );
      case 'eiffel': // Europe
        return (
          <g transform="translate(-15, -30)">
            <path d="M15,5 L25,35 L5,35 Z" fill="none" stroke="#444" strokeWidth="2" />
            <line x1="10" y1="25" x2="20" y2="25" stroke="#444" strokeWidth="1" />
            <line x1="13" y1="15" x2="17" y2="15" stroke="#444" strokeWidth="1" />
          </g>
        );
      case 'piramides': // Africa
        return (
          <g transform="translate(-20, -15)">
            <path d="M0,20 L15,0 L30,20 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
            <path d="M10,20 L20,5 L35,20 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
          </g>
        );
      case 'panda': // Asia
        return (
          <g transform="translate(-15, -15)">
            <circle cx="15" cy="15" r="12" fill="white" stroke="#000" strokeWidth="1" />
            <circle cx="9" cy="12" r="3" fill="black" />
            <circle cx="21" cy="12" r="3" fill="black" />
            <circle cx="8" cy="5" r="4" fill="black" />
            <circle cx="22" cy="5" r="4" fill="black" />
          </g>
        );
      case 'canguru': // Oceania
        return (
          <g transform="translate(-15, -15)">
             <path d="M5,25 Q15,5 25,25" fill="none" stroke="#b45309" strokeWidth="3" />
             <circle cx="25" cy="15" r="3" fill="#b45309" />
          </g>
        );
      case 'pinguim': // Antarctica
        return (
          <g transform="translate(-10, -15)">
            <ellipse cx="10" cy="15" rx="7" ry="12" fill="black" />
            <ellipse cx="10" cy="16" rx="4" ry="8" fill="white" />
            <circle cx="7" cy="8" r="1.5" fill="white" />
            <circle cx="13" cy="8" r="1.5" fill="white" />
            <path d="M9,10 L11,10 L10,13 Z" fill="#f97316" />
          </g>
        );
      case 'caravela': // Ocean
        return (
          <g transform="translate(-15, -15)">
            <path d="M5,20 L25,20 L20,30 L10,30 Z" fill="#78350f" />
            <path d="M15,5 L15,20 M15,5 L25,15 L15,15 Z" fill="white" stroke="#78350f" />
          </g>
        );
      case 'baleia': // Ocean
        return (
          <g transform="translate(-20, -10)">
            <path d="M0,10 Q10,-10 30,10 Q40,20 20,20 Q0,20 0,10" fill="#3b82f6" />
            <path d="M30,10 L40,0 L40,20 Z" fill="#3b82f6" />
          </g>
        );
      case 'aviao': // Flight animation
        return (
          <g transform="translate(-10, -10)">
            <path d="M0,10 L20,10 L15,5 L5,5 Z" fill="#ec4899" />
            <path d="M10,0 L12,10 L10,20 L8,10 Z" fill="#ec4899" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none">
      {getIllustration()}
    </g>
  );
};
