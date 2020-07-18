import * as APIutil from '../util/game_api_util';
export const RECEIVE_GAME = "RECIEVE_GAME";
export const RECEIVE_PLENTY = "RECEIVE_PLENTY"

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