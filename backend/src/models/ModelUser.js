const mongoose = require("mongoose");

const user = new mongoose.Schema({
    mail: String,
    active: Boolean,
    curses: Array
});

module.exports = mongoose.model('user', user);