import { createContext, useContext, useReducer, ReactNode } from 'react';
import GameStateType from '../_interfaces/GameState.interface';
import GameActionsType from '../_interfaces/GameActions.interface';

const GameStateContext = createContext<
  [GameStateType, React.Dispatch<GameActionsType>] | undefined
>(undefined);

const gameStateReducer = (state: GameStateType, action: GameActionsType) => {
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

export function useGameStateValue() {
  const stateAndDispatch = useContext(GameStateContext);
  if (!stateAndDispatch) {
    throw new Error('Context must be used within a Provider');
  }
  return stateAndDispatch[0];
}

export function useGameStateDispatch() {
  const stateAndDispatch = useContext(GameStateContext);
  if (!stateAndDispatch) {
    throw new Error('Context must be used within a Provider');
  }
  return stateAndDispatch[1];
}
