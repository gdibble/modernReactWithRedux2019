import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {

  const [ resources, setResources ] = useState([]);

  const fetchResource = async resource => {
  };

  useEffect(async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data);
  }, [ resource ]);

  return (
    <div className="">
      {resources.length}
    </div>
  );
};

export default ResourceList;
