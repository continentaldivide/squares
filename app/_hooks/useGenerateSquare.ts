export default function useGenerateSquare(alphabet: string) {
  const letter = alphabet[Math.floor(alphabet.length * Math.random())];
  const colorOptions = ['blue', 'green', 'purple', 'red'];
  const color = colorOptions[Math.floor(colorOptions.length * Math.random())];
  const bgColors: Record<string, string> = {
    blue: 'bg-blue-500',
    red: 'bg-rose-500',
    green: 'bg-emerald-500',
    purple: 'bg-violet-500',
  };
  const styles = { opacity: 'opacity-100', backgroundColor: bgColors[color] };
  return {
    color,
    letter,
    styles,
  };
}
