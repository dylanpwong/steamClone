const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    recommendation:{
        type: Boolean,
    },
    helpfulYes:{
        type: Number,
        default: 0
    },
    helpfulNo:{
        type: Number,
        default: 0
    },
    helpfulFunny:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now()
    }
});
const Review = mongoose.model("reviews", ReviewSchema);
module.exports = Review;
