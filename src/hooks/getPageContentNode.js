import client from "../../client";
import { gql } from "@apollo/client";

export const getPageContentNode = async (slug) => {
    const { data } = await client.query({
        query: gql`
          query NewQuery {
            nodeByUri(uri: "${slug}") {
                ... on Page {
                id
                content
                blocks
            }
        }
    } `,
});

    if (!data || !data.nodeByUri) {
        throw new Error(`No se encontró ningún nodo con la URI "${slug}"`);
    }

    return {
        pageContent: data.nodeByUri,
    };
}