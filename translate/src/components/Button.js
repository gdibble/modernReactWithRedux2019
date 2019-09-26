import React from 'react';
import ColorContext from '../context/ColorContext.js';
import LanguageContext from '../context/LanguageContext.js';

class Button extends React.Component {

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => {
          return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {value => this.renderSubmit(value) }
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }

}

export default Button;
