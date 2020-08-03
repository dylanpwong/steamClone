const express = require("express");
const router = express.Router();
const Genre = require('../../models/Genre');
const Game = require('../../models/Game');
const User = require("../../models/User");

router.get('/index',(req,res)=>{
    // Game.find()
    //     .then((games)=>{
    //         res.json(games)
    //     })
    Game.findOne({ title: 'HellTaker' }).populate('genres reviews')
        .exec((err, genre) => {
            if (err) console.log(`error is: ${err}`)
            // console.log(`Genre is ${genre}`)
            res.json(genre);
        });
})

router.post('/showGame',(req,res)=>{
    // debugger
    const gameId = Object.keys(req.body)[0];
    Game.findOne({ _id: gameId }).populate('genres reviews')
        .exec((err, genre) => {
            if (err) console.log(`error is: ${err}`)
            // console.log(`Genre is ${genre}`)
            // debugger
            res.json(genre);
        });
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
    
    const amount = 7;
    Game.find({}).populate('genres').then(games=>{
        
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
  const amount = 7;
    Game.find({}).sort({_id: -1}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    })
})
router.get('/topSellers', (req,res)=> {
    const amount =  7;
    Game.find({}).sort({sales: -1}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    })
})
router.get('/popular',(req,res)=>{ //
    const amount = 7;
    Game.find({}).sort({clicks: -1}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    })
})
router.get('/topRated',(req,res)=>{ // review score
    let perfect = 90;
    let good = 70;
    let mixed = 50;
    let bad = 30;
    const amount = 7;
    Game.find({reviewScore: {$gte: 0}}).limit(amount).populate('genres').then(games=>{
        res.json(games)
    }).catch(err=>{
        res.json({error: "failed to get top games"})
    })
    //look up mongoose filter


})
router.post('/new_and_trending',()=>{

})


module.exports = router;