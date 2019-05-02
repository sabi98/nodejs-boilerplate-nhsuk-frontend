module.exports = config => (req, res, next) => {
  res.locals.app_name = config.appName;
  res.locals.message = config.message;

  next();
};
