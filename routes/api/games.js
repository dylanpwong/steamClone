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
    // Game.find()
    // .limit(1)
    // .then((games)=>{
    //     res.json(games)
    // })
    const amount = 5;
    Game.find({}).then(games=>{
        
        let gamesObj={};
        shuffle(games);
        // for(let i =0;i<amount;i++ ){
        //     // gamesObj[games[i]._id] = games[i]; //by id
        //     gamesObj[games[i].title] = games[i];
        // }
        // gamesObj.hello='ed';
        res.json(games);
    })
   
})
function shuffle(array) {
   array.sort(() => Math.random() - 0.5);
}
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