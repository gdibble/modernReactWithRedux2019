import React from 'react';
import Modal from '../Modal.js';

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button cancel">Cancel</button>
    </div>
  );

  return (
    <div className="">
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure that you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
