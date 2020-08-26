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
  const gameId = req.body.gameId;
  const userId = req.body.userId;
  const content = req.body.content;
  const rec = req.body.rec
  Game.findOne({_id: gameId}).then(game=>{
    User.findOne({_id: userId}).then(user=>{
      let newReview = new Review({
        content: req.body.content,
        game: game,
        user: user,
        recommendation: rec == "yes" ? true : null,
      });
      // debugger;
      newReview.save().then(review=>{
        game.reviews.push(review);
        user.reviews.push(review)
        game.save().then(newGame=>{
          user.save().then(newUser=>{
            // debugger;
            res.json(review)
          })
        })
      })
    })
  })
})
router.patch("/editReview",(req,res)=>{
  const gameId = req.body.gameId;
  const userId = req.body.userId;
  const content = req.body.content;
  const reviewId = req.body.reviewId;
  const rec = req.body.rec;
  Review.findOne({_id: reviewId}).then(review=>{
      review.content = content;
      review.recommendation = rec=="yes"? true:null
      review.save().then(saved=>{
        res.json(saved)
      })
  })
})
module.exports = router;
