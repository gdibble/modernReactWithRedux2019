import React from 'react';
import useResources from './useResources.js';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul className="">
      {resources.map(record => <li key={record.id}>{record.title}</li>)};
    </ul>
  );
};

export default ResourceList;
