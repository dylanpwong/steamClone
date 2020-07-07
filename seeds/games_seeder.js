const User = require("../models/User");
const Game = require("../models/Game")
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const bcrypt = require('bcryptjs');
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

Game.deleteMany({})
    .then(() => console.log("deleted Games"))
    .catch((error) => console.log(error));




const games = [
    new Game({
        title: 'HellTaker',
        price: 'Free',
        imgUrl: 'https://dpwong-steamclone-dev.s3.amazonaws.com/HelltakerImg.jpg',

    })
]

let finished = 0;
for (let i = 0; i < games.length; i++) {
    games[i]
        .save()
        .then((user) => {
            finished++;
            if (finished === games.length) {
                exit();
            }
        })
        .catch((error) => console.log(error));
}

function exit() {
    mongoose
        .disconnect()
        .then(() => console.log("Disconnected"))
        .catch((error) => console.log(error));
}
