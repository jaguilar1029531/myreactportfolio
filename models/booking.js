const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: { type: String, required: true },
  emailaddress: { type: String, required: true },
  message: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
