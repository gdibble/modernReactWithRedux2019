import React from 'react';
import Modal from '../Modal.js';

const StreamDelete = () => {
  return (
    <div className="">
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure that you want to delete this stream?"
      />
    </div>
  );
};

export default StreamDelete;
