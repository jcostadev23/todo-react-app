import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify, Hub } from 'aws-amplify';
import awsConfig from './aws-exports.js'
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure({
  ...awsConfig
});

const listener = async (data) => {
  switch (data?.payload?.event) {
    case 'signOut':
      window.location.reload();
      break;
    case 'signIn':
      window.location.reload();
      break;
    default:
  }
};

Hub.listen('auth', listener);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>
);


