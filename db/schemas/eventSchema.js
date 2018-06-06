const Schema = require("mongoose").Schema

const eventSchema = new Schema({
    date: Date,
    with: String,
    address: String,
    miscellaneous: String,
    ready: Boolean
})

module.exports = eventSchema