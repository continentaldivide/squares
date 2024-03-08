import { useEffect } from 'react';
import Square from './Square';
import useGenerateSquare from '../_hooks/useGenerateSquare';
import useGenerateAlphabet from '../_hooks/useGenerateAlphabet';
import { useGameStateContext } from '../_context/GameStateContext';

export default function Squares() {
  const { gameState, gameStateDispatch } = useGameStateContext();
  const alphabet = useGenerateAlphabet();

  useEffect(() => {
    if (gameState.availableSquares.length < gameState.availableSquareNumber) {
      const newSquare = useGenerateSquare(alphabet);
      gameStateDispatch({ type: 'add square', newSquare });
    }
  }, [gameState.availableSquares]);

  const squareComponents = gameState.availableSquares.map((square, i) => {
    return (
      <Square
        square={square}
        squareIndex={i}
        insideWordBlock={false}
        key={`square component ${i}`}
      />
    );
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center gap-2 min-h-12">
        {squareComponents}
      </div>
      <div className="flex gap-2">
        <button
          className="mt-2 p-2 rounded-lg bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
          onClick={() => gameStateDispatch({ type: 'reset squares' })}
        >
          <img src="reroll.svg"></img>
        </button>
        <button
          className="mt-2 p-2 rounded-lg bg-emerald-500 enabled:hover:bg-emerald-600 enabled:active:bg-emerald-700 disabled:opacity-25"
          onClick={() => gameStateDispatch({ type: 'submit word' })}
          disabled={
            gameState.selectedSquares.length < gameState.wordBlockLength
          }
        >
          <img src="check.svg"></img>
        </button>
      </div>
    </div>
  );
}
