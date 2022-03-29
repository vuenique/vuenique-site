/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const db = mongoose.connection;

const barSchema = new Schema({
  LetterFrequency: {type: "array", required: true}
});

const demoModal = mongoose.model('BarData', barSchema, 'BarData');
module.exports = demoModal;


