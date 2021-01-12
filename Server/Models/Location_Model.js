const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    title: String
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;