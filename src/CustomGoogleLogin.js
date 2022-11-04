import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from 'antd';

import { AppContext } from './appContext';

const LoginButton = ({ setUser, setCurrentPage }) => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      // const decoded = jwt_decode(tokenResponse.access_token);
      // console.log('decoded', decoded);
      const accces_token = tokenResponse.access_token;
      const url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accces_token}`
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setUser(result);
            setCurrentPage('game');
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
          }
        )
    },
    onError: (err) => {
      console.log('Login Failed', err);
    }
  });

  return (
    <Button size="large" shape="round" type="primary" onClick={() => login()}>
      Đăng nhập với Google
    </Button>
  );
}

const App = () => {
  return (
    <AppContext.Consumer>
      {({setCurrentPage, setUser}) => (
        <GoogleOAuthProvider
          clientId="810136024283-pi5dm1ahvp4a0m3q10q3aukf3eiv4krg.apps.googleusercontent.com"
        >
          <LoginButton setUser={setUser} setCurrentPage={setCurrentPage} />
        </GoogleOAuthProvider>
      )}
    </AppContext.Consumer>
  );
}

export default App;
