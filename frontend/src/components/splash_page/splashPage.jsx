import React from 'react';
import './splash.css';
import Header from './header.jsx';
import Login from "./login.jsx";
import Deals from "./deals.jsx";

class SplashPage extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <>
            <div className='test'>
                <Login/>
                <Header/>
                <Deals/>
                <div>Edward is dumb.</div>
                <div>CANCER</div>
            </div>
            </>

        )
    }
}

export default SplashPage;