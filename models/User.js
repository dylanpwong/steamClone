const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Game = require('./Game');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    games: [{type: Schema.Types.ObjectId,ref: Game}],
    wishlist: [{type: Schema.Types.ObjectId,ref: Game}],
    cart: [{type: Schema.Types.ObjectId,ref: Game}]
});
const User = mongoose.model('users',UserSchema);
module.exports=User;