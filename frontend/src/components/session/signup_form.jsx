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

    let errorMess1 = "";
    let errorMess2 = "";
    let errorMess3 = "";

    if (currError.includes("noInput")) {
        errorMess1 = "Please enter a valid email address.";
    }
    else {
        errorMess1 = "";
    }

    if (currError.includes("noConfirm")) {
        errorMess2 = "Please fill in the Confirm email address field.";
    }
    else {
        errorMess2 = "";
    }

    if (currError.includes("noMatch")) {
        errorMess3 = "Please enter the same address in both email address fields.";
    }
    else {
        errorMess3 = "";
    }

    return (
        <>
        <div>{errorMess1}</div>
        <div>{errorMess2}</div>
        <div>{errorMess3}</div>
        </>
    )
}

handleSubmit (e) {
    e.preventDefault();
    let currError = "";

    if (!this.state.email) {
        let newError = currError + "noInput ";
        currError = newError;
        console.log("byeah");
    }
    
    if (!this.state.email2) {
        let newError = currError + "noConfirm ";
        currError = newError;
    }

    if (this.state.email != this.state.email2) {
        if (!currError.includes("noInput") && !currError.includes("noConfirm")) {
            let newError = currError + "noMatch ";
            currError = newError;
        }
    }

    this.setState({error: currError});

    if (currError != "") {
        return;
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