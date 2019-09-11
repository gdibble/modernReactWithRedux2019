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
  }

  render() {
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error: { this.state.errorMessage }</div>;

    if (this.state.lat && !this.state.errorMessage)
      return <div>Latitude: { this.state.lat }</div>;

    return <div>Loading...</div>;  // Else
  }

  // Called the first time the component is rendered - best practice data-loading fn
  componentDidMount() {
    // Request location:
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat:position.coords.latitude }),  // Success Callback
      (error) => this.setState({ errorMessage:error.message })        // Error Callback
    );
  }

  // Called (after `render`) each time the component updates itself
  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  }

  // Called after the component is removed
  componentWillUnmount() {
    console.log('My component has been cleaned up.')
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
