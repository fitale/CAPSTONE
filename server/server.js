const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const uDataRoute = require("./routes/api/udata");
app.use("/api/udata", uDataRoute);

app.listen(5000, function() {
  console.log("app is listening on port 5000");
});
