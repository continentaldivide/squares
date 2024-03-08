import { useState } from 'react';
import SquareType from '../_interfaces/Square.interface';
import { useGameStateContext } from '../_context/GameStateContext';

export default function Square({
  square,
  squareIndex,
  insideWordBlock,
}: {
  square: SquareType;
  squareIndex: number;
  insideWordBlock: boolean;
}) {
  const [animated, setAnimated] = useState(false);
  const { gameState, gameStateDispatch } = useGameStateContext();
  const { backgroundColor, opacity } = square.styles;
  const letter = square.letter;
  const baselineClasses = `flex justify-center items-center size-12 text-2xl ${backgroundColor} select-none`;

  const selectableSquare = (
    <div
      className={`${baselineClasses} ${opacity} ${
        animated ? 'animate-boxBounce' : ''
      }`}
      onMouseEnter={() => setAnimated(true)}
      onAnimationEnd={() => setAnimated(false)}
      onClick={
        gameState.selectedSquares.includes(squareIndex)
          ? () => {
              gameStateDispatch({
                type: 'deselect square',
                squareIndex,
              });
            }
          : () => {
              gameStateDispatch({ type: 'select square', squareIndex });
            }
      }
    >
      {letter}
    </div>
  );

  const wordBlockSquare = (
    <div
      className={baselineClasses}
      onClick={() => {
        gameStateDispatch({
          type: 'deselect square',
          squareIndex,
        });
      }}
    >
      {letter}
    </div>
  );

  return insideWordBlock ? wordBlockSquare : selectableSquare;
}
