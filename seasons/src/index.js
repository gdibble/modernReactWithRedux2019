import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);  // Parent setup functionality

  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),  // Success Callback
      (error) => console.log(error)         // Error Callback
    );

    return (
      <div>Latitude: </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
