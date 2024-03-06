import SquareType from './Square.interface';

export default interface GameStateType {
  availableSquares: SquareType[];
  availableSquareNumber: number;
  selectedSquares: number[];
  wordBlockLength: number;
  currentView: 'main game' | 'charm select';
}
