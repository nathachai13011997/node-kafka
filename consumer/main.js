const express = require("express");
const config = require("./config/app");
const consumer = require("./services/consumer");
const app = express();

app.listen(config.portApp, () => {
  consumer.consume();
  console.log("Account consumer started...");
  // console.log(`Example app listening at http://localhost:${config.portApp}`)
});
