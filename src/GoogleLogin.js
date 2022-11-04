import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const App = ({ onSuccess, onError }) => {

  return (
    <GoogleOAuthProvider
      clientId="810136024283-pi5dm1ahvp4a0m3q10q3aukf3eiv4krg.apps.googleusercontent.com"
    >
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
      />
    </GoogleOAuthProvider>
  );
};
export default App;
