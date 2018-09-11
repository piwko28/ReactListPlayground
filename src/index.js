import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import App from './layout/app';
import i18n from './config/i18n';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  rootElement,
);
