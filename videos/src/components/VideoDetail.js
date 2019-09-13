import './VideoItem.css';
import React from 'react';

class VideoDetail extends React.Component {

  state = {
    // ...
  };

  render() {
    const { selectedVideo } = this.props;

    if (!selectedVideo)
      return <div>Loading...</div>;

    return (
      <div className="ui segment">
        <h4 className="ui header">
          {selectedVideo.snippet.title}
        </h4>
        <p>
          {selectedVideo.snippet.description}
        </p>
      </div>
    );
  }

}

export default VideoDetail;
