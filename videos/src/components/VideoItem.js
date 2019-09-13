import React from 'react';

class VideoItem extends React.Component {

  state = {
    // ...
  };

  render() {
    const { snippet } = this.props.video;

    return (
      <div>
        {snippet.title}
      </div>
    );
  }

}

export default VideoItem;
