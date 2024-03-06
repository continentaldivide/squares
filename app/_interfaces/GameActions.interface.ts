import SquareType from './Square.interface';

interface addAvailableSquare {
  type: 'add square';
  newSquare: SquareType;
}

interface resetAvailableSquares {
  type: 'reset squares';
}

interface selectSquare {
  type: 'select square';
  squareIndex: number;
}

interface deselectSquare {
  type: 'deselect square';
  squareIndex: number;
}

interface switchView {
  type: 'switch view';
  view: 'main game' | 'charm select';
}

interface increaseLevel {
  type: 'increase level';
}

interface resetGame {
  type: 'reset game';
}

export type GameActionsType =
  | addAvailableSquare
  | resetAvailableSquares
  | selectSquare
  | deselectSquare
  | switchView
  | increaseLevel
  | resetGame;
