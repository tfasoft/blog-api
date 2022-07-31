const Blog = require("../models/blog");

const all = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Blog.find().sort({ createdAt: -1})
        .then((blogs) => {
            res.status(200);
            res.send(blogs);
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        });
}

const add = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const blogData = req.body;

    const blog = new Blog(blogData);
    blog.save()
        .then((blogResult) => {
            const data = {
                id: blogResult._id,
            }

            res.status(200);
            res.send(data);
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        });
}

const get = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const blog_id = req.params.blog_id;

    Blog.findById(blog_id)
        .then((blog) => {
            const data = {
                blog,
            }

            res.status(200);
            res.send(data);
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        });
}

const del = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const blog_id = req.params.blog_id;

    Blog.findByIdAndDelete(blog_id)
        .then((blog) => {
            const data = {
                message: "Deleted",
            }

            res.status(200);
            res.send(data);
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        });
}

module.exports = {
    all,
    add,
    get,
    del,
}