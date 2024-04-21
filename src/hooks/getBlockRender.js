import { gql } from "@apollo/client";
import client from "../../client";

export const getBlockRender = async () => {
    const { data } = await client.query({
        query: gql`
            query block {
                contentNodes {
                    edges {
                        node {
                            id
                            blocks
                        }
                    }
                }
            }
        `
    }); 

    

    return {
        block: data.contentNodes.edges
    };

}