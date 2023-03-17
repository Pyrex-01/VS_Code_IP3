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
        <div className='map-page'>
            {isLoaded? <BigMap center={defaultCenter}/> : <h1>Loading...</h1>}
        </div>
    ) 
}

export default Map;