module.exports = (req, res, next) => {
  res.locals.backofficeUrl = process.env.BACKOFFICE_URL;
  next();
};