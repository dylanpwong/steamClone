import React from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'

class SignupForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // username: null,
            email: null,
            email2: null,
            error: null,
            // password: null,
            // password2: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
    }

handleError() {

    let currError = this.state.error + "";

    if (currError.includes("noInput")) {
        return (
            <div>Please enter a valid email address.</div>
        )
    }
}

handleSubmit (e) {
    e.preventDefault();
    var currentError = this.state.error;

    if (this.state.email == null) {
        this.setState({error: "noInput"});
    }
    else {
        this.props.checkEmail(this.state).then((res)=>{

            this.props.history.push('/join/completesignup');
        })
    }

}

handleChange(type){
    return (e) => {
        this.setState({[type]: e.target.value})
    }
}

    render(){
        return(
            <>
            <div className={this.state.error != null ? "errorContainer--active" : ""}>
                <div className = "errorText">
                    {this.handleError()}
                </div>
            </div>
            <form className='signUpContainer' onSubmit = {this.handleSubmit}>

                <div className = "signUpHeading">Create an Account</div>

                <label className = "signUpText" htmlFor="email">Email Address</label>
                <input className = "signUpInput" type='text' id ='email' onChange={this.handleChange("email")}/> 
                <div className = "signUpDesc">Your email address is used to confirm purchases and help you manage access to your Steam account.</div>
                
                <label className = "signUpText" htmlFor='confirmEmail'>Confirm Email Address</label>
                <input className = "signUpInput" type='text' id = 'confirmEmail' onChange={this.handleChange("email2")}/>
                <div className = "signUpDesc">Steam will send a confirmation email to this account. Please follow the link in the mail to verify your email account with Steam.</div>

                <input className = "signUpContinue" type="submit" value='Continue'/>

            </form>
            </>
        )
    }
}
// withRouter
export default withRouter(SignupForm);