import React from 'react';
import { connect } from 'react-redux';
import { fetchStream }  from '../../actions';

const StreamShow = () => {
  return (
    <div className="">
      Stream Show
    </div>
  );
};

export default connect(null, { fetchStream })(StreamShow);
