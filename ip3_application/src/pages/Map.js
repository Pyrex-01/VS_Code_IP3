import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};




const Map = ({ center }) => {

    const mapRef = React.useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])


    return (
        <div className='map-page'>
            <div className='map'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={9}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;