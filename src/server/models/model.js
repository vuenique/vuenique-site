/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const db = mongoose.connection;

const demoSchema = new Schema({
  LetterFrequency: { type: 'array', required: false },
  LineData: { type: 'array', required: false },
});

const barModal = mongoose.model('BarData', demoSchema, 'BarData');
const lineModal = mongoose.model('LineData', demoSchema, 'LineData');

module.exports = {
  barModal,
  lineModal,
};
