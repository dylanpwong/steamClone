const express = require("express");
const router = express.Router();
const Genre = require('../../models/Genre');
const Game = require('../../models/Game');
const User = require("../../models/User");
const Review=require("../../models/Review");
const { json } = require("body-parser");

// const mongoose = require("mongoose");
// const deepPopulate = require("mongoose-deep-populate")(mongoose);
// Review.plugin(deepPopulate /* more on options below */);

router.get('/index',(req,res)=>{
   
    Game.findOne({ title: 'HellTaker' }).populate({
        path: 'reviews genres',
        populate:{
            path: 'user',
            model: User,
           
        }
    }).then(game=>res.json(game))
        
})

router.post('/showGame',(req,res)=>{
    const gameId = Object.keys(req.body)[0];
    // debugger
    Game.findOne({ _id: gameId }).populate({
        path: 'reviews genres',
        populate:{
            path: 'user',
            model: User
        }
    }).then(game=>res.json(game))
      
    // debugger
    // Game.findOne({_id: gameId}).then((game)=>{
    //     res.json(game)
    // })
})

router.post('/upVoteGame',(req,res)=>{
    Game.findOne({id: req.body})
    .then((game)=>{
        game.upVote ++;
    })
})

router.get('/randomGames',(req,res)=>{
    
    const amount = 8;
    Game.find({}).limit(amount).populate('genres').then(games=>{
        
        let gamesObj={};
        shuffle(games);
     
        res.json(games);
    })
   
})
function shuffle(array) {
   array.sort(() => Math.random() - 0.5);
}
router.post('/genreGame',(req,res)=>{
    const findGenre = Object.keys(req.body)[0];
    Game.find({genre: findGenre}).then((games)=>{
        res.json(games)
    })
})
router.get('/releaseDate',(req,res)=>{
  const amount = 8;
    Game.find({}).sort({_id: -1}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    })
})
router.get('/topSellers', (req,res)=> {
    const amount =  8;
    Game.find({}).sort({sales: -1}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    })
})
router.get('/popular',(req,res)=>{ //
    const amount = 8;
    Game.find({}).sort({clicks: -1}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    })
})
router.get('/topRated',(req,res)=>{ // review score
    let perfect = 90;
    let good = 70;
    let mixed = 50;
    let bad = 30;
    const amount = 8;
    Game.find({reviewScore: {$gte: 0}}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    }).catch(err=>{
        res.json({error: "failed to get top games"})
    })
    //look up mongoose filter


})
router.post('/new_and_trending',()=>{

})
router.post('/search',(req,res)=>{
    const gameSearch = Object.keys(req.body)[0];
    // console.log(gameSearch);
    Game.find({ title: { $regex:   `^${gameSearch}.*`,$options: 'i' } }).then(game=>{
        // debugger;
        res.json(game);
    })
})


module.exports = router;