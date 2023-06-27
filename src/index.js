import React from 'react';
import './index.css';
import App from './App';
import './reset.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
