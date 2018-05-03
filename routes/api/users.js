const express = require("express");
const router = express.Router();

// @router  GET api/posts/test
// @desc    Tests users route
// @access  Public
router.use("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
