import React from 'react';
import SearchBar from './SearchBar.js';
import YouTube from '../apis/YouTube.js';

class App extends React.Component {

  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: { q: term }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} vidoes.
      </div>
    );
  }

}

export default App;
