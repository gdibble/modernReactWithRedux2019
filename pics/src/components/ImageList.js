import React from 'react';

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(({ id, urls, description }) => {
      return (
        <img
          key={id}
          src={urls.regular}
          alt={description}
          title={description}
        />
      );
    });

    return (
      <div>
        {images}
      </div>
    );
  }
}

export default ImageList;
