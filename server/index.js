// server/index.js
var createError = require('http-errors');
var express = require('express');
var router = express.Router();
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

/*
	Arrays to hold data from API
	api_URL calls aviationstack API
	api_URL2 calls opensky API with data from flight in area: switzerland
*/

const fullPlaneData = [];
const fullPlaneData2 = [];

const api_URL = 'http://api.aviationstack.com/v1/flights?access_key=8af9e33892c7fa1e9325b0dc9fe8e569';
const api_URL3 = 'https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226';

/*
	functions to call API and get the response
	calls methods generatePlane Data

	getAPIData = aviationStack
	getAPIData = opensky
*/

async function getAPIData() {
	const response = await fetch(api_URL);
	const data = await response.json();
	generatePlaneData(data);
  }

  async function getAPIData2() {
	const response = await fetch(api_URL3);
	const data = await response.json();
	console.log(data);
	generatePlaneData2(data);
  }

  /*
  	Methods generatePlaneData goes through the api and gets key values
	Stores keyValues and puts them into a variable
	Variable is then pushed into arrays
	Repeats until all data has been handled

	generatePlaneData = aviationstack
	generatePlaneData2 = opensky
  */

  const generatePlaneData = (data) => {
	data.data.map((data) => {
	  var airportDepart = data.departure.airport;
	  var airportArrive = data.arrival.airport;
	  var airlineName = data.airline.name;
	  var airlineIATA = data.airline.iata;
	  var ailineICAO = data.airline.icao;
	  var flightIATA = data.flight.iata;
	  var flightICAO = data.flight.icao;
  
	  var planeData = {
		'Departure Airport': airportDepart,
		'Airline Arival Airport': airportArrive,
		'Airline Name': airlineName,
		'Airline iata': airlineIATA,
		'Airline icao': ailineICAO,
		'Flight iata': flightIATA,
		'Flight icao': flightICAO
	  }
  
	  fullPlaneData.push(planeData);
  
	  console.log(planeData);
	})
	console.log(fullPlaneData)
  }

  const generatePlaneData2 = (data) => {
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
		'Vertical_Rate': vertical_rate
	  }
	  fullPlaneData2.push(planeData);
	})
	console.log(fullPlaneData2);
  }

  /*
  	Method calls for running API

	getAPIData = aviationstack API
	getAPIData2 = opensky API
  */

//getAPIData();
getAPIData2();
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});