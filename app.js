const asyncHandler = require("express-async-handler");
const express = require("express");
const bodyParser = require("body-parser");
const users = require("./models/user");
const admin = require("./routers/admin");
const regRouter = require("./routers/register");
const homeRouter = require("./routers/home");
const session = require("express-session");
const cookieSession = require("cookie-session");
const db = require("./models/db");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY || "secrect"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.set("views", "./views");

app.set("view engine", "ejs");

app.use("/admin", admin);

app.use("/reg", regRouter);

app.use("/home", homeRouter);

app.get("/", function (req, res) {
  res.render("intro.ejs");
});

app.post(
  "/",
  asyncHandler(async function (req, res) {
    const { email, password } = req.body;

    if (email && password) {
      const found = await users.findByEmail(email);

      if (found.password === password) {
        console.log("day la found " + found.fullname);
        req.session.currentUser = found;

        res.render("intro", {
          currentUser: found.id,
          fullname: found.fullname,
        });
      }
    }
  })
);

app.get("/intro", function (req, res) {
  res.redirect("/");
});

db.sync()
  .then(function () {
    const PORT = process.env.PORT || 5000;
    console.log("server is listening");

    app.listen(PORT);
  })
  .catch(console.error);
