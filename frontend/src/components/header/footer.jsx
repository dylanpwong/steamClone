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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link>

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
                        <a className = "linkStuff" target="_blank"href = "https://github.com/dylanpwong">
                            <i className="devicon-github-plain"></i>
                            &nbsp;
                            <div>Github</div>
                        </a>

                        <div className="border">|</div>

                        <a className = "linkStuff"target="_blank" href = "https://www.linkedin.com/in/dylan-wong-857139127/">
                            <i className="devicon-linkedin-plain colored"></i>
                            &nbsp;
                            <div>LinkedIn</div>
                        </a>
                    </div>

                    <div className="creatorInfo">
                        <div>Edward Kim </div>
                        <div className="border">|</div>
                                <a className="linkStuff" target="_blank"href = "https://github.com/eykim5">
                                <i className="devicon-github-plain"></i>
                            &nbsp;
                            <div>Github</div>
                        </a>

                        <div className="border">|</div>

                        <a className = "linkStuff" target="_blank" href = "https://www.linkedin.com/in/edward-kim-51469012a/">
                            <i className="devicon-linkedin-plain colored"></i>
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