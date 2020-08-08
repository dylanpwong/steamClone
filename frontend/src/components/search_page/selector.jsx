import React from 'react'

class Selector extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Release: "Release",
            Popular: "Popularity",
            TopSellers:"Top Sellers",
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
        switch(true){
            case "R":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
            case "P":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
            case "S":
                return (e)=>{
                    this.props.history.push(`/search/${this.props.topic}/order/${type}`);
                }
            case "TR":
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
                <div >{this.state.Release}</div>
                <div>{this.state.Popular}</div>
                <div>{this.state.TopSellers}</div>
                <div>{this.state.TopRated}</div>
              </div>
            </div>
          </>
        );
    }
}

export default Selector