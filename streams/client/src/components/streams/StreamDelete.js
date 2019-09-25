import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal.js';
import history from '../../history.js';

import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button cancel">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="">
        Stream Delete
        <Modal
          title="Delete Stream"
          content="Are you sure that you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }

}

export default connect(null, { fetchStream })(StreamDelete);
