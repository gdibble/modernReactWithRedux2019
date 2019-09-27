import React from 'react';

class App extends React.Component {

  state = { resource: 'posts' };

  render() {
    return (
      <div className="ui container">
        <div>
          <button>Posts</button>
          <button>ToDos</button>
        </div>
        {this.state.resource}
      </div>
    );
  }

};

export default App;
