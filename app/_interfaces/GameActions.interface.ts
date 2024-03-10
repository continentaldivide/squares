import SquareType from './Square.interface';

interface addAvailableSquare {
  type: 'add square';
  newSquare: SquareType;
}

interface resetAvailableSquares {
  type: 'reset squares';
}

interface shuffleAvailableSquares {
  type: 'shuffle squares';
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

interface submitWord {
  type: 'submit word';
}

export type GameActionsType =
  | addAvailableSquare
  | resetAvailableSquares
  | shuffleAvailableSquares
  | selectSquare
  | deselectSquare
  | switchView
  | increaseLevel
  | resetGame
  | submitWord;
