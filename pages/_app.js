import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client/react';
import  client  from '../apollo-client';
import { appWithTranslation } from 'next-i18next';

import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <ApolloProvider client={client}>
            <NavBar/>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default appWithTranslation(MyApp);
