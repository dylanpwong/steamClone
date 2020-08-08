import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
// import SplashPage from './components/splash_page/splashPage';
import login_form_container from './components/session/login_form_container';
import signup_form_container from './components/session/signup_form_container';
// import splash_page_container from './components/splash_page/splashPage_container';
import splashPage_container from './components/splash_page/splashPage_container';
import CompleteSignUp from './components/session/complete_signup';
import CompleteSignUp_Container from './components/session/complete_signup_container';
import gamePage_container from './components/game_page/gamePage_container';
import header_container from './components/header/header_container';
import NavBar from './components/header/navBar';
import Footer from './components/header/footer';
import about_container from './components/splash_page/about_container';
import about_steam_container from './components/splash_page/about_steam_container';
import navBar_container from './components/header/navBar_container';
import searchPage_container from './search_page/searchPage_containter';

function App() {
  return (
    <div className='mainContentWrapper' >
      <Route path='/' component={header_container}/>
      <div className='contentContainer'>
      <Route path='/' component={navBar_container}/>
      <Route path='/search/:searchField' component={searchPage_container}/>
      <Route exact path='/' component={splashPage_container}/>
      <Route exact path='/game/:gameId' component={gamePage_container}/>
      <Route exact path='/login' component={login_form_container}/>
      <Route exact path='/join' component={signup_form_container}/>
      <Route exact path='/join/completesignup' component={CompleteSignUp_Container}/>
      <Route exact path='/aboutUs' component={about_container}/>
      <Route exact path='/aboutSteam' component={about_steam_container}/>
      </div>
      
      <Route path='/' component={Footer}/>
    </div>
  );
}

export default App;
