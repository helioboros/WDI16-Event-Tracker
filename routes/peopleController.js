const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const People = require("../models/People")

//GET person listing
router.get('/', function (req, res, next) {
    User.findById(req.params.userId)
        .then((user) => {
            const people = user.people
            res.render("../views/people/index", {
                user,
                people,
            })
        })
});

//NEW route
router.get("/new", (req, res) => {
    res.render("../views/people/new", {
        userId: req.params.userId
    })
})
//CREATE route
router.post("/", (req, res) => {
    const person = new People(req.body)
    User.findById(req.params.userId)
        .then((user) => {
            user.people.push(person)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/people`)
        })
})
//SHOW route
router.get("/:id", (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const person = user.people.id(req.params.id)
            res.render("../views/people/show", {
                person
            })
        })
})
//EDIT route
router.get("/:id/edit", (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        const person = user.people.id(req.params.id)
        res.render("../views/people/edit", {
            userId: req.params.userId,
            person
        })
    })
})
//UPDATE route
router.put("/:id", (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            let person = user.people.id(req.params.id)
            person.name = req.body.name
            person.age = req.body.age
            person.relationship = req.body.relationship
            person.address = req.body.address
            person.importantDates = req.body.importantDates
            person.miscellaneous = req.body.miscellaneous
            person.favoriteThings = req.body.favoriteThings
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/people/${req.params.id}`)
        })
})
//DELETE route
router.delete("/:id", (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.people.id(req.params.id).remove()
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/people/`)
        })
})

module.exports = router;