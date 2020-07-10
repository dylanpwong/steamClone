const User = require("../models/User");
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const bcrypt = require('bcryptjs');
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

User.deleteMany({})
    .then(() => console.log("deleted Users"))
    .catch((error) => console.log(error));

let demo = new User({
    username: 'demoUser',
    password: '123456',
    email: 'demo@gmail.com'
});

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(demo.password, salt, (err, hash) => {
        if (err) throw err;
        demo.password = hash;
        demo.save()
            .then((user) => exit())
            .catch(err => console.log(err))
    })
})

function exit() {
    mongoose
        .disconnect()
        .then(() => console.log("Disconnected"))
        .catch((error) => console.log(error));
}