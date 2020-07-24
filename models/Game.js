const mongoose = require("mongoose");
const Genre = require('../models/Genre');
const Review = require('../models/Review');
const random = require("mongoose-random");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgUrl:{
    type: String,
    required: true
  },
  upVotes:{
    type: Number,
    default: 0
  },
  downVotes:{
    type: Number,
    default:0,
  },
  reviewScore:{
    function(){
      return this.upVotes/(this.upVotes + this.downVotes);
    }
  },
  sales:{
    type: Number,
    default:0
  },
  releaseDate:{
    type: Date,
    default: Date.now()
  },

  reviews: [{type: Schema.Types.ObjectId,ref: Review}],
  genres: [{ type: Schema.Types.ObjectId, ref: Genre }],
});
// GameSchema.plugin(random, { path: "r" });
const Game = mongoose.model("games", GameSchema);
module.exports = Game;
