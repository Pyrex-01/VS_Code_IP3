import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultOptions = {
    mapTypeControl: false,
    streetViewControl: false,
}

const BigMap = ({center}) => {

    return (
            <div className='map'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={8}
                    options={defaultOptions}
                >
                </GoogleMap>
            </div>
    ) 
 }

export default BigMap;