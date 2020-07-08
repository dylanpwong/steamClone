const express = require("express");
const router = express.Router();
const Genre = require('../../models/Genre');
const Game = require('../../models/Game')

router.get('/index',(req,res)=>{
    // Game.find()
    //     .then((games)=>{
    //         res.json(games)
    //     })
    Game.findOne({ title: 'HellTaker' }).populate('genres')
        .exec((err, genre) => {
            if (err) console.log(`error is: ${err}`)
            // console.log(`Genre is ${genre}`)
            res.json(genre);
        });
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