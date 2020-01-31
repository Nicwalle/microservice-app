const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productsModel = require("./models/product");
const {body, validationResult} = require("express-validator");
const {validToken, adminOnly} = require("./middlewares/tokenHandlers");

app.use(bodyParser.json());

app.use((req, res, next) => {
   console.log(req.method, req.originalUrl);
   next();
});

app.get("/list", (req, res) => {
    productsModel.find()
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json({status: "ERROR", message: error});
    });
});

app.post("/new", [validToken, adminOnly, body("name"), body("description"), body("price"), body("image")], ((req, res) => {
    if (!validationResult(req)) {
        res.status(400).json({status:"BAD REQUEST", message: "Information needed: name, description, price, image"});
    } else {
        const product = new productsModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        });
        product.save()
            .then(() => res.status(200).json({status: "SUCCESS"}))
            .catch((error) => res.status(500).json({status: "ERROR", message: error}));
    }
}));

module.exports = app;
