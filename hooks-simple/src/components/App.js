import React, { useState } from 'react';

const App = () => {
  const [ resource, setResourece ] = useState('posts');
  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResourece('posts')}>Posts</button>
        <button onClick={() => setResourece('todos')}>ToDos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
