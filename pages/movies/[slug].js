import { gql } from '@apollo/client';
import client from '../../apollo-client';

function movieDetails({movie}){
  return (
    <>
      <div>
          Blog ID details pages
          <pre>{JSON.stringify(movie, undefined, 2)}</pre>
      </div>
      <div dangerouslySetInnerHTML={{__html: movie.data.movieBy.content}}></div>
    </>
  )
}

export default movieDetails



export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
    query MoviePages {
      movies {
        nodes {
          slug
          id
        }
      }
    }
    `,
});

return {
  paths: result.data.movies.nodes.map(({slug}) => {
    return {
      params: {slug}
    }
  }),
  fallback: false
}
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const result = await client.query({
    query: gql`
    query NewQuery ($slug: String!){
      movieBy(slug: $slug) {
        id
        title
        content
        slug
      }
    }
    `,
    variables: {slug}
});

  return{
    props: {
      movie: result
    }
  }
}




