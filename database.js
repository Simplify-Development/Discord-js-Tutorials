const mongoose = require('mongoose');
const config = require('./config.json')

module.exports = () => {

    mongoose.connect(`mongodb+srv://zofux:${config.password}@cluster0.gcgkk.mongodb.net/Data?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => console.log("Connected to the database!"))

}