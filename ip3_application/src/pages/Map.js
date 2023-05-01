import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import {useParams} from "react-router-dom"
import { useJsApiLoader } from "@react-google-maps/api";
import BigMap from './components/BigMap';

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

const defaultCenter = {
    lat: 51.5072,
    lng: -0.1276
};


const Map = () => {

    const [co2List, setCO2List] = useState([]);
    const [flightsList, setFlightsList] = useState([]);
    let {icao} = useParams();
    console.log(icao)
    var currentFlight = {}
    var currentFlightCO2 = {}

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getMapData").then((data) => {
            setFlightsList(data.data)
        });
        /*
        Axios.get("http://localhost:3001/api/getCO2").then((data) => {
            console.log(data)
            setCO2List(data.data)
        })
        */
    }, [])

    /*
    function getCO2data() {
        Axios.get("http://localhost:3001/api/getCO2").then((data) => {
            console.log(data)
            setCO2List(data.data)
        })
    }
    */

    flightsList.map((val, key) => {
        if (val.icao == icao) {
            currentFlight = val
        }
    })

    co2List.map((val, key) => {
        if (val.icao == icao) {
            currentFlightCO2 = val
        } 
    })

    console.log(currentFlightCO2)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_API_KEY
    })

    return (
        <div>
            <div className='map-page'>
                {isLoaded ? <BigMap center={defaultCenter} /> : <h1>Loading...</h1>}
            </div>
            <div className='flight-info'>
                <div className='d-flex flex-column justify-content-evenly w-100 h-25 bg-black ps-4'>
                    <div>
                        <div id='flight-number' className='fs-4 fw-bold text-white'>{currentFlight.Callsign}</div>
                    </div>
                    <div id='destination' className='fs-2 fw-bold text-white'>{currentFlight.Origin_Country}</div>
                </div>
                <div className=''>
                    <div className='fs-4 fw-bold text-black m-2'>Flight info</div>
                    <div className='Flight-table'>
                        <table className='table table-bordered m-2'>
                            <tr>
                                <th>Plane Information:</th>
                            </tr>
                            <tr>
                                <th>ICAO:</th>
                                <td> {icao}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Latitude</th>
                                <td colspan="3"> {currentFlight.Latitude}</td>
                            </tr>
                            <tr>
                                <th>Longitude</th>
                                <td> {currentFlight.Longitude}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Altitude</th>
                                <td> {currentFlight.Altitude}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Speed</th>
                                <td> {currentFlight.Velocity} m/s</td>
                            </tr>
                            <br></br>
                        </table>
                    </div>

                    <div className='fs-4 fw-bold text-black m-2'>Pollution</div>
                    <div className='pollution'>
                        <div className='fs-1 fw-bold ps-3 pe-3'>{parseFloat(2 * ((currentFlight.Velocity / 100)*3.13)).toFixed(2)}</div>
                        <div className=''>kg of co2 per second</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;