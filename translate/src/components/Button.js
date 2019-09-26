import React from 'react';
import LanguageContext from '../context/LanguageContext.js';

class Button extends React.Component {

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => value === 'english' ? 'Submit' : 'Voorleggen' }
        </LanguageContext.Consumer>
      </button>
    );
  }

}

export default Button;
