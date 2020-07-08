import * as APIutil from '../util/game_api_util';
export const RECEIVE_GAME = "RECIEVE_GAME";

export const recieveGame = (game) =>{
    return({
        type: RECEIVE_GAME,
        game: game.data
    })
};

export const fetchHelltaker = () => dispatch => {
    return APIutil.Helltaker()
    .then(res => dispatch(recieveGame(res)))
}