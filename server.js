'use strict'

/*
var path = require('path')
var express = require('express')
var app = express()
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var ReactRouter = require('react-router');
var RoutingContext = ReactRouter.RoutingContext;
var match = RoutingContext.match;
var routes = require('./routes');
import NotFoundPage from './components/NotFoundPage';
*/

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

const app = new Express();
const server = new Server(app);

console.log(match);

// initialize app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(Express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

/*
c@Findrrr API
*/
app.get('/cats/random', function (req, res) {
  // should return a random public ID from the Catabase
    
})

app.post('/cats/', function (req, res) {
  /*
  should call the cloudinary api to add the file, then store
  the public id in our mongo database so that we can retrieve it later  
  */
})

/*
Home page
*/
app.get('/home/', function (req, res) {
    // serve up the react-router spa
    match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        console.log(NotFoundPage);
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
})

/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
*/

server.listen(3000, err => {
  if (err) {
    return console.error(err);
  }
  console.info("Server running on http://localhost:3000");
});