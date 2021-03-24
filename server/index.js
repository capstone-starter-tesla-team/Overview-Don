const express = require("express");
const morgan =require("morgan")
const axios = require("axios")
require("dotenv").config();
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const compression = require("compression");


app.use(cors())
app.use(morgan("bev"))
app.use(compression())
app.use(express.static(path.join(__dirname, "../public")));




app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  })