const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Game = require('./Game');
const deepPopulate = require("mongoose-deep-populate")(mongoose);

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
  games: [{ type: Schema.Types.ObjectId, ref: Game }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: Game }],
  cart: [{ type: Schema.Types.ObjectId, ref: Game }],
});
UserSchema.plugin(deepPopulate);
const User = mongoose.model('users',UserSchema);
module.exports=User;