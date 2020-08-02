import React from 'react'


class HoverGame extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const otherImages = this.props.game.otherImgs.map((ele) => {
            return (
              <img
                key={Math.random() * this.props.game.otherImgs.length}
                src={ele}
              ></img>

            );
        });
        
        const otherGenres = this.props.game.genres.map((ele, idx) => {
            return (
                <div className="hoverGenres" key = {idx}>
                    {ele.name}
                </div>
            )
        });

        return(
            <>
            <div className="hoverContainer">
                <div className="hoverTitle">{this.props.game.title}</div>
                <div className="genreContainer">{otherGenres}</div>
                {otherImages.slice(0,3)}
            </div>
            </>
        )
    }
}

export default HoverGame;