const express = require("express");
const router = express.Router();

// @router  GET api/jobs/test
// @desc    Tests job route
// @access  Public
router.use("/test", (req, res) => res.json({ msg: "jobs works" }));

module.exports = router;
