import React from 'react';

const StreamEdit = props => {
  console.log(props);
  return (
    <div className="">
      Stream Edit
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { stream: null };
};

export default StreamEdit;
