import React from 'react'



class SignupForm extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <form >
                <label htmlFor="username">Username</label>
                <input type='text' id ='username'/>
            </form>
        )
    }
}

export default SignupForm