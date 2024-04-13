'use client';

import { useRouter } from "next/navigation";
import GameCard from "../game-card";
import { GameInput } from "@/interfaces/gameInput";

interface GamesListContainerProps {
  games: GameInput[];
}

export default function GamesListContainer({games}: GamesListContainerProps) {

  const router = useRouter();

  const handleClick = (gameId: any) => {
    router.push(`/games/new/${gameId}`);
  }

  return (
    <div className="w-full p-4 flex gap-4 flex-wrap justify-center overflow-auto">
      {
        games.map((game) => (
          <GameCard key={game.name} title={game.name} imageUrl={game.images[0].url} played={false} onClick={() => handleClick(game.id)} />
        ))
      }
    </div>
  );
}