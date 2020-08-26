import * as APIutil from '../util/session_api_util';
import jwt_decode  from 'jwt-decode';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS= "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT="RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN="RECEIVE_USER_SIGN_IN";
export const RECEIVE_EMAIL="RECEIVE_EMAIL";

export const receiveCurrentUser = currentUser=>{
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    })
}
export const receiveUserSignIn=(user)=>{
    return({
        type: RECEIVE_USER_SIGN_IN,
        user
    })
}
export const receiveErrors = errors =>{
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    })
}
export const logoutUser= ()=>{
    return({
        type: RECEIVE_USER_LOGOUT
    })
}

export const saveEmail=(email)=>{
    return({
        type: RECEIVE_EMAIL,
        email: email.data
    })
}

export const checkEmail=(email)=>dispatch=>{
   return APIutil.checkEmail(email)
    .then((res)=>dispatch(saveEmail(res)))
}
export const signup = (user)=> dispatch=>{
   return APIutil.signup(user)
    .then((res)=>dispatch(receiveUserSignIn(res)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const login = (user)=> dispatch=>{
    return APIutil.login(user)
    .then((res)=>{
        // debugger;
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

export const logout = ()=> dispatch=>{
    localStorage.removeItem("jwtToken");
    APIutil.setAuthToken(false);
    dispatch(logoutUser());
}