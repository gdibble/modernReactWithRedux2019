import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
  }

  render() {
    return (
      <div className="">
        {this.props.resource}
      </div>
    );
  }

};

export default ResourceList;
