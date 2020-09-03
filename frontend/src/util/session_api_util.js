import axios from 'axios'

export const signup = (userData) =>{
    return axios.post('/api/users/join', userData);
}
export const login = userData => {
    return axios.post('api/users/login',userData)
};

export const checkEmail = email =>{
    // debugger;
    return axios.post('/api/users/checkEmail', email)
}

export const setAuthToken = token =>{
    if(token){
        axios.defaults.headers.common["Authorization"] = token;
    }else {
       delete axios.defaults.headers.common["Authorization"];
    }
}
export const getUser = data=>{
   return  axios.post("/api/users/getUser",data);
}
