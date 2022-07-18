const mongoose = require("mongoose");

const daySchema = mongoose.Schema({
  formatDate: {
    type: String,
    default : new Date().toLocaleDateString()
  },
  text: String,
  mood: String,
});

module.exports = mongoose.model("days", daySchema);
