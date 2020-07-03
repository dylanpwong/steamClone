import React from 'react'



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
            <form >
                <label htmlFor="username"> STEAM ACCOUNT NAME</label>
                <input id="username" type="text"/>

                <label htmlFor="password"> CHOOSE PASSWORD</label>
                <input id="password" type="text"/>

                <label htmlFor="password2">RE-ENTER PASSWORD</label>
                <input id='password2' type="text"/>

                <input type="submit" value='COMPLETE SIGN UP'/>

            </form>
            </>
        )
    }
}


export default CompleteSignUp;