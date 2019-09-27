import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

  state = { resources: [] };

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps)  {
    console.log(prevProps);
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    // this.setState({ resources: response.data });
  }

  render() {
    return (
      <div className="">
        {this.state.resources.length}
      </div>
    );
  }

};

export default ResourceList;
