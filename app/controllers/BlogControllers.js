const Blog = require("../models/blog");

const all = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Blog.find()
        .then((blogs) => {
            const data = {
                blogs,
            }

            res.status(200);
            res.send(data);
        })
}

module.exports = {
    all,
}