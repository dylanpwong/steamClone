import React from 'react';
// import './splash.css';

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <>
            <div className='header'>
                <img className='Steamlogo' src="https://royal-crossing-dev.s3.amazonaws.com/SteamLogo.png"/>
                <div className='headerTopics'>
                    <div>STORE</div>
                    <div>COMMUNITY</div>
                    <div>ABOUT</div>
                    <div>SUPPORT</div>
                </div>
            </div>
            </>
        )
    }
}

export default Header; 