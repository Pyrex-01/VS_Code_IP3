import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import mapStyle from "./mapStyle";

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    styles: mapStyle
}


const BigMap = ({ center }) => {

    const [flightsList, setFlightsList] = useState([]);
    let navigate = useNavigate();

    
    useEffect(() => {
        Axios.get("http://localhost:3001/api/getMapData").then((data) => {
            console.log(data)
            setFlightsList(data.data)
        });
    }, [])

    console.log(flightsList)

    return (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                options={defaultOptions}>

                {flightsList.length > 0 &&
                    flightsList.map((val, key) => {
                        var position = { lat: val.Latitude, lng: val.Longitude }
                        return (<MarkerF key={val.icao} position={position} icon={{url:'/plane.png', scaledSize: new window.google.maps.Size(50,40)}} 
                        onClick={() => (navigate(`/map/${val.icao}`))} />)
                })}
            </GoogleMap>
        </div>
    )
}

export default BigMap;