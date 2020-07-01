import React from 'react'



class SignupForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: null,
            email: null,
            email2: null,
            password: null,
            password2: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

handleSubmit (e) {
    e.preventDefault();
    this.props.signup(this.state)
}

handleChange(type){
    return (e) => {
        this.setState({[type]: e.target.value})
    }
}

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type='text' id = 'username' onChange={this.handleChange("username")}/>

                <label htmlFor="email">Email</label>
                <input type='text' id ='email' onChange={this.handleChange("email")}/> 
                
                <label htmlFor='confirmEmail'>Confirm Email</label>
                <input type='text' id = 'confirmEmail' onChange={this.handleChange("email2")}/>

                <label htmlFor="password">Password</label>
                <input type='password' id ='password' onChange={this.handleChange("password")}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type='password' id = 'confirmPassword' onChange={this.handleChange("password2")}/>

                <input type="submit" value='Continue'/>

            </form>
        )
    }
}

export default SignupForm