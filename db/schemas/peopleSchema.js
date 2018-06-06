const Schema = require("mongoose").Schema

const peopleSchema = new Schema({
    name: String,
    age: Number,
    relationship: String,
    address: String,
    importantDates: [],
    miscellaneous: String,
    favoriteThings: []
})

module.exports = peopleSchema