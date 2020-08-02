const express = require("express");
const router = express.Router();
const Review = require('../../models/Review');
const Game = require('../../models/Game');
const User = require('../../models/User')
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

router.post("/create",(req,res)=>{
  const gameId = Object.keys(req.body)[0];
  const userId = Object.keys(req.body)[1];
  Game.findOne({_id: gameId}).then(game=>{
    let newReview={
      content: req.body.content,
      Game: game
    }
  })
})
module.exports = router;
