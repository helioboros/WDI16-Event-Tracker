const Schema = require("mongoose").Schema
const peopleSchema = require("./peopleSchema")
const eventSchema = require("./eventSchema")

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    circle: [peopleSchema],
    plans: [eventSchema]
})

module.exports = userSchema