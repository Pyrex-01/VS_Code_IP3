// server/index.js
var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('axios');
var cors = require("cors");
let base64 = require('base-64');

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

var username = "jsgrape2002";
var password = "inT3l#47";
var headers = new Headers();

headers.append('Authorisation', 'Basic ' + base64.encode(username + ':' + password));

var fullPlaneData2 = [];

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

var api_URL5  = 'https://opensky-network.org/api/flights/all?';

async function getAPIData2() {
  var unixTime = Math.floor(Date.now()/1000);
  console.log(unixTime, unixTime-10);
  
  var api = api_URL5 + "begin=" + (unixTime-1200).toString() + "&end=" + unixTime.toString();

  const response = await fetch(api);
  const data = await response.json();
  console.log(data);

  data.map((data) => {
    var depHorDis = data.estDepartureAirportHorizDistance;
    var depVerDis = data.estDepartureAirportVertDistance;
    var arrHorDis = data.estArrivalAirportHorizDistace;
    var arrVerDis = data.estArrivalAirportVertDistance;

    var distance = calcDistance(depHorDis, depVerDis, arrHorDis, arrVerDis);
    try {
      generatePlaneData2(data.icao24);
    } catch (err) {
      console.log(err);
    }
  })
  console.log(fullPlaneData2);
}

async function generatePlaneData2(icao24) {
  var icao = icao24;

  var api2 = api_URL3 + "icao24=" + icao;

  const response = await fetch(api2);
  const data2 = await response.json();

  var planeData;

  if(data2.states == null) {
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
      'Time': time
    }
    console.log(planeData);
  } 
  fullPlaneData2.push(planeData);   
}

async function calcDistance(depHorDis, depVerDis, arrHorDis, arrVerDis) {
  var distance = depHorDis + depVerDis + arrHorDis + arrVerDis;
  return(distance);
}

//getApiData2() is for opensky
getAPIData2();

module.exports = app;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});