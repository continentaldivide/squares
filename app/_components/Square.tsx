import { useState, useEffect } from 'react';

export default function Square({ styles }: { styles: any }) {
  const [borderColor, setBorderColor] = useState('');
  const [hoverColor, setHoverColor] = useState('');
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const { borderColor, hoverColor } = styles;
    setBorderColor(borderColor);
    setHoverColor(hoverColor);
  }, [styles]);

  return (
    <div
      className={`size-10 border-2 ${borderColor} ${hoverColor} ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
    ></div>
  );
}
