const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issuereportSchema = new Schema({
  issue: { type: String, required: true },
  contact: String,
  date: { type: Date, default: Date.now }
});

const Issuereport = mongoose.model("Issuereport", issuereportSchema);

module.exports = Issuereport;
