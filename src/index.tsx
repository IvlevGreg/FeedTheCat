import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import cssVars from 'css-vars-ponyfill';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import './index.css';
import './css-variables/backgound.css';
import './css-variables/border.css';
import './css-variables/text-color.css';

cssVars({});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
