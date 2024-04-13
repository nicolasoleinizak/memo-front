import { Game } from "@/components/game/game";
import { GameStarter } from "@/components/game/game-starter";
import { createSession } from "@/components/gameSession/createSession";
import { fetchGame } from "@/components/gameSession/fetchGame";
import { Image } from "@/interfaces/image";

export default async function NewSession({ params }: any) {

  const { gameId } = params;

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

  const session = {
    id: newSession.id,
    game: {
      id: game.id,
      name: game.name,
      sheets: preparedGame
    },
    retries: 0,
    numberOfPairs: game.images.length
  }

  return (
    <GameStarter session={session} />
  )
}