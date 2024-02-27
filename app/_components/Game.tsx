import { useState } from 'react';
import WordBlock from './WordBlock';
import Squares from './Squares';
import GameStateType from '../_interfaces/GameState.interface';

export default function Game() {
  const [gameState, setGameState] = useState<GameStateType>({
    selectedSquares: [],
    wordBlockLength: 3,
  });
  return (
    <div className="flex flex-col items-center">
      <WordBlock length={gameState.wordBlockLength} />
      <Squares setGameState={setGameState} />
    </div>
  );
}
