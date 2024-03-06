import { createContext, useContext, useReducer, ReactNode } from 'react';
import GameStateType from '../_interfaces/GameState.interface';
import { GameActionsType } from '../_interfaces/GameActions.interface';

const GameStateContext = createContext<
  | {
      gameState: GameStateType;
      gameStateDispatch: React.Dispatch<GameActionsType>;
    }
  | undefined
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
        selectedSquares: [],
      };

    case 'select square': {
      const clickedSquareIsSelected = state.selectedSquares.includes(
        action.payload
      );
      const wordBlockIsFull =
        state.wordBlockLength <= state.selectedSquares.length;
      if (clickedSquareIsSelected) {
        return state;
      } else if (wordBlockIsFull) {
        return state;
      }
      return {
        ...state,
        selectedSquares: [...state.selectedSquares, action.payload],

        // change the styles prop of the square being selected to reduce its opacity
        availableSquares: state.availableSquares.map((square, i) => {
          if (i === action.payload) {
            return {
              ...square,
              styles: { ...square.styles, opacity: 'opacity-50' },
            };
          }
          return square;
        }),
      };
    }

    case 'deselect square': {
      const clickedSquareIsSelected = state.selectedSquares.includes(
        action.payload
      );
      const clickedSquarePosition = state.selectedSquares.indexOf(
        action.payload
      );
      const arrayWithoutClickedSquare = state.selectedSquares.toSpliced(
        clickedSquarePosition,
        1
      );
      if (clickedSquareIsSelected) {
        return {
          ...state,
          selectedSquares: arrayWithoutClickedSquare,
          // set the square being deselected to baseline opacity
          availableSquares: state.availableSquares.map((square, i) => {
            if (i === action.payload) {
              return {
                ...square,
                styles: { ...square.styles, opacity: 'opacity-100' },
              };
            }
            return square;
          }),
        };
      }
      return state;
    }

    case 'switch view':
      return {
        ...state,
        currentView: action.view,
      };

    case 'increase level':
      const newLevelNumber = state.levelNumber++;
      const newWordBlockLength = state.wordBlockLength++;
      return {
        ...state,
        availableSquares: [],
        wordBlockLength: newWordBlockLength,
        currentView: 'main game',
        levelNumber: newLevelNumber,
      };
    default:
      return state;
  }
};

const initialState: GameStateType = {
  availableSquares: [],
  availableSquareNumber: 7,
  selectedSquares: [],
  wordBlockLength: 3,
  currentView: 'main game',
  levelNumber: 1,
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
    <GameStateContext.Provider value={{ gameState, gameStateDispatch }}>
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
