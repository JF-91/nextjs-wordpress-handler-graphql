import { gql } from "@apollo/client";
import client from "../../client";

export const getCard = async () => {
    const { data } = await client.query({
        query: gql`
            query NewQuery {
  cards {
    nodes {

      content
      uri
      title
      link
      id
      featuredImage {
        node {
          id
        }
      }
    }
  }
}
        `
    });

    const { cards } = data;

    return {
        cards: cards.nodes
    };
}