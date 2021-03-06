import React from 'react'
import './miscPage.css'
import { removeFromCart } from '../../actions/game_actions';

class cartPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        cart: null,
        cartErrors: null
      };
      
      this.onReturn = this.onReturn.bind(this);
      this.removeGame = this.removeGame.bind(this);
  }

  componentDidMount() {
    // debugger
    if (this.props.currentUser != null) {
      const data={
        userId: this.props.currentUser._id
      }
      this.props.getCart(data).then((res) => {
        // debugger;
        this.setState({ cart: res.user.cart });
      });
    }
    
  }
  stringToFloat(num) {
    return parseFloat(num.substring(1));
  }

  onReturn() {
    this.props.history.push("/");
  }
  buyGames(price){

    return(e)=>{
      const data={
          price: price,
          userId: this.props.currentUser._id,
          gameIds: this.state.cart.map(ele=>ele._id),
      }
      if(data.gameIds.length !==0){
        this.props.buyGames(data).then(res=>{
          this.props.history.push('/');
        })
      }else{
        this.setState({cartErrors: 'Cart Is Empty'})
      }
    }
  }

  removeGame(data) {
    return (e) => {
      const newData = {
        userId: this.props.currentUser._id, 
        gameId: data._id,
      }

      this.props.removeFromCart(newData)
      .then(res => {
        const newDataPop={
          userId: res.user._id//changed from id
        }
        this.props.getCart(newDataPop).then(res=>{
          
          this.setState({cart: res.user.cart});
        })
      })
    }
  }

  render() {
    // debugger
    if (!this.state.cart) return <> </>;
    let totalPrice=0;
    const cartGames = this.state.cart.map((ele) => {
        totalPrice += this.stringToFloat(ele.price);
      return (
        
          <div key={ele._id}className="cartGame">
            <img className="cartImage" src={ele.imgUrl}></img>
            <div className="cartInfo">
                <div className="cartDescContainer">
                    <div className="cartTitle">{ele.title}</div>
                    <div className="cartPrice">{ele.price}</div>
                </div>
                <div className="removeText" onClick={this.removeGame(ele).bind(this)}>Remove</div>
            </div>
          </div>
        
      );
    });

    return (
      <>
        <div className="cartContainer">
          <div className="cartHeader">Your Shopping Cart</div>
          <div className="cartEmpty">{this.state.cartErrors}</div>
          <div className="cartList">{cartGames}</div>
          <div className="cartFooter">
            <div className="totalContainer">
              <div>Estimated total</div>
              <div className="totalPrice">${totalPrice}.00</div>
            </div>
            <div>
              Is this a purchase for yourself or is it a gift? Select one to
              continue to checkout.
            </div>
            <div className="checkoutContainer">
              <div onClick={this.buyGames(totalPrice)}className="checkoutButton">Purchase for myself</div>
              <div className="checkoutButton">Purchase as a gift</div>
            </div>
          </div>

          <div className="continueButton" onClick={this.onReturn.bind(this)}>Continue Shopping</div>
        </div>
      </>
    );
  }
}

export default cartPage;