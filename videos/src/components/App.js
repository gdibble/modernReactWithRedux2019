import React from 'react';
import SearchBar from './SearchBar.js';
import YouTube from '../apis/YouTube.js';

class App extends React.Component {

  state = {
    // ...
  };

  onTermSubmit = (term) => {
    YouTube.get('/search', {
      params: { q: term }
    })
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
