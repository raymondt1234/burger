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
  let burgerPost = req.body.burger_name;
  burger.insertOne("burger_name", burgerPost, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});


module.exports = router;