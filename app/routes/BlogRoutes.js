const express = require("express");
const controller = require("../controllers/BlogControllers");

const router = express.Router();

router.get('/all', controller.all);
router.get('/get/:blog_id', controller.get)
router.post('/add', controller.add);
router.post('/delete/:blog_id', controller.del);

module.exports = router;