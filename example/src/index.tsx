import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ModalDataContextProvider } from 'react-hook-modal';

ReactDOM.render(
  <ModalDataContextProvider>
    <App />
  </ModalDataContextProvider>,
  document.getElementById('root')
);
