var express = require('express')
var app = express.Router();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
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

app.get('/api/hello', (req, res) => {
	res.json('hello world')
})

// Route to get all posts
app.get("/api/get", (req, res) => {
	con.query("SELECT * FROM posts", (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
		console.log(result);
	});
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {

	const id = req.params.id;
	con.query("SELECT * FROM posts WHERE idPosts = ?", id,
		(err, result) => {
			if (err) {
				console.log(err)
			}
			res.send(result)
		});
});

// Route for creating the post
app.post('/api/create', (req, res) => {

	const username = req.body.userName;
	const title = req.body.title;
	const text = req.body.text;
	const category = req.body.text;

	con.query("INSERT INTO posts (postTitle, postDate, postBody, postCategory, idUser) VALUES (?,NOW(),?,?,?)", [title, text, category, username], (err, result) => {
		if (err) {
			console.log(err)
		}
		console.log(result)
	});
})

// Route to delete a post

app.delete('/api/delete/:id', (req, res) => {
	const id = req.params.id;

	con.query("DELETE FROM posts WHERE idPosts= ?", id, (err, result) => {
		if (err) {
			console.log(err)
		}
	})
})


// Route to like a post
app.post('/api/like/:id', (req, res) => {

	const id = req.params.id;
	con.query("UPDATE posts SET postLikes = postLikes + 1 WHERE idPosts = ?", id, (err, result) => {
		if (err) {
			console.log(err)
		}
		console.log(result)
	});
});

module.exports = app;