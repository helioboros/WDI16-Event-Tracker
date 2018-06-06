const mongoose = require("mongoose")
const Event = require("../models/Event")
const People = require("../models/People")
const User = require("../models/User")

mongoose.connect("mongodb://localhost/event-tracker")
    .then(() => {
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log("ERROR", err)
    })

Event.remove()
People.remove()
User.remove()

// .then - add all this template shit for
// .then(() => {
//     mongoose.connection.close()
// })
// .catch((err) => {
//     console.log("ERROR", err)
// })