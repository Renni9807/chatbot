// what we going to do here is about how user schema looks like

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must tpye name"],
    unique: true,
  },
  token: {
    type: String,
  },
  online: {
    // whether user is online or offline
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("User", userSchema);
