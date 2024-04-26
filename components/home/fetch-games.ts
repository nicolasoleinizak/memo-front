import { fetchServerGraphQL } from "@/lib/network/fetch-server-graphql"

export const fetchGames = async () => {
    try {
        return await fetchServerGraphQL(`
            query {
                memoTests {
                    id
                    name
                    images {
                        id
                        url
                    }
                }
            }
        `, {});
    } catch (error) {
        console.error(error);
        return {
            data: {
                memoTests: []
            }
        }
    }
}