const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world",
    user: "Charles",
    added: new Date(),
  },
];

let jsonParser = bodyParser.json();
let urlParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", urlParser, function (req, res) {
  console.log("crpyot", req.body.username);
  messages.push({
    text: req.body.msg,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
