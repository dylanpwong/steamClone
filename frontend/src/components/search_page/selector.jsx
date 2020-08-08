import React from 'react'
import { withRouter } from "react-router-dom";
class Selector extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Release: "Release",
            Popular: "Popularity",
            TopSellers:"Top Selling",
            TopRated: "Top Rated",
            value: "Release",
            show: null,
        }
        this.reveal=this.reveal.bind(this);
        this.handleOutsideClick=this.handleOutsideClick.bind(this);
        this.toNewList=this.toNewList.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown",this.handleOutsideClick);
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown",this.handleOutsideClick);
    }
    handleOutsideClick(e){

    }
    reveal(e){
        // debugger;
        this.setState({show: !this.state.show});
    }
    handleClick(type){
        switch(type){
            case "Release":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
            case "Popular":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
            case "TopSelling":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
            case "TopRated":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
        }
    }
    toNewList(e){
        // this.props.history.push(`/search/${this.props.topic}/order/${type}`);
    }

    render(){
        return (
          <>
            <div onClick={this.reveal}>
              {this.state.value} &#8595;
              <div className={this.state.show? "catDropDown show":'catDropDown'} >
                <div onClick={this.handleClick("Release")} >{this.state.Release}</div>
                <div onClick={this.handleClick("Popular")}>{this.state.Popular}</div>
                <div onClick={this.handleClick("TopSelling")}>{this.state.TopSellers}</div>
                <div onClick={this.handleClick("TopRated")}>{this.state.TopRated}</div>
              </div>
            </div>
          </>
        );
    }
}

export default withRouter(Selector)