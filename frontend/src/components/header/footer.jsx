import React from 'react';

class Footer extends React.Component {
    constructor (props) {
        super (props);

        this.onAboutUsClick=this.onAboutUsClick.bind(this);
        this.onAboutSteamClick=this.onAboutSteamClick.bind(this);
    }

    onAboutUsClick() {
        this.props.history.push('/aboutUs')
    }

    onAboutSteamClick() {
        this.props.history.push('/aboutSteam')
    }

    render () {
        return (
            <>
            <div className="footSpace">
            <div className="footContainer">
                <div className="footNav">
                    <div onClick={this.onAboutSteamClick.bind(this)} className="navButton">About Steam</div>
                    <div onClick={this.onAboutUsClick.bind(this)} className="navButton">About Us</div>
                    <div className="navButton">Help</div>
                    <div className="navButton">New Feeds</div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default Footer;