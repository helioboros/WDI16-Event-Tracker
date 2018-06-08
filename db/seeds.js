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
.then(() => {
    const person1 = new People({

    })
    const person2 = new People({

    })
    const event1 = new Event({

    })
    const event2 = new Event({

    })
    const user1 = new User({

    })
    const user2 = new User({
        
    })
    const Users = [user1, user2]
    return User.insertMany(Users)
})
.then(() => {
    mongoose.connection.close()
})
.catch((err) => {
    console.log("ERROR", err)
})