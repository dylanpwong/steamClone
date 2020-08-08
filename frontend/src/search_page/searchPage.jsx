import React from 'react';
import SearchComponent from './searchComponent';
import './search.css'
import SearchNav from './searchNav';

class SearchPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            results: [],
            topic: this.props.search
        }
    }
    sorter(a,b,type){
        switch(true){
            case "Popular":
            case "TopRated":
            case "TopSelling":
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
                this.setState({results: res.games});
            })
        
    }
    componentDidUpdate(){
        if(this.props.search != this.state.topic){
             this.props.searchGame(this.props.search).then(res=>{
                this.setState({results: res.games,topic: this.props.search});
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