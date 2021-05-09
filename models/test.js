const mongoose = require("mongoose");

const format = {
    name: String,
    age: Number,
    is18: Boolean
};

module.exports = mongoose.model("test", format, "test");