import { useGameStateContext } from '../_context/GameStateContext';

export default function GameStatus() {
  const { gameState, gameStateDispatch } = useGameStateContext();
  return (
    <div className="flex justify-between items-center bg-blue-700 bg-opacity-50">
      <h2>level {gameState.levelNumber}</h2>
      <button
        className="p-2 rounded-lg bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
        onClick={() => gameStateDispatch({ type: 'reset game' })}
      >
        reset game
      </button>
    </div>
  );
}
