import { gql } from '@apollo/client';
import client from '../../client';

export const getPosts = async () => {
    const { data } = await client.query({
        query: gql`
            query PostQuery {
                posts {
                    nodes {
                        id
                        title
                        content
                    }
                }
            }
        `
    });

    const { posts } = data;

    return {
        posts: posts.nodes
    };
}

export const getPostsByLimit = async (limit) => {
    const { data } = await client.query({
        query: gql`
            query PostQuery {
                posts(first: ${limit} ) {
                    nodes {
                        id
                        title
                        content
                    }
                }
            }
        `
    });

    const { posts } = data;

    return {
        posts: posts.nodes
    };
}