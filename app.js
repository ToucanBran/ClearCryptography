// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const algorithmRouter = require('./routes/algorithm/router');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", algorithmRouter);


module.exports = app;

