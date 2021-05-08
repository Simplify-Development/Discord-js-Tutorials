const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect("mongodb+srv://zofux:1234password@cluster0.gcgkk.mongodb.net/Data?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => console.log("Connected to the database!"))

}