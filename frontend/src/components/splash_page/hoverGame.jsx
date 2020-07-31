import React from 'react'


class HoverGame extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <div>{this.props.game.title}</div>
            
            </>
        )
    }
}

export default HoverGame;