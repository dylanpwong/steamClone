import * as APIutil from '../util/game_api_util';
export const RECEIVE_GAME = "RECIEVE_GAME";
export const RECEIVE_PLENTY = "RECEIVE_PLENTY"

export const recieveGame = (game) =>{
    // debugger
    return({
        type: RECEIVE_GAME,
        game: game.data
    })
};
export const receiveMore = games =>{
    // debugger
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
        // debugger
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