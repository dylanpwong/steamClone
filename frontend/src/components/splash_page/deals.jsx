import React from 'react';
import './splash.css';

class Deals extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <>
            <div className='gutterCol'>
                <a>
                <img src="https://steamstore-a.akamaihd.net/public/images/gift/steamcards_cards_02.png"></img>
                </a>
                <div className='gutterHeader'>GIFT CARDS</div>
                    <div className='gutterContent'>Now Avaliable on Steam</div>
                <div className='gutterHeader'>RECOMMENDED</div>
                    <div className='gutterContent'>By Friends</div>
                    <div className='gutterContent'>By Curators</div>
                    <div className='gutterContent'>Tags</div>
                <div className='gutterHeader'>BROWSE CATAGORIES</div>
                <div className='gutterHeader'>BROWSE BY GENRE</div>
            </div>
            <div className='deals'>
                <div>FEATURED & RECOMMENDED</div>
                <div className='images'>
                <img src = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/447530/836913de4fdeec8f401687c5930fee4a91bf5197.jpg" ></img>
                <img src = "https://cache.desktopnexus.com/wallpapers/2383/2383276-1920x1080-GAME-a064.jpg?st=-PdZ1vSFIEnn_afM99l0CQ&e=1593631500" ></img>
                <img src = "https://cdn.mos.cms.futurecdn.net/qjbj6o8ZSjx8sDRwQ5TYLm.jpg"></img>
                </div>
            </div>
            </>
        )
    }
}

export default Deals; 