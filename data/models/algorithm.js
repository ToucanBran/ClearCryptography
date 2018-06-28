const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var algorithmSchema = new Schema({
    name: String,
    shortDescription: String
});

const Algorithm = module.exports = mongoose.model('algorithm', algorithmSchema);
