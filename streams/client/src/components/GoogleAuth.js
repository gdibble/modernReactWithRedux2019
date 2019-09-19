import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '459147754039-ai2vbl6ekblbd8ee2icdb04e93a0b6tj.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div className="">
        Google Auth
      </div>
    );
  }

}

export default GoogleAuth;
