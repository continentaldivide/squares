import { useGameStateContext } from '../_context/GameStateContext';

export default function WordBlock() {
  const spaces = [];
  const { gameState, gameStateDispatch } = useGameStateContext();

  for (let i = 0; i < gameState.wordBlockLength; i++) {
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
      <button
        className="w-48 h-10 text-lg rounded-lg bg-gray-500 hover:bg-gray-600 active:bg-gray-700 mt-4"
        onClick={() => gameStateDispatch({ type: 'increase word block' })}
      >
        add a square
      </button>
    </div>
  );
}
