import { fetchServerGraphQL } from "@/lib/network/fetch-server-graphql"

export const fetchGame = (gameId: number) => {
    return fetchServerGraphQL(`
        query fetchGame($gameId: ID!) {
            memoTest(id: $gameId) {
                id
                name
                images {
                    id,
                    url
                }
            }
        }
    `, {gameId});
}