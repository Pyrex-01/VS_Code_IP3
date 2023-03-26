// server/index.js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('axios');

const params = {access_key: '8af9e33892c7fa1e9325b0dc9fe8e569'}

var indexRouter = require('./routes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)

module.exports = app;

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// database connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "BlairMackenzie",
  password: "Zab153647",
  database: "ip3"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	var sql = "SELECT * FROM posts ORDER BY postDate DESC";
	con.query(sql, function (err, result) {
	  if (err) throw err;
	  console.log(result);
	});
  });

  axios.get('http://api.aviationstack.com/v1/flights?access_key=8af9e33892c7fa1e9325b0dc9fe8e569')
.then(response => {
  const apiResponse = [];
  apiResponse[0] = response.data;
  console.log(response.data);
}).catch(error => {
console.log(error);
});