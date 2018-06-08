const express = require('express');
const router = express.Router();
const User = require("../models/User")

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.find()
        .then((users) => {
            res.render("../views/users/index", {
                users
            })
        })
});

//NEW route
router.get("/new", (req, res) => {
    res.render("../views/users/new")
})

//CREATE route
router.get("/", (req, res) => {
    const user = req.body
    User.create(user)
        .then(() => {
            res.redirect("/users")
        })
})

//SHOW route
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.render("../views/users/show", {
                user
            })
        })
})

//EDIT route
router.get("/:id/edit", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.render("../views/users/edit", { user })
        })
})

//UPDATE route
router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/users/${req.params.id}`)
        })
})

//DELETE route
router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect("/users")
        })
})

module.exports = router;