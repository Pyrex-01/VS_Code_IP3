// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// database connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "BlairMackenzie",
  password: "Zab153647"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});