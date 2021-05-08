module.exports = async () => {
    const db = require('../models/testing');

    /*new db({
        name: 'John',
        age: 25
    }).save()*/

    /*await db.findOne({ age: 25 }, async (err, res) => {
        console.log(res.name)
    })*/

    await db.deleteOne({ age: 25 });
}