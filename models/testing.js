const mongoose = require('mongoose');

const test = {
    name: String,
    age: Number
};

module.exports = mongoose.model("test", test, "test");