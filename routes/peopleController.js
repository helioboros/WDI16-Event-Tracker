const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const People = require("../models/People")

//GET person listing
router.get('/', function (req, res, next) {
    User.findById(req.params.userId)
        .then((user) => {
            const people = user.people
            res.render("people/index", {
                people
            })
        })
});

//NEW route
router.get("/new", (req, res) => {
    res.render("/people/new", {
        userId: req.params.id
    })
})
//CREATE route
router.get("/", (req, res) => {
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
    People.findById(req.params.id)
        .then((person) => {
            res.render("people/show", {
                person
            })
        })
})
//EDIT route
router.get("/:id/edit", (req, res) => {
    People.findById(req.params.id)
        .then((person) => {
            res.render(`/user/${req.params.userId}/people/edit`, { person })
        })
})
//UPDATE route
router.put("/:id", (req, res) => {
    People.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/user/${req.params.userId}/people/${req.params.id}`)
        })
})
//DELETE route
router.delete("/:id", (req, res) => {
    People.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect(`/user/${req.params.userId}/people`)
        })
})


module.exports = router;