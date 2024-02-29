import SquareType from './Square.interface';

export default interface GameStateType {
  availableSquares: SquareType[];
  selectedSquares: number[];
  wordBlockLength: number;
}
