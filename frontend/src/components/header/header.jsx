import React from 'react';
import Login from './login.jsx';
import NavBar from './navBar.jsx';
import ComingSoonDD from '../dropDowns/comingSoon.jsx';

class Header extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            hover: null,
            cart: []
        }

        this.onSignUpClick=this.onSignUpClick.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
        this.onLogin=this.onLogin.bind(this);
        this.onFunds=this.onFunds.bind(this);
        this.onLogout=this.onLogout.bind(this);
        this.addStoreContent=this.addStoreContent.bind(this);
        this.onWishClick=this.onWishClick.bind(this);
        this.onCartClick=this.onCartClick.bind(this);
        this.hoverHandler=this.hoverHandler.bind(this);
        this.mouseLeaverHandle=this.mouseLeaverHandle.bind(this);
    }

    componentDidMount() {
        
        if(!!this.props.currentUser){
            const data={
                userId: this.props.currentUser._id
            }
            this.props.getCart(data).then(res => {//add logout if user is logged in but no user is found
                // debugger;//
                if(!res.user){
                    this.setState({cart: []})
                }else{
                    this.setState({cart: res.user.cart});  
                }
            })
        }
    }
    componentDidUpdate(){//updates cart number
        if(this.props.currentUser){
            if(this.state.cart.length !==this.props.currentUser.cart.length){
                    this.setState({cart: this.props.currentUser.cart})
            }
        }
    }
    // componentDidUpdate(){
    //     const userId = this.props.currentUser? this.props.currentUser._id ? this.props.currentUser._id : this.props.currentUser.id :null
    //     const data = {
    //         userId: userId
    //     }
    //     this.props.getCart(data).then(res => {
            
    //         if(this.state.cart.length != res.user.cart.length){
    //             this.setState({ cart: res.user.cart });
    //         }
    //     })
    // }
    
    onSignUpClick(){
        this.props.history('/join');
    }
    onLogin(){
        this.props.history.push('/login')
    }
    onFunds() {
        this.props.history.push('/funds');
    }
    onLogout(){
        this.props.logout();
    }
    checkLogin(){
        let currBalance = "$0";
        if (this.props.currentUser == null) {
            currBalance = "";
        }
        else if (this.props.currentUser.balance != null) {
            currBalance = "$" + this.props.currentUser.balance;
        }

        if (this.props.currentUser) {
            // debugger;
            // console.log('Logged In')
            return (
              <>
                <div className="loggedIn">
                  <div className="userInfo">
                    <div>{this.props.currentUser.username}</div>
                    <div onClick={this.onFunds.bind(this)}>{currBalance}</div>
                  </div>
                  &nbsp; &nbsp;
                  {/* IMPORTANT! CLICKING ON PROFILE PIC WILL LOAD FUNDS. KEEP THIS IN MIND IF YOU WANT TO CHANGE THIS LATER. */}
                  <img
                    className="profilePic"
                    src={this.props.currentUser.profilePicture}
                  ></img>
                  &nbsp; &nbsp;
                  <div onClick={this.onLogout}>logout</div>
                </div>
              </>
            );
        }else{
            return(
                <>
                {/* {console.log('not logged in')} */}
                <Login onLogin={this.onLogin}/>
                </>
            )
        }
    }

    onLogoClick(){
        this.props.history.push('/');
    }

    onWishClick() {
        this.props.history.push('/wishlist');
    }

    onCartClick() {
        this.props.history.push('/cart');
    }

    addStoreContent() {

        if (this.props.currentUser) {
            return (
                <>
                <div className='storeContainer'>
                    {/* We will use these instead of the statements below once we sort out manipulating the number of games in wishlist/cart */}
                    {/* <div className={this.props.currentUser.wishlist.length != 0 ? 'wishButton' : 'wishButton--none'} onClick={this.onWishClick.bind(this)}>Wishlist({this.props.currentUser.wishlist.length})</div>
                    <div className={this.props.currentUser.cart.length != 0 ? 'cartButton' : 'cartButton--none'} onClick={this.onCartClick.bind(this)}>Cart({this.props.currentUser.cart.length})</div> */}

                    <div className='wishButton'onClick={this.onWishClick.bind(this)}>Wishlist({this.props.currentUser.wishlist.length})</div>
                    <div className='cartButton'onClick={this.onCartClick.bind(this)}>Cart({this.state.cart.length})</div> 
                    {/* <div className='cartButton'>work</div> */}
                </div>

                </>
            )
        }
    }

    hoverHandler(type){
        return(e)=>{
            // debugger;
            this.setState({hover: [type][0]})
        }
    }
    mouseLeaverHandle(){
        this.setState({hover: null});
    }
    
    render(){
        return (
            <>
                       
            <div className='topContainer'>

                {this.checkLogin()}

                <div className='header'>
                   <img onClick={this.onLogoClick.bind(this)}className='steamLogo' src="https://royal-crossing-dev.s3.amazonaws.com/SteamLogo.png"/>
                   <div className='headerTopics'>
                        <div onMouseEnter={this.hoverHandler("STORE")} onMouseLeave={this.mouseLeaverHandle}>
                           <div>
                            STORE
                            <ComingSoonDD setting={this.state.hover} type="STORE"/>
                            </div>
                        </div>
                        <div onMouseEnter={this.hoverHandler("COMMUNITY")} onMouseLeave={this.mouseLeaverHandle}>
                            COMMUNITY
                            <ComingSoonDD setting={this.state.hover} type="COMMUNITY"/>
                        </div>
                        <div onMouseEnter={this.hoverHandler("ABOUT")} onMouseLeave={this.mouseLeaverHandle}>
                            ABOUT
                            <ComingSoonDD setting={this.state.hover} type="ABOUT"/>
                        </div>
                        <div onMouseEnter={this.hoverHandler("SUPPORT")} onMouseLeave={this.mouseLeaverHandle}>
                            SUPPORT
                            <ComingSoonDD setting={this.state.hover} type="SUPPORT"/>
                        </div>
                    </div>
                </div>
            
            </div>

            {this.addStoreContent()}

            {/* <div className='upperContainer'>
                <NavBar/>
            </div> */}

            </>
        )
    }
}

export default Header; 