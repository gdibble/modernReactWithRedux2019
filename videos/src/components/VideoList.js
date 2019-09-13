import React from 'react';

class VideoList extends React.Component {

  state = {
    // ...
  };

  render() {
    return (
      <div>
        {this.props.videos.length}
      </div>
    );
  }

}

export default VideoList;
