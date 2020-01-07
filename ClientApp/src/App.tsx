import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { Provider } from 'inversify-react';
import { container } from './services/inversify.config';
import { InversifyProvider } from './services/InversifyProvider';

import './custom.css'

export default () => (
    <Provider container={container}>
        <InversifyProvider container={container}>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
            </Layout>
        </InversifyProvider>
    </Provider>
);
