import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  return (
    <SeasonDisplay />
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
