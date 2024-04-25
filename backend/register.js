const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const registerSchema = mongoose.model("Register", schema);
module.exports = registerSchema; 