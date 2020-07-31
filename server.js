const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")

const PORT = 5500;

const app = express();


app.use(logger("dev"));

app.use(cors({
  "origin": ["http://127.0.0.1:5500"],
  "methods": ["GET", "POST", "PUT", "OPTIONS"]
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  console.log("App running at http://localhost:5500/")
});