import { createContext, useContext, useReducer, ReactNode } from 'react';
import GameStateType from '../_interfaces/GameState.interface';

const GameStateContext = createContext<any>(null);

const gameStateReducer = (state: GameStateType, action: any) => {
  switch (action.type) {
    case 'increase word block':
      return {
        ...state,
        wordBlockLength: state.wordBlockLength + 1,
      };
    default:
      return state;
  }
};

export function GameStateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [gameState, gameStateDispatch] = useReducer(gameStateReducer, {
    selectedSquares: [],
    wordBlockLength: 3,
  });
  return (
    <GameStateContext.Provider value={[gameState, gameStateDispatch]}>
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
