const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt  =require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput=require('../../validation/register');
const validateLoginInput = require('../../validation/login')

router.get('/edkim',(req,res)=>{
    res.json({msg: "This is ed kim"});
    // console.log("ED KIM");
});
//get post patch destroy puts RESTapi
//get get info
//post creating new info
//patch updating info
//puts updating info
//destroy destroys info

router.post('/join',(req,res)=>{
    const{errors, isValid} = validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    // Checks database if user with email already exists.
    User.findOne({email: req.body.email})
    .then(user =>{
        if(user){
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

router.post('/login',(req,res)=>{
    const{errors,isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user=>{
            if(!user){
                return res.status(404).json({email: 'Email Not found'});
            }else{
                bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email
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