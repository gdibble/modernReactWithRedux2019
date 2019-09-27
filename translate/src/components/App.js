import React from 'react';
import UserCreate from './UserCreate.js';
import ColorContext from '../context/ColorContext.js';
import LanguageContext from '../context/LanguageContext.js';
import LanguageSelector from './LanguageSelector.js';

class App extends React.Component {

  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }

};

export default App;
