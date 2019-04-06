// Core dependencies
const path = require('path');

// External dependencies
const browserSync = require('browser-sync');
const compression = require('compression');
const express = require('express');
const nunjucks = require('nunjucks');

// Local dependencies
const routes = require('./app/routes');

// Set configuration variables
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

// Initialise application
const app = express();

// Use gzip compression to decrease the size of
// the response body and increase the speed of web app
app.use(compression());

// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public/')));

// View engine (Nunjucks)
app.set('view engine', 'njk');

// Nunjucks configuration
const appViews = [
  path.join(__dirname, '/app/views/'),
];

nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true,
});

// Routes
app.use('/', routes);

// Run application on configured port
if (env === 'development') {
  app.listen(port - 50, () => {
    browserSync({
      files: ['app/views/**/*.*', 'public/**/*.*'],
      notify: true,
      open: false,
      port,
      proxy: `localhost:${port - 50}`,
      ui: false,
    });
  });
} else {
  app.listen(port);
}

module.exports = app;
