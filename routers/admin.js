const express = require("express");
const events = require("../models/events");
const admin = express.Router();
const users = require("../models/user");
const asyncHandler = require("express-async-handler");

admin.get(
  "/",
  asyncHandler(async function (req, res) {
    users.getAllEvents().then(function (Events) {
      res.render("admin", {
        AllUsers: Events,
      });
      //   console.log("da vao trong events ghgfhgfgh : " + Events[0].fullname);
    });
  })
);

admin.get("/config", function (req, res) {
  if (res.session.currentUser) {
    res.render("config");
  } else {
    res.render("Home");
  }
});

admin.get("/intro", function (req, res) {
  if (res.session.currentUser) {
    res.render("intro");
  } else {
    res.render("home");
  }
});

admin.post(
  "/",
  asyncHandler(async function (req, res) {
    const { email, password } = req.body;

    // const getEvent = await events.getAllEvents();

    if (email && password) {
      const found = users.findByEmail(email);

      if (found.password === password) {
        res.session.currentUser = found;
        res.locals.Name = found.fullName;
        res.redirect("/intro");
      }
    }
  })
);

module.exports = admin;
