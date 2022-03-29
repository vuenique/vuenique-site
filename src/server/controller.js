/* eslint-disable no-undef */
const path = require('path');
const demoModal = require("./models/model.js");
const mongoose = require("mongoose");
const Controller = {};


Controller.dataController = async (req, res, next) => {
   try {
      const data = await demoModal.find({})
      console.log(data[0].LetterFrequency)
      res.locals.data = data[0].LetterFrequency; 
      return next();
   }
   catch(err) {
    return next({log: "error in dataController" + err});
   }
  //res.locals.data = 5;
  
}

module.exports = Controller;
