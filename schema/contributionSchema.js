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
  description : String,
  default : null,
  required : false
});
module.exports = mongoose.model("contribution", conttibutionSchema);
