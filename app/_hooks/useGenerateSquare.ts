export default function useGenerateSquare() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letter = alphabet[Math.floor(alphabet.length * Math.random())];
  const colorOptions = ['blue', 'green', 'yellow', 'red'];
  const color = colorOptions[Math.floor(colorOptions.length * Math.random())];
  const styles: { [key: string]: { backgroundColor: string } } = {
    blue: {
      backgroundColor: 'bg-blue-700',
    },
    red: {
      backgroundColor: 'bg-red-700',
    },
    green: {
      backgroundColor: 'bg-green-700',
    },
    yellow: {
      backgroundColor: 'bg-yellow-700',
    },
  };
  return {
    color,
    letter,
    styles: styles[color],
  };
}
