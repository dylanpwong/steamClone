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
                <div className="aboutUsContent">
                    <div>Hey there! Thanks for taking the time to view our work! If you'd like to contact us or see more of our projects, feel free to do so!</div>
                    <br></br>
                    <div>Dylan Wong: 
                        <a href = "https://github.com/dylanpwong">
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
                        </a>

                        <a href = "https://www.linkedin.com/in/dylan-wong-857139127/">
                            <img src="https://image.flaticon.com/icons/svg/174/174857.svg"></img>
                        </a>
                    </div>
                    <div>Edward Kim: 
                        <a href = "https://github.com/eykim5">
                            <img src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
                        </a>

                        <a href = "https://www.linkedin.com/in/edward-kim-51469012a/">
                            <img src="https://image.flaticon.com/icons/svg/174/174857.svg"></img>
                        </a>

                        <div>edwardkim93017@gmail.com</div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default AboutPage;
