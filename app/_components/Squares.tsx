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
          className="mt-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
          onClick={() => gameStateDispatch({ type: 'shuffle squares' })}
        >
          <p className="text-sm text-wrap">shuffle</p>
        </button>
        <button
          className="mt-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-sm"
          onClick={() => gameStateDispatch({ type: 'reset squares' })}
        >
          new letters
        </button>
        <button
          className="mt-2 p-2 rounded-lg bg-emerald-500 enabled:hover:bg-emerald-600 enabled:active:bg-emerald-700 disabled:opacity-25 disabled:cursor-not-allowed"
          onClick={() => gameStateDispatch({ type: 'submit word' })}
          disabled={
            gameState.selectedSquares.length < gameState.wordBlockLength
          }
        >
          <img src="check.svg"></img>
        </button>
      </div>
      <p>{gameState.warningMessage}</p>
    </div>
  );
}
