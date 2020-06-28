const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});
const Game = mongoose.model("games", GameSchema);
module.exports = Game;
