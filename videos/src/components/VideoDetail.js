import './VideoItem.css';
import React from 'react';

class VideoDetail extends React.Component {

  state = {
    // ...
  };

  render() {
    const { selectedVideo } = this.props;

    if (!this.props.selectedVideo)
      return <div>Loading...</div>;

    const videoSrc = `https://youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">
            {selectedVideo.snippet.title}
          </h4>
          <p>
            {selectedVideo.snippet.description}
          </p>
        </div>
      </div>
    );
  }

}

export default VideoDetail;
