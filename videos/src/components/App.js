import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
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
        <VideoList />
      </div>
    );
  }

}

export default App;
