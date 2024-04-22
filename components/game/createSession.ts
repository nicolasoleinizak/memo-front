import { fetchServerGraphQL } from "@/lib/network/fetch-server-graphql";

export const createSession = async (gameId: number) => {
    return await fetchServerGraphQL(`
        mutation createGameSession($gameId: ID!) {
            createGameSession(memoTestId: $gameId) {
                id
                number_of_pairs
                retries
            }
        }
    `, {gameId});
}