const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  review: String,
  linkedin: String,
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
