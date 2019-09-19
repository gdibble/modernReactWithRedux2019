import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

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

  onAuthChange = isSignedIn => {
    if (isSignedIn) this.props.signIn();
    else this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null)
      return null;

    if (this.state.isSignedIn)
      return (
        <button
          className="ui red google button"
          onClick={this.onSignOutClick}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );

    return (
      <button
        className="ui red google button"
        onClick={this.onSignInClick}
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

export default connect(null, { signIn, signOut })(GoogleAuth);
