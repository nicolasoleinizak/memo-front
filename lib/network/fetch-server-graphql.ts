import { fetchServer } from "./fetch-server";

export const fetchServerGraphQL = async (query: string, variables: any) => {
    const res = await fetchServer.post("/graphql", {
        query,
        variables
    });

    return res.data;
}