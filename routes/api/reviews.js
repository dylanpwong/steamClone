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
    User.findOne({_id: userId}).then(user=>{
      let newReview={
        content: req.body.content,
        Game: game,
        user: user
      }

    })
  })
})
router.patch("/editReview",(req,res)=>{
  const gameId = req.body.gameId;
  const userId = req.body.userId;
  const content = req.body.content;
  const reviewId = req.body.reviewId;
  Review.findOne({_id: reviewId}).then(review=>{
      review.content = content;
      review.save().then(saved=>{
        res.json(saved)
      })
  })
})
module.exports = router;
