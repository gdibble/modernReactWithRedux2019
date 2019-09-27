import React from 'react';
import ColorContext from '../context/ColorContext.js';
import LanguageContext from '../context/LanguageContext.js';

class Button extends React.Component {

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language) }
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }

}

export default Button;
