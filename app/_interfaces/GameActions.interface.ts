import SquareType from './Square.interface';

interface increaseWordBlock {
  type: 'increase word block';
}

interface addAvailableSquare {
  type: 'add square';
  squarePayload: SquareType;
}

interface resetAvailableSquares {
  type: 'reset squares';
  squarePayload: SquareType[];
}

interface selectSquare {
  type: 'select square';
  payload: number;
}

interface deselectSquare {
  type: 'deselect square';
  payload: number;
}

interface switchView {
  type: 'switch view';
  view: 'main game' | 'charm select';
}

export type GameActionsType =
  | increaseWordBlock
  | addAvailableSquare
  | resetAvailableSquares
  | selectSquare
  | deselectSquare
  | switchView;
