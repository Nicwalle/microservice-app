const app = require("./src/app");
const usersAPIPort = 80;
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb://nicwalle:wallenic@${process.env.USERS_DB_URL}/${process.env.USERS_DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
.then(() => {
    console.log("Connected to the database " + process.env.USERS_DB_NAME);
}).catch((error) => {
    console.log("Unable to connect to the database " + process.env.USERS_DB_NAME, error)
});

app.listen(usersAPIPort, () => {
    console.log("Running on internal port " + usersAPIPort);
    console.log("-----------------------------");
});
