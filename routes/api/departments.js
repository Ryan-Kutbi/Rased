const express = require("express");
const router = express.Router();

// @router  GET api/departments/test
// @desc    Tests department route
// @access  Public
router.use("/test", (req, res) => res.json({ msg: "departments works" }));

module.exports = router;
