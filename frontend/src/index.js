import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import axios from 'axios';
import configureStore from './store/store.js';
import Root from './Root';
import { setAuthToken } from './util/session_api_util';
// import * as serviceWorker from './serviceWorker';
import jwt_decode from 'jwt-decode';
import {logout} from './actions/session_actions'
let store;
 
if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);

  const preloadedState = {
    session: {
      isAuthenticaed: true,
      user: decoded
    }
  }
  store = configureStore(preloadedState);
  // debugger;
  const currentTime = Date.now() / 1000; //seconds

  if(decoded.exp < currentTime){
    // console.log('logout');
    store.dispatch(logout);
  }
}else{
  store = configureStore({});
}
ReactDOM.render(
  <React.StrictMode>
    
    <Root store={store} />

    
  </React.StrictMode>,
  document.getElementById('root')
);

// document.addEventListener('DOMContentLOaded', ()=>{
//   let store = configureStore();

//   // if(localStorage.jwtToken){

//   // }else{

//   // }
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store}/>,root);
// })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
