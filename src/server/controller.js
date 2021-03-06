/* eslint-disable no-undef */
const path = require('path');
const modal = require('./models/model.js');
const mongoose = require('mongoose');
const Controller = {};

// Gets bar data from the dataabase for bar graph
Controller.barData = async (req, res, next) => {
  try {
    const data = await modal.barModal.find({});
    res.locals.data = {};
    res.locals.data.barData = data[0].LetterFrequency;
    return next();
  } catch (err) {
    return next({ log: 'error in barData Controller' + err });
  }
};

// Gets bar data from the dataabase for Line graph
Controller.linePathData = async (req, res, next) => {
  try {
    const data = await modal.lineModal.find({});
    res.locals.data.linePathData = data[0].LPData;
    return next();
  } catch (err) {
    return next({ log: 'error in linePathData controller' + err });
  }
};

module.exports = Controller;
