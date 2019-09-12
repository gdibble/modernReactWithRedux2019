import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js'

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      headers: { 'Authorization': 'Client-ID 1a3018b68eae408c7f49377edd3543843e3ea56875f8d1189a6baf17cf48386e' },
      params: { query: term }
    }).then(response => {
      console.log(response.data.results);
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
};

export default App;
