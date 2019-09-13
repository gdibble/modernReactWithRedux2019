import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {

  state = {
    // ...
  };

  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div
        className="item video-item"
        onClick={() => onVideoSelect(video)}
      >
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">
            {video.snippet.title}
          </div>
        </div>
      </div>
    );
  }

}

export default VideoItem;
