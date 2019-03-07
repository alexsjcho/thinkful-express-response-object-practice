const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("common"));
app.use(cors());

app.get("/playstore", (req, res) => {
  //More code here
});

app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
