const express = require("express")
const router = express.Router({mergeParams: true})
const Event = require("../models/Event")

//GET event listing
router.get('/', function (req, res, next) {
    Event.find()
      .then((events) => {
        res.render("events/index", {
          events
        })
      })
  });

//NEW route
router.get("/new", (req, res) => {
    res.render("/events/new")
})
//CREATE route
router.get("/", (req, res) => {
    const newEvent = req.body
    Event.create(newEvent)
      .then(() => {
        res.redirect("/events")
      })
  })
//SHOW route
router.get("/:id", (req, res) => {
    Event.findById(req.params.id)
      .then((singleEvent) => {
        res.render("events/show", {
          singleEvent
        })
      })
  })
//EDIT route
router.get("/:id/edit", (req, res) => {
    Event.findById(req.params.id)
      .then((singleEvent) => {
        res.render("events/edit", { singleEvent })
      })
  })
//UPDATE route
router.put("/:id", (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/events/${req.params.id}`)
    })
  })
//DELETE route
router.delete("/:id", (req, res) => {
    Event.findByIdAndRemove(req.params.id)
    .then(() => {
    res.redirect("/events") 
    })
  })


module.exports = router;