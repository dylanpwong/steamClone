import React from "react";
import "./splash.css";

class GameBox extends React.Component {
    render () {
        return (    
            <>        
            <div className = "game">
                    <img src="https://dpwong-steamclone-dev.s3.amazonaws.com/HelltakerImg.jpg" />
                {/* <img src="https://i.ytimg.com/vi/CLCy87zqMSQ/maxresdefault.jpg" ></img> */}
            </div>
            </>
        )
    }
}

export default GameBox;