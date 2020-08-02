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
                <div className="aboutSteamContent">This project was made using the MERN Stack, a Javascript stack that consists of the following:</div>
                <br></br>
                <div className="aboutSteamContent">MongoDB, a NoSQL non-relational database.</div>
                <br></br>
                <div className="aboutSteamContent">Express, a backend web application framework.</div>
                <br></br>
                <div className="aboutSteamContent">React, a Javascript library built for user interfaces.</div>
                <br></br>
                <div className="aboutSteamContent">Node.js, a cross-platform Javascript runtime environment.</div>
            </div>
            </>
        )
    }
}
export default AboutSteamPage;
