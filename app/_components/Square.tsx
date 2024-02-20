import { useState } from 'react';

export default function Square() {
  const [animated, setAnimated] = useState(false);
  return (
    <div
      className={`size-10 border-2 border-slate-600 hover:bg-slate-600 ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
    ></div>
  );
}
