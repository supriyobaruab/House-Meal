const mongoose = require("mongoose");
const entry = require("../handlers/routeController/date");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
  },
  today: {
    type: Number,
  },
  lastDate: {
    type: String,
  },
  submittedToday: {
    type: Boolean,
    default: false,
  },
  entry: {
    type: String,
  },
});

module.exports = mongoose.model("Person", personSchema);
