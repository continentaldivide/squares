import WordBlock from './WordBlock';
import Squares from './Squares';
import { GameStateContextProvider } from '../_context/GameStateContext';

export default function Game() {
  return (
    <GameStateContextProvider>
      <div className="flex flex-col items-center">
        <WordBlock />
        <Squares />
      </div>
    </GameStateContextProvider>
  );
}
