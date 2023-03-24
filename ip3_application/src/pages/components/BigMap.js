import { React } from 'react';
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

    const markers = [
        {
            id: 1,
            position: { lat: 51.4072, lng: -0.1276 },
        },
        {
            id: 2,
            position: { lat: 52.5072, lng: -0.2276 },
        }
    ]

    return (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                options={defaultOptions}
            >
                {markers.map(({ id, position }) => (
                <MarkerF key={id} position={position} icon= {{url:'/plane.png',
                                                                scaledSize: new window.google.maps.Size(50,40)}} />
                ))}
            </GoogleMap>
        </div>
    )
}



export default BigMap;