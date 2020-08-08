import React from 'react';
import SearchComponent from './searchComponent';
import './search.css'
import SearchNav from './searchNav';

class SearchPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            results: [],
            topic: this.props.search,
            category: this.props.category
        }
    }
    sorter(a,b,type){
        switch(type){
            case "Popular":
                if(a.clicks>b.clicks){
                    return -1;
                }else{
                    return 1;
                }
            case "TopRated":
                if(a.reviewScore>b.reviewScore){
                    return -1
                }else{
                    return 1;
                }
            case "TopSelling":
                if(a.sales>b.sales){
                    return -1;
                }else{
                    return 1;
                }
            default:
                if(a._id<b._id){
                    return 1
                }else{
                    return -1
                }
        }
    }

    componentDidMount(){
        
            this.props.searchGame(this.props.search).then(res=>{
                let newList=res.games;
                newList = res.games.sort((a,b)=>this.sorter(a,b,this.props.category))
                // debugger;
                this.setState({results: newList,category: this.props.category});
            })
        
    }
    componentDidUpdate(){
        if((this.props.category!=this.state.category)||this.props.search != this.state.topic){
             this.props.searchGame(this.props.search).then(res=>{
                let newList=res.games;
                newList = res.games.sort((a,b)=>this.sorter(a,b,this.props.category))
                this.setState({results: newList,topic: this.props.search,category: this.props.category});
             })
        }
    }

    render(){
        if(this.state.results.length === 0) return (<></>);

        
        return (
          <>
            <div className="searchWrapper">
              {/* <div>dont worry about this for now</div> */}
                <SearchNav topic={this.state.topic}/>
              <SearchComponent games = {this.state.results}/>
            </div>
          </>
        );
    }
}
export default SearchPage;