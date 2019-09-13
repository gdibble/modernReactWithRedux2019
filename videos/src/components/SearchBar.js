import React from 'react';

class SearchBar extends React.Component {

  state = {
    // ...
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">
              Video Search
            </label>
            <input id="search" type="text" />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;
