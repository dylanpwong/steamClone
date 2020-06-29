import React from 'react'


class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: '',
        }

        this.handleOnChange=this.handleOnChange.bind(this);
    }

    handleOnChange(type){
        return (e) =>{
            this.setState({[type]: e.target.value})
        }
    }
    submitHandler(e){
        e.preventDefault();
        this.props.login(this.state);
    }



    render(){
        return(
            <>
            <form onSubmit={this.submitHandler.bind(this)}>

                <label htmlFor="email">Email Address:</label>
                <input type='text'id='email' onChange={(this.handleOnChange('email'))} value={this.state.email}/>

                <label htmlFor="password">Password:</label>
                <input type='password'id='password' onChange={(this.handleOnChange('password'))} value={this.state.password}/>

                <input type="submit" value='login'/>

            </form>
            </>
        )
    }
}

export default LoginForm
