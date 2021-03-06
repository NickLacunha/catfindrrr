'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout';
import Home from './components/Home';
/*import SubmitCat from './components/SubmitCat';
import Contact from './components/Contact';*/
import {NotFoundPage} from './components/NotFoundPage';


const routes = (
    <Route path="/home/" component={Layout}>
        <IndexRoute component={Home}/>
    </Route>
);

export default routes;
