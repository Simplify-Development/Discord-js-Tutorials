module.exports = async () => {
    const db = require('../models/test');

    new db({
        name: "John",
        age: 17,
        is18: false 
    }).save();

    /*await db.findOne({ is18: false, name: "John" }, (err, res) => {
        if (res) {
            console.log(res)
        } else {
            console.log("No res")
        }
    })*/

    //await db.deleteOne({ is18: false });
}