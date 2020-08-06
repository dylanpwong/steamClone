import React from 'react';
import DateGetter from '../functions/date';


class GameStatsBox extends React.Component{
    constructor(props){
        super(props)
        this.toWeb=this.toWeb.bind(this);
    }

    propertyCreator(property,value){
        if(property=='RELEASE DATE'){
            return (
              <div className="propertyWrapper">
                  <div className='propertyTitle'>
                      {property}: &nbsp;
                  </div>
                  <div className='titleforRightBox'>
                         <DateGetter date={value} />
                  </div>
              </div>
            );
        }
        return(
            <div className='propertyWrapper'>
                <div className='propertyTitle'>
                {property}: &nbsp;
                </div>
                <div className={property=='TITLE'? 'titleforRightBox':'blueForRight'}>
                {value}
                </div>
            </div>
        )
    }
    toWeb(){
        window.open(this.props.game.website,"_blank");
    }
    render(){
        return(
            <div className='statsBoxWrapper'>
                <div className="statsBoxForGame">
                    {this.propertyCreator('TITLE',this.props.game.title)}
                    {this.propertyCreator('GENRE',this.props.game.genres[0].name)}
                    {this.propertyCreator('DEVELOPER',this.props.game.developer)}
                    {this.propertyCreator('RELEASE DATE',this.props.game.releaseDate)}
                </div>

                <div onClick={this.toWeb}className='visitWeb'>
                    Visit the Website
                </div>
            </div>
        )
    }
}
export default GameStatsBox