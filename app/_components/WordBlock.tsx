export default function WordBlock({ length }: { length: number }) {
  const spaces = [];
  const space = <div className="size-12 border-2 border-teal-800"></div>;

  for (let i = 0; i < length; i++) {
    spaces.push(space);
  }

  return <div className="flex gap-2 min-h-12 mb-10">{spaces}</div>;
}
