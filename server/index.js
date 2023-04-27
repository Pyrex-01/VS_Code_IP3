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

const fullPlaneData2 = [];

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
  
  var api = api_URL5 + "begin=" + (unixTime-3600).toString() + "&end=" + unixTime.toString();
  console.log(api);

  const response = await fetch(api);
  const data = await response.json();

  console.log(data);

  data.map((data) => {
    generatePlaneData2(data.icao24, data.lastSeen);
  })
  console.log(fullPlaneData2);
}

async function generatePlaneData2(icao24, lastSeen) {
  var icao = icao24;
  var time = lastSeen;

  var api2 = api_URL3 + "time=" + time.toString() + "&icao24=" + icao;
  const response = await fetch(api2);
  const data2 = await response.json();

    var icao = data2[0];
    var callsign = data2[1];
    var origin_country = data2[2];
    var longitude = data2[5];
    var latitude = data2[6];
    var altitude = data2[13];
    var onGround = data2[8];
    var velocity = data2[9];
    var vertical_rate = data2[11];
    var time = data2[3];

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
      'Time': time
      //'distance travveled': calcDistance(icao, data[3])
    }
    //calcDistance(icao, data[3]);
    console.log(planeData);
    fullPlaneData2.push(planeData);
}

async function calcDistance(icao, time) {
  
}

//getApiData2() is for opensky
getAPIData2();

module.exports = app;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});