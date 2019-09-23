import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams }  from '../../actions';

const StreamList = () => {
  return (
    <div className="">
      Stream List
    </div>
  );
};

export default connect(null, { fetchStreams })(StreamList);
