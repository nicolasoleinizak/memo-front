import { fetchGames } from "@/components/home/fetch-games";
import GamesListContainer from "@/components/home/games-list-container";

export default async function Home() {

  const {data: {memoTests: games}}: any = await fetchGames();

  return (
    <div className="andika-regular bg-secondary-100 w-full py-5 shadow-xl rounded-lg">
      <div className="text-center mb-4">
        <h2>Choose your next game</h2>
      </div>
      <GamesListContainer games={games}/>
    </div>
  );
}