import React from 'react';
import LanguageContext from '../context/LanguageContext.js';

class LanguageSelector extends React.Component {

  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange('dutch')}
        />
      </div>
    );
  }

}

export default LanguageSelector;
