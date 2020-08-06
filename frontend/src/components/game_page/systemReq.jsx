import React from 'react';


class SystemReq extends React.Component{
    constructor(props){
        super(props);
        this.reqFormater=this.reqFormater.bind(this);
        this.formatContructor = this.formatContructor.bind(this);
        this.keyShuffler = this.keyShuffler.bind(this);
    }

    reqFormater(system){
        // debugger
        let toBeFormatted=[];
        for(const key in system){
            toBeFormatted.push(this.formatContructor(key, system[key]))
        }
        return toBeFormatted;
    }
    formatContructor(syskey,value){
        // debugger;
        return(
            <div className='sysEles' key={this.keyShuffler(syskey)}>
                <div className="sysKey">
                    {syskey}:&nbsp;
                </div>
                <div>
                    {value}
                </div>
            </div>
        )
    }
    keyShuffler(str){
        return str.split('').sort(function(){return 0.5-Math.random()}).join('');
    }

    render(){
        
        return (
          <div className='specHolder'>
            <div className="minimumSpecs">
                MIMIMUM:
              {this.reqFormater(this.props.game.minSystem)}
            </div>
            <div className="recSpecs">
                RECOMMENDED:
              {this.reqFormater(this.props.game.recSystem)}
            </div>
          </div>
        );
    }
}
export default SystemReq;