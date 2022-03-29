/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGO_URI = "mongodb+srv://Mia:1q2w3e4r@mongodb1.jaqwf.mongodb.net/Vuenique?retryWrites=true&w=majority"


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const MockSchema = new Schema({
  data: {type: "Array", required: true}
})