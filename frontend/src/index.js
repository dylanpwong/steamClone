import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import configureStore from './store/store.js';
import Root from './Root';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    
    <Root store={configureStore()} />
  </React.StrictMode>,
  document.getElementById('root')
);
window.axios = axios;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();