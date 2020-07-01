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
                <div className='images'>
                <img src = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/447530/836913de4fdeec8f401687c5930fee4a91bf5197.jpg" ></img>
                <img src = "https://cache.desktopnexus.com/wallpapers/2383/2383276-1920x1080-GAME-a064.jpg?st=-PdZ1vSFIEnn_afM99l0CQ&e=1593631500" ></img>
                </div>
            </div>
            </>
        )
    }
}

export default Deals; 