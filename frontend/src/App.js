import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import SplashPage from './components/splash_page/splashPage';
// import { Router } from 'express';

function App() {
  return (
    <div className='mainContentWrapper' >
      <Route path='/' component={SplashPage}/>
    </div>
  );
}

export default App;
