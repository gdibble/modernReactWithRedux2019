import React from 'react';
import UserCreate from './UserCreate.js';
import LanguageContext from '../context/LanguageContext.js';

class App extends React.Component {

  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        <LanguageContext.Provider value="dutch">
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }

};

export default App;
