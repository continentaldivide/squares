import { useState, useEffect } from 'react';
import Square from './Square';
import useGenerateSquare from '../_hooks/useGenerateSquare';
import useGenerateAlphabet from '../_hooks/useGenerateAlphabet';
import GameStateType from '../_interfaces/GameState.interface';

type Square = {
  letter: string;
  color: string;
  styles: any;
};

type Props = {
  setGameState: React.Dispatch<React.SetStateAction<GameStateType>>;
};

export default function Squares({ setGameState }: Props) {
  const [squares, setSquares] = useState<Square[]>([]);
  const alphabet = useGenerateAlphabet();

  useEffect(() => {
    if (squares.length < 5) {
      const newSquare = useGenerateSquare(alphabet);
      setSquares([...squares, newSquare]);
    }
  }, [squares]);

  const squareComponents = squares.map((square, i) => {
    return (
      <Square
        letter={square.letter}
        styles={square.styles}
        key={`square component ${i}`}
      />
    );
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center gap-2 min-h-12">
        {squareComponents}
      </div>
      <button
        className="w-48 h-10 text-lg rounded-lg bg-gray-500 hover:bg-gray-600 active:bg-gray-700 mt-4"
        onClick={() => setSquares([])}
      >
        generate squares
      </button>
    </div>
  );
}
