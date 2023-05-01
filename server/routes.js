var express = require('express')
var app = express.Router();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var id = 0;

/*
  method getAPIData(), makes api call and stores data as json
  calls method to handle data generatePlaneData
  1) aviationStack
  2) all plane data opensky
  3) plane data from bounding box
  4) aircraft between times
  5) all flights between a certain time
*/

const api_URL = 'http://api.aviationstack.com/v1/flights?access_key=8af9e33892c7fa1e9325b0dc9fe8e569';

const api_URL2 = 'https://opensky-network.org/api/states/all?icao24=';

const api_URL3 = 'https://opensky-network.org/api/states/all?';

const api_URL4 = 'https://opensky-network.org/api/flights/aircraft?';

var api_URL5 = 'https://opensky-network.org/api/flights/all?';

var api_URL6 = 'https://opensky-network.org/api/states/all?lamin=47.9382&lomin=-14.2086&lamax=61.1271&lomax=1.3919&on_ground=false';

function getId() {
	var newID = id + 1;
	id = newID;
	return newID;
}

async function getAPIData2() {
	const response = await fetch(api_URL6);
	const data = await response.json();
	return generatePlaneData2(data);
	
}

const generatePlaneData2 = (data) => {
	var result = []
	data.states.map((data) => {
		var icao = data[0];
		var callsign = data[1];
		var origin_country = data[2];
		var longitude = data[5];
		var latitude = data[6];
		var altitude = data[13];
		var onGround = data[8];
		var velocity = data[9];
		var vertical_rate = data[11];

		var planeData = {
			'icao': icao,
			'Callsign': callsign,
			'Origin_Country': origin_country,
			'Longitude': longitude,
			'Latitude': latitude,
			'Altitude': altitude,
			'Landed': onGround,
			'Velocity': velocity,
			'Vertical_Rate': vertical_rate,
			'ID': getId()
		}
		if (onGround == false){
			result.push(planeData);
		}
	})
	return result
}


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

app.get('/api/getMapData', (req, res) => {
	id = 0
	var fullPlaneData = []
	getAPIData2().then(x => { 
		fullPlaneData = x; 
		//console.log(fullPlaneData)
		res.send(fullPlaneData);
	});
})

app.post('/api/postMarker', (req, res) => {
	const icao = req.params.icao
	console.log(icao)
	/*
	var fullPlaneData = []
	getAPIData2().then(x => { 
		fullPlaneData = x; 
	});
	*/
})
	
/*
	async function getAPIData2() {
		var unixTime = Math.floor(Date.now() / 1000);
		console.log(unixTime, unixTime - 10);

		var api = api_URL5 + "begin=" + (unixTime - 1500).toString() + "&end=" + unixTime.toString();

		const response = await fetch(api);
		const data = await response.json();
		console.log(data);

		data.map((data) => {
			var depHorDis = data.estDepartureAirportHorizDistance;
			var depVerDis = data.estDepartureAirportVertDistance;
			var arrVerDis = data.estArrivalAirportVertDistance;
			var arrHorDis = data.estArrivalAirportHorizDistance;

			var distance = 0;
			var co2 = 0;
			distance = arrHorDis + arrVerDis + depHorDis + depVerDis;
			co2 = 0.5 * (distance * 3.13);

			generatePlaneData2(data.icao24, co2);
		})
		console.log(fullPlaneData2);
	}

	async function generatePlaneData2(icao24, co2) {
		var icao = icao24;

		var api2 = api_URL3 + "icao24=" + icao;

		const response = await fetch(api2);
		const data2 = await response.json();

		var planeData;

		if (data2.states == null) {
			console.log("No Plane Data");
		} else {
			var icao = data2.states[0][0];
			var callsign = data2.states[0][1];
			var origin_country = data2.states[0][2];
			var longitude = data2.states[0][5];
			var latitude = data2.states[0][6];
			var altitude = data2.states[0][13];
			var onGround = data2.states[0][8];
			var velocity = data2.states[0][9];
			var vertical_rate = data2.states[0][11];
			var time = data2.states[0][3];

			function getId() {
				var newID = id+1;
				id = newID;
				return newID;
			}

			planeData = {
				'icao': icao,
				'Callsign': callsign,
				'Origin_Country': origin_country,
				'Longitude': longitude,
				'Latitude': latitude,
				'Altitude': altitude,
				'Landed': onGround,
				'Velocity': velocity,
				'Vertical_Rate': vertical_rate,
				'Time': time,
				'C02_Emmisions': co2,
				'ID': getId()
			}
			console.log(fullPlaneData2);
		}
		fullPlaneData2.push(planeData);
	}

	getAPIData2();

	res.send(fullPlaneData2);
	*/

module.exports = app;