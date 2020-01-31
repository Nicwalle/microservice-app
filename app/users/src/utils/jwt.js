const jwt = require("jsonwebtoken");

const generateToken = (data) => {
    console.log("Generating token");
    return jwt.sign({data}, process.env.JWT_SECRET, {expiresIn: "14 days"});
};

module.exports = generateToken;
