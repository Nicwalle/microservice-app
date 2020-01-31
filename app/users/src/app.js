const express = require("express");
const app = express();
const usersModel = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {body, validationResult} = require("express-validator");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});

app.get("/login/:username/:password", (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    usersModel.findOne({
        username: username,
    }).then((user) => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
            res.status(403).json({status:"FORBIDDEN", message:"Wrong username/password"});
        } else {
            const token = jwt.sign({username:username, role:user.role}, process.env.JWT_SECRET, {expiresIn: "14 days"});
            res.status(200).json({status:"SUCCESS", token});
        }
    }).catch((error) => {
        res.status(500).json({status:"INTERNAL ERROR", error})
    });
});

app.post("/register", [body('username'), body('password')], ((req, res) => {
    if (!validationResult(req).isEmpty()) {
        res.status(400).json({status:"BAD REQUEST", message: "Some fields are missing (username and password are required)"});
    } else {
        const username = req.body.username;
        const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
        const user = new usersModel({
            username,
            password,
            role: "USER"
        });
        user.save().then(() => {
            res.status(200).json({status: "SUCCESS"});
        }).catch((error) => {
            res.status(500).json({status: "INTERNAL ERROR", message: error});
        });
    }
}));

module.exports = app;
