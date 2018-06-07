const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const Event = require("../models/Event")

//GET event listing
router.get('/', function (req, res, next) {
    User.findById(req.params.UserId)
        .then((user) => {
            const events = user.events
            res.render("events/index", {
                events
            })
        })
});

//NEW route
router.get("/new", (req, res) => {
    res.render("/events/new", {
        UserId = req.params.UserId
    })
})
//CREATE route
router.get("/", (req, res) => {
    const event = new Event(req.body)
    User.findById(req.params.UserId)
        .then((user) => {
            user.events.push(event)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/events`)
        })
})
//SHOW route
router.get("/:id", (req, res) => {
    Event.findById(req.params.id)
        .then((event) => {
            res.render("events/show", {
                event
            })
        })
})
//EDIT route
router.get("/:id/edit", (req, res) => {
    Event.findById(req.params.id)
        .then((event) => {
            res.render(`/user/${req.params.userId}/events/edit`, { event })
        })
})
//UPDATE route
router.put("/:id", (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/user/${req.params.userId}/events/${req.params.id}`)
        })
})
//DELETE route
router.delete("/:id", (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect(`/user/${req.params.userId}/events`)
        })
})


module.exports = router;