import { fetchServerGraphQL } from "@/lib/network/fetch-server-graphql"

export const fetchGames = async () => {
    return await fetchServerGraphQL(`
        query {
            memoTest {
                id
                name
                images {
                    id
                    url
                }
            }
        }
    `, {});
}