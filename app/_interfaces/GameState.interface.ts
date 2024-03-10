import SquareType from './Square.interface';

export default interface GameStateType {
  availableSquares: SquareType[];
  availableSquareNumber: number;
  selectedSquares: number[];
  wordBlockLength: number;
  currentWord: string;
  currentView: 'main game' | 'charm select';
  levelNumber: number;
  warningMessage: string;
}
