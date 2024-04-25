const express = require("express");
const router = express.Router();
const Login = require("./login.js");
const Register = require("./register.js");

const register = async (req, res) => {
    try {
        console.log(req.body);
        const {
            username,
            password,
            email,
        } = req.body;

        const newUser = new Register({
            username,
            password,
            email,
        });

        const savedUser = await newUser.save();
        console.log("created user: ", savedUser);
        return res.status(201).json(savedUser);
        return res.status(201);
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
};

const login = async (req, res) => {
    try {
        const {
            username,
            password,
        } = req.body;

        const temp = await Register.findOne({ username: username });
        if (!temp) return res.status(400).json({ error: "user does not exist" });
        
        const ismatch = (password === temp.password);
        if (!ismatch) return res.status(400).json({ error: "wrong password" });

        const newLoginUser = temp;

        const savedUser = await newLoginUser.save();
        return res.status(201).json({ user: savedUser, "msg": "User successfully logged in" });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = { register, login };