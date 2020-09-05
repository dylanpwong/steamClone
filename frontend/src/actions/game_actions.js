import * as APIutil from '../util/game_api_util';
export const RECEIVE_GAME = "RECIEVE_GAME";
export const RECEIVE_PLENTY = "RECEIVE_PLENTY";
export const RECEIVE_POPULAR ="RECEIVE_POPULAR";
export const RECEIVE_RELEASEDATE="RECEIVE_RELEASEDATE";
export const RECEIVE_TOPSELLERS="RECEIVE_TOPSELLERS";
export const RECEIVE_TOPRATED="RECEIVE_TOPRATED";
export const RECEIVE_SEARCH="RECEIVE_SEARCH";
export const RECEIVE_USER_REVIEW="RECEIVE_USER_REVIEW";
export const RECEIVE_CART="RECEIVE_CART";
export const UPDATE_USER="UPDATE_USER";

export const recieveGame = (game) =>{
    // debugger
    return({
        type: RECEIVE_GAME,
        game: game.data
    })
};

export const updateUser=(user)=>{
    return({
        type: UPDATE_USER,
        user: user.data,
    })
}

const receiveCart = (data)=>{
   
    return {
      type: RECEIVE_CART,
      game: data.data,
    };
}
export const receiveMore = games =>{
    // debugger;
    return({
        type: RECEIVE_PLENTY,
        games: games.data
    })
}
export const recieveUserReview = data =>{
    // debugger;
    return({
        type: RECEIVE_USER_REVIEW,
        info: data.data,
    })
}
export const receiveType = type =>{
    let returnObj=({
        type: "",
        games: "",
    })
    switch(type){
        case RECEIVE_POPULAR:
            return(games =>{
                returnObj.type = RECEIVE_POPULAR;
                returnObj.games=  games.data;
                return returnObj;
            })
            break;
        case RECEIVE_RELEASEDATE:
            return (games) => {
              returnObj.type = RECEIVE_RELEASEDATE;
              returnObj.games = games.data;
              return returnObj;
            };
            break;
        case RECEIVE_TOPSELLERS:
            return (games) => {
              returnObj.type = RECEIVE_TOPSELLERS;
              returnObj.games = games.data;
              return returnObj;
            };
        case RECEIVE_TOPRATED:
            return(games =>{
                returnObj.type = RECEIVE_TOPRATED;
                returnObj.games=  games.data;
                return returnObj;
            })
        case RECEIVE_SEARCH:
            return(games =>{
                // debugger
                returnObj.type= RECEIVE_SEARCH;
                returnObj.games = games.data;
                return returnObj;
            })
    }
}
 const clearSearch=()=>{
    return({
        type: RECEIVE_SEARCH,
        games: []
    })
}
// const error
export const buyGames=(data)=>dispatch=>{
    return APIutil.buyGames(data).then(res=> updateUser(res))
}

export const fetchHelltaker = () => dispatch => {
    return APIutil.Helltaker()
    .then(res => dispatch(recieveGame(res)))
    .catch((err)=>{
    
    })
}
export const searchGame=(search)=>dispatch=>{
    return APIutil.findGames(search)
    .then(res=>dispatch(receiveType(RECEIVE_SEARCH)(res)))
}

export const clearSearchbar=()=>dispatch=>{
    return  dispatch(clearSearch())
}
export const fetchGame =(gameId) =>dispatch=>{
    // debugger;
    return APIutil.getGame(gameId)
    .then((res)=> dispatch(recieveGame(res)))
}
export const getRandom = ()=> dispatch=>{
    return APIutil.getRandom()
    .then((res)=> dispatch(receiveMore(res)))
}
export const getPopular = ()=> dispatch=>{
    return APIutil.getPopular()
    .then((res)=>dispatch(receiveType(RECEIVE_POPULAR)(res)))
}
export const getTopRated =() =>dispatch=>{
    return APIutil.getTopRated()
    .then((res)=> dispatch(receiveType(RECEIVE_TOPRATED)(res)));
}
export const getReleaseDate = ()=> dispatch=>{
    return APIutil.getReleaseDate()
    .then((res)=>dispatch(receiveType(RECEIVE_RELEASEDATE)(res)))
}
export const getTopSellers = ()=> dispatch =>{
    return APIutil.getTopSellers()
    .then((res)=> dispatch(receiveType(RECEIVE_TOPSELLERS)(res)))
}

export const userhasGame = (data)=> dispatch=>{

    return APIutil.userHasGame(data)
    .then(function(res){
        // debugger;
       return dispatch(recieveUserReview(res))})
}

export const addToCart = (data) => dispatch => {
    return APIutil.addToCart(data)
    .then((res)=> dispatch(receiveCart(res)))
}

export const getCart = (data) => dispatch => {
    return APIutil.getCart(data)
    .then((res)=> dispatch(updateUser(res)))
}

export const removeFromCart = (data) => dispatch => {
    return APIutil.removeFromCart(data)
    .then((res)=> dispatch(updateUser(res)))
}