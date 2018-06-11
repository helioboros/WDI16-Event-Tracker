const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const People = require("../models/People")

//GET person listing
router.get('/', function (req, res, next) {
    User.findById(req.params.userId)
        .then((user) => {
            const people = user.circle
            console.log(people)
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
            user.circle.push(person)
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
            res.render("../views/people/show", {
                person
            })
        })
})
//EDIT route
router.get("/:id/edit", (req, res) => {
    People.findById(req.params.id)
        .then((person) => {
            res.render(`people/edit`, { person })
        })
})
//UPDATE route
router.put("/:id", (req, res) => {
    People.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/people/${req.params.id}`)
        })
})
//DELETE route
router.delete("/:id", (req, res) => {
    People.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect(`/users/${req.params.userId}/people`)
        })
})


module.exports = router;