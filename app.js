const app = require('express')();
const express = require('express');
const router = require('./config/routes.js');
const nunjucks = require('nunjucks');
const path = require('path');

app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);

var appViews = [
  path.join(__dirname, '/app/views/')
]

nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
})

app.get(/^([^.]+)$/, function (req, res, next) {
  router.matchRoutes(req, res, next)
})

if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('App running at http://localhost:' + app.get('port'));
});

module.exports = app;
