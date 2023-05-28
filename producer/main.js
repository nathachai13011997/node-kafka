const express = require("express");
const app = express();
const config = require("./config/app");

// Express Configs
require("./config/express")(app);

// Routes
app.use(require("./routes/account"));

app.listen(config.portApp, () => {
  console.log(`Example app listening at http://localhost:${config.portApp}`);
});
