import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import mapStyle from "./mapStyle";

const containerStyle = {
    width: '900px',
    height: '500px',
};

const defaultOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    styles: mapStyle
}

const SmallMap = ({center}) => {

    return (
            <div className='small-map'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={3}
                    options={defaultOptions}
                >
                </GoogleMap>
            </div>
    ) 
 }

export default SmallMap;