'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
    console.log("ReactDOM.render now")
    ReactDOM.render(<AppRoutes/>, document.getElementById('container'));
};
