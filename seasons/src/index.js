import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);  // Parent setup functionality
    this.state = {
      lat: null,
      errorMessage: ''
    };
    // Immediate request location:
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat:position.coords.latitude }),  // Success Callback
      (error) => this.setState({ errorMessage:error.message })        // Error Callback
    );
  }

  render() {
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error: { this.state.errorMessage }</div>;

    if (this.state.lat && !this.state.errorMessage)
      return <div>Latitude: { this.state.lat }</div>;

    return <div>Loading...</div>;  // Else
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
