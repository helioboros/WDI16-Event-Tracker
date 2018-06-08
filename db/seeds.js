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
.then (() =>
People.remove()
.then (() => 
User.remove()
.then(() => {
    const person1 = new People({
        name: "Tasha",
        age: 25,
        relationship: "coworker",
        address: "300 MyAddress Circle",
        importantDates: ["March 20 - Birthday", "November 4 - Anniversary"],
        miscellaneous: "Favorite coworker By Far",
        favoriteThings: ["Beanie babies", "collectable stamps"]
    })
    const person2 = new People({
        name: "Steven",
        age: 42,
        relationship: "uncle",
        address: "2109 Northern Road",
        importantDates: ["September 2 - Birthday", "December 3 - Anniversary"],
        miscellaneous: "the bigboys are back in town",
        favoriteThings: ["Action figures", "Marvel movies", "Pina coladas"]
    })
    const event1 = new Event({
        title: "Tasha's Baby Shower",
        with: "Tasha",
        address: "420 Dank Road",
        miscellaneous: "This is a sentence to create the illusion of content.",
        ready: true
    })
    const event2 = new Event({
        title: "Tuomas's Birthday",
        with: "Tuomas",
        address: "123 West Street",
        miscellaneous: "He sure does",
        ready: false
    })
    const user1 = new User({
        username: "horgus",
        password: "creamyman",
        name: "Jason",
        circle: [peopleSchema],
        plans: [eventSchema]
    })
    const user2 = new User({
        username: "mumbo",
        password: "thisismypassword",
        name: "Lisette",
        circle: [peopleSchema],
        plans: [eventSchema]
    })
    const Users = [user1, user2]
    return User.insertMany(Users)
})))
.then(() => {
    mongoose.connection.close()
})
.catch((err) => {
    console.log("ERROR", err)
})