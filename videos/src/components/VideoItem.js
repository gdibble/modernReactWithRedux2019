import React from 'react';

class VideoItem extends React.Component {

  state = {
    // ...
  };

  render() {
    const { snippet } = this.props.video;

    return (
      <div>
        <img src={snippet.thumbnails.medium.url} />
        {snippet.title}
      </div>
    );
  }

}

export default VideoItem;
