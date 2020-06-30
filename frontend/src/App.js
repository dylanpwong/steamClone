import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
// import SplashPage from './components/splash_page/splashPage';
import login_form_container from './components/session/login_form_container';
import signup_form_container from './components/session/signup_form_container';
// import splash_page_container from './components/splash_page/splashPage_container';
import splashPage_container from './components/splash_page/splashPage_container';

function App() {
  return (
    <div className='mainContentWrapper' >
      <Route exact path='/' component={splashPage_container}/>
      <Route exact path='/login' component={login_form_container}/>
      <Route exact path='/join' component={signup_form_container}/>
      {/* <Route path='/' component={footer.jsx}/> */}
    </div>
  );
}

export default App;
