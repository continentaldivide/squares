'use client';
import Game from './_components/Game';
import { GameStateContextProvider } from './_context/GameStateContext';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <GameStateContextProvider>
        <Game />
      </GameStateContextProvider>
    </main>
  );
}
