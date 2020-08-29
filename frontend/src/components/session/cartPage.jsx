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
        const cartGames = this.state.cart.map((ele) => {
            return (
                <>
                <div className="cartGame">
                    <img className="cartImage" src={ele.imgUrl}></img>
                    <div className="cartTitle">{ele.title}</div>
                    <div className="cartPrice">{ele.price}</div>
                </div>
                </>
            )
        })

        return (
            <>
            <div className="cartContainer">
                <div className="cartHeader">Your Shopping Cart</div>
                <div className="cartList">{cartGames}</div>
                <div className="cartFooter">
                    <div className ="totalContainer">
                        <div>Estimated total</div>
                    </div>
                    <div>Is this a purchase for yourself or is it a gift? Select one to continue to checkout.</div>
                    <div className="checkoutContainer">
                        <div className="checkoutButton">Purchase for myself</div>
                        <div className="checkoutButton">Purchase as a gift</div>
                    </div>
                </div>
                
                <div className="continueButton">Continue Shopping</div>
            </div>
            </>
        )
        
    } 
}

export default cartPage;