const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board", messages: messages });
});


// After installing nodemon and setting a script we can now set watch mode with:
// npm run devstart

module.exports = router;
