import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '900px',
    height: '500px',
};

const defaultOptions = {
    mapTypeControl: false,
    streetViewControl: false,
}

const SmallMap = ({center}) => {

    return (
            <div className='map'>
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