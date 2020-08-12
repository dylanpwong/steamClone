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
                <div className="footInfoContainer">
                    <div className="creatorInfo">
                        <div>Dylan Wong</div> 
                        <div className="border">|</div>
                        <a className = "linkStuff" href = "https://github.com/dylanpwong">
                            <img src="https://www.iconsdb.com/icons/preview/white/github-10-xxl.png"></img>
                            &nbsp;
                            <div>Github</div>
                        </a>

                        <div className="border">|</div>

                        <a className = "linkStuff" href = "https://www.linkedin.com/in/dylan-wong-857139127/">
                            <img src="https://image.flaticon.com/icons/svg/174/174857.svg"></img>
                            &nbsp;
                            <div>LinkedIn</div>
                        </a>
                    </div>

                    <div className="creatorInfo">
                        <div>Edward Kim </div>
                        <div className="border">|</div>
                        <a className = "linkStuff" href = "https://github.com/eykim5">
                            <img src="https://www.iconsdb.com/icons/preview/white/github-10-xxl.png"></img>
                            &nbsp;
                            <div>Github</div>
                        </a>

                        <div className="border">|</div>

                        <a className = "linkStuff" href = "https://www.linkedin.com/in/edward-kim-51469012a/">
                            <img src="https://image.flaticon.com/icons/svg/174/174857.svg"></img>
                            &nbsp;
                            <div>LinkedIn</div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default Footer;