import React from 'react';

class GoogleAuth extends React.Component {

  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '459147754039-ai2vbl6ekblbd8ee2icdb04e93a0b6tj.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null)
      return <div>I don't know if I am signed in.</div>;

    if (this.state.isSignedIn)
      return <div>I am signed in!</div>;

    return <div>I am not signed in :(</div>;
  }

  render() {
    return (
      <div className="">
        {this.renderAuthButton()}
      </div>
    );
  }

}

export default GoogleAuth;
