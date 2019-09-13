import React from 'react';
import SearchBar from './SearchBar.js';
import YouTube from '../apis/YouTube.js';

class App extends React.Component {

  state = {
    // ...
  };

  onTermSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: { q: term }
    });

    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }

}

export default App;
