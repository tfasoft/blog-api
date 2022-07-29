const express = require("express");
const controller = require("../controllers/BlogControllers");

const router = express.Router();

router.get('/all', controller.all);

module.exports = router;