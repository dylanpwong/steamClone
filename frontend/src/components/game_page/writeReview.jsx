import React from 'react';

class WriteReview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.user) return <> </>
        return(
            <>
                <div>
                    <div>
                        Write a Review for {this.props.game.title}
                    </div>
                    <div>
                        Please describe what you liked or disliked about this game and whether you recommend it to others.
                        Please remember to be polite and follow the Rules and Guidelines.
                    </div>
                </div>

                <div>
                        <div>

                        </div>

                        <form >
                            <input type="text" name="" id=""/>
                            <input type="submit" value='Post Review'/>
                        </form>
                </div>

            </>
        )
    }
}
export default WriteReview;