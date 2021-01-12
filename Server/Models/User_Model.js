const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: String,
    phone: Number,
    name: String,
    password: String,
    address: String,
    image: String,
    isEmployer: Boolean
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;