import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Hi there!' };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">
              Image Search
            </label>
            <input
              id="search"
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;
