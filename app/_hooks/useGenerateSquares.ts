'use client';

import { useState, useEffect } from 'react';

export default function GenerateSquares() {
  const [color, setColor] = useState('');
  const colors = ['blue', 'green', 'yellow', 'red'];
  useEffect(() => {
    const newColor = colors[Math.floor(colors.length * Math.random())];
    setColor(newColor);
  }, []);
  return {
    borderColor: `border-${color}-600`,
    hoverColor: `hover:bg-${color}-600`,
  };
}
