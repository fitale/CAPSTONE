const express = require("express");
const uDataFile = __dirname + "/../../models/udata.json";
const university = require(uDataFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(university);
});

router.get("/:id", (req, res) => {
  const found = university.some(uni => uni.id === req.params.id);
  if (found) {
    res.json(university.filter(uni => uni.id === req.params.id));
    console.log(`university with id: ${req.params.id} found`);
  } else {
    res.status(404).json({
      errorMessage: `The University you are searching for is not found`
    });
  }
});

module.exports = router;
