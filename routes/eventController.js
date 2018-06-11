const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const Event = require("../models/Event")

//GET event listing
router.get('/', function (req, res, next) {
    User.findById(req.params.userId)
        .then((user) => {
            const events = user.events
            res.render("../views/events/index", {
                user,
                events,
            })
        })
});

//NEW route
router.get("/new", (req, res) => {
    res.render("../views/events/new", {
        userId: req.params.userId
    })
})
//CREATE route
router.get("/", (req, res) => {
    const event = new Event(req.body)
    User.findById(req.params.userId)
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
            res.render("../views/events/show", {
                event
            })
        })
})
//EDIT route
router.get("/:id/edit", (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const event = user.events.id(req.params.id)
            res.render("../views/events/edit", {
                userId: req.params.userId,
                event
            })
        })
})
//UPDATE route
router.put("/:id", (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            let event = user.events.id(req.params.id)
            event.title = req.body.title
            event.date = req.body.date
            event.with = req.body.with
            event.address = req.body.address
            event.miscellaneous = req.body.miscellaneous
            event.ready = req.body.ready
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/events/${req.params.id}`)
        })
})
//DELETE route
router.delete("/:id", (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.events.id(req.params.id).remove()
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/events/`)
        })
})

module.exports = router;