import { Game } from "@/components/game/game";
import { GameStarter } from "@/components/game/game-starter";
import { createSession } from "@/components/game/createSession";
import { fetchGame } from "@/components/game/fetchGame";
import { Image } from "@/interfaces/image";

export default async function NewSession({ params }: any) {

  const { gameId } = params;

  let session: any = {
    id: null,
    game: null,
  };

  try {
    const { data: { memoTest: game } } = await fetchGame(gameId);
  
    const getPreparedGame = () => {
      const imagesSet = game.images.concat(game.images)
      const shuffledImagesSet = imagesSet.sort(() => Math.random() - 0.5);
      return shuffledImagesSet.map((image: Image, index: number) => {
        return {
          image,
          checked: false,
          display: false,
          key: index
        }
      })
    }
  
    const {data: {createGameSession: newSession}} = await createSession(gameId);
  
    const preparedGame = getPreparedGame();

    session = {
      id: newSession.id,
      game: {
        id: game.id,
        name: game.name,
        sheets: preparedGame
      },
      retries: 0,
      numberOfPairs: game.images.length
    }
  } catch (error) {
    console.error(error);
  }


  return (
    <GameStarter session={session} />
  )
}