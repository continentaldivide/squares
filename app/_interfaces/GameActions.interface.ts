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

export type GameActionsType =
  | increaseWordBlock
  | addAvailableSquare
  | resetAvailableSquares;
