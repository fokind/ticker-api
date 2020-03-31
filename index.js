"use strict";

require("dotenv").config();

const express = require("express");
const { TickerServer } = require("./lib/server");

const app = express();

const port = process.env.PORT;
app.use("/odata", TickerServer.create());

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
