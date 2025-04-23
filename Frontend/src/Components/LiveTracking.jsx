import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const LiveTracking = () => {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 }); // State to store user's location
  const [mapLoaded, setMapLoaded] = useState(false);

  // Function to fetch the user's current location
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error fetching location:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    // Fetch the user's location when the component mounts
    fetchUserLocation();

    // Set up an interval to update the location every 5 seconds
    const locationInterval = setInterval(fetchUserLocation, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(locationInterval);
  }, []);

  return (
    <div className="h-screen w-screen">
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} // Use your Google Maps API key
        onLoad={() => setMapLoaded(true)}
      >
        {mapLoaded && (
          <GoogleMap
            center={userLocation}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
          >
            {/* Marker to show the user's current location */}
            <Marker position={userLocation} />
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default LiveTracking;