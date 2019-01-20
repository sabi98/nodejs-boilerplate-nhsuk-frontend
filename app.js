// Core dependencies
const path = require('path')

// External dependencies
const express = require('express');
const nunjucks = require('nunjucks');

// Local dependencies
const routing = require('./middleware/routing.js');
const routes = require('./app/routes');

// Set configuration variables
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

// Initialise application
const app = express();

// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// View engine (Nunjucks)
app.set('view engine', 'njk');

// Nunjucks configuration
const appViews = [
  path.join(__dirname, '/app/views/')
];

nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
})

// Custom routes
app.use('/', routes);

// Automatically route pages
app.get(/^([^.]+)$/, function (req, res, next) {
  routing.matchRoutes(req, res, next)
})

if (env === 'production') {
  app.listen(port);
} else {
  app.listen(port, function() {
    console.log(`App running at http://localhost:${port}`);
  });
}

module.exports = app;
