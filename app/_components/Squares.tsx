import Square from './Square';
import useGenerateSquares from '../_hooks/useGenerateSquares';

export default function Squares() {
  const styles = useGenerateSquares();
  return (
    <div className="flex justify-center gap-2">
      <Square styles={styles} />
      <Square styles={styles} />
      <Square styles={styles} />
      <Square styles={styles} />
      <Square styles={styles} />
    </div>
  );
}
