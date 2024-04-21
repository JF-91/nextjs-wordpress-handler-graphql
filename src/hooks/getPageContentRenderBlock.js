import { gql } from "@apollo/client";
import client from "../../client";

export const getPageContentRenderBlock = async (slug) => {
    const { data } = await client.query({
        query: gql`
          query NewQuery {
            nodeByUri(uri: "${slug}") {
                ... on Page {
                id
                blocks
            }
        }
    }`,
});

    return {
        pageContent: data.nodeByUri,
    };
};