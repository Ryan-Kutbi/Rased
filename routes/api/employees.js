const express = require("express");
const router = express.Router();

// @router  GET api/empluyees/test
// @desc    Tests employee route
// @access  Public
router.use("/test", (req, res) => res.json({ msg: "employees works" }));

module.exports = router;
