import express from "express";

import { Blog } from "$app/controllers/index.js";
import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.get("/", Blog.ALL);
router.get("/:id", Blog.SINGLE);
router.post("/", jwt, Blog.CREATE);
router.delete("/:id", jwt, Blog.DELETE);
router.patch("/:id", jwt, Blog.UPDATE);

export default router;
