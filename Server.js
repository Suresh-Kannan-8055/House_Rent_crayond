const express = require("express");
const dotenv = require("dotenv").config();
require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/index");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8055;
app.listen(PORT, () => {
  console.log(`server Running in port ${PORT}`);
});

sequelize.sync();
