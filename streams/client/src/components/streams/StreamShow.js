import React from 'react';
import { connect } from 'react-redux';
import { fetchStream }  from '../../actions';

class StreamShow extends React.Component {

  render() {
    return (
      <div className="">
        Stream Show
      </div>
    );
  }

};

export default connect(null, { fetchStream })(StreamShow);
