import { useEffect } from 'react';
import Square from './Square';
import useGenerateSquare from '../_hooks/useGenerateSquare';
import useGenerateAlphabet from '../_hooks/useGenerateAlphabet';
import { useGameStateContext } from '../_context/GameStateContext';

export default function Squares() {
  const { gameState, gameStateDispatch } = useGameStateContext();
  const alphabet = useGenerateAlphabet();

  useEffect(() => {
    if (gameState.availableSquares.length < 5) {
      const newSquare = useGenerateSquare(alphabet);
      gameStateDispatch({ type: 'add square', squarePayload: newSquare });
    }
  }, [gameState.availableSquares]);

  const squareComponents = gameState.availableSquares.map((square, i) => {
    return (
      <Square
        square={square}
        position={i}
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
      <button
        className="w-48 h-10 text-lg rounded-lg bg-gray-500 hover:bg-gray-600 active:bg-gray-700 mt-4"
        onClick={() =>
          gameStateDispatch({ type: 'reset squares', squarePayload: [] })
        }
      >
        generate squares
      </button>
    </div>
  );
}
