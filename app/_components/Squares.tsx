import { useState, useEffect } from 'react';
import Square from './Square';
import useGenerateSquare from '../_hooks/useGenerateSquare';

type Square = {
  letter: string;
  color: string;
  styles: any;
};

export default function Squares() {
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    if (squares.length < 5) {
      const newSquare = useGenerateSquare();
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
      <div className="flex justify-center gap-2 min-h-12">{squareComponents}</div>
      <button
        className="w-48 h-10 text-lg rounded-lg bg-gray-500 hover:bg-gray-600 active:bg-gray-700 mt-4"
        onClick={() => setSquares([])}
      >
        generate squares
      </button>
    </div>
  );
}
