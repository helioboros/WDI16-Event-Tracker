const express = require("express")
const router = express.Router({mergeParams: true})
const People = require("../models/People")

//GET person listing
router.get('/', function (req, res, next) {
    People.find()
      .then((people) => {
        res.render("people/index", {
          people
        })
      })
  });

//NEW route
router.get("/new", (req, res) => {
    res.render("/people/new")
})
//CREATE route
router.get("/", (req, res) => {
    const newPerson = req.body
    People.create(newPerson)
      .then(() => {
        res.redirect("/people")
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
        res.render("people/edit", { person })
      })
  })
//UPDATE route
router.put("/:id", (req, res) => {
    People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/people/${req.params.id}`)
    })
  })
//DELETE route
router.delete("/:id", (req, res) => {
    People.findByIdAndRemove(req.params.id)
    .then(() => {
    res.redirect("/people") 
    })
  })

module.exports = router;