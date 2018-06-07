const Schema = require("mongoose").Schema

const eventSchema = new Schema({
    title: String,
    date: Date,
    with: String,
    address: String,
    miscellaneous: String,
    ready: Boolean
})

module.exports = eventSchema