import { Blog } from "$app/models/index.js";

export const ALL = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author");

    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    await Blog.create(data);

    res.status(200).send({ message: "Blog created" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: {
          views: 1,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate("author");

    if (blog === null) {
      res.status(404).send({ messahe: "Blog not found" });
    }

    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (blog === null) {
      res.status(404).send({ messahe: "Blog not found" });
    }

    res.status(200).send({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const blog = await Blog.findByIdAndUpdate(id, { $set: data });

    if (blog === null) {
      res.status(404).send({ messahe: "Blog not found" });
    }

    res.status(200).send({ message: "Blog updated" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
