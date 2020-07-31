import React from 'react';

class Footer extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <>
            <div className="footSpace">
            <div className="footContainer">
                <div className="footNav">
                    <div className="navButton">About Steam</div>
                    <div className="navButton">About Us</div>
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