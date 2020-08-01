const express = require("express");
const router = express.Router();
const Review = require('../../models/Review');
// const Genre = require("../../models/Genre");

router.get("/index", (req, res) => {
  Review.find()
    .then((reviews) => {
      res.json(reviews);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
