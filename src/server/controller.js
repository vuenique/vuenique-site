/* eslint-disable no-undef */
const Controller = {};


Controller.dataController = (req, res, next) => {
  res.locals.data = 5;
  return next();
}

module.exports = Controller;
