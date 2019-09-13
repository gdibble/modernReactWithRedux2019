import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: 'dfgdfg'
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">
              Video Search
            </label>
            <input
              id="search"
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;
