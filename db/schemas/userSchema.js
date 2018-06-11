const Schema = require("mongoose").Schema
const peopleSchema = require("./peopleSchema")
const eventSchema = require("./eventSchema")

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    people: [peopleSchema],
    events: [eventSchema]
})

module.exports = userSchema