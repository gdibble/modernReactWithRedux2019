import './VideoItem.css';
import React from 'react';

class VideoDetail extends React.Component {

  state = {
    // ...
  };

  render() {
    const { selectedVideo } = this.props;

    return (
      <div>
        {selectedVideo.snippet.title}
      </div>
    );
  }

}

export default VideoDetail;
