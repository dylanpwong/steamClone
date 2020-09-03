import React from 'react';

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(!this.props.user){
            const data= {
                userId: this.props.userId
            }
            this.props.fetchUser(data).then(res=>{
                
            })
        }
    }


    render(){
        return(
            <>
            <div>

            </div>
            </>
        )
    }
}
export default ProfilePage;