import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history.js';

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
      <div className="ui standard modal visible active">
        <div className="header">
          Delete Stream
        </div>
        <div className="content">
          Are you sure that you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui button primary">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
