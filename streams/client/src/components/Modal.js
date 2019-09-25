import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        Modal
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
