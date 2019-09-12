import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
          title={description}
        />
      </div>
    );
  }
}

export default ImageCard;
