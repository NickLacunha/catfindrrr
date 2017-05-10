'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
/*
TODO
Replace these w/ yr own components (nameley the ones that are down there in the routes variable)
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
*/

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="stuff" component={SubmitCat} />
        <Route path="contact" component={Contact} />
    </Route>
);

export default routes;
