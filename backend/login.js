const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const loginSchema = mongoose.model("Login", schema);
module.exports = loginSchema;