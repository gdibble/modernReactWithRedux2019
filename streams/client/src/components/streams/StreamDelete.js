import React from 'react';
import Modal from '../Modal.js';
import history from '../../history.js';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button cancel">Cancel</button>
    </React.Fragment>
  );

  return (
    <div className="">
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure that you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
