import React from 'react';
import './splash.css';

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <>
            <div className='header'>
                <div>Store</div>
                <div>Community</div>
                <div>About</div>
                <div>Support</div>
            </div>
            </>
        )
    }
}

export default Header; 