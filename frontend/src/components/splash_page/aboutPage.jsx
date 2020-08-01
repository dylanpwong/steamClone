import React from 'react'
import './about.css'

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className="aboutUsContainer">
                <div className="aboutUsHeader">About Us</div>
                <div className="aboutUsContent">Two idiots</div>
            </div>
            </>
        )
    }
}
export default AboutPage;
