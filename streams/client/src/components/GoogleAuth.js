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
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null)
      return null;

    if (this.state.isSignedIn)
      return (
        <button
          className="ui red google button"
          onClick={this.onSignOut}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );

    return (
      <button
        className="ui red google button"
        onClick={this.onSignIn}
      >
        <i className="google icon" />
        Sign In with Google
      </button>
    );
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
