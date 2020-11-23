import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = (props) => {
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '344073432618-rhvdr57o2e9u94a4fsvs2iv6or7f6rp1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        setAuthClient(window.gapi.auth2.getAuthInstance());
      });
    });
  }, []);

  useEffect(() => {
    if (authClient) {
      onAuthChange(authClient.isSignedIn.get());
      authClient.isSignedIn.listen(onAuthChange);
    }
  }, [authClient])

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userId = authClient.currentUser.get().getId();
      props.signIn(userId);
    } else {
      props.signOut();
    }
  };

  const handleSignInClick = () => {
    authClient.signIn();
  };

  const handleSignOutClick = () => {
    authClient.signOut();
  };

  const renderAuthButton = () => {
    if (props.signedIn) {
      return (
        <button
          className="ui red google button"
          onClick={handleSignOutClick}
        >
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          className="ui red google button"
          onClick={handleSignInClick}
        >
          <i className="google icon" />
          Sign In
        </button>
      )
    }
  };

  return (
    <div className="item">{renderAuthButton()}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
