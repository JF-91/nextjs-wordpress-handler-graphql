## handle pages

  const {data} = await client.query({
    query: gql`
      query PageQuery {
        pages {
          nodes {
            id
            title
            content
            uri
          }
        }
      }
    `
  });

 const { pages } = data;



