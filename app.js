const app = require("./app/app");
const mongoose = require("mongoose");

require("dotenv").config();
const env = process.env;

mongoose.connect(env.MONGO_URL)
    .then((connecton) => {
        const port = env.PORT || 8000;

        console.log(`Connected. Running in ${port}`)
        app.listen(port);
    })
    .catch((error) => {
        console.log(error);
    });