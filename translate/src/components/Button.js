import React from 'react';
import LanguageContext from '../context/LanguageContext.js';

class Button extends React.Component {

  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <button className="ui button primary">Submit</button>
    );
  }

}

export default Button;
