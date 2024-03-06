import { useGameStateContext } from '../_context/GameStateContext';
import Square from './Square';

export default function WordBlock() {
  const spaces = [];
  const { gameState } = useGameStateContext();
  const numFilledSpaces = gameState.selectedSquares.length;

  for (let i = 0; i < numFilledSpaces; i++) {
    const selectedSquareIndex = gameState.selectedSquares[i];
    const square = gameState.availableSquares[selectedSquareIndex];
    const selectedSquare = (
      <Square
        square={square}
        squareIndex={i}
        insideWordBlock={true}
        key={`square component ${i}`}
      />
    );
    spaces.push(selectedSquare);
  }

  for (let i = numFilledSpaces; i < gameState.wordBlockLength; i++) {
    const space = (
      <div
        className="size-12 border-2 border-teal-800"
        key={`block ${i}`}
      ></div>
    );
    spaces.push(space);
  }
  console.log(gameState);

  return (
    <div className="flex gap-2 min-h-12 mb-10">
      {spaces}
    </div>
  );
}
