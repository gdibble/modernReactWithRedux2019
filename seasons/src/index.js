import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),  // Success Callback
    (error) => console.log(error)         // Error Callback
  );

  return (
    <SeasonDisplay />
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
