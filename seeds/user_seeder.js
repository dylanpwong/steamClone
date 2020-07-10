const User= require("../models/User");
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

let myPass = '123456';
let newPas;
const getPass = (password)=>{
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      doTheRest(password);
      
  })
  })
// console.log(getPass('123456'));
}





    const users=[
        new User({
            username: 'demoUser',
            password: '123456',
            email: 'demo@gmail.com'
        })
    ]
    

let finished = 0;
for (let i = 0; i < users.length; i++) {
  users[i]
    .save()
    .then((user) => {
      finished++;
      if (finished === users.length) {
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
