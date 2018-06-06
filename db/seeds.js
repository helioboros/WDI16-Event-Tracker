const mongoose = require("mongoose")
const Events = require("../models/Events")
const People = require("../models/People")
const User = require("../models/User")

mongoose.connect("mongodb://localhost/event-tracker")
    .then(() => {
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log("ERROR", err)
    })

Events.remove()
People.remove()
User.remove()

// .then - add all this template shit
// .then(() => {
//     mongoose.connection.close()
// })
// .catch((err) => {
//     console.log("ERROR", err)
// })