const mongoose = require("mongoose");
const Genre = require('../models/Genre');
const Review = require('../models/Review');
const random = require("mongoose-random");
const Schema = mongoose.Schema;
let calcScore = (score) => {
  // let score = ups / (ups + downs);
  console.log(`score is ${score}`);
  // score=27;
  
  switch (true) {
    case score <= 25:
      return "OverWhelmingly Negative";
    case score <= 40:
      return "Very Negative";
    case score <= 65:
      return "Negative";
    case score <= 75:
      return "Mixed";
    case score <= 85:
      return "Mostly Positive";
    case score <= 95:
      return "Very Positive";
    case score<=100:
      return "OverWhelmingly Positive";
  }
  return "Not Reviewed";
};
const GameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Description Pending",
  },
  developer: {
    type: String,
    default: "N/A",
  },
  price: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  // otherImgs:[{type: String}],
  otherImgs: {
    type: Array,
    default: [],
  },
  about: {
    type: String,
    default: "About Coming Soon",
  },
  gif: {
    type: String,
  },

  upVotes: {
    type: Number,
    default: 0,
  },
  downVotes: {
    type: Number,
    default: 0,
  },
  reviewScore: {
    type: Number,
    //  default: (!(this.upVotes + this.downVotes)) ? 0 : this.upVotes/(this.upVotes + this.downVotes)
    default: 80,
  },
  recepion: {
    type: String,
    default: "Positive",
  },
  sales: {
    type: Number,
    default: 0,
  },
  releaseDate: {
    type: Date,
    default: Date.now(),
  },
  safetyDate: {
    type: Date,
    default: new Date(),
  },
  clicks: {
    type: Number,
    default: 0,
  },
  minSystem: {
    OS: { type: String, default: "Coming Soon" },
    Processor: { type: String, default: "Coming Soon" },
    Memory: { type: String, default: "Coming Soon" },
    Graphics: { type: String, default: "Coming Soon" },
    Storage: { type: String, default: "Coming Soon" },
  },
  recSystem: {
    OS: { type: String, default: "Coming Soon" },
    Processor: { type: String, default: "Coming Soon" },
    Memory: { type: String, default: "Coming Soon" },
    Graphics: { type: String, default: "Coming Soon" },
    Storage: { type: String, default: "Coming Soon" },
  },

  reviews: [{ type: Schema.Types.ObjectId, ref: Review }],
  genres: [{ type: Schema.Types.ObjectId, ref: Genre }],
});


// GameSchema.plugin(random, { path: "r" });
const Game = mongoose.model("games", GameSchema);
module.exports = Game;
