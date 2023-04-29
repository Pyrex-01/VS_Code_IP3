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

    const [flightsList, setFlightsList] = useState([]);
    let {mapId} = useParams();
    const val = [];

    /*
    useEffect(() => {
        Axios.get("http://localhost:3001/api/getMapData").then((data) => {
            console.log(data)
            setFlightsList(data.data)
        });
    }, [])
    */

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_API_KEY
    })

/*
    for (let i = 0; i < flightsList.length; i++) {
        if (flightsList[i].ID == mapId){
            val = flightsList[i]
        }
    }
    */

    return (
        <div>
            <div className='map-page'>
                {isLoaded ? <BigMap center={defaultCenter} /> : <h1>Loading...</h1>}
            </div>
            <div className='flight-info'>
                <div className='d-flex flex-column justify-content-evenly w-100 h-25 bg-black ps-4'>
                    <div>
                        <div id='flight-number' className='fs-4 fw-bold text-white'>{val.Callsign}</div>
                    </div>
                    <div id='destination' className='fs-2 fw-bold text-white'>{val.Origin_Country}</div>
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
                                <td> {val.icao}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Latitude</th>
                                <td colspan="3"> {val.Latitude}</td>
                            </tr>
                            <tr>
                                <th>Longitude</th>
                                <td> {val.Longitude}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Altitude</th>
                                <td> {val.Altitude}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Speed</th>
                                <td> {val.Velocity} m/s</td>
                            </tr>
                            <br></br>
                        </table>
                    </div>

                    <div className='fs-4 fw-bold text-black m-2'>Pollution</div>
                    <div className='pollution'>
                        <div className='fs-1 fw-bold ps-3 pe-3'>{val.C02_Emissions}</div>
                        <div className=''>kg of co2 per flight</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;