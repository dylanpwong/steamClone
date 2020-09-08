const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Game = require('./Game');
const Review= require('./Review');
// const { default: Review } = require('../frontend/src/components/game_page/review');
const deepPopulate = require("mongoose-deep-populate")(mongoose);
// var reviewGameSchema = new Schema({ name: {type: Schema.Types.ObjectId, ref: Game }});
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  balance:{
    type: Number,
    default: 100,
  },  
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  profilePicture: {
    type: String,
    default: "https://dpwong-steamclone-dev.s3.amazonaws.com/prinny.jpg",
  },
  reviewList:[{
   
    type: Schema.Types.ObjectId,
    ref: Game,
  }],
  reviews: [{type:Schema.Types.ObjectId,ref: Review}],
  games: [{ type: Schema.Types.ObjectId, ref: Game }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: Game }],
  cart: [{ type: Schema.Types.ObjectId, ref: Game }],
});
UserSchema.plugin(deepPopulate);
const User = mongoose.model('users',UserSchema);
module.exports=User;
// module.exports.user=User;