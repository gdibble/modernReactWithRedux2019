import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import YouTube from '../apis/YouTube.js';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: { q: term }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log('From the App!', video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={this.onTermSubmit}
        />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }

}

export default App;
