// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const algoApi = require('./components/algorithms/algorithmsAPI')
const app = express();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
algoApi(app); //register the route

module.exports = app;

