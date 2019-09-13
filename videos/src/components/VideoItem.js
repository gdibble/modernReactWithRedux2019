import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {

  state = {
    // ...
  };

  render() {
    const { snippet } = this.props.video;

    return (
      <div className="item video-item">
        <img className="ui image" src={snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">
            {snippet.title}
          </div>
        </div>
      </div>
    );
  }

}

export default VideoItem;
