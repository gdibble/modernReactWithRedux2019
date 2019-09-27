import React from 'react';
import UserCreate from './UserCreate.js';
import ColorContext from '../context/ColorContext.js';
import { LanguageStore } from '../context/LanguageContext.js';
import LanguageSelector from './LanguageSelector.js';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }

};

export default App;
