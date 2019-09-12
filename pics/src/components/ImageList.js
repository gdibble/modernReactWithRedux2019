import React from 'react';

class ImageList extends React.Component {
  render(props) {
    console.log(this.props.images);

    return (
      <div>Image List</div>
    );
  }
}

export default ImageList;