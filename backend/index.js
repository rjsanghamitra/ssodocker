const express = require("express");
const cookieSession = require('cookie-session');
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes.js");
const cors = require("cors");
const PassportSetup = require('./passport-setup.js')
const passport = require('passport')
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(cookieSession({
    maxAge: 1000,
    keys: ["cOoKiEkEy123"]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

mongoose.connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("connected");
    });
  })
  .catch((error) => console.log(error));