const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classbookingSchema = new Schema({
  name: { type: String, required: true },
  emailaddress: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Classbooking = mongoose.model("Classbooking", classbookingSchema);

module.exports = Classbooking;
