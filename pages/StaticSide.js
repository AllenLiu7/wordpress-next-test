import { gql } from '@apollo/client';
import client from '../apollo-client';
import Image from 'next/image';
import Link from 'next/link';
import { toBaseUrl } from '../lib/urlBuilder';

function StaticSide({ result }) {
    return (
        <>
            {result.data.movies.nodes.map((node) => {
                return (
                    // <div key={node.field_image.id} className="m-3 col-3 flex-wrap">
                    //   <Image  src={toBaseUrl(node.field_image.uri.url)} width={200} height={200} alt="image" class="card-img-top"/>
                    // </div>
                    <div
                        className='card col-3 m-2'
                        key={node.id}
                        style={{ width: '18rem' }}
                    >
                        <Image
                            src={node.Thumbnail.image.sourceUrl}
                            width={200}
                            height={200}
                            alt='image'
                            className='card-img-top'
                        />
                        {/* <img
                            src={node.Thumbnail.image.sourceUrl}
                            alt='image'
                            className='card-img-top'
                        /> */}

                        <div className='card-body'>
                            <h5 className='card-title'>{node.title}</h5>
                            <p className='card-text'>node id: {node.id}</p>
                            <Link href={`/movies/${node.slug}`} className='btn btn-primary'>
                                Detail
                            </Link>
                        </div>
                    </div>
                );
            })}
            <pre>{JSON.stringify(result.data.movies.nodes, undefined, 2)}</pre>
        </>
    );
}



export async function getStaticProps() {
    const result = await client.query({
        query: gql`
            query AllMovies {
                movies {
                    nodes {
                        slug
                        uri
                        title
                        id
                        date
                        Thumbnail {
                            image {
                              sourceUrl
                            }
                        }
                    }
                }
            }
        `,
    });

    return {
        props: {
          result,
        },
    };
}

export default StaticSide;