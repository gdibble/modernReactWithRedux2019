// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

function getButtonText() {
  return 'Click on me!';
}

// Create a React Component
const App = () => {
  return (
    <div>
      <label className="label" for="name">Enter name: </label>
      <input id="name" type="text" class="label" />
      <button style={{ backgroundColor:'teal', color:'white' }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Show React Component in browser
ReactDOM.render(<App />, document.getElementById('root'))
