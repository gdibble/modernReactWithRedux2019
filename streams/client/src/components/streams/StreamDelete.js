import React from 'react';
import Modal from '../Modal.js';
import history from '../../history.js';

class StreamDelete extends React.Component {

  componentDidMount() {
    console.log(this.props);
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

export default StreamDelete;
