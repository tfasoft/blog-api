const express = require("express");
const cors = require("cors");

const BlogRoutes = require("./routes/BlogRoutes");
const AuthRoutes = require("./routes/AuthenticationRoutes");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.set('json spaces', 2);

app.use('/blogs', BlogRoutes);
app.use('/auth', AuthRoutes);

module.exports = app;