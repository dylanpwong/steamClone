const User = require("../models/User");
const Game = require("../models/Game");
const Genre=require('../models/Genre')
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
// const bcrypt = require('bcryptjs');

// connects to database
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })   // connects to database, asynchronous "promise"
    .then(() => console.log("Connected to MongoDB successfully"))   
    .catch((err) => console.log(err));  

// temporary, wipes out games/genres in database
Genre.deleteMany({})
    .then(() => console.log("deleted Genres"))
    .catch((error) => console.log(error));
Game.deleteMany({})
    .then(() => console.log("deleted Games"))
    .catch((error) => console.log(error));


// Array of new Genre objects
const genres = [
    new Genre({
        name: 'Action'

    }),
    new Genre({
        name: 'Horror'

    }),
    new Genre({
        name: 'RPG'
    }),
    new Genre({
        name: 'Souls Like'
    }),
    new Genre({
        name: 'Adventure'
    }),
    
]

let actionId=genres[0]._id;
let horrorId=genres[1]._id;
let rpgId=genres[2]._id;
let soulsLikeId=genres[3]._id;
let adventureId=genres[4]._id;

// finished saves genres into database 
let finished = 0;
for (let i = 0; i < genres.length; i++) {
    genres[i]
        .save() //special to mongoose, saves to database
        .then((genre) => {
            finished++;
            if (finished === genres.length) {
                exit();
            }
        })
        .catch((error) => console.log(error));
}

const games=[
    new Game({
        title: 'HellTaker',
        price: 'Free',
        imgUrl: 'https://dpwong-steamclone-dev.s3.amazonaws.com/HelltakerImg.jpg',
        // genres: 
    })
]
games[0].genres.push(genres[0]);
games[0].genres.push(genres[1]);    // just gives IDs of genres, NOT actual values
// console.log(`Genre before populate: ${games[0].genres[0]}`);

// same as finished1, but for games instead
let finished2 = 0;
for (let i = 0; i < games.length; i++) {
    games[i]
        .save()
        .then((game) => {
            finished2++;
            if (finished2 === games.length) {
                exit();
            }
        })
        .catch((error) => console.log(error));
}


// console.log(`Game's Genre: ${games[0].genres}`)
function exit() {
    mongoose
        .disconnect()
        .then(() => console.log("Disconnected"))
        .catch((error) => console.log(error));
}
