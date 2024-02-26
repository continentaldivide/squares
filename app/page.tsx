'use client';
import Squares from './_components/Squares';
import WordBlock from './_components/WordBlock';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <WordBlock length={3} />
      <Squares />
    </main>
  );
}
