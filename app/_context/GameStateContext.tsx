import { createContext, useContext, ReactNode } from 'react';
import GameStateType from '../_interfaces/GameState.interface';

const GameStateContext = createContext<GameStateType>({
  selectedSquares: [],
  wordBlockLength: 3,
});

export function GameStateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <GameStateContext.Provider
      value={{
        selectedSquares: [],
        wordBlockLength: 3,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameStateContext() {
  const gameState = useContext(GameStateContext);
  if (!gameState) {
    throw new Error('Context must be used within a Provider');
  }
  return gameState;
}
