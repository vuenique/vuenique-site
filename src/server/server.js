/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all static files within dist folder
app.use(express.static(path.resolve(__dirname, '../../dist/')));

// Route to get data for all graphs
app.get('/data', controller.barData, controller.linePathData, (req, res) => {
  res.status(200).json(res.locals.data);
});

// Unknown route handler
app.use('*', (req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 404,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
