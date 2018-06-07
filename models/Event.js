const mongoose = require ("mongoose")
const eventSchema = require("../db/schemas/eventSchema")

const Event = mongoose.model("events", eventSchema)

module.exports = Event