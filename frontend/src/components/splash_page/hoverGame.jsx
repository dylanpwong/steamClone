import React from 'react'


class HoverGame extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const otherImages = this.props.game.otherImgs.map((ele) => {
            return (
                <img src={ele}></img>
            )
        });

        return(
            <>
            <div className="hoverContainer">
                <div className="hoverTitle">{this.props.game.title}</div>
                {otherImages}
            </div>
            </>
        )
    }
}

export default HoverGame;