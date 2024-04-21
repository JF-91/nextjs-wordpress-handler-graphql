import client from "../../client";
import { gql } from "@apollo/client";

export const fetchData = async () => {
    const { data } = await client.query({
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

    return data;
}