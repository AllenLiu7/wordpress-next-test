import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client/react';
import  client  from '../apollo-client';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
