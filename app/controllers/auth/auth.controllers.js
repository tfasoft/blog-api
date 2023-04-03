import { User } from "$app/models/index.js";
import { createToken } from "$app/functions/index.js";

import md5 from "md5";

export const LOGIN = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password: md5(password) });

    if (user === null) {
      return res.status(401).send({
        message: "Sorry author is not here!",
      });
    }

    res.status(200).send({ token: createToken(user._id), user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const REGISTER = async (req, res) => {
  const data = req.body;

  try {
    data.password = md5(data.password);

    const user = await User.create(data);

    res.status(200).send({ token: createToken(user._id) });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
