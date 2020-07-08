import React from 'react';
import './gPage.css';
import gamePage_container from './gamePage_container';

class GamePage extends React.Component {
    constructor(props) {
        super (props);
    }

    // Runs after render runs first, fetches game then rerenders.
    componentDidMount () {
        this.props.Helltaker();
    }

    render () {
        return (
            <>
            <div className="gameProfile">
                {/* {this.props.gameHelltaker.data.title} */}
            </div>
            </>
        )
    }
}

export default GamePage;