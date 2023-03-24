var express = require('express')
var router = express.Router()

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

router.get('/api/hello', (req, res) => {
	res.json('hello world')
})

router.get('/api/get/allposts', (req, res, next ) => {
	con.connect(function (err) {
		if (err) throw err;

		con.query(`SELECT * FROM posts ORDER BY postDate DESC`, 
	  	(q_err, q_res) => {
			res.json(q_res.rows)
		})
	})
})


router.get('/api/get/post', (req, res, next) => {
	const post_id = req.query.post_id
	
	con.connect(function (err) {
		if (err) throw err;

		con.query(`SELECT * FROM posts
				WHERE idPosts=$1`,
			  [ post_id ], (q_err, q_res) => {
				  res.json(q_res.rows)
		})
	})
})

router.post('/api/post/posttodb', (req, res, next) => {
	const values = [ req.body.title, req.body.body, req.body.uid, req.body.username]
	
	con.connect(function (err) {
		if (err) throw err;

		con.query(`INSERT INTO posts(postTitle, postBody, idUser, postCategory, date_created) VALUES($1, $2, $3, $4, NOW() )`,
			values, (q_err, q_res) => {
				if(q_err) return next(q_err);
				res.json(q_res.rows)
		})
	})
})

router.delete('/api/delete/postcomments', (req, res, next) => {
	const post_id = req.body.post_id

	con.connect(function (err) {
		if (err) throw err;
	con.query(`DELETE FROM comments
				WHERE idcomments = $1`, [post_id],
				(q_err, q_res) => {
					res.json(q_res.rows)
					console.log(q_err)
				})				
	})
})

router.delete('/api/delete/post', (req, res, next) => {
	const post_id = req.body.post_id

	con.connect(function (err) {
		if (err) throw err;
	con.query(`DELETE FROM posts WHERE idPosts = $1`, [ post_id ],
				(q_err, q_res) => {
				  res.json(q_res.rows)
				  console.log(q_err)
				})
	})
  })


  router.put('/api/put/likes', (req, res, next) => {
	const uid = [req.body.uid]
	const post_id = String(req.body.post_id)
  
	const values = [ uid, post_id ]
	console.log(values)

	con.connect(function (err) {
		if (err) throw err;
	con.query(`UPDATE posts
				SET postLikes = postLikes + 1`,
	// Check this row later			
	   values, (q_err, q_res) => {
	  if (q_err) return next(q_err);
	  console.log(q_res)
	  res.json(q_res.rows);
	})
	});
});

module.exports = router