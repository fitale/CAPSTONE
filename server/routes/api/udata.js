const express = require("express");
const uDataFile = __dirname + "/../../models/udata.json";
const university = require(uDataFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(university);
});

module.exports = router;
