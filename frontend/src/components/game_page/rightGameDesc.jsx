import React from 'react';
import GameStatsBox from './game_statsBox';


class RightGameDesc extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='rightWrapperforGame'>
                <GameStatsBox game={this.props.game}/>
            </div>
        )
    }
}
export default RightGameDesc