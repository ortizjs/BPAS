import React, { useMemo } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './LocationMap.css'

const LocationMap = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      });
    const center = useMemo(() => ({ lat: 37.959607, lng: -122.032699 }), []);
    
    return (
        <div className="map-wrapper">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={18}
            >
                <Marker 
                position={{ lat: 37.959607, lng: -122.032699 }}
                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}/>
            </GoogleMap>
          )}
        </div>
      );
}

export default LocationMap
