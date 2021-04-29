const express = require("express");
const events = require("../models/events");
const home = express.Router();
const asyncHandler = require("express-async-handler");

home.get(
  "/",
  asyncHandler(async function (req, res) {
    res.locals.currentUser = null;
    events.getAllEvents().then(function (events) {
      console.log("kiem tra toan bo events " + JSON.stringify(events));
      res.render("home", {
        allEvents: events,
      });
    });
  })
);

module.exports = home;
