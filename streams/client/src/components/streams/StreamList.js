import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams }  from '../../actions';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId)
      return (
        <div>
          EDIT/DELETE
        </div>
      );
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div
          key={stream.id}
          className="item"
        >
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    })
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
