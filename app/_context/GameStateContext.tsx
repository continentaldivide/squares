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
    case 'add square':
      // assumptions: situation-agnostic action that receives a Square obj and adds it to availableSquares.  used in Squares.tsx whenever there are fewer squares than availableSquareNumber
      return {
        ...state,
        availableSquares: [...state.availableSquares, action.newSquare],
      };

    case 'reset squares':
      // assumptions: sets available squares to 0 which prompts a 'refill' up to availableSquareNumber via component logic.  used when player chooses to manually reset squares as well as on starting a new level
      return {
        ...state,
        availableSquares: [],
        selectedSquares: [],
      };

    case 'select square': {
      // assumptions: 'selects' a square (i.e., puts it in the wordblock as part of composing a word).  checks whether clicked square is already selected and whether wordblock is full of already-selected squares.
      const clickedSquareIsSelected = state.selectedSquares.includes(
        action.squareIndex
      );
      const wordBlockIsFull =
        state.wordBlockLength <= state.selectedSquares.length;
      if (clickedSquareIsSelected || wordBlockIsFull) {
        return state;
      }
      return {
        ...state,
        selectedSquares: [...state.selectedSquares, action.squareIndex],

        // change the styles prop of the square being selected to reduce its opacity
        availableSquares: state.availableSquares.map((square, i) => {
          if (i === action.squareIndex) {
            return {
              ...square,
              styles: { ...square.styles, opacity: 'opacity-25' },
            };
          }
          return square;
        }),
      };
    }

    case 'deselect square': {
      // assumptions: 'deselects' a square (i.e., removes it from the wordblock).  confirms whether clicked square is in fact selected.
      const clickedSquareIsSelected = state.selectedSquares.includes(
        action.squareIndex
      );
      if (!clickedSquareIsSelected) {
        return state;
      }
      const clickedSquareIndex = state.selectedSquares.indexOf(
        action.squareIndex
      );
      const newArray = state.selectedSquares.toSpliced(clickedSquareIndex, 1);
      return {
        ...state,
        selectedSquares: newArray,
        // set the square being deselected to baseline opacity
        availableSquares: state.availableSquares.map((square, i) => {
          if (i === action.squareIndex) {
            return {
              ...square,
              styles: { ...square.styles, opacity: 'opacity-100' },
            };
          }
          return square;
        }),
      };
    }

    case 'switch view':
      // assumptions: this case changes between various 'views' in different parts of the game.  currently this only includes the 'main' view and a between-levels charm selection view.  will be expanded later to include other things like game ending, etc
      return {
        ...state,
        currentView: action.view,
      };

    case 'increase level':
      // assumptions: increasing level entails increasing the size of the wordblock, setting the view to the main game view, and providing a new set of available squares
      const newLevelNumber = state.levelNumber++;
      const newWordBlockLength = state.wordBlockLength++;
      return {
        ...state,
        availableSquares: [],
        selectedSquares: [],
        wordBlockLength: newWordBlockLength,
        currentView: 'main game',
        levelNumber: newLevelNumber,
      };

    case 'reset game':
      // assumptions: at the moment, basically just a 'reset button' to use instead of F5 -- later, will be used for starting a new game after game over
      return initialState;

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
