const defaultGreeting = require('../app/scripts/greeting');

module.exports = {
  // App name
  appName: 'Node.js boilerplate',

  // Message
  message: defaultGreeting(),

  // Environment
  env: process.env.NODE_ENV || 'development',

  // Port to run local development server on
  port: process.env.PORT || 3000,

};
