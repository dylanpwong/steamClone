const express = require("express");
const router = express.Router();
const Genre = require('../../models/Genre');
const Game = require('../../models/Game')

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
    Game.findOne({ id: req.body }).populate('genres')
        .exec((err, genre) => {
            if (err) console.log(`error is: ${err}`)
            // console.log(`Genre is ${genre}`)
            res.json(genre);
        });
})

router.post('/upVoteGame',(req,res)=>{
    Game.findOne({id: req.body})
    .then((game)=>{
        game.upVote ++;
    })
})

router.get('/randomGames',(req,res)=>{
    // Game.find()
})

router.post('/genreGame',(req,res)=>{
    // Game.find({gen})
})
router.post('releaseDate',()=>{

})
router.post('topSellers', ()=> {

})
router.post('popular',()=>{ //

})
router.post('topRated',()=>{ // review score

})

module.exports = router;