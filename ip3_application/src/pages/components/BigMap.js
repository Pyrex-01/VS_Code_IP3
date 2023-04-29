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
    

    const markers = [flightsList]

    const position = {lat: flightsList.Latitude, lng: flightsList.Longitude}

    console.log(flightsList)

    return (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                options={defaultOptions}>

                {markers.length > 0 &&
                    markers.map((val, key) => {
                        console.log(val)
                        var position = { lat: val.Latitude, lng: val.Longitude }
                        return (<MarkerF key={val.ID} position={position} icon= {{url:'/plane.png', scaledSize: new window.google.maps.Size(50,40)}} />)
                })}
            </GoogleMap>
        </div>
    )
}

export default BigMap;