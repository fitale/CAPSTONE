// reference database URL
require("dotenv").config();

// util for working with file paths (necessary for Heroku)
const path = require("path");
const PORT = process.env.PORT || 3001;

// dependencies needed for app
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

// connecting to database
mongoose.connect(
  process.env.connectionString || "mongodb://localhost/:5000/udatas",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

// necessary for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// instruct database to accept JSON
app.use(express.json());

// instruct server to use route
const uDataRoute = require("./routes/api/udata");
app.use("/api/udata", uDataRoute);

// make sure server is running
app.listen(PORT, function() {
  console.log(`server started on ${PORT}`);
});
