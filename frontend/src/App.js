import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import SplashPage from './components/splash_page/splashPage';
import login_form_container from './components/session/login_form_container';
import signup_form_container from './components/session/signup_form_container';
// import { Router } from 'express';

function App() {
  return (
    <div >
      <Route exact path='/' component={SplashPage}/>
      <Route exact path='/login' component={login_form_container}/>
      <Route exact path='/join' component={signup_form_container}/>
    </div>
  );
}

export default App;
