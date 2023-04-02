import express from "express";

import Blog from "$app/routes/blog/blog.routes.js";
import Auth from "$app/routes/auth/auth.routes.js";

const router = express.Router();

router.use("/blogs", Blog);
router.use("/auth", Auth);

export default router;
