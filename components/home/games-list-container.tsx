'use client';

import GameCard from "../game-card";

export default function GamesListContainer({
  games
}: Readonly<{
  games: any[];
}>) {

  const handleClick = (gameId: any) => {
    console.log(gameId);
  }
  return (
    <div className="w-full p-4 flex gap-4 flex-wrap justify-center overflow-auto">
      {
        games.map((game) => (
          <GameCard key={game.title} title={game.title} imageUrl={game.images[0]} played={false} onClick={() => handleClick(game.id)} />
        ))
      }
    </div>
  );
}