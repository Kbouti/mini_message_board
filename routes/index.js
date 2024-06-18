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

// Get form page:
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board", messages: messages });
});

// Post form on submit:
router.post("/new", function(req, res, next){
  console.log(req.body.title)
  // WHOOOOOHOOOO We logged the value of our "title" input on the form. That's gotta be good for something, right?
});



module.exports = router;
