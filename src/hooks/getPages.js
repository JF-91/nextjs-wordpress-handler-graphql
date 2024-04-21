import client from "../../client";
import { gql } from "@apollo/client";

export const getPages = async () => {

    const {data} = await client.query({
        query: gql`
            query PageQuery {
                pages {
                    nodes {
                        id
                        title
                        content
                    }
                }
            }
        `
    });

    const { pages } = data;

    
    return {
        pages: pages.nodes
    };
}