import React from 'react';
import './splash.css';

class Deals extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <>
            <div className='deals'>
                <div>Featured Deals</div>
                <img src = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/447530/836913de4fdeec8f401687c5930fee4a91bf5197.jpg" style={{width: '48px', height: '48px'}}></img>
            </div>
            </>
        )
    }
}

export default Deals; 