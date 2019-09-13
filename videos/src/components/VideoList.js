import React from 'react';
import VideoItem from './VideoItem.js';

class VideoList extends React.Component {

  render() {
    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem />
      );
    });

    return (
      <div>
        {renderedList}
      </div>
    );
  }

}

export default VideoList;
