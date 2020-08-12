import React from 'react'
import './login.css'


class CompleteSignUp extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: '',
            password2: '',
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

    handleError() {

        let currError = this.state.error + "";
    
        let errorMess1 = "";
        let errorMess2 = "";
        let errorMess3 = "";
        let errorMess4 = "";
    
        if (currError.includes("badUser")) {
            errorMess1 = "Please enter an account name that is at least 3 characters long.";
        }
        else {
            errorMess1 = "";
        }
    
        if (currError.includes("badPass")) {
            errorMess2 = "The password you entered is not allowed. Please select a different password, with at least 8 characters.";
        }
        else {
            errorMess2 = "";
        }
    
        if (currError.includes("noConfirm")) {
            errorMess3 = "Please fill in the Re-enter password field.";
        }
        else {
            errorMess3 = "";
        }

        if (currError.includes("noMatch")) {
            errorMess4 = "Please enter the same password in both password fields.";
        }
        else {
            errorMess4 = "";
        }
    
        return (
            <>
            <div>{errorMess1}</div>
            <div>{errorMess2}</div>
            <div>{errorMess3}</div>
            <div>{errorMess4}</div>
            </>
        )
    }
    
    handleSubmit (e) {
        e.preventDefault();
        let currError = "";

        if (this.state.username.length < 3) {
            let newError = currError + "badUser ";
            currError = newError;
            console.log(this.state.username.length);
        }
        
        if (this.state.password.length < 8) {
            let newError = currError + "badPass ";
            currError = newError;
        }

        if (!this.state.password2) {
            let newError = currError + "noConfirm ";
            currError = newError;
        }
    
        if (this.state.password != this.state.password2) {
            if (!currError.includes("badPass") && !currError.includes("noConfirm")) {
                let newError = currError + "noMatch ";
                currError = newError;
            }
        }
    
        this.setState({error: currError});
    
        if (currError != "") {
            return;
        }
        else {
            this.props.history.push('/');
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

                <label className = "signUpText" htmlFor="username"> STEAM ACCOUNT NAME</label>
                <input className = "signUpInput" id="username" type="text" onChange={this.handleChange("username")}/>

                <div className = "borderContainer"></div>

                <label className = "signUpText" htmlFor="password"> CHOOSE PASSWORD</label>
                <input className = "signUpInput signUpPass" id="password" type="text" onChange={this.handleChange("password")}/>

                <label className = "signUpText" htmlFor="password2">RE-ENTER PASSWORD</label>
                <input className = "signUpInput signUpPass" id='password2' type="text" onChange={this.handleChange("password2")}/>

                <div className = "borderContainer"></div>

                <input className = "signUpComplete" type="submit" value='COMPLETE SIGN UP'/>

            </form>
            </>
        )
    }
}


export default CompleteSignUp;