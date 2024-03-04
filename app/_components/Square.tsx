import { useState } from 'react';
import SquareType from '../_interfaces/Square.interface';
import { useGameStateContext } from '../_context/GameStateContext';

export default function Square({
  square,
  position,
  insideWordBlock,
}: {
  square: SquareType;
  position: number;
  insideWordBlock: boolean;
}) {
  const [animated, setAnimated] = useState(false);
  const { gameState, gameStateDispatch } = useGameStateContext();
  const { backgroundColor, opacity } = square.styles;
  const letter = square.letter;

  const selectableSquare = (
    <div
      className={`flex justify-center items-center size-12 text-2xl ${backgroundColor} ${opacity} select-none ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
      onClick={
        gameState.selectedSquares.includes(position)
          ? () => {
              gameStateDispatch({ type: 'deselect square', payload: position });
            }
          : () => {
              gameStateDispatch({ type: 'select square', payload: position });
            }
      }
    >
      {letter}
    </div>
  );

  const wordBlockSquare = (
    <div
      className={`flex justify-center items-center size-12 text-2xl ${backgroundColor} select-none`}
    >
      {letter}
    </div>
  );

  return insideWordBlock ? wordBlockSquare : selectableSquare;
}
