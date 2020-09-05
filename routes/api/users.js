const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Game = require('../../models/Game');
const bcrypt  =require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput=require('../../validation/register');
const validateLoginInput = require('../../validation/login')

router.get('/edkim',(req,res)=>{
    res.json({msg: "This is ed kim"});
    // console.log("ED KIM");
});
router.post('/getUser',(req,res)=>{
    User.findOne({_id: req.body.userId}).populate('games').then(user=>{
        res.json(user);
    })
})
router.post('/addBalance',(req,res)=>{
    const userId = req.body.userId;
    const amount = req.body.amount;
    User.findOne({_id: userId}).then(user=>{
        user.balance += amount;
        user.save().then(newUser=>{
            res.json(newUser);
        });
    })
})
//get post patch destroy puts RESTapi
//get get info
//post creating new info
//patch updating info
//puts updating info
//destroy destroys info

router.post('/join',(req,res)=>{
    
    const{errors, isValid} = validateRegisterInput(req.body);
    // debugger;
    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email.email;
    // Checks database if user with email already exists.
    User.findOne({email: email})
    .then(user =>{
        // debugger;
        if(user){
            // debugger;
            return res.status(400).json({email: "A User already has that email"})
            //300 OK
            //400 Not found 404
            //500 internal server error 

        }else{
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            // debugger;
            // Encrypts new user password using salt. (Randomizes key val and places password into hash).
            bcrypt.genSalt(10, (err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then((user)=>res.json(user))
                    .catch(err=> console.log(err))
                })
            })
            // newUser.save().then(user=> res.send(user).catch(err=> res.send(err)));
        }
    })
});

router.get("/index", (req, res) => {
  User.find()
    .then((users) => {
      // console.log(Object.values(users).length)
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.delete("/flush", (req, res) => {
  User.deleteMany({}).then((user) => res.json(user));
});

router.post('/checkEmail',(req,res)=>{
    // console.log(`Email is :${req}`)
    let foundUser = User.find({email: req.body.email}).then((user)=>{
        // console.log(`user is ${user}`);
        // debugger;
        if(!!user.length){
            res.json({
                found: true,
                email: null
            })
        }else{
            res.json(({
                fonud: false,
                email: req.body.email
            }))
        }
        
    })
})

router.post('/login',(req,res)=>{
    const{errors,isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}).populate({
        path: "games reviewList cart wishlist",
        model: Game
    })
        .then(user=>{
            if(!user){
                return res.status(404).json({email: 'Email Not found'});
            }else{
                bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){//load up user in current user state
                        // debugger;
                        const payload = {
                            id: user.id,
                            _id: user.id,
                            username: user.username,
                            email: user.email,
                            reviews: user.reviews,
                            games: user.games,
                            wishlist: user.wishlist,
                            cart: user.cart,
                            reviewList: user.reviewList,
                            profilePicture: user.profilePicture,
                            balance: user.balance
                            // reviewList: "pie"
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err,token)=>{
                                res.json({
                                    success: true,
                                    token: 'Bearer' + token
                                });
                            }
                        )
                    }else{
                        return res.status(400).json({password: 'password is incorrect'})
                    }
                })
            }
        })
})

module.exports = router;