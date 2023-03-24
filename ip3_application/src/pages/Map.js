import React from 'react';
import { useJsApiLoader } from "@react-google-maps/api";
import BigMap from './components/BigMap';

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

const defaultCenter = {
    lat: 51.5072,
    lng: -0.1276
};


const Map = () => {

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
                        <div id='flight-number' className='fs-4 fw-bold text-white'>AF853/AFR853</div>
                        <div id='airline' className='fs-5 text-white'>Air France</div>
                    </div>
                    <div id='destination' className='fs-2 fw-bold text-white'>CAY - ORY</div>
                </div>
                <div className=''>
                    <div className='fs-4 fw-bold text-black m-2'>Flight info</div>
                    <div className='Flight-table'>
                        <table className='table table-bordered m-2'>
                        <tr>
                            <th>Deparure:</th>
                            <td colspan="3">Cayenne Felix Eboue Airport</td>
                        </tr>
                        <tr>
                            <th>Scheduled:</th>
                            <td> 16:15</td>
                            <th>Actual:</th>
                            <td> 16:15</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th>Arrival:</th>
                            <td colspan="3">Paris Orly Airport</td>
                        </tr>
                        <tr>
                            <th>Scheduled:</th>
                            <td> 17:15</td>
                            <th>Actual:</th>
                            <td> 17:35</td>
                        </tr>
                        <br></br>
                        </table>
                    </div>

                    <div className='fs-4 fw-bold text-black m-2'>Plane info</div>
                    <div className='Plane-table'>
                        <table className='table table-bordered m-2'>
                        <tr>
                            <th>Type:</th>
                            <td>Airbus A330</td>
                        </tr>
                        <tr>
                            <th>Speed:</th>
                            <td> 880-925 km/h</td>
                        </tr>
                        <br></br>
                        </table>
                    </div>

                    <div className='fs-4 fw-bold text-black m-2'>Weather</div>
                    <div className='Weather-table'>
                        <table className='table table-bordered m-2'>
                        <tr>
                            <th>Conditions:</th>
                            <td>Cloudy</td>
                        </tr>
                        <tr>
                            <th>Temperature:</th>
                            <td> 20'C / 68'F</td>
                        </tr>
                        <br></br>
                        </table>
                    </div>

                    <div className='fs-4 fw-bold text-black m-2'>Pollution</div>
                    <div className='pollution'>
                        <div className='fs-1 fw-bold ps-3 pe-3'>0.57</div>
                        <div className=''>tonnes of co2 per flight</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Map;