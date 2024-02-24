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
  return <div className="flex justify-center gap-2">{squareComponents}</div>;
}
