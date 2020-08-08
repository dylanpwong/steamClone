import React from 'react';
import SearchComponent from './searchComponent';
import './search.css'

class SearchPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            results: []
        }
    }

    componentDidMount(){
        this.props.searchGame(this.props.search).then(res=>{
            this.setState({results: res.games});
        })
    }

    render(){
        if(this.state.results.length === 0) return (<></>);

        
        return (
          <>
            <div className="searchWrapper">
              {/* <div>dont worry about this for now</div> */}

              <SearchComponent games = {this.state.results}/>
            </div>
          </>
        );
    }
}
export default SearchPage;