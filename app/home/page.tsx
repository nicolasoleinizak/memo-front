import { fetchGames } from "@/components/home/fetch-games";
import GamesListContainer from "@/components/home/games-list-container";

export default async function Home() {

  const games: any[] = await fetchGames();

  return (
    <div className="andika-regular">
      <div className="text-center mb-4">
        <h2>Choose your next game</h2>
      </div>
      <GamesListContainer games={games}/>
    </div>
  );
}