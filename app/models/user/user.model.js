import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongodb.model("User", schema);
