import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const BigMap = ({center}) => {

    return (
            <div className='map'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={9}
                >
                </GoogleMap>
            </div>
    ) 
 }

export default BigMap;