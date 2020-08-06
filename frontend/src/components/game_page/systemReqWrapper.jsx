import React from 'react';
import SystemReq from './systemReq';

class SystemReqWrapper extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
          <>
            <div className="sysWrapper GamesContentsWrapper">
              <div className="aboutHeader">System Requirements</div>

              <SystemReq game={this.props.game} />
            </div>
          </>
        );
    }
}

export default SystemReqWrapper