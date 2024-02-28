import { useGameStateContext } from '../_context/GameStateContext';

export default function WordBlock() {
  const spaces = [];
  const { wordBlockLength } = useGameStateContext();

  for (let i = 0; i < wordBlockLength; i++) {
    const space = (
      <div
        className="size-12 border-2 border-teal-800"
        key={`block ${i}`}
      ></div>
    );
    spaces.push(space);
  }

  return <div className="flex gap-2 min-h-12 mb-10">{spaces}</div>;
}
