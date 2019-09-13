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
      <div>
        {selectedVideo.snippet.title}
      </div>
    );
  }

}

export default VideoDetail;
