const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const User = require('./models/User');
const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

  app.use(bodyParser.urlencoded({
      extended: false
  }));

  app.use(bodyParser.json());

app.get("/", (req,res)=>{
    const user = new User({
        username: "Froppie",
        email: "demo@gmail.com",
        password: '123456',
    })
    user.save();
    res.send('DYLANSUCKSPLAYGANGBEASTS');
});

app.use("/api/users",users);

// app.get("/ed", (req, res) => {
//   res.send("hello ed");
// });






const port = process.env.PORT || 5000;

app.listen(port,()=>{console.log(`Listening on port ${port}`)});