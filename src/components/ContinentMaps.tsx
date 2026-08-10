import React from 'react';

const continents = {
  'america-do-norte': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M20,10 L35,8 L50,15 L75,10 L85,25 L70,45 L55,55 L50,85 L45,88 L35,65 L15,55 L10,35 Z" fill={color} />
    </svg>
  ),
  'america-do-sul': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M30,15 L70,25 L65,45 L55,75 L50,90 L40,75 L25,45 L30,25 Z" fill={color} />
    </svg>
  ),
  'europa': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M15,45 L35,35 L65,30 L85,45 L75,75 L45,80 L25,65 Z" fill={color} />
    </svg>
  ),
  'africa': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M30,15 L70,18 L85,35 L75,65 L60,85 L45,88 L20,65 L15,35 Z" fill={color} />
    </svg>
  ),
  'asia': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M10,45 L25,25 L65,15 L90,35 L85,75 L60,85 L35,75 Z" fill={color} />
    </svg>
  ),
  'oceania': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M30,40 L70,35 L85,55 L70,80 L35,75 L25,55 Z" fill={color} />
    </svg>
  ),
  'america-central': (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M20,30 L80,35 L75,65 L25,60 Z" fill={color} />
    </svg>
  ),
};

export const ContinentMap = ({ id, color = 'currentColor' }: { id: string, color?: string }) => {
  const draw = continents[id as keyof typeof continents];
  if (!draw) return null;
  return draw(color);
};
