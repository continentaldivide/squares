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
      className={`flex justify-center items-center size-12 text-2xl ${backgroundColor} select-none ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
    >
      {letter}
    </div>
  );
}
