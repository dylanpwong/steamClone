const express = require("express");
const router = express.Router();
const Genre = require('../../models/Genre')

router.get('/index',(req,res)=>{

    Genre.find()
        .then((genres)=>{
            res.json(genres)
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
})
module.exports = router;
