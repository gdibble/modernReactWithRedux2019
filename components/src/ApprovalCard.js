import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div id="approval-content" className="content">
        Are you sure?
      </div>
      <div className="extra content">
        <div id="approval-content-extra" className="container"></div>
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
