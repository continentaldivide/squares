import { useState } from 'react';

export default function Square({
  letter,
  styles,
}: {
  letter: string;
  styles: any;
}) {
  const [animated, setAnimated] = useState(false);
  const { backgroundColor } = styles;

  return (
    <div
      className={`size-10 ${backgroundColor} ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
    >
      {letter}
    </div>
  );
}
