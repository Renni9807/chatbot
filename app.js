const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // in order to use process.env
const cors = require("cors");
const app = express();
app.use(cors());

mongoose
  .connect(process.env.DB, {
    // as user address is private data, we need to create dotenv file.
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

module.exports = app;
