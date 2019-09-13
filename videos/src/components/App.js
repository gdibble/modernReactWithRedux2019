import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
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
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={this.onTermSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
