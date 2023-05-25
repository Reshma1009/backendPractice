require("dotenv").config();
const express = require("express");
const dbConnection = require("./config/dbConnetion");
const routes = require("./routes");
const app = express();

dbConnection();

// app.use(bodyParser.json()); // for parsing application/json
app.use(express.json())
app.use( express.urlencoded( { extended: true } ) );
app.use(routes);

app.listen(8000, () => {
  console.log("Server Is Running");
});
