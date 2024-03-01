import { useState } from 'react';
import SquareType from '../_interfaces/Square.interface';
import { useGameStateContext } from '../_context/GameStateContext';

export default function Square({
  square,
  position,
}: {
  square: SquareType;
  position: number;
}) {
  const [animated, setAnimated] = useState(false);
  const { gameStateDispatch } = useGameStateContext();
  const { backgroundColor, opacity } = square.styles;
  const letter = square.letter;

  return (
    <div
      className={`flex justify-center items-center size-12 text-2xl ${backgroundColor} ${opacity} select-none ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
      onClick={() =>
        gameStateDispatch({ type: 'select square', payload: position })
      }
    >
      {letter}
    </div>
  );
}
