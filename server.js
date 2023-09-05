require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const authenticate = require("./middleware/authenticate");
const VoteController = require("./controllers/VoteController");
const app = express();

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("HI, EGN BACKEND WORKING GRATE!");
});

app.get(
  "/retriveData",
  (req, res, next) => authenticate(req, res, next),
  (req, res) => VoteController.retriveData(req, res)
);

app.get("/retriveCachedData", (req, res) =>
  VoteController.retriveCachedData(req, res)
);

module.exports = app;
