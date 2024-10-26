const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();

//! DB CONFIG START

connectToMongo();
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;


//! EXPRESS APP CONFIG START

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
