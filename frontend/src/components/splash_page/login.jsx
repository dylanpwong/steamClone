import React from 'react';
import './splash.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className='login' onClick={this.props.onLogin}> 
                <div>login</div>
                &nbsp; &nbsp;
                <div>language</div> 
            </div>
            </>
        )
    }
}
export default Login;