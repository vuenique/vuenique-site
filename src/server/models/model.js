/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGO_URI = "mongodb+srv://Mia:1q2w3e4r@mongodb1.jaqwf.mongodb.net/Vuenique?retryWrites=true&w=majority";

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


