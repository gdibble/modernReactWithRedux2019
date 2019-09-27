import React, { useState, useEffect } from 'react';

export default () => {
  const [ lat, setLat ] = useState(null);
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    // Request location:
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),  // Success Callback
      (error) => setErrorMessage(error.message)        // Error Callback
    );
  }, []);

  return [ lat, errorMessage ];
};
