import React from 'react'
import './miscPage.css'

class cartPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cart: null
        }
    }

    componentDidMount(){
        if (this.props.currentUser != null) {

            this.props.getCart(this.props.currentUser.id).then(res=>{
                // debugger
                this.setState({cart: res.user.cart});
            })
        }
    }

    render() {
        if (!this.state.cart) return <> </>
        // debugger;

        return (
            <>
            <div className="cartContainer">
                <div className="cartHeader">Your Shopping Cart</div>
                <div className="cartList">temp</div>
            </div>

            </>
        )
        
    } 
}

export default cartPage;