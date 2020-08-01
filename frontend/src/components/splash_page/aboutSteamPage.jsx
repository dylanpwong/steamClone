import React from 'react'
import './about.css'

class AboutSteamPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className="aboutSteamContainer">
                <div className="aboutSteamHeader">About Steam</div>
                <div className="aboutSteamContent">Steam is...</div>
            </div>
            </>
        )
    }
}
export default AboutSteamPage;
