import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  // Initialize State
  state = {
    lat: null,
    errorMessage: ''
  };

  renderContent() {
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error: { this.state.errorMessage }</div>;

    if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />;

    return <Spinner message="Please accept location request" />;  // Else - loading
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
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
