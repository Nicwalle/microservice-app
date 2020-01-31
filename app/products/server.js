const app = require("./src/app");
const productsAPIPort = 80;
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb://nicwalle:wallenic@${process.env.PRODUCTS_DB_URL}/${process.env.PRODUCTS_DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
    console.log("Connected to the database " + process.env.PRODUCTS_DB_NAME);
}).catch((error) => {
    console.log("Unable to connect to the database " + process.env.PRODUCTS_DB_NAME, error)
});

app.listen(productsAPIPort, () => {
    console.log("Running on internal port " + productsAPIPort);
    console.log("-----------------------------");
});
