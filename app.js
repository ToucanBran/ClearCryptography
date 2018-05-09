// Get dependencies
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const algorithmRouter = require('./routes/algorithm/router');

// Parsers for POST data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", algorithmRouter);


module.exports = app;

