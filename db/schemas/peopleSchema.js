const Schema = require("mongoose").Schema

const peopleSchema = new Schema({
    name: String,
    age: Number,
    relationship: String,
    address: String,
    importantDates: String,
    miscellaneous: String,
    favoriteThings: String,
})

module.exports = peopleSchema