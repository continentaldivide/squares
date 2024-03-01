import { createContext, useContext, useReducer, ReactNode } from 'react';
import GameStateType from '../_interfaces/GameState.interface';
import { GameActionsType } from '../_interfaces/GameActions.interface';

const GameStateContext = createContext<
  [GameStateType, React.Dispatch<GameActionsType>] | undefined
>(undefined);

const gameStateReducer: (
  state: GameStateType,
  action: GameActionsType
) => GameStateType = (state, action) => {
  switch (action.type) {
    case 'increase word block':
      return {
        ...state,
        wordBlockLength: state.wordBlockLength + 1,
      };
    case 'add square':
      return {
        ...state,
        availableSquares: [...state.availableSquares, action.squarePayload],
      };
    case 'reset squares':
      return {
        ...state,
        availableSquares: action.squarePayload,
      };
    case 'select square':
      const squareAlreadySelected = state.selectedSquares.includes(
        action.payload
      );
      if (squareAlreadySelected) {
        return state;
      }
      return {
        ...state,
        selectedSquares: [...state.selectedSquares, action.payload],
      };
    default:
      return state;
  }
};

const initialState: GameStateType = {
  availableSquares: [],
  selectedSquares: [],
  wordBlockLength: 3,
};

export function GameStateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [gameState, gameStateDispatch] = useReducer(
    gameStateReducer,
    initialState
  );
  return (
    <GameStateContext.Provider value={[gameState, gameStateDispatch]}>
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameStateContext() {
  const stateAndDispatch = useContext(GameStateContext);
  if (!stateAndDispatch) {
    throw new Error('Context must be used within a Provider');
  }
  return stateAndDispatch;
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
