// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a React Component
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name: ';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" className="label" />
      <button style={{ backgroundColor:'teal', color:'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Show React Component in browser
ReactDOM.render(<App />, document.getElementById('root'))
