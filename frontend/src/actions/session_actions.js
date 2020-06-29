import * as APIutil from '../util/session_api_util';
import jwt_decode  from 'jwt-decode';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS= "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT="RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN="RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser=>{
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    })
}
export const receiveUserSignIn=()=>{
    return({
        type: RECEIVE_USER_SIGN_IN
    })
}
export const receiveErrors = errors =>{
    return({
        type: RECEIVE_SESSION_ERRORS
    })
}
export const logoutUser= ()=>{
    return({
        type: RECEIVE_USER_LOGOUT
    })
}
export const signup = (user)=> dispatch=>{
    APIutil.signup(user)
    .then((res)=>dispatch(receiveUserSignIn()))
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const login = (user)=> dispatch=>{
    APIutil.login(user)
    .then((res)=>{
        const { token} = res.data;
        localStorage.setItem("jwtToken",token);
        APIutil.setAuthToken(token);
        const decoded = jwt_decode(token);
        // debugger;
        dispatch(receiveCurrentUser(decoded));
    })
    .catch(err=> {
        dispatch(receiveErrors(err.response.data))
    })
}