// reference database URL
require("dotenv").config();

// dependencies needed for app
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

// connecting to database
mongoose.connect(process.env.connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

// instruct database to accept JSON
app.use(express.json());

// instruct server to use route
const uDataRoute = require("./routes/api/udata");
app.use("/api/udata", uDataRoute);

// make sure server is running
app.listen(5000, function() {
  console.log(`server started`);
});
