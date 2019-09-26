import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';

import { fetchStream }  from '../../actions';

class StreamShow extends React.Component {

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream)
      return <div>Loading...</div>;

    const { title, description } = this.props.stream;
    return (
      <div className="">
        <video ref={this.videoRef} />
        <h1>
          {title}
        </h1>
        <h5>
          {description}
        </h5>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
