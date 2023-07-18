import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Amplify} from 'aws-amplify';
import awsConfig from './aws-exports.js'

Amplify.configure(awsConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


