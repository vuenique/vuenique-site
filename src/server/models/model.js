/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const db = mongoose.connection;

//Mock Data schema to mirror the expected user inputs
const demoSchema = new Schema({
  LetterFrequency: { type: "array", required: false },
  LPData: { type: "array", required: false },
});

//Seperate modals for mock data related to specific graphs
const barModal = mongoose.model("BarData", demoSchema, "BarData");
const lineModal = mongoose.model("LinePathData", demoSchema, "LinePathData");

module.exports = {
  barModal,
  lineModal,
};
