module.exports = config => (req, res, next) => {
  res.locals.APP_NAME = config.appName;
  res.locals.MESSAGE = config.message;

  next();
};
