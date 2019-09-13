import React from 'react';

class VideoItem extends React.Component {

  state = {
    // ...
  };

  render() {
    const { snippet } = this.props.video;

    return (
      <div className="item">
        <img className="ui image" src={snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">
            {snippet.title}
          </div>
        </div>
        {snippet.title}
      </div>
    );
  }

}

export default VideoItem;
