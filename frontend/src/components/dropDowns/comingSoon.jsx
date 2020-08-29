import React from 'react';
import './dropDowns.css'

class ComingSoonDD extends React.Component{
    constructor(props){
        super(props)

        this.dropDownHandeler=this.dropDownHandeler.bind(this);
    }

    myReturn(){
        // debugger
        return(
            <div className="comingSoonDD">
                Coming Soon
            </div>
        )
    }

    dropDownHandeler(type){
        // debugger;
        switch(type){
            case "STORE":
                return this.props.type == "STORE"? this.myReturn(): null;
            case "COMMUNITY":
                return this.props.type == "COMMUNITY" ? this.myReturn() : null;
            case "ABOUT":
                return this.props.type == "ABOUT" ? this.myReturn() : null;
            case "SUPPORT":
                return this.props.type == "SUPPORT" ? this.myReturn() : null;
            default:
                return <></>
        }
    }


    render(){
        
        return(
            <>
         {this.dropDownHandeler(this.props.setting)}
         </>
        )
    }
}

export default ComingSoonDD;