import { useGameStateContext } from '../_context/GameStateContext';

export default function CharmSelect() {
  const { gameStateDispatch } = useGameStateContext();
  return (
    <div>
      <p>this is the charm select screen. NYI.</p>
      <button
        className="rounded-md p-2 bg-cyan-700"
        onClick={() =>
          gameStateDispatch({ type: 'switch view', view: 'main game' })
        }
      >
        continue
      </button>
    </div>
  );
}
