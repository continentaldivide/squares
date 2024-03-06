import WordBlock from './WordBlock';
import Squares from './Squares';
import CharmSelect from './CharmSelect';
import { useGameStateContext } from '../_context/GameStateContext';

export default function Game() {
  const { gameState } = useGameStateContext();
  console.log(gameState);
  return gameState.currentView === 'main game' ? (
    <div className="flex flex-col items-center">
      <WordBlock />
      <Squares />
    </div>
  ) : (
    <CharmSelect />
  );
}
