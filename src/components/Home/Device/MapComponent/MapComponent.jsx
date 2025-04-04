import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ latitude, longitude }) => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: latitude,
    lng: longitude
  };
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyANw0ZHpHzH0VSBg1ouXoLCkBA-RyRgd4I">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
