const User = require("../models/User");
const Game = require("../models/Game");
const Genre=require('../models/Genre')
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
// const bcrypt = require('bcryptjs');
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

Genre.deleteMany({})
    .then(() => console.log("deleted Genres"))
    .catch((error) => console.log(error));




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

let finished = 0;
for (let i = 0; i < genres.length; i++) {
    genres[i]
        .save()
        .then((genre) => {
            finished++;
            if (finished === genres.length) {
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
