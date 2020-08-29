import React from 'react';
import Login from './login.jsx';
import NavBar from './navBar.jsx';
import ComingSoonDD from '../dropDowns/comingSoon.jsx';

class Header extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            hover: null
        }

        this.onSignUpClick=this.onSignUpClick.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
        this.onLogin=this.onLogin.bind(this);
        this.onLogout=this.onLogout.bind(this);
        this.addStoreContent=this.addStoreContent.bind(this);
        this.onWishClick=this.onWishClick.bind(this);
        this.onCartClick=this.onCartClick.bind(this);
        this.hoverHandler=this.hoverHandler.bind(this);
        this.mouseLeaverHandle=this.mouseLeaverHandle.bind(this);
    }
    
    onSignUpClick(){
        this.props.history('/join');
    }
    onLogin(){
        this.props.history.push('/login')
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
            return(
                <>
                <div className='loggedIn'>
                    <div className='userInfo'>
                        <div>{this.props.currentUser.username}</div>
                        <div>{currBalance}</div>
                    </div>
                    &nbsp; &nbsp;

                    <img className="profilePic" src={this.props.currentUser.profilePicture}></img>

                    &nbsp; &nbsp;
                    <div onClick={this.onLogout}>
                        logout
                    </div>
                </div>
                </>
            )
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
                    <div className='cartButton'onClick={this.onCartClick.bind(this)}>Cart({this.props.currentUser.cart.length})</div> 
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