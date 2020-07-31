const User = require("../models/User");
const Game = require("../models/Game");
const Genre=require('../models/Genre');
const Review= require('../models/Review');
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

Review.deleteMany({})
    .then(() => console.log("deleted Review"))
    .catch((error) => console.log(error));
User.findOne({username: 'demoUser'}).then((user)=>{


//GENRES
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
    new Genre({
        name: 'Anime'
    }),
    new Genre({
        name: 'FPS'
    }),
    new Genre({
        name: 'Multiplayer'
    })
    
]

let actionId=genres[0]._id;
let horrorId=genres[1]._id;
let rpgId=genres[2]._id;
let soulsLikeId=genres[3]._id;
let adventureId=genres[4]._id;
let animeId=genres[5]._id;
let fpsId=genres[6]._id
let multiPlayeId=genres[7]._id

// finished saves genres into database 
let finished = 0;
for (let i = 0; i < genres.length; i++) {
    genres[i]
        .save() //special to mongoose, saves to database
        .then((genre) => {
            finished++;
            if (finished === genres.length) {
                // exit();
            }
        })
        .catch((error) => console.log(error));
}
// REVIEWS

const reviews=[
    new Review({
        content: 'THIS IS GREAT PLEASE TRY IT!!!!',
        helpfulYes: 50,
        helpfulNo: 10,
        user: user
    }),
    
]

let finished3 = 0;
for (let i = 0; i < reviews.length; i++) {
    reviews[i]
        .save()
        .then((review) => {
            finished3++;
            if (finished3 === reviews.length) {
                // exit();
            }
        })
        .catch((error) => console.log(error));
}


///// GAMES
// const hellTakerImgs = [
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/helltakerScreenShot1.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot2.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot3.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot4.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot5.png",
// ];
const games = [
  new Game({
    title: "HellTaker",
    price: "Free",
    imgUrl: "https://dpwong-steamclone-dev.s3.amazonaws.com/HelltakerImg.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/helltakerScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot5.png",
    ],

    // genres:
  }),
  new Game({
    title: "Dark Souls",
    price: "20.00",
    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/dark-souls-remastered-cover.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darkSoulsScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot5.jpg",
    ],
  }),
  new Game({
    title: "Persona 5",
    price: "60.00",
    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/P5-Guide-Cover-Art.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/Persona5ScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5ScreenShot2.jpeg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5ScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5Screenshot4.jpeg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5ScreenShot5.png",
    ],
  }),
  new Game({
    title: "Resident Evil 4",
    price: "30.00",
    imgUrl: "https://dpwong-steamclone-dev.s3.amazonaws.com/RE4+Cover.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/residentEvil4ScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/residentevil4ScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/residentEvil4ScreenShots3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ResidentEvil4ScreenShot4.jpg,",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ResidentEvil4ScreenShot5.jpg",
    ],
  }),
  new Game({
    title: "Call Of Duty Black Ops 3",
    price: "50.00",
    imgUrl: "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3.jpeg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackOps3ScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackopsScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3ScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3ScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3ScreenShot5.jpg",
    ],
  }),
];
games[0].genres.push(genres[0]); //helltaker
games[0].genres.push(genres[1]);    // just gives IDs of genres, NOT actual values
games[0].reviews.push(reviews[0]);
// games[0].otherImgs= hellTakerImgs;

games[1].genres.push(soulsLikeId); //dark souls
games[1].genres.push(actionId);

games[2].genres.push(animeId); // persona 5
games[2].genres.push(rpgId);

games[3].genres.push(fpsId); //black ops 3
games[3].genres.push(multiPlayeId);
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

})
// console.log(`Game's Genre: ${games[0].genres}`)
function exit() {
    mongoose
        .disconnect()
        .then(() => console.log("Disconnected"))
        .catch((error) => console.log(error));
}
