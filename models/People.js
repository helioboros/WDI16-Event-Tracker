const mongoose = require ("mongoose")
const peopleSchema = require("../db/schemas/peopleSchema")

const People = mongoose.model("people", peopleSchema)

module.exports = People