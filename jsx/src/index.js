// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a React Component
const App = () => {
  const buttonText = { text: 'Click me' };
  const buttonStyle = { backgroundColor:'teal', color:'white' };

  return (
    <div>
      <label className="label" for="name">Enter name: </label>
      <input id="name" type="text" class="label" />
      <button style={buttonStyle}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Show React Component in browser
ReactDOM.render(<App />, document.getElementById('root'))
