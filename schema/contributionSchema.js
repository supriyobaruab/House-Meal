const mongoose = require("mongoose");
const conttibutionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  result: {
    type: Number,
  },
  date: {
    type: String,
  },
});
module.exports = mongoose.model("contribution", conttibutionSchema);
