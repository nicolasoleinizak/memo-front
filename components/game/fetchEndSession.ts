import { fetchServerGraphQL } from "@/lib/network/fetch-server-graphql";

export const fetchEndSession = async (sessionId: number, retries: number) => {
  const query = `
    mutation EndGame($input:EndSessionInput!) {
      endGameSession(endSessionData:$input) {
        id
        score
        retries
        number_of_pairs
        memoTest {
          id
          name
          images {
            url
          }
        }
      }
    }
  `;
  const variables = {
    input: {
      id: sessionId,
      retries,
    },
  };
  return await fetchServerGraphQL(query, variables);
}