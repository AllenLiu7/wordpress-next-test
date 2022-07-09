import { gql, useMutation } from '@apollo/client';
import client from '../../apollo-client';
import { useRouter } from 'next/router'
import styles from './movie.module.css';

function MovieDetails({ movie }) {


    return (
        <>
            <div>
                Blog ID details pages
                <pre>{JSON.stringify(movie, undefined, 2)}</pre>
            </div>
            <div className='container'>
                <div  className={styles.content}
                    dangerouslySetInnerHTML={{
                        __html: movie.data.movieBy.translation.content,
                    }}
                ></div>
            </div>
        </>
    );
}

export default MovieDetails;

export async function getStaticPaths({locales}) {
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

    const paths = []

    result.data.movies.nodes.map(({slug}) => {
        return locales.map((locale) => {
          return paths.push({
            params: { slug: slug },
            locale,
          })
        })
      })
    
    //console.log("***---paths---***", paths)

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params, locale }) {
    const { slug } = params;
    const language = locale.toUpperCase();

    const result = await client.query({
        query: gql`
        query NewQuery($slug: String!, $language: LanguageCodeEnum!) {
            movieBy(slug: $slug) {
              id
              slug
              translation(language: $language) {
                content
                title
              }
            }
          }
        `,
        variables: { slug,  language},
    });

    return {
        props: {
            movie: result,
        },
    };
}
