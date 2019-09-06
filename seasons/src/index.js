import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);  // Parent setup functionality
    this.state = { lat:null };
    // Immediate request location:
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat:position.coords.latitude }),  // Success Callback
      (error) => console.log(error)                                   // Error Callback
    );
  }

  render() {
    return (
      <div>
        Latitude: { this.state.lat }
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
