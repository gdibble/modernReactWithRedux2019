import React from 'react';
import VideoItem from './VideoItem.js';

class VideoList extends React.Component {

  render() {
    const { videos, onVideoSelect } = this.props;
    const renderedList = videos.map(video => {
      return (
        <VideoItem
          key={video.etag}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    });

    return (
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    );
  }

}

export default VideoList;
