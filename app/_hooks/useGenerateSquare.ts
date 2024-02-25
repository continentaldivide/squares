export default function useGenerateSquare(alphabet: string) {
  const letter = alphabet[Math.floor(alphabet.length * Math.random())];
  const colorOptions = ['blue', 'green', 'purple', 'red'];
  const color = colorOptions[Math.floor(colorOptions.length * Math.random())];
  const styles: { [key: string]: { backgroundColor: string } } = {
    blue: {
      backgroundColor: 'bg-blue-500',
    },
    red: {
      backgroundColor: 'bg-red-500',
    },
    green: {
      backgroundColor: 'bg-green-500',
    },
    purple: {
      backgroundColor: 'bg-purple-500',
    },
  };
  return {
    color,
    letter,
    styles: styles[color],
  };
}
