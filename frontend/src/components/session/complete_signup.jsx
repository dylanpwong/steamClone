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
    }

    submitHandler(){
        
    }

    render(){
        return(
            <>
            <form className='signUpContainer'>
                <div className = "signUpHeading">Create an Account</div>

                <label className = "signUpText" htmlFor="username"> STEAM ACCOUNT NAME</label>
                <input className = "signUpInput" id="username" type="text"/>

                <div className = "borderContainer"></div>

                <label className = "signUpText" htmlFor="password"> CHOOSE PASSWORD</label>
                <input className = "signUpInput" id="password" type="text"/>

                <label className = "signUpText" htmlFor="password2">RE-ENTER PASSWORD</label>
                <input className = "signUpInput" id='password2' type="text"/>

                <div className = "borderContainer"></div>

                <input className = "signUpComplete" type="submit" value='COMPLETE SIGN UP'/>

            </form>
            </>
        )
    }
}


export default CompleteSignUp;