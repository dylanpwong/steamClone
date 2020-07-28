import * as APIutil from '../util/game_api_util';
export const RECEIVE_GAME = "RECIEVE_GAME";
export const RECEIVE_PLENTY = "RECEIVE_PLENTY";
export const RECEIVE_POPULAR ="RECEIVE_POPULAR";
export const RECEIVE_RELEASEDATE="RECEIVE_RELEASEDATE";
export const RECEIVE_TOPSELLERS="RECEIVE_TOPSELLERS";
export const RECEIVE_TOPRATED="RECEIVE_TOPRATED";

export const recieveGame = (game) =>{
    return({
        type: RECEIVE_GAME,
        game: game.data
    })
};
export const receiveMore = games =>{
    return({
        type: RECEIVE_PLENTY,
        games: games.data
    })
}
export const receive = type =>{
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
    }
}
// const error

export const fetchHelltaker = () => dispatch => {
    return APIutil.Helltaker()
    .then(res => dispatch(recieveGame(res)))
    .catch((err)=>{
    
    })
}
export const fetchGame =(gameId) =>dispatch=>{
    return APIutil.getGame(gameId)
    .then((res)=> dispatch(recieveGame(res)))
}
export const getRandom = ()=> dispatch=>{
    return APIutil.getRandom()
    .then((res)=> dispatch(receiveMore(res)))
}
export const getPopular = ()=> dispatch=>{
    return APIutil.getPopular()
    .then((res)=>dispatch(receiveMore(res)))
}