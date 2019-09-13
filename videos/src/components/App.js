import React from 'react';
import SearchBar from './SearchBar.js';

class App extends React.Component {

  state = {
    // ...
  };

  onTermSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }

}

export default App;
