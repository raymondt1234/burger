const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {
    let burgersObject = {
      burgers: data
    };
    res.render("index", burgersObject);
  });
});

router.post("/burgers/create", function (req, res) {
  let newBurger = req.body.burger_name;

  if (newBurger.length > 0) {
    burger.insertOne("burger_name", newBurger, function (result) {
      console.log(result);
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

router.put("/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});


module.exports = router;