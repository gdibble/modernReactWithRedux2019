import React, { useState } from 'react';
import ResoureceList from './ResourceList.js';
import UserList from './UserList.js';

const App = () => {
  const [ resource, setResourece ] = useState('posts');
  return (
    <div className="ui container">
      <UserList />
      <div>
        <button onClick={() => setResourece('posts')}>Posts</button>
        <button onClick={() => setResourece('todos')}>ToDos</button>
      </div>
      <ResoureceList resource={resource} />
    </div>
  );
};

export default App;
